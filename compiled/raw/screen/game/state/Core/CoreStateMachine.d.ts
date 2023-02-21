type CoreStateMachineStates = {
    IDLE: {
        ENTER_SCREEN: {
            screen: string | "current";
            subScrene?: string;
        };
        CLOSE: undefined;
    };
};
export declare const CSM: import("crystalline-state/CrystallineState/StateMachine.js").StateMachine<CoreStateMachineStates>;
export {};
