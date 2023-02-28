import { ScreenManager } from "..";
import { cascadeElement, AddClass, div } from "elmtree";
import { MenuManager } from "../menu/MenuManager";
import { wait } from "@Components/index";
import { MainMenu } from "../menu/MainMenu";
import { MENU_STATE } from "../menu/MenuState";

const state = {
  screenLoadIn: true,
  screenDisplay: true,
};

const [screenFade, updateScreenFade] = cascadeElement(
  "div",
  (elm: HTMLElement) => {
    if (!state.screenDisplay) {
      return (elm.style.display = "none");
    } else {
      elm.style.display = "block";
    }

    if (state.screenLoadIn) {
      elm.classList.add("screen-in");
      elm.classList.remove("screen-out");
    } else {
      elm.classList.add("screen-out");
      elm.classList.remove("screen-in");
    }
  }
);

export function GameMenuMode() {
  MenuManager.addToSection("game-menu", [
    ["Voxels", "voxels"],
    /*
    ["Inventory", "Templates", "templates"],
    ["Templates", "templates", true, "templates"],
    ["Spell Runes", "spell-runes", true, "templates"],
    */
    ["Stats", "stats"],
    /*
    ["Settings", "Video", "settings"],
    ["Video", "video", true, "settings"],
    ["Audio", "audio", true, "settings"],
    ["Controlls", "controls", true, "settings"],
    */
  ]);

  ScreenManager.screenModes.add([
    {
      id: "game-menu",
      appMode: "game-menu",
      getElements: (component) =>
        //    div("menu-screen", [
        //       MainMenu(),
        div("game-menu", [screenFade([AddClass(["screen-fade"])], component)]),
      //     ]),
      async afterRender() {
        MenuManager.renderSection("game-menu");
      },
      async beforeUpdate() {
        state.screenLoadIn = false;
        updateScreenFade();
        await wait(250);
        state.screenDisplay = false;
        updateScreenFade();
      },
      async afterUpdate() {
        state.screenDisplay = true;
        state.screenLoadIn = true;
        updateScreenFade();
        await wait(250);
      },
      async onOut() {
        state.screenLoadIn = false;
        /*         updateScreenFade();
        await wait(250);
        state.screenDisplay = false;
        updateScreenFade(); */
      },

      async onIn() {
        MENU_STATE.node = "voxels";
        /*        state.screenDisplay = true;
        state.screenLoadIn = true;
        updateScreenFade();
        await wait(250); */
      },
    },
  ]);
}
