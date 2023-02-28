import { DVEN } from "divine-voxel-engine/Nexus";
//import { GetNexusPlayer } from "./Player/InitNexusPlayer.js";
import { INIT_NEXUS_PLAYER } from "dve-plugins-player/Nexus";
import { SimulationLoop } from "simloop";
await DVEN.$INIT();

const player = await INIT_NEXUS_PLAYER(DVEN);
player.setPosition(0, 200, 0);
DVEN.TC.registerTasks<[x: number, y: number, z: number]>(
  "set-player-position",
  (data) => {
    player.setPosition(...data);
  }
);
let updating = false;
DVEN.TC.registerTasks<[x: number, y: number, z: number]>(
  "start-world",
  (data) => {
    updating = true;
    player.setPosition(...data);
  }
);

let msterialStandingOn = "stone";
setInterval(() => {
  if (!updating) return;
  player.update();
  if (player.onGround) {
    if (
      player.dataTool.loadInAt(
        player.position.x >> 0,
        (player.position.y - 1) >> 0,
        player.position.z >> 0
      )
    ) {
      let material = player.dataTool.getMaterial();

      if (material != msterialStandingOn) {
        msterialStandingOn = material;
        DVEN.parentComm.runTasks("set-material", material);
      }
    }
  }
}, 17);
