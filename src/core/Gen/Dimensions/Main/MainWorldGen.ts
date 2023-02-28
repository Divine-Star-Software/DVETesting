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

const elysianDimensionVoxels = {
  stone: "ecd_elysian_stone",
  grass: "ecd_elysian_grass",
  water: "ecd_elysian_ether",
  vine: "ecd_elysian_hangingvine",
};

const inNoiseRange = (x: number, y: number, z: number) => {
  if (y > 128) return false;
  const r = perlin2.get((x + xOffSet) / 14, y / 20, (z + zOffSet) / 14) * 0.2;
  if (y > 30) {
    const n =
      perlin2.get((x + xOffSet) / 100, y / 100, (z + zOffSet) / 100) *
      (MainWorldGen.height + 50);
    return r > 0.1 && r < 0.8 && y <= n;
  }
  const n = perlin2.get((x + xOffSet) / 50, y / 100, (z + zOffSet) / 200) * 50;
  return y <= n || (r > 0.1 && r < 0.8);
};
export const MainWorldGen = {
  depth: 16,
  width: 16,
  height: 128,

  generateCircle(
    vox: string,
    x: number,
    y: number,
    z: number,
    radius: number,
    skipCenter = false,
    noDestory = false
  ) {
    let rx = x - radius;
    let rz = z - radius;
    brush.setId(vox);
    for (let ix = rx; ix <= x + radius; ix++) {
      for (let iz = rz; iz <= z + radius; iz++) {
        if (skipCenter) {
          if (ix == x && iz == z) continue;
        }
        if (noDestory) {
          if (dataTool.loadInAt(ix, y, iz)) {
            if (dataTool.isRenderable()) continue;
          }
        }
        if (VoxelMath.distance2D(ix, x, iz, z) < radius) {
          brush.setXYZ(ix, y, iz).paint();
        }
      }
    }
  },

  generate(
    dimension: string,
    columnX: number,
    columnY: number,
    columnZ: number,
    data: any
  ) {
    brush.setDimension(dimension).start();
    let makeTeple = false;
    let madeTemple = false;
    let makeVine = false;
    let makeWaterFall = false;
    let templeFlip = indexRNG.get(columnX * (columnY + 3) * columnZ);
    if (templeFlip > 0.98 && !madeTemple) {
      makeTeple = true;
      madeTemple = true;
    }
    const dataTool = brush._dt;
    let totalTrees = 0;
    for (let x = columnX; x < this.width + columnX; x++) {
      for (let z = columnZ; z < this.depth + columnZ; z++) {
        let voxels = elysianDimensionVoxels;

        let flip = indexRNG.get(x * (columnY + 1) * z);
        let vineHeight = 0;
        makeVine = false;
        makeWaterFall = false;
        if (flip > 0.97 && inNoiseRange(x, this.height - 10, z)) {
          vineHeight = (50 * Math.random()) >> 0;
          makeVine = true;
        }
        flip = indexRNG.get(x * (columnY + 2) * z);
        if (flip > 0.99 && !makeVine && inNoiseRange(x, this.height - 10, z)) {
          makeWaterFall = true;
        }

        for (let y = 0; y < this.height + 10; y++) {
          if (dataTool.loadInAt(x, y, z)) {
            if (dataTool.isRenderable()) continue;
          }
          if (y == 0) {
            brush.setId("ecd_immutable").setXYZ(x, y, z).paint();
            continue;
          }

          if (inNoiseRange(x, y, z)) {
            if (y > 50 + vineHeight) makeVine = false;
            brush.setId(voxels.stone);
            brush.setXYZ(x, y, z).paint();
          } else {
            if (
              makeTeple &&
              y > 40 &&
              inNoiseRange(x, y - 1, z) &&
              !inNoiseRange(x + 7, y + 1, z + 7)
            ) {
              GenerateDimensionTemple(brush, x, y, z, "crimson");
              makeTeple = false;
              continue;
            }
            if (y > 70 && inNoiseRange(x, y - 1, z) && totalTrees < 3) {
              if (indexRNG.get(x * y * z) > 0.98) {
                GenerateTree(
                  brush,
                  x,
                  y,
                  z,
                  "ecd_elysian_log",
                  "ecd_elysian_leafs"
                );
                totalTrees++;
                continue;
              }
            }
            if (y > 40 && inNoiseRange(x, y - 1, z)) {
              if (indexRNG.get(x * y * z) > 0.93) {
                brush.setId(voxels.grass).setXYZ(x, y, z).paint();
                continue;
              }
            }
            if (makeWaterFall) {
              if (y > 40 && y < this.height - 10) {
                if (inNoiseRange(x, y + 1, z)) {
                  brush.setId(voxels.water).setXYZ(x, y, z).paint();
                  makeWaterFall = false;
                  continue;
                }
              }
            }
            if (makeVine) {
              if (y > 50 + vineHeight) {
                brush.setId(voxels.vine).setXYZ(x, y, z).paint();
                continue;
              }
            }
            if (y <= 40) {
              brush.setId(voxels.water).setXYZ(x, y, z).paint();
              continue;
            }
          }
        }
      }
    }
    brush.stop();
  },
};
