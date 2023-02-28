import { DVEW } from "divine-voxel-engine/World";
import { DVEWorldPlayer } from "../Player";

export function RegisterActions() {
  const physicsData = DVEWorldPlayer.manager.physics;
  const dataTool = DVEW.getDataTool();
  const brush = DVEW.getBrush();
  DVEW.TC.registerTasks<string>("place", async (data) => {
    const [x, y, z] = physicsData.pick.getPlacePosition();
    if (x == Infinity) return;
    if (!dataTool.loadInAt(x, y, z)) return;
    if (dataTool.isRenderable()) return;
    await brush.setId(data).setXYZ(x, y, z).paintAndAwaitUpdate();
    DVEW.parentComm.runTasks("play-sound", ["voxel-place", data, x, y, z]);
    const raw = brush.getRaw();
  });

  DVEW.TC.registerTasks("break", async () => {
    const [x, y, z] = physicsData.pick.position.getAsArray();
    if (x == Infinity) return;
    if (!dataTool.loadInAt(x, y, z)) return;
    if (dataTool.isRenderable()) {
      const id = dataTool.getStringId();
      DVEW.parentComm.runTasks("play-sound", ["voxel-break", id, x, y, z]);
      await brush.setXYZ(x, y, z).eraseAndAwaitUpdate();
    }
  });
}
