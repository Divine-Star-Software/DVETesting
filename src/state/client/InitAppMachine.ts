import { SetUpAppEvents } from "./Events/App/AppEvents";

export function $INIT_APPSTATE() {
  const appState = SetUpAppEvents();
  appState.triggerEventOnState("INIT", "LOAD_DATA", null);
}
