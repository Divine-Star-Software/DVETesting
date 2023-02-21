import { WorldPlayer } from "dve-plugins-player/World/";
import { IWG } from "dve-plugins-iwg/World";
import { SimulationLoop } from "simloop";



export const GameSession = {
  player: <WorldPlayer>{},
  startSession() {
    const position: number[] = [];
    SimulationLoop.registerInterval(0);
    SimulationLoop.addToInterval(0, () => {
      this.player.update();

    });
    SimulationLoop.run();
  },

  endSession() {},
};
