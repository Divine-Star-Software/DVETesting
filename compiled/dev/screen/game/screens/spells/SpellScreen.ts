import { CSM } from "../../state/Core/CoreStateMachine.js";
import { ElementTree, ElementTreeData } from "ds-element-tree";
import { Screen } from "../../../elements/Screen.js";
import { PickList, PickListData } from "../../../elements/PickList/PickList.js";

const [element, setState] = PickList();
export const SpellsScreen = (): ElementTreeData => {
  return Screen("spells", "none", true, element);
};

CSM.addToStateEvent("IDLE", "ENTER_SCREEN", (args) => {
  if (args.screen == "spells") {
  }
});

(window as any).con = ElementTree.controller;
