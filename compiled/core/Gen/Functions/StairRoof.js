import { StairStates } from "divine-voxel-engine/Data/Shapes/StairStates";
export function GenerateStairRoof(brush, sx, sy, sz, width, depth, height, stairId) {
    brush.setId(stairId);
    let c = 0;
    for (let y = sy; y < sy + height; y++) {
        let startX = sx + c;
        let endX = sx + width - c;
        let startZ = sz + c;
        let endZ = sz + depth - c;
        for (let x = startX; x < endX; x++) {
            for (let z = startZ; z < endZ; z++) {
                brush.setXYZ(x, y, z);
                if (x == startX && z == startZ) {
                    brush.setShapeState(StairStates.connected.bottom.northEast).paint();
                    continue;
                }
                if (x == startX && z == endZ - 1) {
                    brush.setShapeState(StairStates.connected.bottom.southEast).paint();
                    continue;
                }
                if (x == endX - 1 && z == startZ) {
                    brush.setShapeState(StairStates.connected.bottom.northWest).paint();
                    continue;
                }
                if (x == endX - 1 && z == endZ - 1) {
                    brush.setShapeState(StairStates.connected.bottom.southWest).paint();
                    continue;
                }
                if (x == startX) {
                    brush.setShapeState(StairStates.normal.bottom.east).paint();
                    continue;
                }
                if (x == endX - 1) {
                    brush.setShapeState(StairStates.normal.bottom.west).paint();
                    continue;
                }
                if (z == startZ) {
                    brush.setShapeState(StairStates.normal.bottom.north).paint();
                    continue;
                }
                if (z == endZ - 1) {
                    brush.setShapeState(StairStates.normal.bottom.south).paint();
                    continue;
                }
            }
        }
        c++;
    }
    brush.setShapeState(0);
}
