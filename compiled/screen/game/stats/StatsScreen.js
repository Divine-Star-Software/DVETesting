import { div } from "elmtree";
import { PlayerManager } from "dve-plugins-player/Data";
import { ScreenManager } from "../../index";
import { DataLog } from "../../Components";
const [element, setState] = DataLog({ claasses: [] });
export const StatsScreen = () => {
    ScreenManager.screens.add([
        {
            id: "stats",
            mode: "game-menu",
            getElements: () => div("stats-container", element),
            async afterRender() {
                setState({
                    level: PlayerManager.stats.level,
                    exp: PlayerManager.stats.exp,
                    energy: PlayerManager.stats.currentEnergy,
                    max_energy: PlayerManager.stats.maxEnegery,
                    mana: PlayerManager.stats.currentMana,
                    max_mana: PlayerManager.stats.maxMana,
                    speed: PlayerManager.stats.speed,
                    jump_power: PlayerManager.stats.jumpPower,
                    intuition: PlayerManager.stats.intuition,
                });
            },
        },
    ]);
};
