import { CreateState } from "crystalline-state";
import { ScreenManager } from "./ScreenManager";

export const [SCREEN_STATE_EVENTS, SCREEN_STATE] = CreateState({
  screen: "",
  screenMode: "",
});
SCREEN_STATE_EVENTS("screen", "change", async (old, newValue) => {
  const mode = ScreenManager.screens.getScreenMode(newValue);
  if (!mode) return false;

  if (SCREEN_STATE.screenMode != mode) {
    await ScreenManager.screenModes.render(mode);
  }
  await ScreenManager.screens.render(SCREEN_STATE.screen);
  SCREEN_STATE.screenMode = mode;
});
SCREEN_STATE_EVENTS("screenMode", "change", async (oldMode, newMode) => {
  await ScreenManager.screenModes.render(newMode);
});
