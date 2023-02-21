import { WorldPlayer } from "dve-plugins-player/World";
export declare const ECDWorldPlayer: {
    player: WorldPlayer;
    dimension: string;
    manager: {
        currentDimension: string;
        physics: import("dve-plugins-player/Data").PlayerPhysicsData;
        stats: import("dve-plugins-player/Data").PlayerStatsData;
        $INIt(data: any[]): void;
    };
    $INIT(player: WorldPlayer): void;
};
