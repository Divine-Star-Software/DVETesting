import { div } from "elmtree";
import { PickList } from "../../Components/PickList/PickList.js";
import { PlayerSpells } from "@client/Spells/PlayerSpells.js";
import { ScreenManager } from "../../index";
const [element, setState] = PickList();
export function SpellsScreen() {
    ScreenManager.screens.add([
        {
            id: "spells",
            mode: "game-menu",
            getElements: () => div("spells-container", [element]),
            async afterRender() {
                const spells = PlayerSpells.spells;
                const items = [];
                for (const spell of spells) {
                    items.push({
                        name: spell.name,
                        id: spell.id,
                        desc: "",
                        onClick(id) {
                            PlayerSpells.setSpell(spell.id);
                        },
                    });
                }
                setState({
                    activeItem: PlayerSpells.currentSpell,
                    items: items,
                });
            },
        },
    ]);
}
