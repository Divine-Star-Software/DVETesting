import { DVEENV } from "../../../core/data/ENV/DVEENV";
import { button, div, title, AddClass } from "elmtree";
import { SCREEN_STATE } from "../../ScreenState";
import { ScreenManager } from "../../index";
import "./start.css";
export function StartScreen() {
    ScreenManager.screens.add([
        {
            id: "splash",
            mode: "loading",
            getElements: () => [
                div("main-screen-background", []),
                div("main-screen", [
                    div("main-screen-contents", [
                        title("h1", "DREAM SPACE INFINITE", "ecd-main-title"),
                        title("h3", `${DVEENV.data.version}`, "ecd-main-version"),
                        button("START", () => {
                            SCREEN_STATE.screen = "saves";
                        }, [AddClass(["main-start-button"])]),
                    ]),
                ]),
            ],
        },
    ]);
}
