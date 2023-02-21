import { DVER } from "divine-voxel-engine/Render";
import { PlayerManager } from "dve-plugins-player/Data";
import { StarCommander } from "starcom";
export function RegisterCommands() {
    const commands = StarCommander.commands;
    commands.registerCommand({
        id: "position",
        arguments: false,
        run(onDone, io, args) {
            const p1 = args.input.trim().split(" ");
            console.log(p1);
            if (p1.length < 3) {
                io.error(`Inavlid input: ${args.input}`);
                return onDone();
            }
            let position = [];
            for (let i = 0; i < 3; i++) {
                position[i] = parseFloat(p1[i]);
                if (Number.isNaN(position[i])) {
                    io.error(`Inavlid input: ${args.input}`);
                    return onDone();
                }
            }
            DVER.nexusComm.sendMessage("set-player-position", [
                position[0],
                position[1],
                position[2],
            ]);
        },
    });
    commands.registerCommand({
        id: "fog",
        arguments: false,
        run(onDone, io, args) {
            const value = Number(args.input.trim());
            if (value) {
                DVER.render.updateFogOptions({
                    density: value,
                });
            }
        },
    });
    commands.registerCommand({
        id: "stats",
        arguments: [
            {
                fullId: "stat",
                shortId: "s",
                type: "string",
                note: "Set the player stat id.",
                required: false,
            },
            {
                fullId: "value",
                shortId: "v",
                type: "number",
                note: "Set the player stat value.",
                required: false,
            },
        ],
        run(onDone, io, args) {
            const stats = PlayerManager.stats;
            if (Object.keys(args).length == 0) {
                const log = `level : ${stats.level} 
exp : ${stats.exp}           
current mana : ${stats.currentMana}    
max mana : ${stats.maxMana}    
current energy : ${stats.currentEnergy}    
max energy : ${stats.maxEnegery}    
speed : ${stats.speed}
jump power ${stats.jumpPower}
intution : ${stats.intuition}`;
                io.displayText(log);
                return onDone();
            }
            const stat = args.stat.trim();
            const value = parseInt(args.value);
            if (!stat || !Number.isInteger(value)) {
                io.error("Wrong data provided.");
                return onDone();
            }
            let statSet = false;
            if (stat == "level") {
                stats.level = value;
                statSet = true;
            }
            if (stat == "exp") {
                stats.exp = value;
                statSet = true;
            }
            if (stat == "currentMana") {
                stats.currentMana = value;
                statSet = true;
            }
            if (stat == "maxMana") {
                stats.maxMana = value;
                statSet = true;
            }
            if (stat == "currentEnergy") {
                stats.currentEnergy = value;
                statSet = true;
            }
            if (stat == "maxEnegery") {
                stats.maxEnegery = value;
                statSet = true;
            }
            if (stat == "speed") {
                stats.speed = value;
                statSet = true;
            }
            if (stat == "jumpPower") {
                stats.jumpPower = value;
                statSet = true;
            }
            if (stat == "intuition") {
                stats.intuition = value;
                statSet = true;
            }
            if (statSet) {
                io.displayText(`${stat} has been set`);
                return onDone();
            }
            io.error(`${stat} does not exist`);
            return onDone();
        },
    });
    commands.registerCommand({
        id: "debug",
        arguments: false,
        run(onDone, io, args) {
            const scene = DVER.render.scene;
            if (!scene) {
                io.error("No scene");
                return;
            }
            const engine = scene.getEngine();
            const spaces = DVER.data.spaces;
            const inte = setInterval(() => {
                io.clear();
                io.displayText(engine.getFps().toFixed() + " fps");
                const { x, y, z } = PlayerManager.physics.position;
                io.displayText(`position: ${x.toFixed(2)} ${y.toFixed(2)} ${z.toFixed(2)}`);
                io.displayText(`chunk: ${spaces.chunk.getKeyXYZ(x, y, z)}`);
                io.displayText(`column: ${spaces.column.getKeyXYZ(x, y, z)}`);
                io.displayText(`region: ${spaces.column.getKeyXYZ(x, y, z)}`);
            }, 10);
            const listener = (event) => {
                if (event.key != "Escape" && event.key != "F3")
                    return;
                clearInterval(inte);
                document.removeEventListener("keydown", listener);
                onDone();
            };
            document.addEventListener("keydown", listener);
        },
    });
}
