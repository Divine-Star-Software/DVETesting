import { ElementTreeData } from "ds-element-tree";
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
export declare const PickList: (props?: PickListProps) => [ElementTreeData, (data: PickListProps) => void];
export {};
