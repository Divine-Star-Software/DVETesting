import {
  TagManagerBase,
  RemoteTagManager,
  RemoteTagManagerInitData,
} from "divine-binary-tags";

export const PlayerRenderTags = new RemoteTagManager("player-render-tags");

export const PlayerRenderTagIDs = {
  header: "#header",
  fogChange: "#fog_change",
  fogMode: "#fog_mode",
  fogColor: "#fog_color",
};

export const PlayerRenderData = {
  tags: <TagManagerBase>{},
  $INIT(
    tags: TagManagerBase,
    data: [SharedArrayBuffer, RemoteTagManagerInitData | null]
  ) {
    this.tags = tags;
    if (data[1]) {
      (tags as any).$INIT(data[1]);
    }
    tags.setBuffer(data[0]);
  },
};
