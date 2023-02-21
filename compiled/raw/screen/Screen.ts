import "./core.css";
import { DVER } from "divine-voxel-engine/Render";
import { ElementTree } from "ds-element-tree";
import { GameScreen } from "./game/index";
import { IntroScreen } from "./intro/IntroScreen";
import { MainScreen } from "./main/MainScreen";
import { DVEDENV } from "@core/data/ENV/DVEENV";
import { DAE } from "divine-audio-engine";
export function $InitScreens() {
  if (DVEDENV.data.mode == "dev") {
    ElementTree.bloomRoot([GameScreen(DVER)]);
  }
  if (DVEDENV.data.mode == "prod") {
    ElementTree.bloomRoot([IntroScreen(), MainScreen(), GameScreen(DVER)]);
    DAE.sfx.play("ds_intro");
  }
}
