export declare const WORLD_SM: import("crystalline-state/StateMachine").StateMachine<{
    INIT: {
        LOAD: {
            goTo: "INIT";
        };
        DONE: {
            goTo: "IDLE";
        };
    };
    IDLE: {
        LOAD_SAVE: {
            args: {
                save: string;
                onDone: () => void;
            };
            goTo: "IN_WORLD";
        };
    };
    IN_WORLD: {
        PAUSE: {
            goTo: "IN_WORLD";
        };
        EXIT: {
            goTo: "IDLE";
        };
        LOADING: {
            args: {
                save: string;
                onDone: () => void;
            };
            goTo: "IN_WORLD";
        };
        START: {
            goTo: "INIT";
        };
    };
}>;
