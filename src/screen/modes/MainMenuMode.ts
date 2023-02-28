import { ScreenManager } from "../";
import { cascadeElement, AddClass, div } from "elmtree";
import { MenuManager } from "../menu/MenuManager";
import { wait } from "@Components/index";
import { MainMenu } from "../menu/MainMenu";
import { MENU_STATE } from "../menu/MenuState";

const state = {
  screenLoadIn: true,
  screenFadeIn: true,
  screenDisplay: true,
};

const [screenFade, updateScreen] = cascadeElement(
  "div",
  (elm: HTMLElement) => {
    if (!state.screenDisplay) {
      return (elm.style.display = "none");
    } else {
      elm.style.display = "block";
    }
    if (state.screenLoadIn) {
      elm.classList.remove("screen-in", "screen-out");
      elm.classList.add("screen-in");
    } else {
      elm.classList.remove("screen-in", "screen-out");
      elm.classList.add("screen-out");
    }
  }
);

const [divFade, updateMenu] = cascadeElement("div", (elm: HTMLElement) => {
  if (state.screenFadeIn) {
    elm.classList.remove("intro-in", "intro-out");
    elm.classList.add("intro-in");
  } else {
    elm.classList.remove("intro-in", "intro-out");
    elm.classList.add("intro-out");
  }
});

export function MainMenuMode() {
  MenuManager.addToSection("main", [
    ["Saves", "saves"],
    /*
    ["Settings", "Video", "settings"],
    ["Video", "video", true, "settings"],
    ["Audio", "audio", true, "settings"],
    ["Controlls", "controls", true, "settings"],
    */
    ["About", "about"],
  ]);

  ScreenManager.screenModes.add([
    {
      id: "main-menu",
      appMode: "main-menu",
      getElements: (component) =>
        divFade(
          [AddClass(["menu-screen"])],
          [
            MainMenu(),
            div("menu-screens", [
              div("menu-screen-background", []),
              screenFade([AddClass(["screen-fade"])], component),
            ]),
          ]
        ),
      async afterRender() {
        MenuManager.renderSection("main");
      },
      async beforeUpdate() {
        state.screenLoadIn = false;
        updateScreen();
        await wait(250);
        state.screenDisplay = false;
        updateScreen();
      },
      async afterUpdate() {
        state.screenDisplay = true;
        state.screenLoadIn = true;
        updateScreen();
        await wait(250);
      },
      async onOut() {
        state.screenFadeIn = false;
        updateMenu();
        await wait(2_000);
      },
      async onIn() {
        MENU_STATE.node = "saves";
        state.screenDisplay = true;
        state.screenFadeIn = true;
        updateMenu();
        await wait(2_000);
      },
    },
  ]);
}
