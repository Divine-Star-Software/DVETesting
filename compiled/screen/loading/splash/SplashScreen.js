import { DAE } from "divine-audio-engine";
import { div } from "elmtree";
import { ScreenManager } from "../../ScreenManager";
import { DSLogo } from "../../Components/DSLogo/DSLogo";
import "./splash.css";
import { SCREEN_STATE } from "../../ScreenState";
export function SplashScreen() {
    ScreenManager.screens.add([
        {
            id: "intro",
            mode: "loading",
            getElements: () => div("intro-container", [
                div("intro-screen-child", [DSLogo("intro-logo", 500, 500)]),
            ]),
            beforeRender: () => {
                DAE.sfx.play("ds_intro");
                setTimeout(() => {
                    SCREEN_STATE.screen = "splash";
                }, 3_000);
            },
        },
    ]);
}
