import { PlayerManager } from"dve-plugins-player/Data";
import { WorldPlayer } from "dve-plugins-player/World";
export const DVEWorldPlayer = {
  player: <WorldPlayer>{},
  dimension : "main",
  manager : <typeof PlayerManager>{},
  $INIT(player: WorldPlayer) {
    this.manager = player.manager;
    this.player = player;
  },
};
