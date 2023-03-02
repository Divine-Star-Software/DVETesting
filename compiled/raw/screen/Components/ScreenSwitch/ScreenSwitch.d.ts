import { ElmTreeData } from "elmtree";
export declare const ScreenSwitch: (data: {
    id: string;
    screen: ElmTreeData;
    active?: true;
}[]) => [(id: string) => void, ElmTreeData];
