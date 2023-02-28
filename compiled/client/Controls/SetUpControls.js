import { UISystem } from "../../system/ui/UISystem";
import { APP_STATE } from "../State/AppState";
import { SCREEN_STATE } from "../../screen/ScreenState";
import { RenderSystem } from "../../system/render/RenderSystem";
export function SetUpControls() {
    window.addEventListener("keydown", ({ key }) => {
        if (key == "q" || key == "Q") {
            if (APP_STATE.mode == "in-game") {
                APP_STATE.mode = "game-menu";
                SCREEN_STATE.screen = "voxels";
                UISystem.show(true);
                RenderSystem.setCanvasInteractive(false);
                return;
            }
            if (APP_STATE.mode == "game-menu") {
                APP_STATE.mode = "in-game";
                UISystem.show(false);
                RenderSystem.setCanvasInteractive(true);
                return;
            }
        }
    });
}
