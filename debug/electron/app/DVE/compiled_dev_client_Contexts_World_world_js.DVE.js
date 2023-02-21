/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compiled/dev/client/Contexts/World/Gen/WorldGen.js":
/*!************************************************************!*\
  !*** ./compiled/dev/client/Contexts/World/Gen/WorldGen.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldGen": () => (/* binding */ WorldGen)
/* harmony export */ });
/* harmony import */ var divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/World */ "../../DSLIBS/divineVoxelEngine/dist/World/index.js");

const brush = divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.getBrush();
const WorldGen = {
    chunkDepth: 16,
    chunkWidth: 16,
    worldHeight: 256,
    minY: 60,
    generateHoleChunk(chunkX, chunkZ) {
        let rx = 0;
        for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
            let rz = 0;
            for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
                for (let y = 0; y < this.worldHeight; y++) {
                    if (rx == 0 || rz == 0 || rx == 15 || rz == 15) {
                        if (y > this.minY)
                            break;
                        if (y == this.minY) {
                            brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                            if (Math.random() > 0.8) {
                                brush
                                    .setId("dve_dreadgrass")
                                    .setXYZ(x, y + 1, z)
                                    .paint();
                            }
                        }
                    }
                    if (rx == 1 || rz == 1 || rx == 14 || rz == 14) {
                        if (y == this.minY - 1) {
                            brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                            if (Math.random() > 0.8) {
                                brush
                                    .setId("dve_dreadgrass")
                                    .setXYZ(x, y + 1, z)
                                    .paint();
                            }
                        }
                    }
                    if (rx == 2 || rz == 2 || rx == 13 || rz == 13) {
                        if (y == this.minY - 2) {
                            brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                            if (Math.random() > 0.8) {
                                brush
                                    .setId("dve_dreadgrass")
                                    .setXYZ(x, y + 1, z)
                                    .paint();
                            }
                        }
                    }
                    if (rx == 3 || rz == 3 || rx == 12 || rz == 12) {
                        if (y == this.minY - 3) {
                            brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                            if (Math.random() > 0.8) {
                                brush
                                    .setId("dve_dreadgrass")
                                    .setXYZ(x, y + 1, z)
                                    .paint();
                            }
                        }
                    }
                    if (rx == 4 || rz == 4 || rx == 11 || rz == 11) {
                        if (y == this.minY - 4) {
                            brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                            if (Math.random() > 0.8) {
                                brush
                                    .setId("dve_dreadgrass")
                                    .setXYZ(x, y + 1, z)
                                    .paint();
                            }
                        }
                    }
                    if (rx == 5 || rz == 5 || rx == 10 || rz == 10) {
                        if (y == this.minY - 5) {
                            brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                            if (Math.random() > 0.8) {
                                brush
                                    .setId("dve_dreadgrass")
                                    .setXYZ(x, y + 1, z)
                                    .paint();
                            }
                        }
                    }
                    if (rx == 6 || rz == 6 || rx == 9 || rz == 9) {
                        if (y == this.minY - 6) {
                            brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                            if (Math.random() > 0.8) {
                                brush
                                    .setId("dve_dreadgrass")
                                    .setXYZ(x, y + 1, z)
                                    .paint();
                            }
                        }
                    }
                    if (y < this.minY - 7) {
                        brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                        if (Math.random() > 0.8) {
                            brush
                                .setId("dve_dreadgrass")
                                .setXYZ(x, y + 1, z)
                                .paint();
                        }
                    }
                }
                rz++;
            }
            rx++;
        }
    },
    generateNormalChunk(chunkX, chunkZ) {
        for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
            for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
                for (let y = 0; y < this.worldHeight; y++) {
                    if (y > this.minY + 1)
                        break;
                    if (y <= this.minY) {
                        brush.setId("dve_dreadstone").setXYZ(x, y, z).paint();
                    }
                    if (y == this.minY + 1) {
                        if (Math.random() > 0.8) {
                            brush.setId("dve_dreadgrass").setXYZ(x, y, z).paint();
                        }
                    }
                }
            }
        }
    },
    //1376271
    generateRoofChunk(chunkX, chunkZ) {
        for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
            for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
                for (let y = 0; y < this.minY + 10; y++) {
                    brush.setXYZ(x, y, z);
                    if (y < this.minY - 3) {
                        brush.setId("dve_dreadstone").paint();
                    }
                    if (y == this.minY - 3 && Math.random() > 0.8) {
                        brush.setId("dve_dreadgrass").paint();
                    }
                    if (y == this.minY) {
                        brush.setId("dve_dreadstonepillar").paint();
                    }
                }
            }
        }
    },
    generateBoxChunk(chunkX, chunkZ) {
        for (let x = chunkX; x < this.chunkWidth + chunkX; x++) {
            for (let z = chunkZ; z < this.chunkDepth + chunkZ; z++) {
                for (let y = 0; y < this.minY + 10; y++) {
                    brush.setXYZ(x, y, z);
                    if (y < this.minY - 3) {
                        brush.setId("dve_dreadstone").paint();
                    }
                    if (y == this.minY - 3 && Math.random() > 0.8) {
                        brush.setId("dve_dreadgrass").paint();
                    }
                    if (y == this.minY) {
                        brush.setId("dve_dreadstonepillar").paint();
                    }
                    if (y == this.minY + 5) {
                        brush.setId("dve_dreadstonepillar").paint();
                    }
                    if (y >= this.minY &&
                        y <= this.minY + 5 &&
                        (x == chunkX || x == chunkX + 15 || z == chunkZ || z == chunkZ + 15)) {
                        brush.setId("dve_dreadstonepillar").paint();
                    }
                }
            }
        }
    },
    generateWorldColumn(chunkX, chunkZ) {
        brush.start();
        let toss = Math.random();
        if ((chunkX == 0 && chunkZ == 0) ||
            (chunkX == 0 && chunkZ == -16) ||
            (chunkX == -16 && chunkZ == -0) ||
            (chunkX == -16 && chunkZ == -16)) {
            this.generateRoofChunk(chunkX, chunkZ);
            return;
        }
        if (toss < 0.3) {
            this.generateBoxChunk(chunkX, chunkZ);
            return;
        }
        if (toss > 0.6) {
            this.generateHoleChunk(chunkX, chunkZ);
            return;
        }
        this.generateNormalChunk(chunkX, chunkZ);
        brush.stop();
    },
};


/***/ }),

/***/ "./compiled/dev/client/Contexts/World/Player.js":
/*!******************************************************!*\
  !*** ./compiled/dev/client/Contexts/World/Player.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ECDWorldPlayer": () => (/* binding */ ECDWorldPlayer)
/* harmony export */ });
const ECDWorldPlayer = {
    player: {},
    dimension: "main",
    manager: {},
    $INIT(player) {
        this.manager = player.manager;
        this.player = player;
    },
};


/***/ }),

/***/ "./compiled/dev/client/Contexts/World/Session/Session.js":
/*!***************************************************************!*\
  !*** ./compiled/dev/client/Contexts/World/Session/Session.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameSession": () => (/* binding */ GameSession)
/* harmony export */ });
/* harmony import */ var simloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simloop */ "./node_modules/simloop/index.js");

const GameSession = {
    player: {},
    startSession() {
        const position = [];
        simloop__WEBPACK_IMPORTED_MODULE_0__.SimulationLoop.registerInterval(0);
        simloop__WEBPACK_IMPORTED_MODULE_0__.SimulationLoop.addToInterval(0, () => {
            this.player.update();
        });
        simloop__WEBPACK_IMPORTED_MODULE_0__.SimulationLoop.run();
    },
    endSession() { },
};


/***/ }),

/***/ "./compiled/dev/client/Contexts/World/Tasks/AppWorldTasks.js":
/*!*******************************************************************!*\
  !*** ./compiled/dev/client/Contexts/World/Tasks/AppWorldTasks.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterAppWorldTasks": () => (/* binding */ RegisterAppWorldTasks)
/* harmony export */ });
/* harmony import */ var divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/World */ "../../DSLIBS/divineVoxelEngine/dist/World/index.js");
/* harmony import */ var _Session_Session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Session/Session */ "./compiled/dev/client/Contexts/World/Session/Session.js");


function RegisterAppWorldTasks() {
    divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.TC.registerTasks("start-world", (data) => {
    });
    divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.TC.registerTasks("end-world", (data) => {
        _Session_Session__WEBPACK_IMPORTED_MODULE_1__.GameSession.endSession();
    });
}


/***/ }),

/***/ "./compiled/dev/client/Contexts/World/world.js":
/*!*****************************************************!*\
  !*** ./compiled/dev/client/Contexts/World/world.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/World */ "../../DSLIBS/divineVoxelEngine/dist/World/index.js");
/* harmony import */ var _core_data_shared_Functions_RegisterVoxelData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/shared/Functions/RegisterVoxelData.js */ "./compiled/dev/core/data/shared/Functions/RegisterVoxelData.js");
/* harmony import */ var dve_plugins_player_World__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dve-plugins-player/World */ "../../DSLIBS/dvePlugIns/Player/dist/World/index.js");
/* harmony import */ var simloop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simloop */ "./node_modules/simloop/index.js");
/* harmony import */ var _Tasks_AppWorldTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tasks/AppWorldTasks.js */ "./compiled/dev/client/Contexts/World/Tasks/AppWorldTasks.js");
/* harmony import */ var _Session_Session_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Session/Session.js */ "./compiled/dev/client/Contexts/World/Session/Session.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Player.js */ "./compiled/dev/client/Contexts/World/Player.js");
/* harmony import */ var _Gen_WorldGen_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Gen/WorldGen.js */ "./compiled/dev/client/Contexts/World/Gen/WorldGen.js");


//import { $INITWorldPlayer } from "./Player/WorldPlayer.js";






(0,_Tasks_AppWorldTasks_js__WEBPACK_IMPORTED_MODULE_4__.RegisterAppWorldTasks)();
(0,_core_data_shared_Functions_RegisterVoxelData_js__WEBPACK_IMPORTED_MODULE_1__.RegisterVoxelData)(divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW);
await divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.$INIT();
await simloop__WEBPACK_IMPORTED_MODULE_3__.SimulationLoop.$INIT(20);
const worldPlayer = await (0,dve_plugins_player_World__WEBPACK_IMPORTED_MODULE_2__.INIT_WORLD_PLAYER)(divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW);
_Player_js__WEBPACK_IMPORTED_MODULE_6__.ECDWorldPlayer.$INIT(worldPlayer);
_Session_Session_js__WEBPACK_IMPORTED_MODULE_5__.GameSession.player = worldPlayer;
const numChunks = 2;
let startX = -16 * numChunks;
let startZ = -16 * numChunks;
let endX = 16 * numChunks;
let endZ = 16 * numChunks;
const builder = divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.getBuilder();
const tasks = divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.getTasksTool();
for (let x = startX; x < endX; x += 16) {
    for (let z = startZ; z < endZ; z += 16) {
        _Gen_WorldGen_js__WEBPACK_IMPORTED_MODULE_7__.WorldGen.generateWorldColumn(x, z);
        tasks.light.worldSun.add(x, z);
    }
}
await tasks.light.worldSun.runAndAwait();
for (let x = startX; x < endX; x += 16) {
    for (let z = startZ; z < endZ; z += 16) {
        builder.setXZ(x, z).buildColumn();
    }
}
const physicsData = worldPlayer.manager.physics;
const dataTool = divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.getDataTool();
const brush = divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.getBrush();
divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.TC.registerTasks("place", async (data) => {
    const [x, y, z] = physicsData.pick.getPlacePosition();
    if (!dataTool.loadInAt(x, y, z))
        return;
    if (dataTool.isRenderable())
        return;
    await brush.setId(data).setXYZ(x, y, z).paintAndAwaitUpdate();
    divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.parentComm.runTasks("play-sound", ["voxel-place", data, x, y, z]);
    const raw = brush.getRaw();
});
divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.TC.registerTasks("break", async () => {
    const { x, y, z } = physicsData.pick.position;
    if (!dataTool.loadInAt(x, y, z))
        return;
    if (dataTool.isRenderable()) {
        const id = dataTool.getStringId();
        divine_voxel_engine_World__WEBPACK_IMPORTED_MODULE_0__.DVEW.parentComm.runTasks("play-sound", ["voxel-break", id, x, y, z]);
        await brush.setXYZ(x, y, z).eraseAndAwaitUpdate();
    }
});
setInterval(() => {
    worldPlayer.update();
}, 20);
//const player = await $INITWorldPlayer(DVEW);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./compiled/dev/core/data/shared/Functions/RegisterVoxelData.js":
/*!**********************************************************************!*\
  !*** ./compiled/dev/core/data/shared/Functions/RegisterVoxelData.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterVoxelData": () => (/* binding */ RegisterVoxelData)
