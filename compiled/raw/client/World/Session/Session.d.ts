import { WorldPlayer } from "dve-plugins-player/World/";
export declare const GameSession: {
    player: WorldPlayer;
    preLoad(): Promise<void>;
    startSession(): void;
    endSession(): void;
};
