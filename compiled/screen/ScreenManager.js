import { Component, AddClass, BloomRoot, AddAttributes, UseCascade, } from "elmtree";
import { UISystem } from "../system/ui/UISystem";
import { wait } from "./Components";
import { RenderSystem } from "../system/render/RenderSystem";
const cascade = UseCascade({
    active: true,
});
const [APP_SCREEN, APP_SCREEN_UPDATE] = Component({
    addons: [
        AddAttributes({
            id: "APP",
        }),
        cascade.addToElment(async (elm, props) => {
            if (props.active) {
                elm.classList.add("screen-in");
                elm.style.display = "block";
                elm.classList.remove("screen-out");
                await wait(250);
            }
            else {
                elm.classList.add("screen-out");
                elm.classList.remove("screen-in");
                await wait(250);
                elm.style.display = "none";
            }
        }),
    ],
});
export const ScreenManager = {
    $INIT() {
        BloomRoot(APP_SCREEN);
    },
    screenModes: {
        _currentMode: "",
        _map: new Map(),
        add(screenModes) {
            for (const screenMode of screenModes) {
                this._map.set(screenMode.id, {
                    data: screenMode,
                    component: Component({
                        addons: [AddClass(["screen"])],
                    }),
                });
            }
        },
        get(screenId) {
            const screenMode = this._map.get(screenId);
            if (!screenMode)
                return false;
            return screenMode;
        },
        async render(id) {
            if (this._currentMode == id)
                return;
            const oldMode = this.get(this._currentMode);
            if (oldMode && oldMode.data.onOut) {
                await oldMode.data.onOut();
            }
            this._currentMode = id;
            const screenMode = this.get(id);
            if (!screenMode)
                return false;
            const screenElements = await screenMode.data.getElements(screenMode.component[0]);
            if (screenMode.data.beforeRender)
                await screenMode.data.beforeRender();
            APP_SCREEN_UPDATE(screenElements);
            if (screenMode.data.afterRender)
                await screenMode.data.afterRender();
            if (screenMode.data.onIn) {
                await screenMode.data.onIn();
            }
        },
    },
    screens: {
        _map: new Map(),
        getScreenMode(id) {
            const data = this.get(id);
            if (!data)
                return false;
            return data.mode;
        },
        add(screens) {
            for (const data of screens) {
                this._map.set(data.id, data);
            }
        },
        get(screenId) {
            const data = this._map.get(screenId);
            if (!data)
                return false;
            return data;
        },
        async render(id) {
            const screen = this.get(id);
            if (!screen)
                return false;
            const screenMode = ScreenManager.screenModes.get(screen.mode);
            if (!screenMode)
                return false;
            if (screenMode.data.beforeUpdate)
                await screenMode.data.beforeUpdate();
            if (screen.beforeRender)
                await screen.beforeRender();
            const screenElements = await screen.getElements();
            screenMode.component[1](screenElements);
            if (screen.afterRender)
                await screen.afterRender();
            if (screenMode.data.afterUpdate)
                await screenMode.data.afterUpdate();
        },
    },
};
UISystem.setShowfunction((show) => {
    cascade.props.active = show;
    RenderSystem.setCanvasInteractive(show);
    if (show) {
        RenderSystem.exitPointerLock();
    }
    else {
        RenderSystem.enterPointerLock();
    }
    cascade.runCascade();
});
