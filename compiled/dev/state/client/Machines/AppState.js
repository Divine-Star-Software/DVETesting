import { CrystallineState } from "crystalline-state";
export const AppState = CrystallineState.createStateMachine({
    name: "core-state-machine",
    historyLength: 0,
});
AppState.registerState("INIT", {
    LOAD_DATA: "INIT",
    INIT_DVE: "INIT",
    START: "IDLE",
});
AppState.registerState("IDLE", {
    ENTER_SCREEN: "IDLE",
    ETNER_GAME: "IDLE",
    CLOSE: "IDLE",
});
