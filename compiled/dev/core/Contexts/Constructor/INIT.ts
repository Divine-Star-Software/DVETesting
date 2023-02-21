import {
  DivineVoxelEngineConstructor,
  DVEC,
} from "divine-voxel-engine/Constructor";


export async function $INITConstructor(
  registerVoxelConstructor?: (constructor: typeof DVEC) => void
): Promise<DivineVoxelEngineConstructor> {
  if (registerVoxelConstructor) {
    registerVoxelConstructor(DVEC);
  }

  await DVEC.$INIT();
  return <DivineVoxelEngineConstructor>DVEC;
}
