import { DVEN } from "divine-voxel-engine/Nexus";
//import { GetNexusPlayer } from "./Player/InitNexusPlayer.js";
import { INIT_NEXUS_PLAYER } from "dve-plugins-player/Nexus";
await DVEN.$INIT();
const player = await INIT_NEXUS_PLAYER(DVEN);
player.setPosition(0, 200, 0);
setTimeout(() => {
    setInterval(() => {
        player.update();
    }, 17);
}, 2000);
