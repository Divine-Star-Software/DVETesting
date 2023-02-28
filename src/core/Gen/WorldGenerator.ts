import type { WorldGenInterface } from "divine-voxel-engine";
import { MainWorldGen } from "./Dimensions/Main/MainWorldGen.js";
import { TestWorldGen } from "./Dimensions/Test/TestWorldGen.js";

export const WorldGenerator: WorldGenInterface = {
  generate(dimension, x, y, z, data) {
    if (dimension == "main") {
    //  TestWorldGen.generate(dimension, x, y, z, data);
      MainWorldGen.generate(dimension, x, y, z, data);
    }
  },
};
