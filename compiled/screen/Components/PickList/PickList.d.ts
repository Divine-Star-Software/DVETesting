import { ElmTreeData } from "elmtree";
import "./PickList.css";
type PickListNode = {
    name: string;
    id: string;
    desc: string;
    onClick: (id: string) => void;
    image?: string;
};
export type PickListData = PickListNode[];
type PickListProps = {
    activeItem: string;
    items: PickListData;
};
export declare const PickList: (props?: {
    claasses: string[];
    activeItem: string;
}) => [ElmTreeData, import("elmtree").ComponentUpdate<PickListProps>, {
    elements: ElmTreeData;
}];
export {};
