type PlayerStats = {
    level: number;
    maxEnergy: number;
    maxMana: number;
    speed: number;
    jumpPower: number;
    intuition: number;
};
type PlayerData = {
    exp: number;
    stats: PlayerStats;
    spells: string[];
};
