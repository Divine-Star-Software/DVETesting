import { $RegisterVoxelConstructors } from "../../core/data/client/Functions/RegisterVoxelConstructors.js";
import { DVEC } from "divine-voxel-engine/Constructor";
import { WorldGenerator } from "../../core/Gen/WorldGenerator";
$RegisterVoxelConstructors(DVEC);
DVEC.worldGen.setWorldGen(WorldGenerator);
await DVEC.$INIT();
