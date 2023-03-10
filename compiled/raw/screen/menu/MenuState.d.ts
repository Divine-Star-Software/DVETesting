export declare const MENU_STATE_EVENTS: import("crystalline-state/StateProxy").StateEventFunctions<{
    node: string;
    section: string;
    subSection: string;
}>, MENU_STATE: {
    node: string;
    section: string;
    subSection: string;
};
export declare const connectMenuState: (id: string, mode: "node" | "sub-section") => import("elmtree").ElmObjCascadeData;
