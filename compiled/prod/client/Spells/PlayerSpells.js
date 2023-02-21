export const PlayerSpells = {
    currentSpell: "#ecd_place_crystalbox",
    currentData: [],
    spells: [
        {
            id: "#ecd_place_crystalbox",
            name: "Place Crystal",
        },
        {
            id: "#ecd_break",
            name: "Break",
        },
        {
            id: "#ecd_cast_line",
            name: "Cast Line",
        },
        {
            id: "#ecd_explode_line",
            name: "Explode Line",
        },
    ],
    setSpell(spell) {
        this.currentSpell = spell;
    },
    getCurrentSpell() {
        return this.currentSpell;
    },
};
