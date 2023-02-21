import { GenerateStairPillar } from "../../Functions/StairPillar.js";
import { GenerateStairRoof } from "../../Functions/StairRoof.js";
const DimensionTempleVoxels = {
    crimson: {
        stone: "ecd_crimson_star_stone",
        stair: "ecd_crimson_star_stone_stair",
        lamp: "ecd_crimson_lamp",
        ether: "ecd_crimson_ether",
    },
};
/*
ecd_crimson_star_stone
ecd_crimson_lamp
ecd_crimson_ether
*/
export function GenerateDimensionTemple(brush, sx, sy, sz, templeDimension) {
    const dimensionData = DimensionTempleVoxels[templeDimension];
    if (!dimensionData)
        return false;
    const dataTool = brush._dt;
    const width = 16;
    const depth = 16;
    for (let x = sx; x < sx + width; x++) {
        for (let z = sz; z < sz + depth; z++) {
            for (let y = sy; y > 0; y--) {
                if (dataTool.loadInAt(x, y, z)) {
                    if (dataTool.isOpaque())
                        continue;
                }
                brush.setXYZ(x, y, z);
                if (y > sy - 5) {
                    if ((x == sx + 7 && z == sz + 7) ||
                        (x == sx + 8 && z == sz + 8) ||
                        (x == sx + 7 && z == sz + 8) ||
                        (x == sx + 8 && z == sz + 7)) {
                        brush.setId(dimensionData.stone).paint();
                        continue;
                    }
                    if (x >= sx + 4 && z >= sz + 4 && x <= sx + 11 && z <= sz + 11) {
                        brush.setId(dimensionData.ether).paint();
                        continue;
                    }
                }
                brush.setId(dimensionData.stone).paint();
            }
        }
    }
    for (let x = sx; x < sx + width; x++) {
        for (let z = sz; z < sz + depth; z++) {
            for (let y = sy; y < sy + 10; y++) {
                if (dataTool.loadInAt(x, y, z)) {
                    if (dataTool.isOpaque())
                        continue;
                }
                brush.setXYZ(x, y, z);
                if ((x == sx + 7 && z == sz + 7) ||
                    (x == sx + 8 && z == sz + 8) ||
                    (x == sx + 7 && z == sz + 8) ||
                    (x == sx + 8 && z == sz + 7)) {
                    if (y == sy + 9) {
                        brush.setId(dimensionData.lamp).paint();
                        brush
                            .setXYZ(x, y + 1, z)
                            .setId(dimensionData.ether)
                            .paint();
                        continue;
                    }
                    brush.setId(dimensionData.stone).paint();
                    continue;
                }
            }
        }
    }
    GenerateStairPillar(brush, sx + 1, sy + 1, sz + 1, 10, dimensionData.stair, dimensionData.stone);
    GenerateStairPillar(brush, sx + 14, sy + 1, sz + 1, 10, dimensionData.stair, dimensionData.stone);
    GenerateStairPillar(brush, sx + 1, sy + 1, sz + 14, 10, dimensionData.stair, dimensionData.stone);
    GenerateStairPillar(brush, sx + 14, sy + 1, sz + 14, 10, dimensionData.stair, dimensionData.stone);
    GenerateStairRoof(brush, sx, sy + 12, sz, 16, 16, 10, dimensionData.stair);
}
