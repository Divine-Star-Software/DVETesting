import { ASM } from "./AppStateMachine";
import { CreateState } from "crystalline-state";
import { SetUpAppEvents } from "./AppEvents";
export const [APP_STATE_EVENTS, APP_STATE] = CreateState({
    mode: "",
    world: "",
});
APP_STATE_EVENTS("world", "change", () => {
    if (APP_STATE.world != "")
        return ASM.triggerEvent("IDLE", "ETNER_GAME", null);
    ASM.triggerEvent("IDLE", "EXIT_GAME", null);
});
APP_STATE_EVENTS("mode", "change", () => {
    ASM.triggerEvent("IDLE", "MODE_CHANGE", null);
});
export function $INIT_APPSTATE() {
    const appState = SetUpAppEvents();
    return appState;
}
