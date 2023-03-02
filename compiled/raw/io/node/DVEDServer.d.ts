import { DVEDMessages } from "../types/DVEDMessage.types";
export declare const DVEDServer: {
    parseDVEDMessasge(message: string): {
        message: DVEDMessages;
        data: string;
    };
    hanldeMessage(body: string): Uint8Array;
};
