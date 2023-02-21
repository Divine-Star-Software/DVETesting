type AppStateMachine = {
    INIT: {
        LOAD_DATA: null;
        INIT_DVE: null;
        START: null;
    };
    IDLE: {
        ENTER_SCREEN: {
            screen: string | "current";
            subScrene?: string;
        };
        ETNER_GAME: null;
        CLOSE: undefined;
    };
};
export declare const AppState: import("crystalline-state/CrystallineState/StateMachine").StateMachine<AppStateMachine>;
export {};
