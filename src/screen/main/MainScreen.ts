import { ElementTree, ElementTreeData } from  "ds-element-tree";
import { div, title } from "../elements/BaseElements";
import { DSLogo } from "../elements/DSLogo/DSLogo";
import "./main.css";

const cascaeProps = {
  done: false,
};
const [cascade] = ElementTree.cascade(cascaeProps);
export const MainScreen = (): ElementTreeData => {
  return [
    div("main-screen-background", []),
    div("main-screen", [
      title("h1", "DREAM SPACE INFINITE", "dsg-intro-title"),
    ]),
  ];
};
