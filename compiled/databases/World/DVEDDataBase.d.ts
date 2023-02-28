import type { LocationData } from "voxelspaces";
export declare const DVEDDataBase: {
    setPath(id: string): Promise<boolean>;
    columnExists(location: LocationData): Promise<boolean>;
    columnTimestamp(location: LocationData): Promise<number>;
    loadRegionHeader(location: LocationData): Promise<ArrayBuffer>;
    loadColumn(location: LocationData): Promise<ArrayBufferLike>;
    saveColumn(location: LocationData, buffer: ArrayBuffer): Promise<boolean>;
    loadRegion(location: LocationData): Promise<ArrayBufferLike[]>;
    saveRegion(buffer: [location: LocationData, buffer: ArrayBuffer][]): Promise<boolean>;
};
