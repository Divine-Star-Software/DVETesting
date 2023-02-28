import { WorldPlayer } from "dve-plugins-player/World/";
import { SimulationLoop } from "simloop";
import { DVEW } from "divine-voxel-engine/World";
import { GenerateWorld } from "../Gen/Generate.js";

export const GameSession = {
  player: <WorldPlayer>{},

  async preLoad() {
    await GenerateWorld();
  },

  startSession() {
    DVEW.nexusComm.runTasks("start-world", []);
    DVEW.nexusComm.runTasks("set-player-position", [0, 70, 0]);

    SimulationLoop.registerInterval(0);
    SimulationLoop.addToInterval(0, () => {
      this.player.update();
    });

    SimulationLoop.run();
  },

  endSession() {},
};
