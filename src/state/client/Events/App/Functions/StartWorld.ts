import { ECDENV } from "@data/ENV/ECDENV";
import { DVER } from "divine-voxel-engine/Render";

export function StartWorld(id : string) {
  DVER.worldComm.runTasks("start-world",id);
}
