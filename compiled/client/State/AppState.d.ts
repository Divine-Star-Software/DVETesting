export type AppModes = "main-menu" | "in-game" | "game-menu" | "loading" | "world-loading";
export declare const APP_STATE_EVENTS: import("@client/../../../../DSLIBS/crystallineState/dist/StateProxy").StateEventFunctions<{
    mode: AppModes;
    world: string;
}>, APP_STATE: {
    mode: AppModes;
    world: string;
};
export declare function $INIT_APPSTATE(): import("@client/../../../../DSLIBS/crystallineState/dist/StateMachine").StateMachine<{
    INIT: {
        LOAD_DATA: {
            goTo: "INIT";
        };
        INIT_DVE: {
            goTo: "INIT";
        };
        START: {
            goTo: "IDLE";
        };
    };
    IDLE: {
        ENTER_SCREEN: {
            args: {
                screen: string;
                subScrene?: string | undefined;
            };
            goTo: "IDLE";
        };
        ETNER_GAME: {
            goTo: "IDLE";
        };
        EXIT_GAME: {
            goTo: "IDLE";
        };
        MODE_CHANGE: {
            goTo: "IDLE";
        };
        CLOSE: {
            goTo: "IDLE";
        };
    };
}>;
