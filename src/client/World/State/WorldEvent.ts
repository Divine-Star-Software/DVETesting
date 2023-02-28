import { WORLD_SM } from "./WorldState";
import { DVEW } from "divine-voxel-engine/World";

import { RegisterVoxelData } from "@sharedData/Functions/RegisterVoxelData.js";
//import { $INITWorldPlayer } from "./Player/WorldPlayer.js";

import { INIT_WORLD_PLAYER } from "dve-plugins-player/World";
import { SimulationLoop } from "simloop";
import { GameSession } from "../Session/Session.js";

import { DVEWorldPlayer } from "../Player.js";

import { RegisterActions } from "../Actions/RegisterActions";
export function RegisterWorldEvents() {
  WORLD_SM.addToStates({
    INIT: {
      LOAD: async () => {
        DVEW.TC.registerTasks<string>(
          "start-world",
          (data, onDone) => {
            if (!onDone) return;
            WORLD_SM.triggerEvent("IDLE", "LOAD_SAVE", {
              save: data,
              onDone: () => {
                onDone();
              },
            });
          },
          "deffered"
        );

        DVEW.TC.registerTasks("end-world", () => {
          GameSession.endSession();
        });

        RegisterVoxelData(DVEW);

        await DVEW.$INIT();
        await SimulationLoop.$INIT(20);

        const worldPlayer = await INIT_WORLD_PLAYER(DVEW);
        DVEWorldPlayer.$INIT(worldPlayer);
        GameSession.player = worldPlayer;

        RegisterActions();

        WORLD_SM.triggerEvent("INIT", "DONE");
      },
    },
  })
    .addToStates({
      IDLE: {
        LOAD_SAVE: async (args) => {
          WORLD_SM.triggerEvent("IN_WORLD", "LOADING", args);
        },
      },
    })
    .addToStates({
      IN_WORLD: {
        LOADING: async (args) => {
          await GameSession.preLoad();
          args.onDone();
          WORLD_SM.triggerEvent("IN_WORLD", "START");
        },
      },
    })
    .addToStates({
      IN_WORLD: {
        START: (args) => {
          GameSession.startSession();
        },
      },
    });
}
(self as any).session = GameSession;
