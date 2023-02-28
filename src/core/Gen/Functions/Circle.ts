import type { BrushTool } from "divine-voxel-engine/Tools/Brush/Brush";
import { Distance2D } from "divine-voxel-engine/Math";

export function GenerateCircle(
  brush: BrushTool,
  voxel: string,
  sx: number,
  sy: number,
  sz: number,
  radius: number,
  skipCenter = false,
  noDestory = false
) {
  let rx = sx - radius;
  let rz = sz - radius;
  brush.setId(voxel);
  const dataTool = brush._dt;
  for (let ix = rx; ix <= sx + radius; ix++) {
    for (let iz = rz; iz <= sz + radius; iz++) {
      if (skipCenter) {
        if (ix == sx && iz == sz) continue;
      }
      if (noDestory) {
        if (dataTool.loadInAt(ix, sy, iz)) {
          if (dataTool.isRenderable()) continue;
        }
      }
      if (Distance2D(ix, sx, iz, sz) < radius) {
        brush.setXYZ(ix, sy, iz).paint();
      }
    }
  }
}
