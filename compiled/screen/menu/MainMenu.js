import { DSLogo } from "../Components/DSLogo/DSLogo.js";
import { div, Component } from "elmtree";
import "./Menu.css";
import { MenuManager } from "./MenuManager";
const [component, setState] = Component();
MenuManager.__updateMenu = setState;
export const MainMenu = () => {
    return div("main-menu", [
        div("menu-title", [
            div("menu-ds-logo-container", DSLogo("ds-menu-logo", 50, 50)),
        ]),
        component,
    ]);
};
