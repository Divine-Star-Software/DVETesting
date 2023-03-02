export const UISystem = {
    update: {},
    setShowfunction(update) {
        this.update = update;
    },
    show(show) {
        this.update(show);
    },
};
