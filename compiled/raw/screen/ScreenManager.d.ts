import { ElmTreeData } from "elmtree";
type ScreenMdeData = {
    id: string;
    appMode: string;
    getElements: (screenComponent: ElmTreeData) => ElmTreeData | Promise<ElmTreeData>;
    beforeUpdate?: () => Promise<any>;
    afterUpdate?: () => Promise<any>;
    beforeRender?: () => Promise<any>;
    afterRender?: () => Promise<any>;
    onOut?: () => Promise<any>;
    onIn?: () => Promise<any>;
};
type ScreenData = {
    id: string;
    getElements: () => ElmTreeData | Promise<ElmTreeData>;
    mode: string;
    beforeRender?: Function;
    afterRender?: Function;
};
export declare const ScreenManager: {
    $INIT(): void;
    screenModes: {
        _currentMode: string;
        _map: Map<string, {
            data: ScreenMdeData;
            component: [ElmTreeData, import("elmtree").ComponentUpdate<unknown>, {
                elements: ElmTreeData;
            }];
        }>;
        add(screenModes: ScreenMdeData[]): void;
        get(screenId: string): false | {
            data: ScreenMdeData;
            component: [ElmTreeData, import("elmtree").ComponentUpdate<unknown>, {
                elements: ElmTreeData;
            }];
        };
        render(id: string): Promise<false | undefined>;
    };
    screens: {
        _map: Map<string, ScreenData>;
        getScreenMode(id: string): string | false;
        add(screens: ScreenData[]): void;
        get(screenId: string): false | ScreenData;
        render(id: string): Promise<false | undefined>;
    };
};
export {};