/* harmony export */ });
function RegisterVoxelData(DVEW) {
    DVEW.voxelManager.registerVoxelData([
        //util
        {
            id: "dve_debugbox",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_is_light_source", true],
                ["#dve_light_value", [15, 15, 15]],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_lightdebug",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_dataholder",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_is_rich", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_markerbox",
            states: 15,
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        //dream
        {
            id: "dve_dreamstone",
            states: 1,
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "grassy-stone"],
            ],
        },
        {
            id: "dve_dreamstonepillar",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_dreamgrassblock",
            tags: [
                ["#dve_substance", "#dve_flora"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_dreamlamp",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_is_light_source", true],
                ["#dve_light_value", [15, 0, 15]],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_dreamstoneslab",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_halfbox"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "grassy-stone"],
            ],
        },
        {
            id: "dve_dream-log",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "wood"],
            ],
        },
        {
            id: "dve_dreamstone-stair",
            tags: [
                ["#dve_substance", "#dve_transparent"],
                ["#dve_shape_id", "#dve_stair"],
                ["#dve_collider_id", "#dve_stair"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_dreamgrass",
            tags: [
                ["#dve_substance", "#dve_flora"],
                ["#dve_shape_id", "#dve_crossed_panels"],
                ["#dve_check_collisions", false],
                ["#dve_material", "grass"],
            ],
        },
        {
            id: "dve_dreamvine",
            tags: [
                ["#dve_substance", "#dve_flora"],
                ["#dve_shape_id", "#dve_panel"],
                ["#dve_check_collisions", false],
                ["#dve_material", "grass"],
            ],
        },
        {
            id: "dve_dream-leafs",
            tags: [
                ["#dve_substance", "#dve_flora"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "grass"],
            ],
        },
        {
            id: "dve_liquiddreamether",
            tags: [
                ["#dve_substance", "#dve_liquid"],
                ["#dve_shape_id", "#dve_liquid"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "water"],
            ],
        },
        //dread
        {
            id: "dve_dreadstone",
            states: 1,
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "grassy-stone"],
            ],
        },
        {
            id: "dve_dreadgrassblock",
            tags: [
                ["#dve_substance", "#dve_flora"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_dreadgrass",
            tags: [
                ["#dve_substance", "#dve_flora"],
                ["#dve_shape_id", "#dve_crossed_panels"],
                ["#dve_check_collisions", false],
                ["#dve_material", "grass"],
            ],
        },
        {
            id: "dve_dreadlamp",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_is_light_source", true],
                ["#dve_light_value", [15, 0, 0]],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_dreadstonepillar",
            tags: [
                ["#dve_substance", "#dve_solid"],
                ["#dve_shape_id", "#dve_box"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "stone"],
            ],
        },
        {
            id: "dve_liquiddreadether",
            tags: [
                ["#dve_substance", "#dve_liquid"],
                ["#dve_shape_id", "#dve_liquid"],
                ["#dve_collider_id", "#dve_box"],
                ["#dve_check_collisions", true],
                ["#dve_material", "water"],
            ],
        },
    ]);
}


/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Common/Queues/ConstructorQueues.js":
/*!******************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Common/Queues/ConstructorQueues.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructorQueues": () => (/* binding */ ConstructorQueues)
/* harmony export */ });
/* harmony import */ var _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../World/Threads/Threads.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Threads/Threads.js");
/* harmony import */ var _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Threads/Contracts/ConstructorTasks.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorTasks.js");
//objects


const QMBase = {
    $INIT() {
        this.addQueue("main");
    },
    _queueMap: new Map(),
    addQueue(queueKey) {
        if (this._queueMap.has(queueKey)) {
            this._queueMap.set(queueKey, Date.now());
            return false;
        }
        this.rgb.update.addQueue(queueKey);
        this.rgb.remove.addQueue(queueKey);
        this.sun.update.addQueue(queueKey);
        this.sun.remove.addQueue(queueKey);
        this.worldSun.addQueue(queueKey);
        this.flow.update.addQueue(queueKey);
        this.flow.remove.addQueue(queueKey);
        this.build.chunk.addQueue(queueKey);
        this.generate.addQueue(queueKey);
        this.explosion.run.addQueue(queueKey);
        this.voxelUpdate.erase.addQueue(queueKey);
        this.voxelUpdate.paint.addQueue(queueKey);
        this._queueMap.set(queueKey, Date.now());
        return true;
    },
    removeQueue(queueKey) {
        if (!this._queueMap.has(queueKey))
            return false;
        this.rgb.update.removeQueue(queueKey);
        this.rgb.remove.removeQueue(queueKey);
        this.sun.update.removeQueue(queueKey);
        this.sun.remove.removeQueue(queueKey);
        this.worldSun.removeQueue(queueKey);
        this.flow.update.removeQueue(queueKey);
        this.flow.remove.removeQueue(queueKey);
        this.build.chunk.addQueue(queueKey);
        this.generate.removeQueue(queueKey);
        this.explosion.run.removeQueue(queueKey);
        this.voxelUpdate.erase.removeQueue(queueKey);
        this.voxelUpdate.paint.removeQueue(queueKey);
        this._queueMap.delete(queueKey);
        return true;
    },
    /**# Filter Queues
     * ---
     * Go through each current queue. IF the passed fucntion returns false it will remove that queue.
     * @param filter
     */
    filterQueues(filter) {
        this._queueMap.forEach((v, key) => {
            if (!filter(key)) {
                this.removeQueue(key);
            }
        });
    },
    /**# Filter Old Queues
     * ---
     * Will remove queues older then 10 minutes.
     * @param maxTime Max time in miliseconds.
     */
    filterOldQueues(maxTime = 600000) {
        const t = Date.now();
        this._queueMap.forEach((v, key) => {
            if (t - v > maxTime) {
                this.removeQueue(key);
            }
        });
    },
    rgb: {
        update: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("rgb-update", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.RGBlightUpdate, null),
        remove: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("rgb-remove", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.RGBlightRemove),
    },
    worldSun: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("world-sun", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.worldSun),
    voxelUpdate: {
        erase: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("voxel-update-erase", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.voxelErease),
        paint: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("voxel-update-paint", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.voxelPaint),
    },
    sun: {
        update: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("sun-update", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.sunLightUpdate),
        remove: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("sun-remove", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.sunLightRemove),
    },
    explosion: {
        run: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("explosion", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.explosion),
    },
    flow: {
        update: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("flow-update", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.flowUpdate),
        remove: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("flow-remove", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.flowRemove),
    },
    build: {
        chunk: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("build-chunk", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.buildChunk),
    },
    generate: _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM.addQueue("generatek", _Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorTasks.generate),
};
const ConstructorQueues = QMBase;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Common/Tasks/ConstructorTasks.js":
/*!****************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Common/Tasks/ConstructorTasks.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructorTasks": () => (/* binding */ ConstructorTasks)
/* harmony export */ });
/* harmony import */ var _Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Queues/ConstructorQueues.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Queues/ConstructorQueues.js");
/* harmony import */ var _Threads_Contracts_ConstructorRemoteThreadTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Threads/Contracts/ConstructorRemoteThreadTasks.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorRemoteThreadTasks.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Tools_Tasks_TasksTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tools/Tasks/TasksTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Tasks/TasksTool.js");




const tasks = (0,_Tools_Tasks_TasksTool_js__WEBPACK_IMPORTED_MODULE_3__.GetTasksTool)();
const ConstructorTasks = {
    runQueue: {
        build: {
            chunk: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Threads_Contracts_ConstructorRemoteThreadTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorRemoteThreadTasks.runRebuildQue, (data) => {
                _Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.build.chunk.run(data[0]);
            }),
        },
    },
    addToQueue: {
        rgb: {
            update: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Threads_Contracts_ConstructorRemoteThreadTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorRemoteThreadTasks.addToRGBLightUpdateQue, (data) => {
                _Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.update.add(data);
            }),
            remove: null,
        },
        build: {
            addToRebuildQueue: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Threads_Contracts_ConstructorRemoteThreadTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorRemoteThreadTasks.addToRebuildQue, (data) => {
                _Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.build.chunk.add({
                    data: [data[0], 1],
                    priority: data[2],
                }, data[1]);
            }),
        },
        buildChunk: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Threads_Contracts_ConstructorRemoteThreadTasks_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorRemoteThreadTasks.buildChunk, (data) => {
            tasks.setPriority(data.priority);
            tasks.build.chunk.deferred.run(data.data, () => { });
        }),
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorRemoteThreadTasks.js":
/*!****************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorRemoteThreadTasks.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructorRemoteThreadTasks": () => (/* binding */ ConstructorRemoteThreadTasks)
/* harmony export */ });
const ConstructorRemoteThreadTasks = {
    syncShapeMap: -1,
    addToRebuildQue: 0,
    runRebuildQue: 1,
    addToRGBLightUpdateQue: 2,
    buildChunk: 3
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorTasks.js":
/*!****************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorTasks.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructorTasks": () => (/* binding */ ConstructorTasks)
/* harmony export */ });
const ConstructorTasks = {
    buildChunk: 0,
    buildColumn: 0,
    generate: 0,
    RGBlightUpdate: 0,
    RGBlightRemove: 0,
    worldSun: 0,
    sunLightUpdate: 0,
    sunLightRemove: 0,
    analyzerPropagation: 0,
    analyzerUpdate: 0,
    flowUpdate: 0,
    flowRemove: 0,
    constructEntity: 0,
    constructItem: 0,
    explosion: 0,
    voxelErease: 0,
    voxelPaint: 0,
};
let index = 0;
for (const key of Object.keys(ConstructorTasks)) {
    ConstructorTasks[key] = index;
    index++;
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/DataHeaders.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Constants/DataHeaders.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEMessageHeader": () => (/* binding */ DVEMessageHeader),
/* harmony export */   "WorldDataHeaders": () => (/* binding */ WorldDataHeaders)
/* harmony export */ });
const DVEMessageHeader = 0xffff;
const WorldDataHeaders = {
    region: 0,
    column: 1,
    chunk: 2,
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Items/ItemManager.js":
/*!*********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Items/ItemManager.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemManager": () => (/* binding */ ItemManager)
/* harmony export */ });
const ItemManager = {
    itemData: {},
    _onRegister: (data) => { },
    getItemData(id) {
        const itemData = this.itemData[id];
        if (!itemData) {
            throw new Error(`Item with ${id} does not exists.`);
        }
        return itemData;
    },
    registerItemData(data) {
        this.itemData[data.id] = data;
        this._onRegister(data);
    },
    onRegister(func) {
        this._onRegister = func;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/AdvancedBrushTool.js":
/*!****************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/AdvancedBrushTool.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAdvancedBrushTool": () => (/* binding */ GetAdvancedBrushTool)
/* harmony export */ });
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Brush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brush.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/Brush.js");
/* harmony import */ var _Tasks_TasksTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tasks/TasksTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Tasks/TasksTool.js");
//util

//tools


const tasks = (0,_Tasks_TasksTool_js__WEBPACK_IMPORTED_MODULE_2__.GetTasksTool)();
const GetAdvancedBrushTool = () => {
    let brush = _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__.Util.merge(new _Brush_js__WEBPACK_IMPORTED_MODULE_1__.BrushTool(), {
        paintAndAwaitUpdate() {
            const self = this;
            return new Promise((resolve) => {
                self.paintAndUpdate(() => {
                    resolve(true);
                });
            });
        },
        eraseAndAwaitUpdate() {
            const self = this;
            return new Promise((resolve) => {
                self.eraseAndUpdate(() => {
                    resolve(true);
                });
            });
        },
        paintAndUpdate(onDone) {
            tasks.setFocalPoint(brush.location);
            const [dimesnion, x, y, z] = brush.location;
            tasks.voxelUpdate.paint.deferred.run(x, y, z, brush.getRaw(), () => {
                if (onDone)
                    onDone();
            });
        },
        eraseAndUpdate(onDone) {
            tasks.setFocalPoint(brush.location);
            const [dimesnion, x, y, z] = brush.location;
            tasks.voxelUpdate.erase.deferred.run(x, y, z, () => {
                if (onDone)
                    onDone();
            });
        },
        explode(radius = 6, onDone) {
            tasks.setFocalPoint(brush.location);
            const [dimesnion, x, y, z] = brush.location;
            tasks.explosion.run.add(x, y, z, radius);
            tasks.explosion.run.run(() => {
                tasks.build.chunk.async.run(() => (onDone ? onDone() : 0));
            });
        },
    });
    return brush;
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/Brush.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/Brush.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrushTool": () => (/* binding */ BrushTool)
/* harmony export */ });
/* harmony import */ var _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _Data_World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/World/WorldPainter.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldPainter.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/Voxel/VoxelPalette.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelPalette.js");
/* harmony import */ var _Classes_LocationBoundTool_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Classes/LocationBoundTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/LocationBoundTool.js");





