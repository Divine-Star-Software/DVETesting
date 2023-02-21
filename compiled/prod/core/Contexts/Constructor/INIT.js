import { DVEC, } from "divine-voxel-engine/Constructor";
export async function $INITConstructor(registerVoxelConstructor) {
    if (registerVoxelConstructor) {
        registerVoxelConstructor(DVEC);
    }
    await DVEC.$INIT();
    return DVEC;
}
