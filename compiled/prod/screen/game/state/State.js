import { ElementTree } from "ds-element-tree";
const appState = {
    activeScreen: "hone",
    activeSubScreen: "hone",
};
const [appCascade] = ElementTree.cascade(appState);
export const APP_STATE = appState;
export const setScreenState = (activeScreen, activeSubScreen) => {
    if (activeScreen != "current") {
        appState.activeScreen = activeScreen;
    }
    if (activeSubScreen != "current") {
        appState.activeSubScreen = activeSubScreen;
    }
    appCascade();
};
export const connectState = (screen, subScreen = "none") => {
    return {
        cascade: {
            origin: APP_STATE,
            receiver(elm, cascadeProps) {
                if ((screen == "current" && cascadeProps.activeSubScreen == subScreen) ||
                    (cascadeProps.activeScreen == screen &&
                        cascadeProps.activeSubScreen == subScreen) ||
                    (subScreen == "none" && cascadeProps.activeScreen == screen)) {
                    elm.classList.remove("inactive");
                    elm.classList.add("active");
                }
                else {
                    elm.classList.add("inactive");
                    elm.classList.remove("active");
                }
            },
        },
    };
};
