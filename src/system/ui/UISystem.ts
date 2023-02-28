export const UISystem = {
  update: <Function>{},

  setShowfunction(update: Function) {
    this.update = update;
  },

  show(show : boolean) {
    this.update(show);
  },
};