class BrushTool extends _Classes_LocationBoundTool_js__WEBPACK_IMPORTED_MODULE_4__.LocationBoundTool {
    data = {
        id: "dve_air",
        state: 0,
        shapeState: 0,
        secondaryState: 0,
        secondaryVoxelId: "dve_air",
        level: 0,
        levelState: 0,
    };
    _update = true;
    _dt = new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_0__.DataTool();
    setId(id, state = 0, shapeState = 0) {
        this.data.id = id;
        this.data.state = state;
        this.data.shapeState = shapeState;
        return this;
    }
    setDimension(dimensionId) {
        this.location[0] = dimensionId;
        this._dt.setDimension(dimensionId);
        return this;
    }
    setSecondaryId(id, state = 0) {
        this.data.secondaryVoxelId = id;
        this.data.secondaryState = state;
        return this;
    }
    setState(state) {
        this.data.state = state;
        return this;
    }
    setShapeState(state) {
        this.data.shapeState = state;
        return this;
    }
    clear() {
        this.data.id = "dve_air";
        this.data.secondaryVoxelId = "dve_air";
        this.data.level = 0;
        this.data.levelState = 0;
        this.data.state = 0;
        this.data.secondaryState = 0;
        this.location[1] = 0;
        this.location[2] = 0;
        this.location[3] = 0;
    }
    setRaw(data) {
        this._dt.loadInRaw(data);
        this.data.id = this._dt.getStringId();
        this.data.shapeState = this._dt.getShapeState();
        this.data.state = this._dt.getState();
        this._dt.setSecondary(true);
        if (this._dt.data.secondaryId >= 2) {
            this.data.secondaryVoxelId = this._dt.getStringId();
            this.data.secondaryState = this._dt.getState();
        }
        this._dt.setSecondary(false);
        return this;
    }
    getRaw() {
        this._dt.setId(_Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__.VoxelPaletteReader.id.getPaletteId(this.data.id, this.data.state));
        this._dt
            .setSecondary(true)
            .setId(_Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__.VoxelPaletteReader.id.getPaletteId(this.data.secondaryVoxelId, this.data.secondaryState))
            .setSecondary(false);
        this._dt.setLevel(this.data.state);
        this._dt.setLevelState(this.data.levelState);
        this._dt.setShapeState(this.data.shapeState);
        return this._dt.data.raw;
    }
    getData() {
        return this.data;
    }
    paint() {
        _Data_World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_1__.WorldPainter.paint.voxel(this.location, this.data, this._update);
        return this;
    }
    erase() {
        _Data_World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_1__.WorldPainter.paint.erase(this.location);
        return this;
    }
    start() {
        _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_2__.WorldRegister.cache.enable();
        return this;
    }
    stop() {
        _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_2__.WorldRegister.cache.disable();
        return this;
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Build/BuilderTool.js":
/*!**********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Build/BuilderTool.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuilderTool": () => (/* binding */ BuilderTool)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Tools_Classes_LocationBoundTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tools/Classes/LocationBoundTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/LocationBoundTool.js");
/* harmony import */ var _Tools_Tasks_TasksTool_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Tools/Tasks/TasksTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Tasks/TasksTool.js");





const parentComm = threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.parent;
class BuilderTool extends _Tools_Classes_LocationBoundTool_js__WEBPACK_IMPORTED_MODULE_3__.LocationBoundTool {
    static _chunkTool = new _Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_1__.ChunkDataTool();
    tasks = (0,_Tools_Tasks_TasksTool_js__WEBPACK_IMPORTED_MODULE_4__.GetTasksTool)();
    data = {
        LOD: 1,
    };
    setLOD(lod) {
        this.data.LOD = lod;
        return this;
    }
    buildChunk() {
        const [dimension, x, y, z] = this.location;
        this.tasks.build.chunk.async.add(x, y, z);
        this.tasks.build.chunk.async.run(() => { });
        return this;
    }
    buildColumn(onDone) {
        const [dimension, x, y, z] = this.location;
        this.tasks._data.dimension = dimension;
        this.tasks.build.column.deferred.run(x, y, z, onDone ? onDone : (data) => { });
        return this;
    }
    removeColumn() {
        const column = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.column.get(this.location);
        if (!column)
            return false;
        if (column.chunks.size == 0)
            return false;
        parentComm.runTasks("remove-column", this.location);
        return this;
    }
    fillColumn() {
        _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.column.fill(this.location);
        return this;
    }
    removeColumnsOutsideRadius(radius) {
        parentComm.runTasks("remove-column-outside-radius", [this.location, radius]);
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataLoaderTool.js":
/*!************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataLoaderTool.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataLoaderTool": () => (/* binding */ DataLoaderTool)
/* harmony export */ });
/* harmony import */ var _Data_World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Data/World/Region/RegionHeaderRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionHeaderRegister.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldData/ColumnDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Classes_LocationBoundTool_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Classes/LocationBoundTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/LocationBoundTool.js");
/* harmony import */ var _Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Math/Functions/Distance3d.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance3d.js");
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Data/DataHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataHooks.js");








class DataLoaderTool extends _Classes_LocationBoundTool_js__WEBPACK_IMPORTED_MODULE_4__.LocationBoundTool {
    static columnDataTool = new _WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_2__.ColumnDataTool();
    static isEnabled() {
        const comm = threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.getComm("data-loader");
        return Boolean(comm);
    }
    mode = "server";
    _enabled = true;
    dataComm;
    constructor() {
        super();
        const comm = threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.getComm("data-loader");
        if (!comm) {
            this._enabled = false;
            console.error("Data Loader comm must be set.");
        }
        this.dataComm = comm;
        this.mode = _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_6__.EngineSettings.settings.data.mode;
        _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_7__.DataHooks.settingsSynced.addToRun((data) => {
            this.mode = data.data.mode;
        });
    }
    isEnabled() {
        return this._enabled;
    }
    saveRegion(onDone) {
        const location = this.getLocation();
        this.dataComm.runPromiseTasks("save-region", location.toString() + Date.now(), () => (onDone ? onDone() : false), location);
    }
    saveRegionAsync() {
        return new Promise((resolve) => {
            this.saveRegion(() => {
                resolve(true);
            });
        });
    }
    loadRegion(onDone) {
        const location = this.getLocation();
        this.dataComm.runPromiseTasks("load-region", location.toString() + Date.now(), () => (onDone ? onDone() : false), location);
    }
    loadRegionAsync() {
        return new Promise((resolve) => {
            this.loadRegion(() => {
                resolve(true);
            });
        });
    }
    saveColumn(onDone) {
        const location = this.getLocation();
        this.dataComm.runPromiseTasks("save-column", location.toString() + Date.now(), () => (onDone ? onDone() : false), location);
    }
    saveColumnIfNotStored(onDone) {
        const location = this.getLocation();
        if (!DataLoaderTool.columnDataTool.setLocation(location).loadIn())
            return onDone ? onDone(false) : false;
        if (DataLoaderTool.columnDataTool.isStored())
            return onDone ? onDone(false) : false;
        this.dataComm.runPromiseTasks("save-column", location.toString() + Date.now(), () => {
            if (onDone)
                onDone(true);
        }, location);
        return true;
    }
    loadIfExists(onDone) {
        const location = [...this.getLocation()];
        this.columnExists((exists) => {
            if (exists) {
                this.setLocation(location).loadColumn(() => {
                    onDone ? onDone(true) : false;
                });
                return;
            }
            onDone ? onDone(false) : false;
        });
    }
    saveColumnAsync() {
        return new Promise((resolve) => {
            this.saveColumn(() => {
                resolve(true);
            });
        });
    }
    loadColumn(onDone) {
        const location = this.getLocation();
        this.dataComm.runPromiseTasks("load-column", location.toString() + Date.now(), () => {
            onDone ? onDone(true) : false;
        }, location);
    }
    loadColumnAsync() {
        return new Promise((resolve) => {
            this.loadColumn(() => {
                resolve(true);
            });
        });
    }
    unLoadColumn(onDone) {
        const location = this.getLocation();
        this.dataComm.runPromiseTasks("unload-column", location.toString() + Date.now(), () => {
            onDone ? onDone(true) : false;
        }, location);
    }
    _runTask(id, location, onDone) {
        this.dataComm.runPromiseTasks(id, location.toString() + Date.now(), (data) => {
            onDone ? onDone(data) : false;
        }, location);
    }
    columnExists(onDone) {
        const location = [...this.getLocation()];
        if (this.mode == "server") {
            if (!_Data_World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_0__.RegionHeaderRegister.get(location)) {
                this.loadRegionHeader(() => {
                    this.setLocation(location).columnExists(onDone);
                });
                return;
            }
            const exists = _Data_World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_0__.RegionHeaderRegister.isStored(location);
            onDone ? onDone(exists >= 1 ? true : false) : false;
            return;
        }
        this.dataComm.runPromiseTasks("column-exists", location.toString() + Date.now(), (data) => {
            onDone ? onDone(data) : false;
        }, location);
    }
    loadRegionHeader(onDone) {
        const location = this.getLocation();
        this.dataComm.runPromiseTasks("load-region-header", location.toString() + Date.now(), (data) => {
            onDone ? onDone(data) : false;
        }, location);
    }
    loadRegionHeaderAsync() {
        return new Promise((resolve) => {
            this.loadRegionHeader((anaswer) => {
                resolve(anaswer);
            });
        });
    }
    columnExistsAsync() {
        return new Promise((resolve) => {
            this.columnExists((anaswer) => {
                resolve(anaswer);
            });
        });
    }
    columnTimestamp(onDone) {
        const location = this.getLocation();
        this.dataComm.runPromiseTasks("column-timestamp", location.toString() + Date.now(), (data) => {
            onDone ? onDone(data) : false;
        }, location);
    }
    columnTimestampAsync() {
        return new Promise((resolve) => {
            this.columnTimestamp((timeStamp) => {
                resolve(timeStamp);
            });
        });
    }
    unLoadAllOutsideRadius(radius, run = (columntool) => true, onDone) {
        const [dimension, sx, sy, sz] = this.location;
        const regions = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_3__.WorldRegister.dimensions.get(dimension);
        if (!regions)
            return;
        let totalColumns = 0;
        for (const [key, region] of regions) {
            for (const [ckey, column] of region.columns) {
                DataLoaderTool.columnDataTool.setColumn(column);
                if (DataLoaderTool.columnDataTool.isPersistent())
                    continue;
                const [dimension, cx, cy, cz] = DataLoaderTool.columnDataTool.getLocationData();
                if (!run(DataLoaderTool.columnDataTool))
                    continue;
                const d = (0,_Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_5__.Distance3D)(sx, sy, sz, cx, cy, cz);
                if (d > radius) {
                    totalColumns++;
                    this.setXYZ(cx, cy, cz).unLoadColumn(() => {
                        totalColumns--;
                    });
                }
            }
        }
        const inte = setInterval(() => {
            if (totalColumns == 0) {
                clearInterval(inte);
                if (onDone)
                    onDone();
            }
        }, 1);
    }
    getAllUnStoredColumns(run) {
        const [dimension, sx, sy, sz] = this.location;
        const regions = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_3__.WorldRegister.dimensions.get(dimension);
        if (!regions)
            return;
        for (const [key, region] of regions) {
            for (const [ckey, column] of region.columns) {
                DataLoaderTool.columnDataTool.setColumn(column);
                if (DataLoaderTool.columnDataTool.isStored())
                    continue;
                const [dimension, cx, cy, cz] = DataLoaderTool.columnDataTool.getLocationData();
                run(dimension, cx, cy, cz);
            }
        }
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Tasks/TasksTool.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Tasks/TasksTool.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetTasksTool": () => (/* binding */ GetTasksTool),
/* harmony export */   "TaskTool": () => (/* binding */ TaskTool)
/* harmony export */ });
/* harmony import */ var _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common/Queues/ConstructorQueues.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Queues/ConstructorQueues.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../World/Threads/Threads.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Threads/Threads.js");
/* harmony import */ var _Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/Threads/Contracts/ConstructorTasks.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorTasks.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");






