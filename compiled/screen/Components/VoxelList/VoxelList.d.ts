import { ElmTreeData } from "elmtree";
import "./VoxelList.css";
type VoxelListNode = {
    id: string;
    onClick: (id: string) => void;
    image: string;
};
export type VoxelListData = VoxelListNode[];
type VoxelListProps = {
    activeItem: string;
    items: VoxelListData;
};
export declare const VoxelList: (props?: {
    claasses: string[];
    activeItem: string;
}) => [ElmTreeData, import("elmtree").ComponentUpdate<VoxelListProps>, {
    elements: ElmTreeData;
}];
export {};
