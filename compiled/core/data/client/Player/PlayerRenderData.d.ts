import { TagManagerBase, RemoteTagManager, RemoteTagManagerInitData } from "divine-binary-tags";
export declare const PlayerRenderTags: RemoteTagManager;
export declare const PlayerRenderTagIDs: {
    header: string;
    fogChange: string;
    fogMode: string;
    fogColor: string;
};
export declare const PlayerRenderData: {
    tags: TagManagerBase;
    $INIT(tags: TagManagerBase, data: [SharedArrayBuffer, RemoteTagManagerInitData | null]): void;
};
