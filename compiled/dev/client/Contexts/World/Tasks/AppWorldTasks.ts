import { DVEW } from "divine-voxel-engine/World";
import { GameSession } from "../Session/Session";

export function RegisterAppWorldTasks() {
  DVEW.TC.registerTasks<string>("start-world", (data) => {

  });
  DVEW.TC.registerTasks<string>("end-world", (data) => {
    GameSession.endSession();
  });
}
