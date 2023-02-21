import { DVEW } from "divine-voxel-engine/World";
import { GameSession } from "../Session/Session";
export function RegisterAppWorldTasks() {
    DVEW.TC.registerTasks("start-world", (data) => {
    });
    DVEW.TC.registerTasks("end-world", (data) => {
        GameSession.endSession();
    });
}
