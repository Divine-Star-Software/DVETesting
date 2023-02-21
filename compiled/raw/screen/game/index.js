import { div } from "../elements/BaseElements.js";
import { ElementTree } from "ds-element-tree";
import { CSM } from "./state/Core/CoreStateMachine.js";
//screens
import { MainMenu } from "./menu/MainMenu.js";
import { SpellsScreen } from "./screens/spells/SpellScreen.js";
import { StatsScreen } from "./screens/stats/StatsScreen.js";
export function GameScreen(DVER) {
    const cascaeProps = { active: false };
    const [cascade] = ElementTree.cascade(cascaeProps);
    const scene = DVER.render.scene;
    const canvas = scene.getEngine().getRenderingCanvas();
    window.addEventListener("keydown", (ev) => {
        const key = ev.key;
        if (key == "q" || key == "Q") {
            cascaeProps.active = !cascaeProps.active;
            cascade();
        }
        if (!cascaeProps.active) {
            canvas?.requestPointerLock();
        }
    });
    return [
        {
            type: "div",
            attrs: {
                className: "game-screen inactive",
            },
            events: {
                onClick(event) {
                    event.stopPropagation();
                },
            },
            cascade: {
                origin: cascaeProps,
                receiver(elm, cascadeProps) {
                    if (cascadeProps.active) {
                        elm.classList.remove("inactive");
                        elm.classList.add("active");
                        document.exitPointerLock();
                        CSM.triggerEventOnState("IDLE", "ENTER_SCREEN", {
                            screen: "spells",
                            subScrene: "none",
                        });
                    }
                    else {
                        elm.classList.add("inactive");
                        elm.classList.remove("active");
                        CSM.triggerEventOnState("IDLE", "CLOSE", undefined);
                    }
                },
            },
            children: [MainMenu(), div("screens", [StatsScreen(), SpellsScreen()])],
        },
    ];
}