class TaskTool {
    _data = {
        dimension: "main",
        queue: "main",
    };
    _thread = "";
    _priority = 0;
    constructor() {
        this.build.chunk.async._s = this;
        this.build.chunk.deferred._s = this;
        this.build.column.deferred._s = this;
        this.light.rgb.update._s = this;
        this.light.rgb.remove._s = this;
        this.light.sun.update._s = this;
        this.light.sun.remove._s = this;
        this.light.worldSun._s = this;
        this.light.worldSun.deferred._s = this;
        this.flow.update._s = this;
        this.flow.remove._s = this;
        this.explosion.run._s = this;
        this.voxelUpdate.erase.async._s = this;
        this.voxelUpdate.erase.deferred._s = this;
        this.voxelUpdate.paint.async._s = this;
        this.voxelUpdate.paint.deferred._s = this;
        this.generate.deferred._s = this;
        this.generate.async._s = this;
        this.anaylzer.propagation._s = this;
        this.anaylzer.update._s = this;
        this._thread = threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.threadName;
    }
    setPriority(priority) {
        this._priority = priority;
        return this;
    }
    setFocalPoint(location) {
        const [dimesnion, x, y, z] = location;
        const queueKey = `${dimesnion}-${_Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_5__.WorldSpaces.region.getKeyXYZ(x, y, z)}`;
        _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.addQueue(queueKey);
        this._data.queue = queueKey;
        this._thread = threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.threadName;
        return this;
    }
    generate = {
        async: {
            _s: {},
            add(x, y, z, data = []) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.generate.add([[this._s._data.dimension, x, y, z], data], this._s._data.queue);
            },
            run(onDone) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.generate.run(this._s._data.queue);
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.generate.onDone(this._s._data.queue, onDone);
            },
            async runAndAwait() {
                await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.generate.runAndAwait(this._s._data.queue);
            },
        },
        deferred: {
            _s: {},
            run(x, y, z, data, onDone) {
                const requestsKey = `${this._s._data.dimension}-${x}-${y}-${z}}`;
                _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__.CCM.runPromiseTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__.ConstructorTasks.generate, requestsKey, onDone, [[this._s._data.dimension, x, y, z], data]);
            },
        },
    };
    voxelUpdate = {
        erase: {
            deferred: {
                _s: {},
                run(x, y, z, onDone) {
                    const requestsKey = `${this._s._data.dimension}-${x}-${y}-${z}}`;
                    _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__.CCM.runPromiseTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__.ConstructorTasks.voxelErease, requestsKey, onDone, [[this._s._data.dimension, x, y, z], this._s._data.queue, this._s._thread]);
                },
            },
            async: {
                _s: {},
                add(x, y, z) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.voxelUpdate.erase.add([
                        [this._s._data.dimension, x, y, z],
                        this._s._data.queue,
                        this._s._thread,
                    ], this._s._data.queue);
                },
                run(onDone) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.voxelUpdate.erase.run(this._s._data.queue);
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.voxelUpdate.erase.onDone(this._s._data.queue, onDone);
                },
                async runAndAwait() {
                    await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.voxelUpdate.erase.runAndAwait(this._s._data.queue);
                },
            },
        },
        paint: {
            deferred: {
                _s: {},
                run(x, y, z, raw, onDone) {
                    const requestsKey = `${this._s._data.dimension}-${x}-${y}-${z}}`;
                    _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__.CCM.runPromiseTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__.ConstructorTasks.voxelPaint, requestsKey, onDone, [
                        [this._s._data.dimension, x, y, z],
                        raw,
                        this._s._data.queue,
                        this._s._thread,
                    ]);
                },
            },
            async: {
                _s: {},
                add(x, y, z, raw) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.voxelUpdate.paint.add([
                        [this._s._data.dimension, x, y, z],
                        raw,
                        this._s._data.queue,
                        this._s._thread,
                    ], this._s._data.queue);
                },
                run(onDone) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.voxelUpdate.paint.run(this._s._data.queue);
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.voxelUpdate.paint.onDone(this._s._data.queue, onDone);
                },
                async runAndAwait() {
                    await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.voxelUpdate.paint.runAndAwait(this._s._data.queue);
                },
            },
        },
    };
    build = {
        chunk: {
            deferred: {
                _s: {},
                run(buildTasks, onDone) {
                    const requestsKey = buildTasks.toString();
                    _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__.CCM.runPromiseTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__.ConstructorTasks.buildChunk, requestsKey, onDone, {
                        data: buildTasks,
                        priority: this._s._priority,
                    });
                },
            },
            async: {
                _s: {},
                add(x, y, z) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.build.chunk.add({
                        data: [[this._s._data.dimension, x, y, z], 1],
                        priority: this._s._priority,
                    }, this._s._data.queue);
                },
                run(onDone) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.build.chunk.run(this._s._data.queue);
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.build.chunk.onDone(this._s._data.queue, onDone);
                },
                async runAndAwait() {
                    await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.build.chunk.runAndAwait(this._s._data.queue);
                },
            },
        },
        column: {
            async: {},
            deferred: {
                _s: {},
                run(x, y, z, onDone) {
                    const requestsKey = `${this._s._data.dimension}-${x}-${y}-${z}}`;
                    _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__.CCM.runPromiseTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__.ConstructorTasks.buildColumn, requestsKey, onDone, [[this._s._data.dimension, x, y, z], 1]);
                },
            },
        },
    };
    explosion = {
        run: {
            _s: {},
            add(x, y, z, radius) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.explosion.run.add([
                    [this._s._data.dimension, x, y, z],
                    radius,
                    this._s._data.queue,
                    this._s._thread,
                ], this._s._data.queue);
            },
            run(onDone) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.explosion.run.run(this._s._data.queue);
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.explosion.run.onDone(this._s._data.queue, onDone);
            },
            async runAndAwait() {
                await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.explosion.run.runAndAwait(this._s._data.queue);
            },
        },
    };
    flow = {
        update: {
            _s: {},
            add(x, y, z) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.flow.update.add([[this._s._data.dimension, x, y, z], this._s._data.queue, this._s._thread], this._s._data.queue);
            },
            run(onDone) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.flow.update.run(this._s._data.queue);
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.flow.update.onDone(this._s._data.queue, onDone);
            },
            async runAndAwait() {
                await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.flow.update.runAndAwait(this._s._data.queue);
            },
        },
        remove: {
            _s: {},
            add(x, y, z) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.flow.remove.add([[this._s._data.dimension, x, y, z], this._s._data.queue, this._s._thread], this._s._data.queue);
            },
            run(onDone) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.flow.remove.run(this._s._data.queue);
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.flow.remove.onDone(this._s._data.queue, onDone);
            },
            async runAndAwait() {
                await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.flow.remove.runAndAwait(this._s._data.queue);
            },
        },
    };
    anaylzer = {
        propagation: {
            _s: {},
            run(x, y, z, onDone) {
                const requestsKey = `${this._s._data.dimension}-${x}-${y}-${z}}`;
                _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__.CCM.runPromiseTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__.ConstructorTasks.analyzerPropagation, requestsKey, onDone, [[this._s._data.dimension, x, y, z], this._s._data.queue, this._s._thread]);
            },
        },
        update: {
            _s: {},
            run(x, y, z, onDone) {
                const requestsKey = `${this._s._data.dimension}-${x}-${y}-${z}}`;
                _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__.CCM.runPromiseTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__.ConstructorTasks.analyzerUpdate, requestsKey, onDone, [[this._s._data.dimension, x, y, z], this._s._data.queue, this._s._thread]);
            },
        },
    };
    light = {
        rgb: {
            update: {
                _s: {},
                add(x, y, z, queue = null) {
                    queue = queue ? queue : this._s._data.queue;
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.update.add([[this._s._data.dimension, x, y, z], queue, this._s._thread], queue);
                },
                run(onDone) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.update.run(this._s._data.queue);
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.update.onDone(this._s._data.queue, onDone);
                },
                async runAndAwait() {
                    await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.update.runAndAwait(this._s._data.queue);
                },
            },
            remove: {
                _s: {},
                add(x, y, z, queue = null) {
                    queue = queue ? queue : this._s._data.queue;
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.remove.add([[this._s._data.dimension, x, y, z], queue, this._s._thread], queue);
                },
                run(onDone) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.remove.run(this._s._data.queue);
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.remove.onDone(this._s._data.queue, onDone);
                },
                async runAndAwait() {
                    await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.rgb.remove.runAndAwait(this._s._data.queue);
                },
            },
        },
        sun: {
            update: {
                _s: {},
                add(x, y, z) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.sun.update.add([
                        [this._s._data.dimension, x, y, z],
                        this._s._data.queue,
                        this._s._thread,
                    ], this._s._data.queue);
                },
                run(onDone) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.sun.update.run(this._s._data.queue);
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.sun.update.onDone(this._s._data.queue, onDone);
                },
                async runAndAwait() {
                    await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.sun.update.runAndAwait(this._s._data.queue);
                },
            },
            remove: {
                _s: {},
                add(x, y, z) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.sun.remove.add([
                        [this._s._data.dimension, x, y, z],
                        this._s._data.queue,
                        this._s._thread,
                    ], this._s._data.queue);
                },
                run(onDone) {
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.sun.remove.run(this._s._data.queue);
                    _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.sun.remove.onDone(this._s._data.queue, onDone);
                },
                async runAndAwait() {
                    await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.sun.remove.runAndAwait(this._s._data.queue);
                },
            },
        },
        worldSun: {
            _s: {},
            deferred: {
                _s: {},
                run(x, y, z, onDone) {
                    const requestsKey = `${this._s._data.dimension}-${x}-${y}-${z}}`;
                    _World_Threads_Threads_js__WEBPACK_IMPORTED_MODULE_3__.CCM.runPromiseTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_4__.ConstructorTasks.worldSun, requestsKey, onDone, [[this._s._data.dimension, x, y, z], this._s._thread]);
                },
            },
            add(x, z, y = 0) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.worldSun.add([
                    [this._s._data.dimension, x, y, z],
                    this._s._data.queue,
                    this._s._thread,
                ]);
                _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_2__.WorldRegister.column.fill([this._s._data.dimension, x, y, z]);
            },
            run(onDone) {
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.worldSun.run(this._s._data.queue);
                _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.worldSun.onDone(this._s._data.queue, onDone);
            },
            async runAndAwait() {
                await _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorQueues.worldSun.runAndAwait();
            },
        },
    };
}
const GetTasksTool = function () {
    return new TaskTool();
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Data/DataSync.js":
/*!******************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Data/DataSync.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSync": () => (/* binding */ DataSync)
/* harmony export */ });
/* harmony import */ var _Generators_VoxelDataGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generators/VoxelDataGenerator.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Generators/VoxelDataGenerator.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/Threads/Contracts/DataSync.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/DataSync.js");
/* harmony import */ var _Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tags/ChunkTags.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ChunkTags.js");
/* harmony import */ var _Tags_ColumnTags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tags/ColumnTags.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ColumnTags.js");
/* harmony import */ var _Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tags/RegionTags.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/RegionTags.js");
/* harmony import */ var _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Data/Voxel/VoxelTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelTags.js");
/* harmony import */ var _Data_World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Data/World/Region/RegionHeaderRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionHeaderRegister.js");
/* harmony import */ var _Data_World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Data/World/Dimensions/DimensionsRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Dimensions/DimensionsRegister.js");
/* harmony import */ var _TagBuilders_VoxelTagBuilder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TagBuilders/VoxelTagBuilder.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/TagBuilders/VoxelTagBuilder.js");
//objects










