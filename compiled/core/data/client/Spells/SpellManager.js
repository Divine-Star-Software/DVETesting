export const SpellManaager = {
    spells: {},
    registerSpell(data) {
        this.spells[data.id] = data;
    },
    castSpell(id, data) {
        const spell = this.spells[id];
        if (!spell)
            return;
        return spell.cast(data);
    }
};
