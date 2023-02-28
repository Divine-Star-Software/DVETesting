import { $INIT_APPSTATE, APP_STATE } from "./State/AppState";
import { DVER } from "divine-voxel-engine/Render";
import { INIT_DVER } from "./Render/InitDVER.js";
import { $InitCommands } from "@commands/InitCommands";
import { InitScreens } from "@screen/index";
import { DVEENV } from "@data/ENV/DVEENV";
import { AppDataBase } from "@databases/App/AppDataBase";
import { ZeneithDB } from "zeneithdb";
import { initAudio } from "@audio/InitAudio.js";
import { SetUpControls } from "./Controls/SetUpControls";
import { RegisterTexutres, RegisterSounds } from "@assets/index";
(async function () {
  const ASM = $INIT_APPSTATE();
  await ASM.triggerEvent("INIT", "LOAD_DATA");

  await DVEENV.$INIT();
  console.log(`[DVE Testing: ${DVEENV.data.version}]`);
  console.log(DVEENV.data);


  await ZeneithDB.$INIT();
  await AppDataBase.$INIT();

  const worldWorker = new Worker(new URL("./World/world.js", import.meta.url), {
    type: "module",
  });

  const constructorWorkers: Worker[] = [];

  for (let i = 0; i < navigator.hardwareConcurrency - 2; i++) {
    constructorWorkers.push(
      new Worker(new URL("./Constructor/constructor.js", import.meta.url), {
        type: "module",
      })
    );
  }

  const nexusWorker = new Worker(new URL("./Nexus/nexus.js", import.meta.url), {
    type: "module",
  });

  const dataWorker = new Worker(
    new URL("../environments/electron/client/dataloader.js", import.meta.url),
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
    new URL("./RichWorld/richworld.js", import.meta.url),
    {
      type: "module",
    }
  );


  /*
Register Textures
  */

  await RegisterTexutres();
  await initAudio(await RegisterSounds());

  await DVER.$INIT({
    worldWorker: worldWorker,
    constructorWorker: constructorWorkers,
    nexusWorker: nexusWorker,
    richWorldWorker: richWorldWorker,
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

  await $InitCommands();
  await InitScreens();

  await INIT_DVER();
  SetUpControls();

  ASM.triggerEvent("INIT", "START");

  await DVER.worldComm.waitTillTasksExist("start-world");

  if (DVEENV.data.mode == "dev") {
    APP_STATE.world = DVEENV.data.start.world;
  }
})();
