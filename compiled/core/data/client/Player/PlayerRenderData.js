import { RemoteTagManager, } from "divine-binary-tags";
export const PlayerRenderTags = new RemoteTagManager("player-render-tags");
export const PlayerRenderTagIDs = {
    header: "#header",
    fogChange: "#fog_change",
    fogMode: "#fog_mode",
    fogColor: "#fog_color",
};
export const PlayerRenderData = {
    tags: {},
    $INIT(tags, data) {
        this.tags = tags;
        if (data[1]) {
            tags.$INIT(data[1]);
        }
        tags.setBuffer(data[0]);
    },
};
