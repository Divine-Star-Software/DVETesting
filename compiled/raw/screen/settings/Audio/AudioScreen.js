import { ScreenManager } from "../../index";
import { title } from "elmtree";
export function AudioScreen() {
    ScreenManager.screens.add([
        {
            id: "audio",
            mode: "main-menu",
            getElements() {
                return [title("h1", "Audio", "screen-title")];
            },
        },
    ]);
}
