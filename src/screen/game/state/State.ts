import { ElementTree } from "ds-element-tree";


const appState = {
  activeScreen: <string>"hone",
  activeSubScreen: <string>"hone",
};

const [appCascade] = ElementTree.cascade(appState);

export const APP_STATE = appState;
export const setScreenState = (
  activeScreen: string | "current",
  activeSubScreen: string | "current"
) => {
  if (activeScreen != "current") {
    appState.activeScreen = activeScreen;
  }
  if (activeSubScreen != "current") {
    appState.activeSubScreen = activeSubScreen;
  }
  appCascade();
};

export const connectState = (
  screen: string | "current",
  subScreen: string | "none" = "none"
) => {
  return {
    cascade: {
      origin: APP_STATE,
      receiver(elm: HTMLElement, cascadeProps: typeof APP_STATE) {
        if (
          (screen == "current" && cascadeProps.activeSubScreen == subScreen) ||
          (cascadeProps.activeScreen == screen &&
            cascadeProps.activeSubScreen == subScreen) ||
          (subScreen == "none" && cascadeProps.activeScreen == screen)
        ) {
          elm.classList.remove("inactive");
          elm.classList.add("active");
        } else {
          elm.classList.add("inactive");
          elm.classList.remove("active");
        }
      },
    },
  };
};
