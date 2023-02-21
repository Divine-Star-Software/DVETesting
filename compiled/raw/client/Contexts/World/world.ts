import { DVEW } from "divine-voxel-engine/World";

import { RegisterVoxelData } from "@sharedData/Functions/RegisterVoxelData.js";
//import { $INITWorldPlayer } from "./Player/WorldPlayer.js";

import { INIT_WORLD_PLAYER } from "dve-plugins-player/World";
import { SimulationLoop } from "simloop";
import { RegisterAppWorldTasks } from "./Tasks/AppWorldTasks.js";
import { GameSession } from "./Session/Session.js";
import { ECDWorldPlayer } from "./Player.js";
import { WorldGen } from "./Gen/WorldGen.js";
RegisterAppWorldTasks();
RegisterVoxelData(DVEW);

await DVEW.$INIT();
await SimulationLoop.$INIT(20);

const worldPlayer = await INIT_WORLD_PLAYER(DVEW);
ECDWorldPlayer.$INIT(worldPlayer);
GameSession.player = worldPlayer;
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

const physicsData = worldPlayer.manager.physics;
const dataTool = DVEW.getDataTool();
const brush = DVEW.getBrush();
DVEW.TC.registerTasks<string>("place", async (data) => {
  const [x, y, z] = physicsData.pick.getPlacePosition();
  if (!dataTool.loadInAt(x, y, z)) return;
  if (dataTool.isRenderable()) return;
  await brush.setId(data).setXYZ(x, y, z).paintAndAwaitUpdate();
  DVEW.parentComm.runTasks("play-sound", ["voxel-place", data, x, y, z]);
  const raw = brush.getRaw();
});

DVEW.TC.registerTasks("break", async () => {
  const { x, y, z } = physicsData.pick.position;
  if (!dataTool.loadInAt(x, y, z)) return;
  if (dataTool.isRenderable()) {
    const id = dataTool.getStringId();
    DVEW.parentComm.runTasks("play-sound", ["voxel-break", id, x, y, z]);
    await brush.setXYZ(x, y, z).eraseAndAwaitUpdate();
  }
});

setInterval(() => {
  worldPlayer.update();
}, 20);
//const player = await $INITWorldPlayer(DVEW);
