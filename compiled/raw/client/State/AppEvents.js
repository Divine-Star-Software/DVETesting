import { ASM } from "./AppStateMachine";
import { DVER } from "divine-voxel-engine/Render";
import { RenderSystem } from "../../system/render/RenderSystem";
import { APP_STATE } from "./AppState";
import { UISystem } from "../../system/ui/UISystem";
import { SCREEN_STATE } from "../../screen/ScreenState";
export function SetUpAppEvents() {
    ASM.addToStates({
        INIT: {
            LOAD_DATA: async () => { },
            INIT_DVE: async () => { },
            START: async () => { },
        },
    }).addToStates({
        IDLE: {
            ETNER_GAME: () => {
                UISystem.show(false);
                APP_STATE.mode = "world-loading";
                SCREEN_STATE.screen = "world-loading";
                DVER.worldComm.runPromiseTasks("start-world", APP_STATE.world, () => {
                    RenderSystem.setCanvasVisability(true);
                    APP_STATE.mode = "in-game";
                    UISystem.show(false);
                    SCREEN_STATE.screen = "spells";
                    RenderSystem.setCanvasInteractive(true);
                    RenderSystem.enterPointerLock();
                }, APP_STATE.world);
            },
        },
    });
    return ASM;
}
