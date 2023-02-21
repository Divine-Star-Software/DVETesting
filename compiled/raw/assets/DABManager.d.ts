import { TextureData } from "divine-voxel-engine";
import type { SFXData } from "divine-audio-engine/Meta/Audio.types";
export declare const DABManager: {
    DABS: {
        textures: TextureData[];
        sfx: SFXData[];
    };
    _fetchAndParse<T>(path: string): Promise<T>;
    $LOAD(): Promise<void>;
};
