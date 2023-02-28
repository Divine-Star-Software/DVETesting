import { CreateMachine } from "crystalline-state";

export const ASM = CreateMachine({
  INIT: {
    LOAD_DATA: {
      goTo: "INIT",
    },
    INIT_DVE: {
      goTo: "INIT",
    },
    START: {
      goTo: "IDLE",
    },
  },
  IDLE: {
    ENTER_SCREEN: {
      args: <{ screen: string | "current"; subScrene?: string }>{},
      goTo: "IDLE",
    },
    ETNER_GAME: {
      goTo: "IDLE",
    },
    EXIT_GAME: {
      goTo: "IDLE",
    },
    MODE_CHANGE: {
      goTo: "IDLE",
    },
    CLOSE: {
      goTo: "IDLE",
    },
  },
});
