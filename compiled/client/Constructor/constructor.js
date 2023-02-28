import { $RegisterVoxelConstructors } from "../../core/data/client/functions/RegisterVoxelConstructors.js";
import { DVEC } from "divine-voxel-engine/Constructor";
import { WorldGenerator } from "../../core/gen/WorldGenerator";
$RegisterVoxelConstructors(DVEC);
DVEC.worldGen.setWorldGen(WorldGenerator);
await DVEC.$INIT();
