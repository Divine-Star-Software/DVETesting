import { AppState } from "../../Machines/AppState";
import { DVEDENV } from "../../../../core/data/ENV/DVEENV";
import { AppDataBase } from "../../../../databases/App/AppDataBase";
import { ZeneithDB } from "zeneithdb";
import { $InitCommands } from "../../../../commands/InitCommands";
import { $INIT_DVER } from "../../../../client/Init/InitDVER";
import { $InitScreens } from "../../../../screen/Screen.js";
import { StartWorld } from "./Functions/StartWorld";
import { DVER } from "divine-voxel-engine/Render";
export function SetUpAppEvents() {
    AppState.addToStateEvent("INIT", "LOAD_DATA", async () => {
        await DVEDENV.$INIT();
        console.log(`[DREAM SPACE INFINITE: ${DVEDENV.data.version}]`);
        //@ds-prod-start
        console.log(`[MODE: prod]`);
        //@ds-prod-end
        
        await ZeneithDB.$INIT();
        await AppDataBase.$INIT();
        AppState.triggerEventOnState("INIT", "INIT_DVE", null);
    });
    AppState.addToStateEvent("INIT", "INIT_DVE", async () => {
        await $INIT_DVER();
        await $InitCommands();
        $InitScreens();
        await DVER.worldComm.waitTillTasksExist("start-world");
        AppState.triggerEventOnState("INIT", "START", null);
    });
    AppState.addToStateEvent("INIT", "START", async () => {
        if (DVEDENV.data.mode == "dev") {
            StartWorld(DVEDENV.data.start.save);
        }
        AppState.triggerEventOnState("IDLE", "ETNER_GAME", null);
    });
    return AppState;
}
