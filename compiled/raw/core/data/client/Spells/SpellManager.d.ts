import type { SpellData } from "@core/types/Spells/Spell.types";
export declare const SpellManaager: {
    spells: Record<string, SpellData<any>>;
    registerSpell(data: SpellData<any>): void;
    castSpell<T>(id: string, data: T): Promise<any> | undefined;
};
