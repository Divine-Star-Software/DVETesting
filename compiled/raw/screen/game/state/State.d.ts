export declare const APP_STATE: {
    activeScreen: string;
    activeSubScreen: string;
};
export declare const setScreenState: (activeScreen: string | "current", activeSubScreen: string | "current") => void;
export declare const connectState: (screen: string | "current", subScreen?: string | "none") => {
    cascade: {
        origin: {
            activeScreen: string;
            activeSubScreen: string;
        };
        receiver(elm: HTMLElement, cascadeProps: typeof APP_STATE): void;
    };
};
