import { ParticleSystem } from "@babylonjs/core/Particles/particleSystem";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Animation } from "@babylonjs/core/Animations/animation";
import { Scene } from "@babylonjs/core/scene";
import { Color4 } from "@babylonjs/core/Maths/math.color";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Vec3Array } from "Types/Util.types";
export declare const SpellParticles: {
    startMat: StandardMaterial;
    particle: ParticleSystem;
    sphere: Mesh;
    $INIT(scene: Scene): void;
    _addColor4Animation(property: string, start: Color4, end: Color4, color?: boolean): Animation[];
    _addVec3Animation(property: string, start: Vec3Array, end: Vec3Array, color?: boolean): Animation[];
    _addFadeOutAnimation(start: number, end: number): Animation;
    _getOrb(): {
        orb: Mesh;
        node: TransformNode;
    };
    _getParticles(node: TransformNode): ParticleSystem;
    orbPop(location: Vec3Array): Promise<void>;
    summonFromTo(start: Vec3Array, end: Vec3Array, onDone: Function): Promise<void>;
};
