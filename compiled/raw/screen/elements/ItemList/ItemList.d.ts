import { ElementTreeData } from "ds-element-tree";
import "./ItemList.css";
export type ItemListData = {
    data: any;
    image?: string;
    formatData: (data: any) => ElementTreeData;
    buttons: {
        text: string;
        onClick: Function;
    }[];
}[];
export declare const ItemList: (props?: {
    items: ItemListData;
}) => [ElementTreeData, (data: {
    items: ItemListData;
}) => void];
