import { CreateState } from "crystalline-state";
import { UseCascade } from "elmtree";
import { MenuManager } from "./MenuManager";

export const [MENU_STATE_EVENTS, MENU_STATE] = CreateState({
  node: "Saves",
  section: "",
  subSection: "",
});
MENU_STATE_EVENTS("node", "change", () => menuCascade.runCascade());
MENU_STATE_EVENTS("section", "change", () =>
  MenuManager.renderSection(MENU_STATE.section)
);
MENU_STATE_EVENTS("subSection", "change", () => menuCascade.runCascade());

const menuCascade = UseCascade();
export const connectMenuState = (id: string, mode: "node" | "sub-section") => {
  return menuCascade.addToElment((elm: HTMLElement) => {
    let active = false;
    if (mode == "node" && MENU_STATE.node == id) {
      active = true;
    }
    if (mode == "sub-section" && MENU_STATE.subSection == id) {
      active = true;
    }
    if (active) {
      elm.classList.remove("inactive");
      elm.classList.add("active");
    } else {
      elm.classList.add("inactive");
      elm.classList.remove("active");
    }
  });
};
//MenuManager._cascade = menuCascade.runCascade;
