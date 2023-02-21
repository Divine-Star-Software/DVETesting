import { ElementTree } from "ds-element-tree";
import { div, title } from "../elements/BaseElements";
import "./main.css";
const cascaeProps = {
    done: false,
};
const [cascade] = ElementTree.cascade(cascaeProps);
export const MainScreen = () => {
    return [
        div("main-screen-background", []),
        div("main-screen", [
            title("h1", "DREAM SPACE INFINITE", "dsg-intro-title"),
        ]),
    ];
};
