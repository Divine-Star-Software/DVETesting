import { ElementTreeData } from "ds-element-tree";
export declare const menuButton: (title: string, screen: string, subScreen: string) => ElementTreeData;
export declare const subMenuButton: (title: string, subScreen: string) => ElementTreeData;
export declare const mainScreenSection: (screen: string, children: ElementTreeData) => ElementTreeData;
export declare const subScreenSection: (subScreen: string, children: ElementTreeData) => ElementTreeData;
