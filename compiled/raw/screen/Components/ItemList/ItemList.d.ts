import { ElmTreeData } from "elmtree";
import "./ItemList.css";
export declare const ItemList: <T>(props: {
    format: (data: T) => ElmTreeData;
    getButtons: (data: T) => {
        text: string;
        onClick: Function;
    }[];
    claasses: string[];
}) => [ElmTreeData, import("elmtree").ComponentUpdate<T[]>, {
    elements: ElmTreeData;
}];
