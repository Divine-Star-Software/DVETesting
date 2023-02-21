import { DVEW } from "divine-voxel-engine/World";
export const SpellParticlesWorld = {
    createParticles(data) {
        DVEW.parentComm.runTasks("spell-particles", data);
    },
};
