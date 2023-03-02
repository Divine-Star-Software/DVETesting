export declare function SetUpAppEvents(): import("crystalline-state/StateMachine").StateMachine<{
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
