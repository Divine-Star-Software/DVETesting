import { AddClass, cascadeElement } from "elmtree";
import { wait } from "../Components";
import { ScreenManager } from "..";
let loadIn = true;
const [loadingFade, update] = cascadeElement("div", (elm) => {
    if (loadIn) {
        elm.classList.add("intro-in");
        elm.classList.remove("intro-out");
    }
    else {
        elm.classList.add("intro-out");
        elm.classList.remove("intro-in");
    }
});
export function WorldLoadingMode() {
    ScreenManager.screenModes.add([
        {
            id: "world-loading",
            appMode: "world-loading",
            getElements: (component) => loadingFade([AddClass(["screen"])], component),
            async onOut() {
                loadIn = false;
                update();
                await wait(2_000);
            },
            async beforeUpdate() {
                loadIn = false;
                update();
                await wait(2_000);
            },
            async afterUpdate() {
                loadIn = true;
                update();
                await wait(2_000);
            },
        },
    ]);
}
