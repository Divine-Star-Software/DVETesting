import { DVEW } from "divine-voxel-engine/World";
import { WorldGen } from "./WorldGen";
export async function GenerateWorld() {
    console.log("generating world");
    const numChunks = 2;
    let startX = -16 * numChunks;
    let startZ = -16 * numChunks;
    let endX = 16 * numChunks;
    let endZ = 16 * numChunks;
    const builder = DVEW.getBuilder();
    const tasks = DVEW.getTasksTool();
    for (let x = startX; x < endX; x += 16) {
        for (let z = startZ; z < endZ; z += 16) {
            WorldGen.generateWorldColumn(x, z);
            tasks.light.worldSun.add(x, z);
        }
    }
    await tasks.light.worldSun.runAndAwait();
    for (let x = startX; x < endX; x += 16) {
        for (let z = startZ; z < endZ; z += 16) {
            builder.setXZ(x, z).buildColumn();
        }
    }
}
