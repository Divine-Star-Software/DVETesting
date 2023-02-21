import { CSM } from "../../state/Core/CoreStateMachine.js";
import { ElementTree } from "ds-element-tree";
import { Screen } from "../../../elements/Screen.js";
import { PickList } from "../../../elements/PickList/PickList.js";
const [element, setState] = PickList();
export const SpellsScreen = () => {
    return Screen("spells", "none", true, element);
};
CSM.addToStateEvent("IDLE", "ENTER_SCREEN", (args) => {
    if (args.screen == "spells") {
    }
});
window.con = ElementTree.controller;
