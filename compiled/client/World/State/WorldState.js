import { CreateMachine } from "../../../../../../DSLIBS/crystallineState/dist";
import { RegisterWorldEvents } from "./WorldEvent";
export const WORLD_SM = CreateMachine({
    INIT: {
        LOAD: {
            goTo: "INIT",
        },
        DONE: {
            goTo: "IDLE",
        },
    },
    IDLE: {
        LOAD_SAVE: {
            args: { save: "", onDone: () => { } },
            goTo: "IN_WORLD",
        },
    },
    IN_WORLD: {
        PAUSE: {
            goTo: "IN_WORLD",
        },
        EXIT: {
            goTo: "IDLE",
        },
        LOADING: {
            args: { save: "", onDone: () => { } },
            goTo: "IN_WORLD",
        },
        START: {
            goTo: "INIT",
        },
    },
});
WORLD_SM.activeState = "INIT";
RegisterWorldEvents();
