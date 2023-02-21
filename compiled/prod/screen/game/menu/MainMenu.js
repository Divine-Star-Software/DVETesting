import { DSLogo } from "../../elements/DSLogo/DSLogo.js";
import { div } from "../../elements/BaseElements.js";
import "./Menu.css";
import { menuButton, mainScreenSection, subMenuButton, } from "./MenuElements.js";
export const MainMenu = () => {
    return div("main-menu", [
        div("menu-title", [
            div("menu-ds-logo-container", DSLogo("ds-menu-logo", 50, 50)),
        ]),
        menuButton("Spells", "spells", "none"),
        menuButton("Inventory", "inventory", "templates"),
        mainScreenSection("inventory", [
            subMenuButton("Templates", "templates"),
            subMenuButton("Spell Runes", "spell-runes"),
        ]),
        menuButton("Stats", "stats", "none"),
        menuButton("Settings", "settings", "video"),
        mainScreenSection("settings", [
            subMenuButton("Video", "video"),
            subMenuButton("Audio", "audio"),
            subMenuButton("Controlls", "controls"),
        ]),
    ]);
};
