import { DVEENV } from "../../../core/data/ENV/DVEENV";
import { div, title } from "elmtree";
import { ScreenManager } from "../../index";
import "./about.css";
export function AboutScreen() {
    ScreenManager.screens.add([
        {
            id: "about",
            mode: "main-menu",
            getElements() {
                return div("about-screen", [
                    div("about-screen-contents", [
                        title("h1", "DREAM SPACE INFINITE", "ecd-about-title"),
                        title("h3", `${DVEENV.data.version}`, "ecd-about-version"),
                        title("h4", `Made By Divine Star`, "ecd-about-attribute"),
                        title("h5", `Lead Developer: Luke Johnson`, "ecd-about-attribute"),
                        title("h5", `Sound Designer: Tyler Quinn`, "ecd-about-attribute"),
                    ]),
                ]);
            },
        },
    ]);
}
