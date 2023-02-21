import { DVER } from "divine-voxel-engine/Render";

import { $RegisterTexutres } from "@assets/RegisterTextures.js";
import { $ReigsterSounds } from "@assets/RegisterSounds.js";
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
import { $initAudio } from "@audio/InitAudio.js";
//  "./Contexts/DataLoader/dataloader.js",
export async function $INIT_DVER() {
  const workers = $INITWorkers();

  /*   DVER.render.shaders.builder.snippets.override("#dve_solid_vertex", {
    GLSL: `@#dve_liquid_vertex`,
  }); */
  DVER.render.shaders.builder.snippets.override("#dve_liquid_frag", {
    id: "#dve_liquid_frag",
    arguments: {},
    body: {
      GLSL: () => `
  vec4 rgb = getBaseColor(vec2(0.,time * -4. * vFlow));
  rgb = getColor(rgb);
  
  //TODO
  //Water effect breaks down 100_000+ meters out need to rollover effect 
  vec3 noisePOS = vec3(worldPOSNoOrigin.x,worldPOSNoOrigin.y,worldPOSNoOrigin.z);
  if(vFlow > 0. && vNormal.y == 0.) {
    noisePOS.y += time * 4.;
  }

  float noiseSample = fbm3(noisePOS  + time) + .8;
  vec4 fc = rgb * noiseSample;
  vec4 mixLight = getLight(fc);
  vec3 finalColor = doFog(mixLight);
  gl_FragColor = vec4(clamp(finalColor.rgb, 0.1,1.),.6);
 `,
    },
  });

  await $RegisterTexutres();
  await $initAudio(await $ReigsterSounds());

  await DVER.$INIT({
    worldWorker: workers.worldWorker,
    constructorWorker: workers.constructorWorkers,
    nexusWorker: workers.nexusWorker,
    richWorldWorker: workers.richWorldWorker,
    richWorld: {
      enabled: true,
      autoSyncChunks: true,
    },
    nexus: {
      enabled: true,
      autoSyncVoxelPalette: true,
      autoSyncChunks: true,
    },
    world: {
      minX: -2_000_000_000,
      maxX: 2_000_000_000,
      minZ: -2_000_000_000,
      maxZ: 2_000_000_000,
      minY: 0,
      maxY: 256,
    },
    meshes: {
      clearChachedGeometry: true,
    },
  });
  // await $INITDataLoader(DVER);
  const { scene, camera } = await $INITRender();

  const model = MeshBuilder.CreateBox("box", {
    width: 0.8,
    height: 0.8,
    depth: 0.8,
  });

  const player = await INIT_RENDER_PLAYER(
    scene,
    camera,
    DVER,
    {
      CreateBox,
      EdgesRenderer,
      StandardMaterial,
    },
    model
  );

  player.controls.mouse.left.down.add(() => {
    DVER.worldComm.runTasks("place", "dve_dreadstone");
  });
  player.controls.mouse.right.down.add(() => {
    DVER.worldComm.runTasks("break", []);
  });
}

async function $INITRender() {
  const canvas = document.createElement("canvas");
  canvas.id = "renderCanvas";
  document.body.append(canvas);

  window.addEventListener("click", function () {
    canvas.requestPointerLock();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
      document.exitPointerLock();
    }
  });

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
    scene: scene as any,
    system: {
      Scene,
      Engine,
      RawTexture2DArray,
      Texture,
      Vector3,
      Vector4,
      UniversalCamera,
      TransformNode,
      ShaderMaterial,
      Mesh,
      BoundingBox,
      BoundingInfo,
      VertexData,
      Effect,
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
  DVER.render.skyBoxMaterial.createMaterial(scene as any);
  const bmat = DVER.render.skyBoxMaterial.material!;
  if (bmat) {
    (skybox as any).material = bmat;
  }

  DVER.render.setBaseLevel(0.05);
  DVER.render.setSunLevel(0.5);
  DVER.render.updateFogOptions({
    color: new Color3(0, 0.4, 0.5),
  });
  DVER.render.updateFogOptions({
    mode: "volumetric",
    density: 0.0005,
  });

  DVER.render.updateShaderEffectOptions({
    floraEffects: true,
    liquidEffects: true,
  });

  engine.runRenderLoop(() => {
    scene.render();
  });

  return { scene, camera };
}

const $INITWorkers = () => {
  const worldWorker = new Worker(
    new URL("../Contexts/World/world.js", import.meta.url),
    {
      type: "module",
    }
  );

  const constructorWorkers: Worker[] = [];

  for (let i = 0; i < navigator.hardwareConcurrency - 2; i++) {
    constructorWorkers.push(
      new Worker(
        new URL("../Contexts/Constructor/Constructor.js", import.meta.url),
        {
          type: "module",
        }
      )
    );
  }

  const nexusWorker = new Worker(
    new URL("../Contexts/Nexus/nexus.js", import.meta.url),
    {
      type: "module",
    }
  );

  const dataWorker = new Worker(
    new URL(
      "../../environments/electron/client/dataloader.js",
      import.meta.url
    ),
    {
      type: "module",
    }
  );

  /*   

  let fxWorker = null;
  if (fxPath) {
    fxWorker = new Worker(new URL(fxPath, basePath), {
      type: "module",
    });
  }
 */

  const richWorldWorker = new Worker(
    new URL("../Contexts/RichWorld/richworld.js", import.meta.url),
    {
      type: "module",
    }
  );

  return {
    worldWorker: worldWorker,
    constructorWorkers: constructorWorkers,
    nexusWorker: nexusWorker,
    dataWorker: dataWorker,
    richWorldWorker: richWorldWorker,
  };
};
