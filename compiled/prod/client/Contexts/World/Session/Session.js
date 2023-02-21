import { SimulationLoop } from "simloop";
export const GameSession = {
    player: {},
    startSession() {
        const position = [];
        SimulationLoop.registerInterval(0);
        SimulationLoop.addToInterval(0, () => {
            this.player.update();
        });
        SimulationLoop.run();
    },
    endSession() { },
};
