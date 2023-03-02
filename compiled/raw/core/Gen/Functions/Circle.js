import { Distance2D } from "divine-voxel-engine/Math";
export function GenerateCircle(brush, voxel, sx, sy, sz, radius, skipCenter = false, noDestory = false) {
    let rx = sx - radius;
    let rz = sz - radius;
    brush.setId(voxel);
    const dataTool = brush._dt;
    for (let ix = rx; ix <= sx + radius; ix++) {
        for (let iz = rz; iz <= sz + radius; iz++) {
            if (skipCenter) {
                if (ix == sx && iz == sz)
                    continue;
            }
            if (noDestory) {
                if (dataTool.loadInAt(ix, sy, iz)) {
                    if (dataTool.isRenderable())
                        continue;
                }
            }
            if (Distance2D(ix, sx, iz, sz) < radius) {
                brush.setXYZ(ix, sy, iz).paint();
            }
        }
    }
}
