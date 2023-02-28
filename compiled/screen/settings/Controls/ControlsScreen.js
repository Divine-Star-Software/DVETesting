import { ScreenManager } from "../../index";
import { title } from "elmtree";
export function ControlsScreen() {
    ScreenManager.screens.add([
        {
            id: "controls",
            mode: "main-menu",
            getElements() {
                return [title("h1", "Controls", "screen-title")];
            },
        },
    ]);
}
