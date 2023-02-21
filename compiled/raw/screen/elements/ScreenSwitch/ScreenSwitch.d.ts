import { ElementTreeData } from "ds-element-tree";
export declare const ScreenSwitch: (data: {
    id: string;
    screen: ElementTreeData;
    active?: true;
}[]) => [(id: string) => void, ElementTreeData];
