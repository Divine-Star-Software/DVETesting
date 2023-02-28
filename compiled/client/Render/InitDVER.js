import { DVER } from "divine-voxel-engine/Render";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import "@babylonjs/core/Animations/animatable";
import "@babylonjs/core/Materials/standardMaterial";
import { RawTexture2DArray } from "@babylonjs/core/Materials/Textures/rawTexture2DArray.js";
import { Texture } from "@babylonjs/core/Materials/Textures/texture.js";
import { Scene } from "@babylonjs/core/scene.js";
import { Engine } from "@babylonjs/core/Engines/engine.js";
import { Vector3, Vector4 } from "@babylonjs/core/Maths/math.vector.js";
import { Color3 } from "@babylonjs/core/Maths/math.color.js";
import { Effect } from "@babylonjs/core/Materials/effect.js";
import { Mesh } from "@babylonjs/core/Meshes/mesh.js";
import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera.js";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode.js";
import { ShaderMaterial } from "@babylonjs/core/Materials/shaderMaterial.js";
import { BoundingBox } from "@babylonjs/core/Culling/boundingBox.js";
import { BoundingInfo } from "@babylonjs/core/Culling/boundingInfo.js";
import { VertexData } from "@babylonjs/core/Meshes/mesh.vertexData.js";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder.js";
import { EdgesRenderer } from "@babylonjs/core/Rendering/edgesRenderer.js";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial.js";
import { INIT_RENDER_PLAYER } from "dve-plugins-player/Render/";
import { RenderSystem } from "../../system/render/RenderSystem";
import { PlayerActions } from "../Player/PlayerActions";
import { PlayerAudio } from "../Player/PlayerAuio";
//  "./Contexts/DataLoader/dataloader.js",
export async function INIT_DVER() {
    // await $INITDataLoader(DVER);
    const canvas = RenderSystem.createRenderCanvas();
    let antialias = false;
    const engine = new Engine(canvas, antialias, {
        useHighPrecisionMatrix: false,
        useHighPrecisionFloats: false,
    });
    engine.doNotHandleContextLost = true;
    engine.enableOfflineSupport = false;
    engine.getCaps().highPrecisionShaderSupported = false;
    engine.setSize(1920, 1080);
    engine.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", function () {
        engine.resize();
    });
    const scene = new Scene(engine);
    await DVER.$SCENEINIT({
        scene: scene,
        system: {
            //@ts-ignore
            Scene,
            //@ts-ignore
            Engine,
            //@ts-ignore
            RawTexture2DArray,
            //@ts-ignore
            Texture,
            //@ts-ignore
            Vector3,
            //@ts-ignore
            Vector4,
            //@ts-ignore
            UniversalCamera,
            //@ts-ignore
            TransformNode,
            //@ts-ignore
            ShaderMaterial,
            //@ts-ignore
            Mesh,
            //@ts-ignore
            BoundingBox,
            //@ts-ignore
            BoundingInfo,
            //@ts-ignore
            VertexData,
            //@ts-ignore
            Effect,
            //@ts-ignore
            Color3,
        },
    });
    scene.fogEnabled = true;
    scene.autoClear = false;
    scene.autoClearDepthAndStencil = false;
    scene.skipPointerMovePicking = true;
    scene.constantlyUpdateMeshUnderPointer = false;
    const camera = new UniversalCamera("", Vector3.Zero());
    camera.touchAngularSensibility = 10000;
    camera.speed = 1;
    camera.maxZ = 1000;
    camera.fov = 1.2;
    camera.attachControl(canvas, true);
    scene.activeCamera = camera;
    scene.collisionsEnabled = false;
    camera.inertia = 0.2;
    const hemLight = new HemisphericLight("", new Vector3(0, 1, 0), scene);
    const skybox = MeshBuilder.CreateBox("skyBox", { size: 800.0 }, scene);
    skybox.infiniteDistance = true;
    DVER.render.skyBoxMaterial.createMaterial(scene);
    const bmat = DVER.render.skyBoxMaterial.material;
    if (bmat) {
        skybox.material = bmat;
    }
    const sceneTool = DVER.getSceneTool();
    sceneTool.levels
        .setSun(0.8)
        .levels.setBase(0.1)
        .fog.setColor(0.6)
        .fog.setMode("volumetric")
        .fog.setDensity(0.0005);
    DVER.render.updateShaderEffectOptions({
        floraEffects: true,
        liquidEffects: true,
    });
    engine.runRenderLoop(() => {
        scene.render();
    });
    const model = MeshBuilder.CreateBox("box", {
        width: 0.8,
        height: 0.8,
        depth: 0.8,
    });
    const player = await INIT_RENDER_PLAYER(
    //@ts-ignore
    scene, camera, DVER, {
        CreateBox,
        EdgesRenderer,
        StandardMaterial,
    }, model);
    player.controls.mouse.left.down.add(() => {
        PlayerActions.voxel.place();
    });
    player.controls.mouse.right.down.add(() => {
        PlayerActions.voxel.break();
    });
    PlayerAudio.INIT(player);
}