class DataSyncNode {
    data;
    constructor(data) {
        this.data = data;
    }
    unSync(input) {
        const output = this.data.getUnSyncData(input);
        if (!output)
            return false;
        DataSync.loopThroughComms((comm, options) => {
            if (!this.data.commCheck(options))
                return false;
            comm.unSyncData(this.data.dataSyncType, output);
        });
    }
    unSyncInThread(commName, input) {
        const comm = DataSync.comms[commName];
        if (!comm)
            return;
        const output = this.data.getUnSyncData(input);
        if (!output)
            return false;
        if (!this.data.commCheck(DataSync.commOptions[commName]))
            return false;
        comm.unSyncData(this.data.dataSyncType, output);
    }
    sync(input) {
        const output = this.data.getSyncData(input);
        if (!output)
            return false;
        DataSync.loopThroughComms((comm, options) => {
            if (!this.data.commCheck(options))
                return false;
            comm.syncData(this.data.dataSyncType, output);
        });
    }
    syncInThread(commName, input) {
        const comm = DataSync.comms[commName];
        if (!comm)
            return;
        const output = this.data.getSyncData(input);
        if (!output)
            return false;
        if (!this.data.commCheck(DataSync.commOptions[commName]))
            return false;
        comm.syncData(this.data.dataSyncType, output);
    }
}
//type WorldDataSync = [LocationData,SharedArrayBuffer]
const DataSync = {
    voxelDataCreator: _Generators_VoxelDataGenerator_js__WEBPACK_IMPORTED_MODULE_0__.VoxelDataGenerator,
    comms: {},
    commOptions: {},
    _ready: false,
    $INIT() {
        this.voxelDataCreator.$generateVoxelData();
        _TagBuilders_VoxelTagBuilder_js__WEBPACK_IMPORTED_MODULE_9__.VoxelTagBuilder.$SYNC();
        (0,_Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_3__.InitalizeChunkTags)();
        (0,_Tags_ColumnTags_js__WEBPACK_IMPORTED_MODULE_4__.InitalizeColumnTags)();
        (0,_Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_5__.InitalizeRegionTags)();
        this.voxelPalette.sync();
        this.voxelTags.sync();
        this.chunkTags.sync();
        this.columnTags.sync();
        this.regionTags.sync();
        this._ready = true;
    },
    isReady() {
        return this._ready;
    },
    registerComm(comm, data = {}) {
        this.comms[comm.name] = comm;
        this.commOptions[comm.name] = {
            worldData: data.worldData !== undefined ? data.worldData : true,
            voxelPalette: data.voxelPalette !== undefined ? data.voxelPalette : true,
            voxelTags: data.voxelTags !== undefined ? data.voxelTags : true,
            materials: data.materials !== undefined ? data.materials : false,
            colliders: data.colliders !== undefined ? data.colliders : false,
            worldDataTags: data.worldDataTags !== undefined ? data.worldDataTags : true,
        };
    },
    loopThroughComms(func) {
        for (const commKey of Object.keys(DataSync.comms)) {
            const comm = DataSync.comms[commKey];
            const options = DataSync.commOptions[commKey];
            if (!comm.isReady())
                continue;
            func(comm, options);
        }
    },
    dimesnion: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.dimesnion,
        commCheck: (options) => options.worldData,
        getSyncData: (input) => {
            const dimensionData = _Data_World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_8__.DimensionsRegister.getDimension(input);
            if (!dimensionData)
                return false;
            return dimensionData;
        },
        getUnSyncData: () => true,
    }),
    chunk: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.chunk,
        commCheck: (options) => options.worldData,
        getSyncData: (input) => {
            const chunk = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.chunk.get(input);
            if (!chunk)
                return false;
            return [input, chunk.buffer];
        },
        getUnSyncData: () => true,
    }),
    column: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.column,
        commCheck: (options) => options.worldData,
        getSyncData: (input) => {
            const column = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.column.get(input);
            if (!column)
                return false;
            return [input, column.buffer];
        },
        getUnSyncData: () => true,
    }),
    region: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.region,
        commCheck: (options) => options.worldData,
        getSyncData: (input) => {
            const region = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.region.get(input);
            if (!region)
                return false;
            return [input, region.buffer];
        },
        getUnSyncData: () => true,
    }),
    regionHeader: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.regionHeader,
        commCheck: (options) => options.worldData,
        getSyncData: (input) => {
            const regionHeader = _Data_World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_7__.RegionHeaderRegister.get(input);
            if (!regionHeader)
                return false;
            return [input, regionHeader.buffer];
        },
        getUnSyncData: () => true,
    }),
    voxelTags: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.voxelTags,
        commCheck: (options) => options.voxelTags,
        getSyncData: () => [
            _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_6__.VoxelTags.initData,
            _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_6__.VoxelTags.voxelIndex.buffer,
        ],
        getUnSyncData: () => false,
    }),
    chunkTags: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.chunkTags,
        commCheck: (options) => options.worldDataTags,
        getSyncData: () => _Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_3__.ChunkDataTags.initData,
        getUnSyncData: () => false,
    }),
    columnTags: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.columnTags,
        commCheck: (options) => options.worldDataTags,
        getSyncData: () => _Tags_ColumnTags_js__WEBPACK_IMPORTED_MODULE_4__.ColumnDataTags.initData,
        getUnSyncData: () => false,
    }),
    regionTags: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.regionTags,
        commCheck: (options) => options.worldDataTags,
        getSyncData: () => [_Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_5__.RegionDataTags.initData, _Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_5__.RegionHeaderTagManager.initData],
        getUnSyncData: () => false,
    }),
    voxelPalette: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.voxelPalette,
        commCheck: (options) => options.worldDataTags,
        getSyncData: () => [
            _Generators_VoxelDataGenerator_js__WEBPACK_IMPORTED_MODULE_0__.VoxelDataGenerator.palette._palette,
            _Generators_VoxelDataGenerator_js__WEBPACK_IMPORTED_MODULE_0__.VoxelDataGenerator.palette._map,
        ],
        getUnSyncData: () => false,
    }),
    stringMap: new DataSyncNode({
        dataSyncType: _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.registerStringMap,
        commCheck: () => true,
        getSyncData: (data) => data,
        getUnSyncData: () => false,
    }),
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Generators/VoxelDataGenerator.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Data/Generators/VoxelDataGenerator.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelDataGenerator": () => (/* binding */ VoxelDataGenerator)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DivineVoxelEngineWorld.js */ "../../DSLIBS/divineVoxelEngine/dist/World/DivineVoxelEngineWorld.js");
/* harmony import */ var _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/Voxel/VoxelPalette.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelPalette.js");
/* harmony import */ var _TagBuilders_VoxelTagBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TagBuilders/VoxelTagBuilder.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/TagBuilders/VoxelTagBuilder.js");
/* harmony import */ var _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/Voxel/VoxelTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelTags.js");
/* harmony import */ var _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Data/Constants/Tags/VoxelTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/VoxelTagIds.js");
/* harmony import */ var _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Data/Light/LightByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js");
//objects






const VoxelDataGenerator = {
    $generateVoxelData() {
        //build palette
        for (const [key, voxel] of _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVEW.voxelManager.voxelData) {
            this.palette.registerVoxel(voxel);
        }
        _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_1__.VoxelPaletteReader.setVoxelPalette(this.palette._palette, this.palette._map);
        //build index
        const indexBuffer = new SharedArrayBuffer(this.palette._count * 2);
        const voxelIndex = new Uint16Array(indexBuffer);
        let currentCount = 0;
        let currentParent = 0;
        for (let i = 2; i < this.palette._count; i++) {
            let newParent = _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_1__.VoxelPaletteReader.id.baseNumeric(i);
            if (newParent != currentParent) {
                currentParent = newParent;
                voxelIndex[i] = currentCount;
                currentCount++;
            }
        }
        //create data buffer
        const initData = _TagBuilders_VoxelTagBuilder_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTagBuilder.$INIT(_DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVEW.voxelManager.voxelData.size);
        const buffer = new SharedArrayBuffer(initData.bufferSize);
        initData.buffer = buffer;
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_3__.VoxelTags.$INIT(initData);
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_3__.VoxelTags.setBuffer(buffer);
        //build data
        for (const [key, voxel] of _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVEW.voxelManager.voxelData) {
            const baseID = _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_1__.VoxelPaletteReader.id.numberFromString(key);
            if (!baseID)
                continue;
            _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_3__.VoxelTags.setTagIndex(voxelIndex[baseID]);
            _TagBuilders_VoxelTagBuilder_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTagBuilder.setDefaults(_Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_3__.VoxelTags);
            for (const tag of voxel.tags) {
                const [id, value] = tag;
                if (id == _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_4__.VoxelTagIDs.lightValue) {
                    const v = value;
                    let sl = 0;
                    sl = _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_5__.LightData.setR(v[0], sl);
                    sl = _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_5__.LightData.setG(v[1], sl);
                    sl = _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_5__.LightData.setB(v[2], sl);
                    _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_3__.VoxelTags.setTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_4__.VoxelTagIDs.lightValue, sl);
                    continue;
                }
                _TagBuilders_VoxelTagBuilder_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTagBuilder.setNode(id, value, _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_3__.VoxelTags);
            }
        }
        _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVEW.data.voxelTags.sync(voxelIndex);
        _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVEW.data.voxelTags.$INIT(initData);
    },
    palette: {
        _count: 2,
        _palette: ["dve_air", "dve_barrier"],
        _map: {
            dve_air: 0,
            dve_barrier: 1,
        },
        registerVoxel(voxel) {
            this._palette[this._count] = voxel.id;
            this._map[voxel.id] = this._count;
            if (voxel.states) {
                for (let i = this._count; i <= this._count + voxel.states; i++) {
                    this._palette[i] = voxel.id;
                }
                this._count += voxel.states;
            }
            this._count++;
        },
        get() {
            return this._palette;
        },
        getMap() {
            return this._map;
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Generators/WorldDataGenerator.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Data/Generators/WorldDataGenerator.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldDataGenerator": () => (/* binding */ WorldDataGenerator)
/* harmony export */ });
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/Constants/DataHeaders.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/DataHeaders.js");
/* harmony import */ var _Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tags/ChunkTags.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ChunkTags.js");
/* harmony import */ var _Tags_ColumnTags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tags/ColumnTags.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ColumnTags.js");
/* harmony import */ var _Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tags/RegionTags.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/RegionTags.js");





const WorldDataGenerator = {
    chunk: {
        create(buffer = false) {
            if (buffer) {
                return _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__.Util.convertBufferToSAB(buffer);
            }
            const newBuffer = new SharedArrayBuffer(_Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_2__.ChunkDataTags.tagSize);
            _Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_2__.ChunkDataTags.setBuffer(newBuffer);
            _Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_2__.ChunkDataTags.setTag("#dve_header", _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_1__.DVEMessageHeader);
            _Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_2__.ChunkDataTags.setTag("#dve_data_type", _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataHeaders.chunk);
            return newBuffer;
        },
    },
    column: {
        create(buffer = false) {
            if (buffer) {
                return _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__.Util.convertBufferToSAB(buffer);
            }
            const newBuffer = new SharedArrayBuffer(_Tags_ColumnTags_js__WEBPACK_IMPORTED_MODULE_3__.ColumnDataTags.tagSize);
            _Tags_ColumnTags_js__WEBPACK_IMPORTED_MODULE_3__.ColumnDataTags.setBuffer(newBuffer);
            _Tags_ColumnTags_js__WEBPACK_IMPORTED_MODULE_3__.ColumnDataTags.setTag("#dve_header", _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_1__.DVEMessageHeader);
            _Tags_ColumnTags_js__WEBPACK_IMPORTED_MODULE_3__.ColumnDataTags.setTag("#dve_data_type", _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataHeaders.column);
            return newBuffer;
        },
    },
    region: {
        create(buffer = false) {
            if (buffer) {
                return _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__.Util.convertBufferToSAB(buffer);
            }
            const newBuffer = new SharedArrayBuffer(_Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_4__.RegionDataTags.tagSize);
            _Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_4__.RegionDataTags.setBuffer(newBuffer);
            _Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_4__.RegionDataTags.setTag("#dve_header", _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_1__.DVEMessageHeader);
            _Tags_RegionTags_js__WEBPACK_IMPORTED_MODULE_4__.RegionDataTags.setTag("#dve_data_type", _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataHeaders.region);
            return newBuffer;
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Managers/VoxelManager.js":
/*!*******************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Data/Managers/VoxelManager.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelManager": () => (/* binding */ VoxelManager)
/* harmony export */ });
const VoxelManager = {
    voxelData: new Map(),
    getVoxelData(id) {
        const voxelData = this.voxelData.get(id);
        if (!voxelData) {
            throw new Error(`Voxel with ${id} does not exists.`);
        }
        return voxelData;
    },
    registerVoxelData(data) {
        if (Array.isArray(data)) {
            for (const voxel of data) {
                this.voxelData.set(voxel.id, voxel);
            }
            return;
        }
        this.voxelData.set(data.id, data);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Data/TagBuilders/VoxelTagBuilder.js":
/*!*************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Data/TagBuilders/VoxelTagBuilder.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelTagBuilder": () => (/* binding */ VoxelTagBuilder)
/* harmony export */ });
/* harmony import */ var _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/Constants/Tags/VoxelTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/VoxelTagIds.js");
/* harmony import */ var divine_binary_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! divine-binary-tags */ "../../DSLIBS/divineBinaryTags/dist/index.js");
/* harmony import */ var _DataSync_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataSync.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/DataSync.js");
/* harmony import */ var _Data_Register_Register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/Register/Register.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Register/Register.js");




