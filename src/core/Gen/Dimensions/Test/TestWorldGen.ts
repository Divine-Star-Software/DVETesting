import { DVEC } from "divine-voxel-engine/Constructor";
import { VoxelMath } from "divine-voxel-engine/Math";
import { PerlinNoise3d } from "divine-rng";
import { IndexedRNG } from "divine-rng";
import { GenerateDimensionTemple } from "@core/Gen/Structures/Temples/DimensoinTemple.js";
import { GenerateTree } from "@core/Gen/Functions/Tree.js";
const perlin = new PerlinNoise3d();
const perlin2 = new PerlinNoise3d();
const bioneNoise = new PerlinNoise3d();
/* 
perlin.noiseSeed(12341234);
perlin2.noiseSeed(989989989);
bioneNoise.noiseSeed(59695022384); 
*/

const indexRNG = new IndexedRNG(2934782394782372);
perlin.noiseSeed(2934782394782372);
perlin2.noiseSeed(89898778990878798);
bioneNoise.noiseSeed(7890878787788789987);
const waveLength = 100;
const xOffSet = 1_000;
const zOffSet = 1_000;

const brush = DVEC.worldGen.getBrush();
const dataTool = brush._dt;

export const TestWorldGen = {
  depth: 16,
  width: 16,
  height: 128,

  generate(
    dimension: string,
    columnX: number,
    columnY: number,
    columnZ: number,
    data: any
  ) {
    brush.setDimension(dimension).start();

    if (columnX == 16 && columnZ == 16) {
      GenerateDimensionTemple(brush, 16, 1, 16, "crimson");
    }
    const dataTool = brush._dt;
    for (let x = columnX; x < this.width + columnX; x++) {
      for (let z = columnZ; z < this.depth + columnZ; z++) {
        for (let y = 0; y < this.height + 10; y++) {
          if (dataTool.loadInAt(x, y, z)) {
            if (dataTool.isRenderable()) continue;
          }
          if (y == 0) {
            brush.setId("ecd_immutable").setXYZ(x, y, z).paint();
            continue;
          }
          if (y == 1) {
            if (Math.random() > 0.99) {
              GenerateTree(
                brush,
                x,
                y,
                z,
                "ecd_elysian_log",
                "ecd_elysian_leafs"
              );
            }
          }
        }
      }
    }
    brush.stop();
  },
};
