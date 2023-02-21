import { DVER } from "divine-voxel-engine/Render";
import { ParticleSystem } from "@babylonjs/core/Particles/particleSystem";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Animation } from "@babylonjs/core/Animations/animation";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
export const SpellParticles = {
    startMat: {},
    particle: {},
    sphere: {},
    $INIT(scene) {
        this.startMat = new StandardMaterial("", scene);
        this.startMat.diffuseColor = new Color3(0, 1, 1);
        this.startMat.alpha = 0.8;
        this.sphere = MeshBuilder.CreateSphere("box", { diameter: 1 });
        this.sphere.isPickable = false;
        this.startMat.emissiveColor = new Color3(0, 1, 1);
        this.sphere.checkCollisions = false;
        this.sphere.isVisible = false;
        // Create a particle system
        const particleSystem = new ParticleSystem("particles", 2000, scene);
        //Texture of each particle
        const texture = new Texture("assets/particles/spell1.png", scene, false, false, Texture.NEAREST_SAMPLINGMODE, () => {
            texture.hasAlpha = true;
            texture.updateSamplingMode(Texture.NEAREST_SAMPLINGMODE);
        });
        particleSystem.particleTexture = texture;
        texture.hasAlpha = true;
        // Position where the particles are emiited from
        particleSystem.color1 = new Color4(0, 1, 1, 0.6);
        particleSystem.color2 = new Color4(0, 0.6, 0.6, 0.4);
        particleSystem.colorDead = new Color4(0, 1, 1, 0);
        particleSystem.maxScaleX = 0.1;
        particleSystem.maxScaleY = 0.1;
        particleSystem.minScaleX = 0.05;
        particleSystem.minScaleY = 0.05;
        particleSystem.isLocal = true;
        particleSystem.emitRate = 100;
        particleSystem.minLifeTime = 1000;
        // particleSystem.blendMode = ParticleSystem.BLENDMODE_ONEONE;
        // Set the gravity of all particles
        particleSystem.gravity = new Vector3(0, -10, 0);
        // Direction of each particle after it has been emitted
        particleSystem.direction1 = new Vector3(-1, 4, 1);
        particleSystem.direction2 = new Vector3(1, 4, -1);
        // Angular speed, in radians
        particleSystem.minAngularSpeed = 0;
        particleSystem.maxAngularSpeed = Math.PI;
        // Speed
        particleSystem.minEmitPower = 0;
        particleSystem.maxEmitPower = 0;
        particleSystem.updateSpeed = 0.005;
        this.particle = particleSystem;
    },
    _addColor4Animation(property, start, end, color = false) {
        const startFrame = 0;
        const endFrame = 5;
        const frameRate = 20;
        const rSlode = new Animation("xSlide", `${property}.r`, frameRate, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
        const gSlide = new Animation("xSlide", `${property}.g`, frameRate, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
        const bSlide = new Animation("xSlide", `${property}.b`, frameRate, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
        const aSlide = new Animation("aSlide", `${property}.a`, frameRate, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
        rSlode.setKeys([
            {
                frame: startFrame,
                value: start.r,
            },
            {
                frame: endFrame,
                value: end.r,
            },
        ]);
        gSlide.setKeys([
            {
                frame: startFrame,
                value: start.g,
            },
            {
                frame: endFrame,
                value: end.g,
            },
        ]);
        bSlide.setKeys([
            {
                frame: startFrame,
                value: start.b,
            },
            {
                frame: endFrame,
                value: end.b,
            },
        ]);
        aSlide.setKeys([
            {
                frame: startFrame,
                value: start.a,
            },
            {
                frame: endFrame,
                value: end.a,
            },
        ]);
        return [rSlode, gSlide, bSlide, aSlide];
    },
    _addVec3Animation(property, start, end, color = false) {
        const startFrame = 0;
        const endFrame = 5;
        const frameRate = 20;
        const xSlide = new Animation("xSlide", `${property}.x`, frameRate, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
        const ySlide = new Animation("xSlide", `${property}.y`, frameRate, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
        const zSlide = new Animation("xSlide", `${property}.z`, frameRate, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
        xSlide.setKeys([
            {
                frame: startFrame,
                value: start[0],
            },
            {
                frame: endFrame,
                value: end[0],
            },
        ]);
        ySlide.setKeys([
            {
                frame: startFrame,
                value: start[1],
            },
            {
                frame: endFrame,
                value: end[1],
            },
        ]);
        zSlide.setKeys([
            {
                frame: startFrame,
                value: start[2],
            },
            {
                frame: endFrame,
                value: end[2],
            },
        ]);
        return [xSlide, ySlide, zSlide];
    },
    _addFadeOutAnimation(start, end) {
        const startFrame = 0;
        const endFrame = 5;
        const frameRate = 20;
        const visibility = new Animation("visibility", `visibility`, frameRate, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
        visibility.setKeys([
            {
                frame: startFrame,
                value: start,
            },
            {
                frame: endFrame,
                value: end,
            },
        ]);
        return visibility;
    },
    _getOrb() {
        const scene = DVER.render.scene;
        const orb = this.sphere.clone("");
        orb.isPickable = false;
        orb.checkCollisions = false;
        const node = new TransformNode("", scene);
        node.parent = DVER.render.fo.activeNode;
        orb.parent = node;
        orb.visibility = 0.6;
        orb.scaling.setAll(0.1);
        orb.material = this.startMat;
        return { orb, node };
    },
    _getParticles(node) {
        return this.particle.clone("", node);
    },
    async orbPop(location) {
        const scene = DVER.render.scene;
        const { orb, node } = this._getOrb();
        node.position.x = location[0];
        node.position.y = location[1];
        node.position.z = location[2];
        const particles = this._getParticles(node);
        const startFrame = 0;
        const endFrame = 5;
        particles.start();
        orb.animations = [];
        orb.animations.push(...this._addVec3Animation("scaling", [0.1, 0.1, 0.1], [3, 3, 3]));
        orb.animations.push(this._addFadeOutAnimation(0.6, 0));
        const grow = scene.beginAnimation(orb, startFrame, endFrame, false);
        orb.isVisible = true;
        await grow.waitAsync();
        setTimeout(() => {
            particles.stop();
            setTimeout(() => {
                node.dispose();
                orb.dispose();
                particles.dispose();
            }, 5_000);
        }, 1_000);
    },
    async summonFromTo(start, end, onDone) {
        const scene = DVER.render.scene;
        const { orb, node } = this._getOrb();
        orb.isVisible = true;
        const startFrame = 0;
        const endFrame = 5;
        node.animations.push(...this._addVec3Animation("position", start, end));
        //forward animation
        const move = scene.beginAnimation(node, startFrame, endFrame, false);
        await move.waitAsync();
        onDone();
        node.dispose();
        orb.dispose();
    },
};
