import { $RegisterVoxelConstructors } from "@clientData/Functions/RegisterVoxelConstructors.js";
import { DVEC } from "divine-voxel-engine/Constructor";
import { WorldGenerator } from "@gen/WorldGenerator";
$RegisterVoxelConstructors(DVEC);
DVEC.worldGen.setWorldGen(WorldGenerator);
await DVEC.$INIT();
