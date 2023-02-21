import { LocationData } from "voxelspaces";
type VoxelAddData = [
    location: LocationData,
    id: string,
    state: number,
    shapeState: number
];
export declare const UpdateManager: {
    _addVoxelQueue: VoxelAddData[];
    _removeVoxelQueue: LocationData[];
    _explodeQueue: LocationData[];
    _canRemoveVoxel: boolean;
    _canAddVoxel: boolean;
    _canExplode: boolean;
    _addNap: Map<string, boolean>;
    _removeMap: Map<string, boolean>;
    _explodeMap: Map<string, boolean>;
    addVoxel(location: LocationData, id: string, state?: number, shapeState?: number): true | undefined;
    explode(location: LocationData): true | undefined;
    removeVoxel(location: LocationData): boolean;
    update(): void;
};
export {};
