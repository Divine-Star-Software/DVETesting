import { TagManager } from "divine-binary-tags";
import { PlayerRenderTagIDs } from "../Player/PlayerRenderData.js";

export function $RegisterPlayerClientData() {
  const playerRenderTagManger = new TagManager("player-render-tags");
  playerRenderTagManger.registerTag({
    id: PlayerRenderTagIDs.header,
    type: "header",
    numberType: "16ui",
  });
  playerRenderTagManger.registerTag({
    id: PlayerRenderTagIDs.fogChange,
    type: "boolean",
  });
  playerRenderTagManger.registerTag({
    id: PlayerRenderTagIDs.fogColor,
    type: "typed-number-array",
    numberType: "32f",
    length: 3,
  });
  playerRenderTagManger.registerTag({
    id: PlayerRenderTagIDs.fogMode,
    type: "typed-number",
    numberType: "8ui",
  });

  playerRenderTagManger.$INIT({ indexBufferMode: "shared" });
  return { playerRenderTagManger };
}
