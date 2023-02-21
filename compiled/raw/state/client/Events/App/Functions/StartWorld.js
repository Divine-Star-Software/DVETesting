import { DVER } from "divine-voxel-engine/Render";
export function StartWorld(id) {
    DVER.worldComm.runTasks("start-world", id);
}
