import type { Vec3Array } from "./Util.types";
export type CastSpellTask = [id: string, data: any];
export type SpellParticleTypes = [id: "summon-orb", start: Vec3Array, end: Vec3Array] | [id: "orb-pop", location: Vec3Array];