const VoxelTagBuilder = {
    _nodeMap: new Map(),
    _stringMaps: new Map(),
    _defaults: new Map(),
    addNode(node) {
        if (Array.isArray(node)) {
            for (const n of node) {
                this._nodeMap.set(n.id, n);
            }
            return;
        }
        this._nodeMap.set(node.id, node);
    },
    getNode(id) {
        return this._nodeMap.get(id);
    },
    setDefaults(tagManager) {
        for (const [key, node] of this._nodeMap) {
            const defaultValue = this._defaults.get(key);
            if (!defaultValue)
                continue;
            tagManager.setTag(key, Number(defaultValue));
        }
    },
    setNode(id, value, tagManager) {
        const node = this.getNode(id);
        if (!node)
            return;
        if (node.type == "number") {
            tagManager.setTag(node.id, Number(value));
        }
        if (node.type == "boolean") {
            tagManager.setTag(node.id, Number(value));
        }
        if (node.type == "number-array") {
            if (!Array.isArray(value))
                return false;
            let i = value.length;
            while (i--) {
                tagManager.setArrayTagValue(node.id, i, value[i]);
            }
        }
        if (node.type == "string-map") {
            const data = this._stringMaps.get(node.id);
            if (!data)
                return false;
            const v = String(value).trim();
            if (data.found[v] === undefined) {
                data.map.push(v);
                data.found[v] = data.count;
                data.count++;
            }
            tagManager.setTag(node.id, data.found[v]);
        }
    },
    $INIT(totalVoxels) {
        const tags = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_1__.TagManager("voxel-tag-manager");
        for (const [key, node] of this._nodeMap) {
            if (node.type == "number") {
                tags.registerTag({
                    id: node.id,
                    type: "typed-number",
                    numberType: node.numberType,
                });
                this._defaults.set(node.id, node.default);
                continue;
            }
            if (node.type == "number-array") {
                tags.registerTag({
                    id: node.id,
                    type: "typed-number-array",
                    numberType: node.numberType,
                    length: node.length,
                });
                continue;
            }
            if (node.type == "boolean") {
                tags.registerTag({
                    id: node.id,
                    type: "boolean",
                });
                this._defaults.set(node.id, node.default ? 1 : 0);
            }
            if (node.type == "string-map") {
                tags.registerTag({
                    id: node.id,
                    type: "typed-number",
                    numberType: "16ui",
                });
                this._stringMaps.set(node.id, {
                    count: 0,
                    found: {},
                    map: [],
                    allowedComms: node.allowedComms,
                });
            }
        }
        tags.$INIT({
            indexBufferMode: "shared",
            numberOfIndexes: totalVoxels,
        });
        return tags.initData;
    },
    $SYNC() {
        for (const [key, map] of this._stringMaps) {
            _DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.loopThroughComms((comm) => {
                if (map.allowedComms.includes(comm.name)) {
                    const data = ["voxel", key, map.map];
                    if (comm.name == "world") {
                        _Data_Register_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.stringMaps.syncStringMap(data);
                        return;
                    }
                    _DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.stringMap.syncInThread(comm.name, data);
                }
            });
        }
    },
};
VoxelTagBuilder.addNode([
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.substance,
        type: "string-map",
        allowedComms: ["constructor", "nexus", "fx", "world"],
    },
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.shapeID,
        type: "string-map",
        allowedComms: ["constructor"],
    },
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.colliderID,
        type: "string-map",
        allowedComms: ["nexus"],
    },
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.checkCollisions,
        type: "boolean",
        default: false,
    },
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.material,
        type: "string-map",
        allowedComms: ["nexus"],
    },
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.isLightSource,
        type: "boolean",
        default: false,
    },
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.lightValue,
        type: "number",
        numberType: "16ui",
        default: 0,
    },
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.isRich,
        type: "boolean",
        default: false,
    },
    {
        id: _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_0__.VoxelTagIDs.hardness,
        type: "number",
        numberType: "32ui",
        default: 0,
    },
]);


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ChunkTags.js":
/*!************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ChunkTags.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChunkDataTags": () => (/* binding */ ChunkDataTags),
/* harmony export */   "InitalizeChunkTags": () => (/* binding */ InitalizeChunkTags)
/* harmony export */ });
/* harmony import */ var _Data_World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/World/Chunk/ChunkTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Chunk/ChunkTags.js");
/* harmony import */ var divine_binary_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! divine-binary-tags */ "../../DSLIBS/divineBinaryTags/dist/index.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/Constants/Tags/WorldDataTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/WorldDataTagIds.js");
/* harmony import */ var _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Data/Constants/Tags/ChunkTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/ChunkTagIds.js");





const ChunkDataTags = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_1__.TagManager("chunk-tags");
ChunkDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.header,
    type: "header",
    numberType: "16ui",
});
ChunkDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.dataType,
    type: "header",
    numberType: "16ui",
});
ChunkDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.dimensionId,
    type: "typed-number",
    numberType: "16ui",
});
ChunkDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionX,
    type: "typed-number",
    numberType: "32i",
});
ChunkDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionY,
    type: "typed-number",
    numberType: "32i",
});
ChunkDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionZ,
    type: "typed-number",
    numberType: "32i",
});
ChunkDataTags.registerTag({
    id: _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_4__.ChunkTagIDs.minHeight,
    type: "typed-number",
    numberType: "8ui",
});
ChunkDataTags.registerTag({
    id: _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_4__.ChunkTagIDs.maxHeight,
    type: "typed-number",
    numberType: "8ui",
});
function InitalizeChunkTags() {
    ChunkDataTags.registerTag({
        id: _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_4__.ChunkTagIDs.heightMap,
        type: "typed-number-array",
        numberType: "32ui",
        length: _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.chunk.getArea() * 2,
    });
    ChunkDataTags.registerTag({
        id: _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_4__.ChunkTagIDs.voxelIDSegment,
        type: "typed-number-array",
        numberType: "16ui",
        length: _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.chunk.getVolume(),
    });
    ChunkDataTags.registerTag({
        id: _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_4__.ChunkTagIDs.voxelLightSegment,
        type: "typed-number-array",
        numberType: "16ui",
        length: _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.chunk.getVolume(),
    });
    ChunkDataTags.registerTag({
        id: _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_4__.ChunkTagIDs.voxelStateSegment,
        type: "typed-number-array",
        numberType: "16ui",
        length: _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.chunk.getVolume(),
    });
    ChunkDataTags.registerTag({
        id: _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_4__.ChunkTagIDs.voxelSecondaryIDSegment,
        type: "typed-number-array",
        numberType: "16ui",
        length: _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.chunk.getVolume(),
    });
    const initData = ChunkDataTags.$INIT({
        indexBufferMode: "shared",
    });
    _Data_World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_0__.ChunkTags.$INIT(initData);
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ColumnTags.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ColumnTags.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnDataTags": () => (/* binding */ ColumnDataTags),
/* harmony export */   "InitalizeColumnTags": () => (/* binding */ InitalizeColumnTags)
/* harmony export */ });
/* harmony import */ var divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-binary-tags */ "../../DSLIBS/divineBinaryTags/dist/index.js");
/* harmony import */ var _Data_World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/World/Column/ColumnTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Column/ColumnTags.js");
/* harmony import */ var _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/Constants/Tags/WorldDataTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/WorldDataTagIds.js");



const ColumnDataTags = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__.TagManager("column-tags");
ColumnDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataTagIDs.header,
    type: "header",
    numberType: "16ui",
});
ColumnDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataTagIDs.dataType,
    type: "header",
    numberType: "16ui",
});
ColumnDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataTagIDs.dimensionId,
    type: "typed-number",
    numberType: "16ui",
});
ColumnDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataTagIDs.positionX,
    type: "typed-number",
    numberType: "32i",
});
ColumnDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataTagIDs.positionY,
    type: "typed-number",
    numberType: "32i",
});
ColumnDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataTagIDs.positionZ,
    type: "typed-number",
    numberType: "32i",
});
ColumnDataTags.registerTag({
    id: "#dve_last_save_timestamp",
    type: "typed-number",
    numberType: "32ui",
});
ColumnDataTags.registerTag({
    id: "#dve_last_analyzer_update_timestamp",
    type: "typed-number",
    numberType: "32ui",
});
ColumnDataTags.registerTag({
    id: "#dve_is_stored",
    type: "boolean",
});
ColumnDataTags.registerTag({
    id: "#dve_is_world_gen_done",
    type: "boolean",
});
ColumnDataTags.registerTag({
    id: "#dve_is_world_sun_done",
    type: "boolean",
});
ColumnDataTags.registerTag({
    id: "#dve_is_world_propagation_done",
    type: "boolean",
});
ColumnDataTags.registerTag({
    id: "#dve_is_dirty",
    type: "boolean",
});
ColumnDataTags.registerTag({
    id: "#dve_persistent",
    type: "boolean",
});
function InitalizeColumnTags() {
    const initData = ColumnDataTags.$INIT({
        indexBufferMode: "shared",
    });
    _Data_World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_1__.ColumnTags.$INIT(initData);
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/RegionTags.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/RegionTags.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitalizeRegionTags": () => (/* binding */ InitalizeRegionTags),
/* harmony export */   "RegionDataTags": () => (/* binding */ RegionDataTags),
/* harmony export */   "RegionHeaderTagManager": () => (/* binding */ RegionHeaderTagManager)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _Data_World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/World/Region/RegionTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionTags.js");
/* harmony import */ var divine_binary_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! divine-binary-tags */ "../../DSLIBS/divineBinaryTags/dist/index.js");
/* harmony import */ var _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/Constants/Tags/WorldDataTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/WorldDataTagIds.js");




const RegionDataTags = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_2__.TagManager("region-tags");
RegionDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.header,
    type: "header",
    numberType: "16ui",
});
RegionDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.dataType,
    type: "header",
    numberType: "16ui",
});
RegionDataTags.registerTag({
    id: "#dve_total_players",
    type: "typed-number",
    numberType: "16ui",
});
RegionDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.dimensionId,
    type: "typed-number",
    numberType: "16ui",
});
RegionDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionX,
    type: "typed-number",
    numberType: "32i",
});
RegionDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionY,
    type: "typed-number",
    numberType: "32i",
});
RegionDataTags.registerTag({
    id: _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionZ,
    type: "typed-number",
    numberType: "32i",
});
const RegionHeaderTagManager = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_2__.TagManager("region-header-tags");
function InitalizeRegionTags() {
    const initData = RegionDataTags.$INIT({
        indexBufferMode: "shared",
    });
    _Data_World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_1__.RegionTags.$INIT(initData);
    RegionHeaderTagManager.registerTag({
        id: "#dved-column-sector-index",
        type: "typed-number-array",
        numberType: "16ui",
        length: _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.region.getColumnVolume(),
    });
    RegionHeaderTagManager.registerTag({
        id: "#dved-column-legnth-index",
        type: "typed-number-array",
        numberType: "16ui",
        length: _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.region.getColumnVolume(),
    });
    RegionHeaderTagManager.registerTag({
        id: "#dved-column-save-timestamp",
        type: "typed-number-array",
        numberType: "32ui",
        length: _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.region.getColumnVolume(),
    });
    const headerInitData = RegionHeaderTagManager.$INIT({
        indexBufferMode: "shared",
    });
    _Data_World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_1__.RegionHeaderTags.$INIT(headerInitData);
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/DivineVoxelEngineWorld.js":
/*!***************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/DivineVoxelEngineWorld.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEW": () => (/* binding */ DVEW)
/* harmony export */ });
/* harmony import */ var _Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Threads/Threads.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Threads/Threads.js");
/* harmony import */ var _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Queues/ConstructorQueues.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Queues/ConstructorQueues.js");
/* harmony import */ var _Common_Tasks_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Tasks/ConstructorTasks.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Tasks/ConstructorTasks.js");
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Data/DataSync.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/DataSync.js");
/* harmony import */ var _Data_DataManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/DataManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataManager.js");
/* harmony import */ var _Data_Managers_VoxelManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Data/Managers/VoxelManager.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Managers/VoxelManager.js");
/* harmony import */ var _Data_Items_ItemManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Data/Items/ItemManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Items/ItemManager.js");
/* harmony import */ var _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Data/Generators/WorldDataGenerator.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Generators/WorldDataGenerator.js");
/* harmony import */ var _Data_TagBuilders_VoxelTagBuilder_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Data/TagBuilders/VoxelTagBuilder.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/TagBuilders/VoxelTagBuilder.js");
/* harmony import */ var _Tools_Build_BuilderTool_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Tools/Build/BuilderTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Build/BuilderTool.js");
/* harmony import */ var _Tools_Brush_AdvancedBrushTool_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Tools/Brush/AdvancedBrushTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/AdvancedBrushTool.js");
/* harmony import */ var _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Tools/Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Tools/Data/WorldData/ColumnDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js");
/* harmony import */ var _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _Tools_Tasks_TasksTool_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Tools/Tasks/TasksTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Tasks/TasksTool.js");
/* harmony import */ var _Tools_Data_WorldData_HeightMapTool_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Tools/Data/WorldData/HeightMapTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/HeightMapTool.js");
/* harmony import */ var _Tools_Data_WorldData_RegionDataTool_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Tools/Data/WorldData/RegionDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/RegionDataTool.js");
/* harmony import */ var _Tools_Data_DataLoaderTool_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Tools/Data/DataLoaderTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataLoaderTool.js");
/* harmony import */ var _Init_InitWorldWorker_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Init/InitWorldWorker.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Init/InitWorldWorker.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Data_Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Data/Tags/ChunkTags.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Tags/ChunkTags.js");
/* harmony import */ var _Tasks_WorldTasks_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Tasks/WorldTasks.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Tasks/WorldTasks.js");
/* harmony import */ var _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Data/DataHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataHooks.js");
//threads

