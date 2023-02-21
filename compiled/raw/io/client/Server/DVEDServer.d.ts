import { LocationData } from "voxelspaces";
export declare const DVEDServer: {
    url: string;
    _compressToString(buffer: ArrayBuffer): Promise<string>;
    sendDVEDMessage(dveMessage: any, buffer?: ArrayBuffer | ArrayBuffer[]): Promise<Response>;
    setPath(id: string): Promise<boolean>;
    _determineError(response: Response): Promise<number>;
    columnExists(location: LocationData): Promise<boolean>;
    columnTimestamp(location: LocationData): Promise<number>;
    loadColumn(location: LocationData): Promise<ArrayBufferLike>;
    loadRegionHeader(location: LocationData): Promise<ArrayBufferLike>;
    saveColumn(location: LocationData, buffer: ArrayBuffer): Promise<boolean>;
    loadRegion(location: LocationData): Promise<ArrayBufferLike[]>;
    saveRegion(buffer: [location: LocationData, buffer: ArrayBuffer][]): Promise<boolean>;
};
