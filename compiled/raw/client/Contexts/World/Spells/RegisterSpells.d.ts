export declare function RegisterSpells(): {
    spells: Record<string, import("@core/types/Spells/Spell.types.js").SpellData<any>>;
    registerSpell(data: import("@core/types/Spells/Spell.types.js").SpellData<any>): void;
    castSpell<T>(id: string, data: T): Promise<any> | undefined;
};