//queues

//tasks

//objects


//data





//tags

//tools









//functions





/**# Divine Voxel Engine World
 * ---
 * This handles everything in the world worker context.
 */
const DVEW = {
    environment: "browser",
    __settingsHaveBeenSynced: false,
    __renderIsDone: false,
    __serverIsDone: false,
    TC: threadcomm__WEBPACK_IMPORTED_MODULE_21__.ThreadComm,
    UTIL: _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_4__.Util,
    settings: _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_3__.EngineSettings,
    worldTasks: _Tasks_WorldTasks_js__WEBPACK_IMPORTED_MODULE_23__.WorldTasks,
    generators: {
        worldData: _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_9__.WorldDataGenerator,
    },
    data: _Data_DataManager_js__WEBPACK_IMPORTED_MODULE_6__.DataManager,
    dataSync: _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_5__.DataSync,
    fxComm: _Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.FXComm,
    dataComm: _Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.DataComm,
    nexusComm: _Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.NexusComm,
    parentComm: _Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.ParentComm,
    ccm: _Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.CCM,
    richWorldComm: _Threads_Threads_js__WEBPACK_IMPORTED_MODULE_0__.RichWorldComm,
    voxelManager: _Data_Managers_VoxelManager_js__WEBPACK_IMPORTED_MODULE_7__.VoxelManager,
    itemManager: _Data_Items_ItemManager_js__WEBPACK_IMPORTED_MODULE_8__.ItemManager,
    cQueues: _Common_Queues_ConstructorQueues_js__WEBPACK_IMPORTED_MODULE_1__.ConstructorQueues,
    cTasks: _Common_Tasks_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_2__.ConstructorTasks,
    tags: {
        voxels: _Data_TagBuilders_VoxelTagBuilder_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagBuilder,
        chunks: _Data_Tags_ChunkTags_js__WEBPACK_IMPORTED_MODULE_22__.ChunkDataTags,
    },
    isReady() {
        return (DVEW.ccm.isReady() &&
            DVEW.__settingsHaveBeenSynced &&
            (DVEW.__renderIsDone || DVEW.__serverIsDone));
    },
    syncSettings(data) {
        this.settings.syncSettings(data);
        _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_24__.DataHooks.settingsSynced.run(data);
        this.__settingsHaveBeenSynced = true;
    },
    async $INIT() {
        await (0,_Init_InitWorldWorker_js__WEBPACK_IMPORTED_MODULE_20__.InitWorldWorker)(this);
    },
    getAllTools() {
        return {
            brush: this.getBrush(),
            builder: this.getBuilder(),
            data: this.getDataTool(),
            chunkData: this.getChunkDataTool(),
            columnData: this.getColumnDataTool(),
            regonData: this.getRegionTool(),
            heightMap: this.getHeightMapTool(),
            tasks: this.getTasksTool(),
        };
    },
    getBrush() {
        return (0,_Tools_Brush_AdvancedBrushTool_js__WEBPACK_IMPORTED_MODULE_12__.GetAdvancedBrushTool)();
    },
    getBuilder() {
        return new _Tools_Build_BuilderTool_js__WEBPACK_IMPORTED_MODULE_11__.BuilderTool();
    },
    getDataTool() {
        return new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_15__.DataTool();
    },
    getRegionTool() {
        return new _Tools_Data_WorldData_RegionDataTool_js__WEBPACK_IMPORTED_MODULE_18__.RegionDataTool();
    },
    getChunkDataTool() {
        return new _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_13__.ChunkDataTool();
    },
    getColumnDataTool() {
        return new _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_14__.ColumnDataTool();
    },
    getHeightMapTool() {
        return new _Tools_Data_WorldData_HeightMapTool_js__WEBPACK_IMPORTED_MODULE_17__.HeightMapTool();
    },
    getTasksTool() {
        return (0,_Tools_Tasks_TasksTool_js__WEBPACK_IMPORTED_MODULE_16__.GetTasksTool)();
    },
    getDataLoaderTool() {
        return new _Tools_Data_DataLoaderTool_js__WEBPACK_IMPORTED_MODULE_19__.DataLoaderTool();
    },
};
DVEW.environment = _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_4__.Util.getEnviorment();
DVEW.TC.threadName = "world";
console.log("world");


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Hooks/Data/DataHooks.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Hooks/Data/DataHooks.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterDataHooks": () => (/* binding */ RegisterDataHooks)
/* harmony export */ });
/* harmony import */ var _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/DataHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataHooks.js");
/* harmony import */ var _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/Generators/WorldDataGenerator.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Generators/WorldDataGenerator.js");
/* harmony import */ var _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Data/DataSync.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/DataSync.js");
/* harmony import */ var _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DivineVoxelEngineWorld.js */ "../../DSLIBS/divineVoxelEngine/dist/World/DivineVoxelEngineWorld.js");




const RegisterDataHooks = () => {
    const tasks = _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_3__.DVEW.getTasksTool();
    let dataLoaderTool = null;
    if (_DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_3__.DVEW.settings.saveWorldData()) {
        dataLoaderTool = _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_3__.DVEW.getDataLoaderTool();
    }
    /*
   [chunks]
   */
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.chunk.onGetAsync.addToRun(async () => _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataGenerator.chunk.create());
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.chunk.onGetSync.addToRun(() => _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataGenerator.chunk.create());
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.chunk.onNew.addToRun(async (data) => {
        _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.chunk.sync(data);
    });
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.chunk.onRemove.addToRun((data) => {
        if (!dataLoaderTool) {
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.chunk.unSync(data);
            return;
        }
        dataLoaderTool.setLocation(data).saveColumn(() => {
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.chunk.unSync(data);
        });
    });
    /*
   [columns]
   */
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.column.onGetAsync.addToRun(async () => _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataGenerator.column.create());
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.column.onGetSync.addToRun(() => _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataGenerator.column.create());
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.column.onNew.addToRun(async (data) => _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.column.sync(data));
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.column.onRemove.addToRun((data) => {
        if (!dataLoaderTool) {
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.column.unSync(data);
            return;
        }
        dataLoaderTool.setLocation(data).saveColumn(() => {
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.column.unSync(data);
        });
    });
    /*
   [region]
   */
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.region.onGetAsync.addToRun(async () => _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataGenerator.region.create());
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.region.onGetSync.addToRun(() => _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataGenerator.region.create());
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.region.onNew.addToRun(async (data) => {
        _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.region.sync(data);
    });
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.region.onRemove.addToRun((data) => {
        if (!dataLoaderTool) {
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.region.unSync(data);
            return;
        }
        dataLoaderTool.setLocation(data).saveRegion(() => {
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.region.unSync(data);
        });
    });
    /*
   [paint]
   */
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.paint.onAddToRGBUpdate.addToRun((data) => {
        tasks.light.rgb.update.add(data[1], data[2], data[3], "main");
    });
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.paint.onRichVoxelPaint.addToRun((data) => {
        // DVEW.richWorldComm.setInitalData(data);
    });
    /*
   [dimensions]
   */
    _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.dimension.onRegisterDimension.addToRun((data) => {
        _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_3__.DVEW.cQueues.addQueue(data.id);
        _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync.dimesnion.sync(data.id);
    });
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Init/InitWorldWorker.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Init/InitWorldWorker.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitWorldWorker": () => (/* binding */ InitWorldWorker)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Hooks_Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Hooks/Data/DataHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Hooks/Data/DataHooks.js");


async function InitWorldWorker(DVEW) {
    let parent = "render";
    if (DVEW.environment == "node") {
        parent = "server";
    }
    await threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.$INIT("world", parent);
    (0,_Hooks_Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_1__.RegisterDataHooks)();
    await DVEW.UTIL.createPromiseCheck({
        check: () => {
            return DVEW.isReady();
        },
        checkInterval: 1,
    });
    DVEW.dataSync.$INIT();
    DVEW.cQueues.$INIT();
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Tasks/WorldTasks.js":
/*!*********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Tasks/WorldTasks.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldTasks": () => (/* binding */ WorldTasks)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/Generators/WorldDataGenerator.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Generators/WorldDataGenerator.js");
/* harmony import */ var _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/DataSync.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/DataSync.js");
/* harmony import */ var _Tools_Data_WorldData_RegionDataTool_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Tools/Data/WorldData/RegionDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/RegionDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ColumnDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _Data_World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Data/World/Region/RegionHeaderRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionHeaderRegister.js");
/* harmony import */ var _Tools_Data_DataLoaderTool_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Tools/Data/DataLoaderTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataLoaderTool.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _Tools_Build_BuilderTool_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Tools/Build/BuilderTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Build/BuilderTool.js");

//data










const regionTool = new _Tools_Data_WorldData_RegionDataTool_js__WEBPACK_IMPORTED_MODULE_4__.RegionDataTool();
const columnTool = new _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_5__.ColumnDataTool();
const chunkTool = new _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_6__.ChunkDataTool();
const dataLoaderTool = new _Tools_Data_DataLoaderTool_js__WEBPACK_IMPORTED_MODULE_8__.DataLoaderTool();
const builderTool = new _Tools_Build_BuilderTool_js__WEBPACK_IMPORTED_MODULE_10__.BuilderTool();
const loadInMap = new Map();
const WorldTasks = {
    addChunk: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.registerTasks("add-chunk", (location) => {
        const chunk = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.chunk.get(location);
        if (chunk) {
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_3__.DataSync.chunk.sync(location);
            return;
        }
        if (dataLoaderTool.isEnabled()) {
            _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__.WorldSpaces.column.getPositionLocation(location);
            const columnLocation = [..._Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__.WorldSpaces.column.getLocation()];
            if (loadInMap.has(columnLocation.toString()))
                return;
            loadInMap.set(columnLocation.toString(), true);
            dataLoaderTool.setLocation(columnLocation).loadIfExists((success) => {
                loadInMap.delete(columnLocation.toString());
                if (!success) {
                    builderTool.setLocation(columnLocation).fillColumn();
                }
            });
            return;
        }
        if (!chunk) {
            _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.chunk.add(location, _Data_Generators_WorldDataGenerator_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataGenerator.chunk.create());
        }
    }),
    unLoad: {
        unLoadColumn: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.registerTasks("unload-column", (data) => {
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_3__.DataSync.column.unSync(data);
            _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.column.remove(data);
            const region = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.region.get(data);
            if (region && region.columns.size == 0) {
                _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.region.remove(data);
                _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_3__.DataSync.region.unSync(data);
            }
        }),
    },
    load: {
        loadRegino: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.registerTasks("load-region", (data) => {
            regionTool.setBuffer(data[0]);
            const location = regionTool.getLocationData();
            _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.region.add(location, data[0]);
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_3__.DataSync.region.sync(location);
        }),
        loadReginoHeader: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.registerTasks("load-region-header", (data) => {
            _Data_World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_7__.RegionHeaderRegister.add(data[0], data[1]);
            const location = data[0];
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_3__.DataSync.regionHeader.sync(location);
        }),
        loadColumn: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.registerTasks("load-column", (data) => {
            columnTool.setBuffer(data[0]);
            const location = columnTool.getLocationData();
            _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.column.add(location, data[0]);
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_3__.DataSync.column.sync(location);
        }),
        loadChunk: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.registerTasks("load-chunk", (data) => {
            chunkTool.setBuffer(data[0]);
            const location = chunkTool.getLocationData();
            _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.chunk.add(location, data[0]);
            _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_3__.DataSync.chunk.sync(location);
        }),
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/Threads/Threads.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/Threads/Threads.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CCM": () => (/* binding */ CCM),
/* harmony export */   "DataComm": () => (/* binding */ DataComm),
/* harmony export */   "FXComm": () => (/* binding */ FXComm),
/* harmony export */   "NexusComm": () => (/* binding */ NexusComm),
/* harmony export */   "ParentComm": () => (/* binding */ ParentComm),
/* harmony export */   "RichWorldComm": () => (/* binding */ RichWorldComm)
/* harmony export */ });
/* harmony import */ var _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/DataSync.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/DataSync.js");
/* harmony import */ var threadcomm___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! threadcomm/ */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DivineVoxelEngineWorld.js */ "../../DSLIBS/divineVoxelEngine/dist/World/DivineVoxelEngineWorld.js");



