import { RegisterCommands } from "./RegisterCommands";
import { StarCommander } from "starcom";

export function $InitCommands() {
  RegisterCommands();
  StarCommander.$INIT();
}
