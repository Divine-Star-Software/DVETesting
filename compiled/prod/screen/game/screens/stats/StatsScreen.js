import { DataLog } from "../../../elements/DataLog/DataLog.js";
import { CSM } from "../../state/Core/CoreStateMachine.js";
import { ElementTree } from "ds-element-tree";
import { Screen } from "../../../elements/Screen.js";
import { PlayerManager } from "dve-plugins-player/Data";
const props = { nodes: {} };
const [element, setState] = DataLog(props);
export const StatsScreen = () => {
    return Screen("stats", "none", true, element);
};
CSM.addToStateEvent("IDLE", "ENTER_SCREEN", (args) => {
    if (args.screen == "stats") {
        setState({
            nodes: {
                level: PlayerManager.stats.level,
                exp: PlayerManager.stats.exp,
                energy: PlayerManager.stats.currentEnergy,
                max_energy: PlayerManager.stats.maxEnegery,
                mana: PlayerManager.stats.currentMana,
                max_mana: PlayerManager.stats.maxMana,
                speed: PlayerManager.stats.speed,
                jump_power: PlayerManager.stats.jumpPower,
                intuition: PlayerManager.stats.intuition,
            },
        });
    }
});
window.con = ElementTree.controller;
