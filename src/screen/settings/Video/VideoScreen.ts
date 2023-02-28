import { ScreenManager } from "@screen/index";
import { title } from "elmtree";
export function VideoScreen() {
  ScreenManager.screens.add([
    {
      id: "video",
      mode: "main-menu",
      getElements() {
        return [title("h1", "Video", "screen-title")];
      },
    },
  ]);
}
