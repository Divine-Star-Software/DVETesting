import { ComponentUpdate } from "elmtree";
import { ElmTreeData } from "elmtree";
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
export declare const MenuManager: {
    _menuSections: Map<string, MenuData[]>;
    _subMenuSections: Map<string, MenuData[]>;
    _nodeMap: Map<string, string>;
    _cascade: <Function_1>() => void;
    $INIT(): Promise<void>;
    __updateMenu: ComponentUpdate<ElmTreeData>;
    getSubSection(subSectionId: string): false | MenuData[];
    getSection(sectionId: string): false | MenuData[];
    addSubSection(subSectionId: string): MenuData[];
    addToSection(sectionId: string, elements: MenuData[]): void;
    enterScreen(nodeId: string): string | false;
    renderSection(sectionId: string): void;
    _renderMenu(sectionId: string): ElmTreeData;
};
export declare const menuButton: (data: MenuData) => ElmTreeData;
export declare const subSectionButton: (data: MenuData) => ElmTreeData;
export declare const mainScreenSection: (id: string, children: ElmTreeData) => ElmTreeData;
export {};
