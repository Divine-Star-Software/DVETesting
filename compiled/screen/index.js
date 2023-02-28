export * from "./ScreenManager.js";
export * from "./ScreenState.js";
import "./core.css";
import "./Forms.css";
import { ScreenManager } from "./ScreenManager";
import { SettingsScreens } from "./settings/SettingsScreens";
import { RegisterScreenModes } from "./modes/RegisterScreenModes.js";
import { GameScreens } from "./game/index.js";
export async function InitScreens() {
    RegisterScreenModes();
    GameScreens();
    SettingsScreens();
    await ScreenManager.$INIT();
}
