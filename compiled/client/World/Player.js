export const DVEWorldPlayer = {
    player: {},
    dimension: "main",
    manager: {},
    $INIT(player) {
        this.manager = player.manager;
        this.player = player;
    },
};
