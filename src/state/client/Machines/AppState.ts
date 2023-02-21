import { CrystallineState } from "crystalline-state";

type AppStateMachine = {
  INIT: {
    LOAD_DATA: null;
    INIT_DVE: null;
    START: null;
  };
  IDLE: {
    ENTER_SCREEN: { screen: string | "current"; subScrene?: string };
    ETNER_GAME: null;
    CLOSE: undefined;
  };
};

export const AppState = CrystallineState.createStateMachine<AppStateMachine>({
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