const CCM = threadcomm___WEBPACK_IMPORTED_MODULE_1__.ThreadComm.createCommManager({
    name: "constructor",
    onPortSet(port, commName) { },
});
_Data_DataSync_js__WEBPACK_IMPORTED_MODULE_0__.DataSync.registerComm(CCM);
const DataComm = threadcomm___WEBPACK_IMPORTED_MODULE_1__.ThreadComm.createComm("data-loader", {});
_Data_DataSync_js__WEBPACK_IMPORTED_MODULE_0__.DataSync.registerComm(DataComm);
const FXComm = threadcomm___WEBPACK_IMPORTED_MODULE_1__.ThreadComm.createComm("fx");
_Data_DataSync_js__WEBPACK_IMPORTED_MODULE_0__.DataSync.registerComm(FXComm);
const NexusComm = threadcomm___WEBPACK_IMPORTED_MODULE_1__.ThreadComm.createComm("nexus");
_Data_DataSync_js__WEBPACK_IMPORTED_MODULE_0__.DataSync.registerComm(NexusComm, {
    materials: true,
    colliders: true,
});
const RichWorldComm = threadcomm___WEBPACK_IMPORTED_MODULE_1__.ThreadComm.createComm("rich-world");
const ParentComm = threadcomm___WEBPACK_IMPORTED_MODULE_1__.ThreadComm.parent;
ParentComm.listenForMessage("start", function () {
    _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_2__.DVEW.__serverIsDone = true;
});
ParentComm.listenForMessage("re-start", function () { });
ParentComm.listenForMessage("sync-settings", (data, event) => {
    if (!event)
        return;
    const settings = data[1];
    _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_2__.DVEW.syncSettings(settings);
});


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/World/index.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/World/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEW": () => (/* reexport safe */ _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVEW)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineWorld_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DivineVoxelEngineWorld.js */ "../../DSLIBS/divineVoxelEngine/dist/World/DivineVoxelEngineWorld.js");



/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Player/dist/Data/index.js":
/*!*********************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Player/dist/Data/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$RegisterPlayerData": () => (/* reexport safe */ _RegisterPlayerData_js__WEBPACK_IMPORTED_MODULE_3__.$RegisterPlayerData),
/* harmony export */   "PlayerManager": () => (/* reexport safe */ _PlayerManager_js__WEBPACK_IMPORTED_MODULE_0__.PlayerManager),
/* harmony export */   "PlayerPhysicsData": () => (/* reexport safe */ _PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_1__.PlayerPhysicsData),
/* harmony export */   "PlayerPhysicsStatesValues": () => (/* reexport safe */ _PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_1__.PlayerPhysicsStatesValues),
/* harmony export */   "PlayerPhysicsTagIDs": () => (/* reexport safe */ _PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_1__.PlayerPhysicsTagIDs),
/* harmony export */   "PlayerPhysicsTags": () => (/* reexport safe */ _PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_1__.PlayerPhysicsTags),
/* harmony export */   "PlayerStatsData": () => (/* reexport safe */ _PlayerStatsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerStatsData),
/* harmony export */   "PlayerStatsTagIDs": () => (/* reexport safe */ _PlayerStatsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerStatsTagIDs),
/* harmony export */   "PlayerStatsTags": () => (/* reexport safe */ _PlayerStatsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerStatsTags)
/* harmony export */ });
/* harmony import */ var _PlayerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerManager.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/PlayerManager.js");
/* harmony import */ var _PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerPhysicsData.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/PlayerPhysicsData.js");
/* harmony import */ var _PlayerStatsData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerStatsData.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/PlayerStatsData.js");
/* harmony import */ var _RegisterPlayerData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterPlayerData.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/RegisterPlayerData.js");






/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Player/dist/World/InitWorldPlayer.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Player/dist/World/InitWorldPlayer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INIT_WORLD_PLAYER": () => (/* binding */ INIT_WORLD_PLAYER)
/* harmony export */ });
/* harmony import */ var _Data_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/index.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/index.js");
/* harmony import */ var _WorldPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorldPlayer.js */ "../../DSLIBS/dvePlugIns/Player/dist/World/WorldPlayer.js");


async function SetUpPlayerData(DVEW) {
    let playerDataReady = false;
    DVEW.nexusComm.listenForMessage("connect-player-tags", (data) => {
        _Data_index_js__WEBPACK_IMPORTED_MODULE_0__.PlayerManager.physics = new _Data_index_js__WEBPACK_IMPORTED_MODULE_0__.PlayerPhysicsData(data[1], data[2]);
        playerDataReady = true;
    });
    DVEW.nexusComm.sendMessage("request-player-tags", []);
    await DVEW.UTIL.createPromiseCheck({
        check: () => {
            if (!playerDataReady) {
                DVEW.nexusComm.sendMessage("request-player-tags", []);
            }
            return playerDataReady;
        },
        checkInterval: 1,
    });
}
const INIT_WORLD_PLAYER = async (DVEW) => {
    await SetUpPlayerData(DVEW);
    return new _WorldPlayer_js__WEBPACK_IMPORTED_MODULE_1__.WorldPlayer(DVEW, _Data_index_js__WEBPACK_IMPORTED_MODULE_0__.PlayerManager);
};


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Player/dist/World/WorldPlayer.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Player/dist/World/WorldPlayer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldPlayer": () => (/* binding */ WorldPlayer)
/* harmony export */ });
/* harmony import */ var divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/Math/index.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/index.js");

class WorldPlayer {
    DVEW;
    manager;
    start = {
        x: 0,
        y: 0,
        z: 0,
    };
    end = {
        x: 0,
        y: 0,
        z: 0,
    };
    reachDistance = 10;
    dataTool;
    constructor(DVEW, manager) {
        this.DVEW = DVEW;
        this.manager = manager;
        this.dataTool = DVEW.getDataTool();
    }
    update() {
        this.start.x = this.manager.physics.position.x;
        this.start.y =
            this.manager.physics.position.y + this.manager.physics.eyeLevel;
        this.start.z = this.manager.physics.position.z;
        this.end.x =
            this.manager.physics.direction.x * this.reachDistance + this.start.x;
        this.end.y =
            this.manager.physics.direction.y * this.reachDistance + this.start.y;
        this.end.z =
            this.manager.physics.direction.z * this.reachDistance + this.start.z;
        const voxels = (0,divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__.VisitAll)(this.start, this.end);
        let foundVoxel = false;
        for (let i = 0; i < voxels.length; i += 3) {
            const x = voxels[i];
            const y = voxels[i + 1];
            const z = voxels[i + 2];
            if (!this.dataTool.loadInAt(x, y, z))
                continue;
            const substance = this.dataTool.getSubstance();
            if (substance == "#dve_liquid")
                continue;
            if (this.dataTool.isRenderable()) {
                this.manager.physics.pick.position.x = x;
                this.manager.physics.pick.position.y = y;
                this.manager.physics.pick.position.z = z;
                foundVoxel = true;
                break;
            }
        }
        if (!foundVoxel)
            this.manager.physics.pick.position.set(-Infinity, 0, 0);
    }
}


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Player/dist/World/index.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Player/dist/World/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INIT_WORLD_PLAYER": () => (/* reexport safe */ _InitWorldPlayer_js__WEBPACK_IMPORTED_MODULE_1__.INIT_WORLD_PLAYER),
/* harmony export */   "WorldPlayer": () => (/* reexport safe */ _WorldPlayer_js__WEBPACK_IMPORTED_MODULE_0__.WorldPlayer)
/* harmony export */ });
/* harmony import */ var _WorldPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorldPlayer.js */ "../../DSLIBS/dvePlugIns/Player/dist/World/WorldPlayer.js");
/* harmony import */ var _InitWorldPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InitWorldPlayer.js */ "../../DSLIBS/dvePlugIns/Player/dist/World/InitWorldPlayer.js");




/***/ }),

/***/ "./node_modules/simloop/SimulationLoop.js":
/*!************************************************!*\
  !*** ./node_modules/simloop/SimulationLoop.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimulationLoop": () => (/* binding */ SimulationLoop)
/* harmony export */ });
const SimulationLoop = {
    speed: 0,
    _delta: 0,
    _previous: 0,
    _performance: {},
    _intervals: new Map(),
    async $INIT(speed) {
        this.speed = speed;
        if (performance) {
            this._performance = performance;
        }
        else {
            //@ts-ignore
            if (require) {
                //@ts-ignore
                this._performance = require("perf_hooks").performance;
            }
            else {
                //@ts-ignore
                this._performance = (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! perf_hooks */ "perf_hooks", 19))).performance;
            }
        }
        this._previous = this._performance.now();
    },
    _round(n) {
        const d = Math.floor(n / 10) * 10;
        if (d < 10)
            return 10;
        return d;
    },
    registerInterval(interval) {
        this._intervals.set(this._round(interval), {
            delta: 0,
            functions: [],
        });
    },
    addToInterval(interval, run) {
        const inte = this._intervals.get(this._round(interval));
        if (!inte)
            return;
        inte.functions.push(run);
    },
    run() {
        const n = this._performance.now();
        this._delta = n - this._previous;
        this._previous = n;
        const roundedDelta = this._round(this._delta);
        for (const [inte, data] of this._intervals) {
            if (inte < roundedDelta) {
                data.functions.forEach((_) => _());
                continue;
            }
            if (data.delta + roundedDelta >= inte) {
                data.functions.forEach((_) => _(data.delta + roundedDelta));
                data.delta = 0;
                continue;
            }
            if (data.delta < inte) {
                data.delta += roundedDelta;
            }
        }
        setTimeout(() => {
            this.run();
        }, this.speed / 2);
    },
};


/***/ }),

/***/ "./node_modules/simloop/index.js":
/*!***************************************!*\
  !*** ./node_modules/simloop/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimulationLoop": () => (/* reexport safe */ _SimulationLoop_js__WEBPACK_IMPORTED_MODULE_0__.SimulationLoop)
/* harmony export */ });
/* harmony import */ var _SimulationLoop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimulationLoop.js */ "./node_modules/simloop/SimulationLoop.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["DSLIBS_divineVoxelEngine_dist_Data_Settings_EngineSettings_js-DSLIBS_threadComm_dist_index_js","DSLIBS_divineVoxelEngine_dist_Common_Threads_Contracts_DataSync_js-DSLIBS_divineVoxelEngine_d-d7fdd9","DSLIBS_divineVoxelEngine_dist_Math_index_js-DSLIBS_dvePlugIns_Player_dist_Data_PlayerManager_-2f4e53"], () => (__webpack_require__("./compiled/dev/client/Contexts/World/world.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".DVE.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"compiled_dev_client_Contexts_World_world_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdve_testing"] = self["webpackChunkdve_testing"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all(["DSLIBS_divineVoxelEngine_dist_Data_Settings_EngineSettings_js-DSLIBS_threadComm_dist_index_js","DSLIBS_divineVoxelEngine_dist_Common_Threads_Contracts_DataSync_js-DSLIBS_divineVoxelEngine_d-d7fdd9","DSLIBS_divineVoxelEngine_dist_Math_index_js-DSLIBS_dvePlugIns_Player_dist_Data_PlayerManager_-2f4e53"].map(__webpack_require__.e, __webpack_require__)).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=compiled_dev_client_Contexts_World_world_js.DVE.js.map