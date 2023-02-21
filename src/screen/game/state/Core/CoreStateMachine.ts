import { CrystallineState } from "crystalline-state";
import { setScreenState } from "../State.js";

type CoreStateMachineStates = {
  IDLE: {
    ENTER_SCREEN: { screen: string | "current"; subScrene?: string };
    CLOSE: undefined
  };
};

const coreStateMachine =
  CrystallineState.createStateMachine<CoreStateMachineStates>({
    name: "core-state-machine",
    historyLength: 0,
  });

coreStateMachine.registerState("IDLE", {
  ENTER_SCREEN: "IDLE",
  CLOSE: "IDLE",
});

export const CSM = coreStateMachine;

CSM.addToStateEvent("IDLE", "ENTER_SCREEN", (args) => {
  if (args.subScrene) {
    setScreenState(args.screen, args.subScrene);
    return;
  }
  setScreenState(args.screen, "current");
});
