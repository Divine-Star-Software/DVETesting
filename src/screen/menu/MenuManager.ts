//import { SCREEN_STATE } from "@screen/ScreenState.js";
import { Component, ComponentUpdate } from "elmtree";
import { ElmTreeData, div, paragraph, AddEvents } from "elmtree";
import { connectMenuState, MENU_STATE } from "./MenuState.js";
import { DSLogo } from "@Components/DSLogo/DSLogo.js";
import { SCREEN_STATE } from "@screen/ScreenState.js";
type TopLevelButton = [title: string, screenId: string];
type SectionHeaderButton = [
  title: string,
  nodeId: string,
  subMenuSectionId: string
];
type SubLevelButton = [
  title: string,
  screenId: string,
  isSubMenuButton: true,
  subMenuSectionId: string
];

export type MenuData = TopLevelButton | SectionHeaderButton | SubLevelButton;
export const MenuManager = {
  _menuSections: <Map<string, MenuData[]>>new Map(),
  _subMenuSections: <Map<string, MenuData[]>>new Map(),
  _nodeMap: <Map<string, string>>new Map(),
  _cascade: <Function>() => {},

  async $INIT() {},
  __updateMenu: <ComponentUpdate>{},

  getSubSection(subSectionId: string) {
    const subSection = this._subMenuSections.get(subSectionId);
    if (!subSection) return false;
    return subSection;
  },
  getSection(sectionId: string) {
    const section = this._menuSections.get(sectionId);
    if (!section) return false;
    return section;
  },

  addSubSection(subSectionId: string) {
    const subSection: MenuData[] = [];
    this._subMenuSections.set(subSectionId, subSection);
    return subSection;
  },

  addToSection(sectionId: string, elements: MenuData[]) {
    let section = this.getSection(sectionId);
    if (!section) {
      section = [];
    }
    for (const element of elements) {
      if (typeof element[2] == "boolean" && element[2]) {
        const subSectionId = (element as SubLevelButton)[3];
        if (this._nodeMap.has(element[0])) continue;
        this._nodeMap.set(element[0], element[1]);
        let subSection = this.getSubSection(subSectionId);
        if (!subSection) subSection = this.addSubSection(subSectionId);
        subSection.push(element);
        continue;
      }
      this._nodeMap.set(element[0], element[1]);
      section.push(element);
    }

    this._menuSections.set(sectionId, section);
  },

  enterScreen(nodeId: string) {
    const screen = this._nodeMap.get(nodeId);
    if (!screen) return false;
    SCREEN_STATE.screen = screen;
    return screen;
  },

  renderSection(sectionId: string) {
    const elements = this._renderMenu(sectionId);
    this.__updateMenu(elements);
  },

  _renderMenu(sectionId: string): ElmTreeData {
    const menuElements = this.getSection(sectionId);
    if (!menuElements) return [];

    const elements: ElmTreeData = [];
    for (const menuElement of menuElements) {
      if (typeof menuElement[2] == "string") {
        const subsectionId = (menuElement as SectionHeaderButton)[2];
        const subsection = this.getSubSection(subsectionId);
        if (!subsection) continue;
        const subButtons: ElmTreeData[] = [];
        for (const subButton of subsection) {
          subButtons.push(menuButton(subButton));
        }
        elements.push(
          subSectionButton(menuElement),
          mainScreenSection(subsectionId, subButtons)
        );
        continue;
      }
      elements.push(menuButton(menuElement));
    }

    return elements;
  },
};
const updateState = (data: MenuData) => {
  MENU_STATE.node = data[0];
  if (typeof data[2] == "string") {
    MENU_STATE.node = data[1];
    MENU_STATE.subSection = data[2];
    MenuManager.enterScreen(MENU_STATE.node);
    return;
  }
  MenuManager.enterScreen(MENU_STATE.node);
  if (typeof data[2] == "boolean") return;
  MENU_STATE.subSection = "";
};
export const menuButton = (data: MenuData): ElmTreeData =>
  div("menu-button", paragraph(data[0]), [
    connectMenuState(data[0], "node"),
    AddEvents({
      click(event) {
        event.stopPropagation();
        event.preventDefault();
        updateState(data);
      },
      keydown(event: KeyboardEvent) {
        if (event.key == " " || event.key == "Enter") {
          updateState(data);
        }
      },
    }),
  ]);

export const subSectionButton = (data: MenuData): ElmTreeData =>
  div("menu-button", paragraph(data[0]), [
    connectMenuState(<string>data[2], "sub-section"),
    AddEvents({
      click(event) {
        event.stopPropagation();
        event.preventDefault();
        updateState(data);
      },
      keydown(event: KeyboardEvent) {
        if (event.key == " " || event.key == "Enter") {
          updateState(data);
        }
      },
    }),
  ]);

export const mainScreenSection = (
  id: string,
  children: ElmTreeData
): ElmTreeData =>
  div("sub-menu-section inactive", children, [
    connectMenuState(id, "sub-section"),
  ]);

//import { MenuManager } from "./MenuManager.js";
