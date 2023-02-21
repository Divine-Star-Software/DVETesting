import type { ElementTreeData } from "ds-element-tree";

import { div, title } from "../../../elements/BaseElements.js";
import { DSLogo } from "../../../elements/DSLogo/DSLogo.js";

import { Screen } from "../../../elements/Screen.js";

export const HomeScreen = (): ElementTreeData => {
  return Screen("home", "none", true, [
    div("ds-logo-container", DSLogo("ds-logo")),
    title("h1", "Divine Voxel Engine Tool Set", "ds-title"),
  ]);
};
