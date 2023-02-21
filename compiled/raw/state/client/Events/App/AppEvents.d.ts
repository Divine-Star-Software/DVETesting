export declare function SetUpAppEvents(): import("crystalline-state/CrystallineState/StateMachine").StateMachine<{
    INIT: {
        LOAD_DATA: null;
        INIT_DVE: null;
        START: null;
    };
    IDLE: {
        ENTER_SCREEN: {
            screen: string;
            subScrene?: string | undefined;
        };
        ETNER_GAME: null;
        CLOSE: undefined;
    };
}>;
