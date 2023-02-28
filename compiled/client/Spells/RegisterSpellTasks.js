import { DVER } from "divine-voxel-engine/Render";
import { SpellParticles } from "./SpellParticles.js";
export function $RegisterSpellTasks() {
    DVER.TC.registerTasks("spell-particles", (data, onDone) => {
        const id = data[0];
        if (id == "summon-orb") {
            SpellParticles.summonFromTo(data[1], data[2], () => {
                if (onDone)
                    onDone();
            });
        }
        if (id == "orb-pop") {
            SpellParticles.orbPop(data[1]);
            if (onDone)
                onDone();
        }
    }, "deffered");
}
