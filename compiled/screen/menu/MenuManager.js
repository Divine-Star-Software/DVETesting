import { div, paragraph, AddEvents } from "elmtree";
import { connectMenuState, MENU_STATE } from "./MenuState.js";
import { SCREEN_STATE } from "../ScreenState.js";
export const MenuManager = {
    _menuSections: new Map(),
    _subMenuSections: new Map(),
    _nodeMap: new Map(),
    _cascade: () => { },
    async $INIT() { },
    __updateMenu: {},
    getSubSection(subSectionId) {
        const subSection = this._subMenuSections.get(subSectionId);
        if (!subSection)
            return false;
        return subSection;
    },
    getSection(sectionId) {
        const section = this._menuSections.get(sectionId);
        if (!section)
            return false;
        return section;
    },
    addSubSection(subSectionId) {
        const subSection = [];
        this._subMenuSections.set(subSectionId, subSection);
        return subSection;
    },
    addToSection(sectionId, elements) {
        let section = this.getSection(sectionId);
        if (!section) {
            section = [];
        }
        for (const element of elements) {
            if (typeof element[2] == "boolean" && element[2]) {
                const subSectionId = element[3];
                if (this._nodeMap.has(element[0]))
                    continue;
                this._nodeMap.set(element[0], element[1]);
                let subSection = this.getSubSection(subSectionId);
                if (!subSection)
                    subSection = this.addSubSection(subSectionId);
                subSection.push(element);
                continue;
            }
            this._nodeMap.set(element[0], element[1]);
            section.push(element);
        }
        this._menuSections.set(sectionId, section);
    },
    enterScreen(nodeId) {
        const screen = this._nodeMap.get(nodeId);
        if (!screen)
            return false;
        SCREEN_STATE.screen = screen;
        return screen;
    },
    renderSection(sectionId) {
        const elements = this._renderMenu(sectionId);
        this.__updateMenu(elements);
    },
    _renderMenu(sectionId) {
        const menuElements = this.getSection(sectionId);
        if (!menuElements)
            return [];
        const elements = [];
        for (const menuElement of menuElements) {
            if (typeof menuElement[2] == "string") {
                const subsectionId = menuElement[2];
                const subsection = this.getSubSection(subsectionId);
                if (!subsection)
                    continue;
                const subButtons = [];
                for (const subButton of subsection) {
                    subButtons.push(menuButton(subButton));
                }
                elements.push(subSectionButton(menuElement), mainScreenSection(subsectionId, subButtons));
                continue;
            }
            elements.push(menuButton(menuElement));
        }
        return elements;
    },
};
const updateState = (data) => {
    MENU_STATE.node = data[0];
    if (typeof data[2] == "string") {
        MENU_STATE.node = data[1];
        MENU_STATE.subSection = data[2];
        MenuManager.enterScreen(MENU_STATE.node);
        return;
    }
    MenuManager.enterScreen(MENU_STATE.node);
    if (typeof data[2] == "boolean")
        return;
    MENU_STATE.subSection = "";
};
export const menuButton = (data) => div("menu-button", paragraph(data[0]), [
    connectMenuState(data[0], "node"),
    AddEvents({
        click(event) {
            event.stopPropagation();
            event.preventDefault();
            updateState(data);
        },
        keydown(event) {
            if (event.key == " " || event.key == "Enter") {
                updateState(data);
            }
        },
    }),
]);
export const subSectionButton = (data) => div("menu-button", paragraph(data[0]), [
    connectMenuState(data[2], "sub-section"),
    AddEvents({
        click(event) {
            event.stopPropagation();
            event.preventDefault();
            updateState(data);
        },
        keydown(event) {
            if (event.key == " " || event.key == "Enter") {
                updateState(data);
            }
        },
    }),
]);
export const mainScreenSection = (id, children) => div("sub-menu-section inactive", children, [
    connectMenuState(id, "sub-section"),
]);
//import { MenuManager } from "./MenuManager.js";
