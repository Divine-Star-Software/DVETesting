import type { VoxelConstructor, ConstructorTextureData } from "divine-voxel-engine";
import { VoxelTemplater } from "divine-voxel-engine/Constructor";
export declare class OutlinedVoxelConstructor implements VoxelConstructor {
    id: string;
    constructor(id: string, textures: [base: ConstructorTextureData, overlay: ConstructorTextureData]);
    process(templater: typeof VoxelTemplater): void;
}
