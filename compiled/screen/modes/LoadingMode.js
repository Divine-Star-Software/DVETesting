import { AddClass, cascadeElement } from "elmtree";
import { wait } from "../Components";
import { ScreenManager } from "../";
let loadingScreenLoadIn = true;
let firstLoad = false;
const [loadingFade, updteLoadingFade] = cascadeElement("div", (elm) => {
    if (loadingScreenLoadIn) {
        elm.classList.add("intro-in");
        elm.classList.remove("intro-out");
    }
    else {
        elm.classList.add("intro-out");
        elm.classList.remove("intro-in");
    }
});
export function LoadingMode() {
    ScreenManager.screenModes.add([
        {
            id: "loading",
            appMode: "loading",
            getElements: (component) => loadingFade([AddClass(["screen"])], component),
            async beforeUpdate() {
                loadingScreenLoadIn = false;
                updteLoadingFade();
                await wait(2_000);
            },
            async afterUpdate() {
                loadingScreenLoadIn = true;
                updteLoadingFade();
                await wait(2_000);
            },
            async onOut() {
                loadingScreenLoadIn = false;
                updteLoadingFade();
                await wait(2_000);
            },
            async onIn() {
                if (firstLoad) {
                    firstLoad = false;
                    return;
                }
                loadingScreenLoadIn = true;
                updteLoadingFade();
                await wait(2_000);
            },
        },
    ]);
}
