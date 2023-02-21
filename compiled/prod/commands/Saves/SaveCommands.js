import { StarCommander } from "starcom";
export function RegisterSaveCommands() {
    const commands = StarCommander.commands;
    commands.registerCommand({
        id: "saves",
        arguments: false,
        run(onDone, io, args) { },
    });
}
