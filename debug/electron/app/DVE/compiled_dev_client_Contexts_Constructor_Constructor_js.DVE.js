/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compiled/dev/client/Contexts/Constructor/Constructor.js":
/*!*****************************************************************!*\
  !*** ./compiled/dev/client/Contexts/Constructor/Constructor.js ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Contexts_Constructor_INIT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Contexts/Constructor/INIT.js */ "./compiled/dev/core/Contexts/Constructor/INIT.js");
/* harmony import */ var _core_data_client_Functions_RegisterVoxelConstructors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/client/Functions/RegisterVoxelConstructors.js */ "./compiled/dev/core/data/client/Functions/RegisterVoxelConstructors.js");


const DVEC = await (0,_core_Contexts_Constructor_INIT_js__WEBPACK_IMPORTED_MODULE_0__.$INITConstructor)(_core_data_client_Functions_RegisterVoxelConstructors_js__WEBPACK_IMPORTED_MODULE_1__.$RegisterVoxelConstructors);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./compiled/dev/core/Contexts/Constructor/INIT.js":
/*!********************************************************!*\
  !*** ./compiled/dev/core/Contexts/Constructor/INIT.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$INITConstructor": () => (/* binding */ $INITConstructor)
/* harmony export */ });
/* harmony import */ var divine_voxel_engine_Constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/Constructor */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/index.js");

async function $INITConstructor(registerVoxelConstructor) {
    if (registerVoxelConstructor) {
        registerVoxelConstructor(divine_voxel_engine_Constructor__WEBPACK_IMPORTED_MODULE_0__.DVEC);
    }
    await divine_voxel_engine_Constructor__WEBPACK_IMPORTED_MODULE_0__.DVEC.$INIT();
    return divine_voxel_engine_Constructor__WEBPACK_IMPORTED_MODULE_0__.DVEC;
}


/***/ }),

/***/ "./compiled/dev/core/data/client/Functions/RegisterVoxelConstructors.js":
/*!******************************************************************************!*\
  !*** ./compiled/dev/core/data/client/Functions/RegisterVoxelConstructors.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$RegisterVoxelConstructors": () => (/* binding */ $RegisterVoxelConstructors)
/* harmony export */ });
/* harmony import */ var _Voxels_LightDebugBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Voxels/LightDebugBox.js */ "./compiled/dev/core/data/client/Voxels/LightDebugBox.js");
/* harmony import */ var _Voxels_MarkerBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Voxels/MarkerBox.js */ "./compiled/dev/core/data/client/Voxels/MarkerBox.js");
/* harmony import */ var _Voxels_LiquidDreamEther_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Voxels/LiquidDreamEther.js */ "./compiled/dev/core/data/client/Voxels/LiquidDreamEther.js");
//types
//voxels



function $RegisterVoxelConstructors(DVEC, voxels = []) {
    (0,_Voxels_LightDebugBox_js__WEBPACK_IMPORTED_MODULE_0__.GetLightDebugBox)(DVEC);
    (0,_Voxels_MarkerBox_js__WEBPACK_IMPORTED_MODULE_1__.GetMarkerBox)(DVEC);
    (0,_Voxels_LiquidDreamEther_js__WEBPACK_IMPORTED_MODULE_2__.GetDreamEther)(DVEC);
    const vm = DVEC.voxelManager;
    vm.registerVoxel([
        //debug
        vm.defaults.box.simple("dve_debugbox", {
            top: ["#dve_solid", "debug", "top"],
            bottom: ["#dve_solid", "debug", "bottom"],
            north: ["#dve_solid", "debug", "north"],
            south: ["#dve_solid", "debug", "south"],
            east: ["#dve_solid", "debug", "east"],
            west: ["#dve_solid", "debug", "west"],
        }),
        vm.defaults.box.simple("dve_dataholder", [
            "#dve_solid",
            "data-holder",
            "front",
        ]),
        //dream
        vm.defaults.box.simple("dve_dreamgrassblock", [
            "#dve_flora",
            "dreamgrassblock",
            "grassy-top",
        ]),
        vm.defaults.box.pillar("dve_dreamstonepillar", {
            top: ["#dve_solid", "dreamstone-pillar", "top"],
            bottom: ["#dve_solid", "dreamstone-pillar", "top"],
            sideBottom: ["#dve_solid", "dreamstone-pillar", "side-bottom"],
            sideMiddle: ["#dve_solid", "dreamstone-pillar"],
            sideTop: ["#dve_solid", "dreamstone-pillar", "side-top"],
            sideFloat: ["#dve_solid", "dreamstone-pillar", "top"],
        }),
        vm.defaults.box.pillar("dve_dreamstone", {
            top: ["#dve_solid", "dreamstone", "grassy-top"],
            bottom: ["#dve_solid", "dreamstone"],
            sideBottom: ["#dve_solid", "dreamstone"],
            sideMiddle: ["#dve_solid", "dreamstone"],
            sideTop: ["#dve_solid", "dreamstone", "grassy-side"],
            sideFloat: ["#dve_solid", "dreamstone", "grassy-side"],
        }),
        vm.defaults.box.simple("dve_dreamlamp", ["#dve_solid", "dreamlamp"]),
        vm.defaults.box.pillar("dve_dreamstoneslab", {
            top: ["#dve_solid", "dreamstone", "grassy-top"],
            bottom: ["#dve_solid", "dreamstone"],
            sideBottom: ["#dve_solid", "dreamstone"],
            sideMiddle: ["#dve_solid", "dreamstone"],
            sideTop: ["#dve_solid", "dreamstone", "grassy-side"],
            sideFloat: ["#dve_solid", "dreamstone", "grassy-side"],
        }),
        vm.defaults.box.simple("dve_dream-log", ["#dve_solid", "dream-log"]),
        vm.defaults.box.simple("dve_dreamstone-stair", [
            "#dve_solid",
            "dreamstone",
        ]),
        vm.defaults.panel.simple("dve_dreamgrass", ["#dve_flora", "dreamgrass"]),
        vm.defaults.panel.simple("dve_dreamvine", ["#dve_flora", "dream-vine"]),
        vm.defaults.box.simple("dve_dream-leafs", ["#dve_flora", "dream-leafs"]),
        //dread
        vm.defaults.box.pillar("dve_dreadstonepillar", {
            top: ["#dve_solid", "dreadstone-pillar", "top"],
            bottom: ["#dve_solid", "dreadstone-pillar", "top"],
            sideBottom: ["#dve_solid", "dreadstone-pillar", "side-bottom"],
            sideMiddle: ["#dve_solid", "dreadstone-pillar"],
            sideTop: ["#dve_solid", "dreadstone-pillar", "side-top"],
            sideFloat: ["#dve_solid", "dreadstone-pillar", "top"],
        }),
        vm.defaults.box.pillar("dve_dreadstone", {
            top: ["#dve_solid", "dreadstone", "grassy-top"],
            bottom: ["#dve_solid", "dreadstone"],
            sideBottom: ["#dve_solid", "dreadstone"],
            sideMiddle: ["#dve_solid", "dreadstone"],
            sideTop: ["#dve_solid", "dreadstone", "grassy-side"],
            sideFloat: ["#dve_solid", "dreadstone", "grassy-side"],
        }),
        vm.defaults.box.simple("dve_dreadlamp", ["#dve_solid", "dreadlamp"]),
        vm.defaults.liquid.simple("dve_liquiddreadether", [
            ["#dve_liquid", "liquid-dread-ether", "still-1"],
            ["#dve_liquid", "liquid-dread-ether", "still-1"],
        ]),
        vm.defaults.panel.simple("dve_dreadgrass", ["#dve_flora", "dreadgrass"]),
    ]);
}


/***/ }),

/***/ "./compiled/dev/core/data/client/Voxels/LightDebugBox.js":
/*!***************************************************************!*\
  !*** ./compiled/dev/core/data/client/Voxels/LightDebugBox.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetLightDebugBox": () => (/* binding */ GetLightDebugBox)
/* harmony export */ });
const getData = (dataTool, x, y, z) => {
    let data = 0;
    if (dataTool.loadInAt(x, y, z)) {
        data = dataTool.getLight();
    }
    return data;
};
function GetLightDebugBox(DVEC) {
    const textures = [];
    DVEC.hooks.texturesRegistered.addToRun((textureMangager) => {
        for (let i = 0; i < 16; i++) {
            textures.push(textureMangager.getTextureUV([
                "#dve_solid",
                "light-debug",
                `light-level-${i}`,
            ]));
        }
    });
    return DVEC.voxelManager.registerVoxel({
        id: "dve_lightdebug",
        process(templater) {
            const [dimension, x, y, z] = templater.currentVoxel.getLocation();
            const dt = templater.utilDataTool;
            if (templater.isFaceExpposed("top")) {
                templater
                    .addUV(textures[getData(dt, x, y + 1, z) || 0])
                    .addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("bottom")) {
                templater
                    .addUV(textures[getData(dt, x, y - 1, z) || 0])
                    .addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("east")) {
                templater
                    .addUV(textures[getData(dt, x + 1, y, z) || 0])
                    .addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("west")) {
                templater
                    .addUV(textures[getData(dt, x - 1, y, z) || 0])
                    .addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("south")) {
                templater
                    .addUV(textures[getData(dt, x, y, z - 1) || 0])
                    .addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("north")) {
                templater
                    .addUV(textures[getData(dt, x, y, z + 1) || 0])
                    .addOverlayUVs([0]);
            }
            templater.processVoxelLight();
        },
    });
}


/***/ }),

/***/ "./compiled/dev/core/data/client/Voxels/LiquidDreamEther.js":
/*!******************************************************************!*\
  !*** ./compiled/dev/core/data/client/Voxels/LiquidDreamEther.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetDreamEther": () => (/* binding */ GetDreamEther)
/* harmony export */ });
const checkSets = {
    north: [
        [0, 1],
        [1, 1],
        [-1, 1],
    ],
    south: [
        [0, -1],
        [1, -1],
        [-1, -1],
    ],
    east: [
        [1, 0],
        [1, -1],
        [1, 1],
    ],
    west: [
        [-1, 0],
        [-1, -1],
        [-1, 1],
    ],
};
const overlayTextures = [];
const uvsSets = {
    north: {
        "0|": 0,
        "1|0|1|": 1,
        "1|1|0|": 2,
        "1|0|0|": 3,
    },
    south: {
        "0|": 4,
        "1|0|1|": 5,
        "1|1|0|": 6,
        "1|0|0|": 7,
    },
    east: {
        "0|": 8,
    },
    west: {
        "0|": 9,
    },
};
const getUV = (direction, x, y, z, data) => {
    let key = "";
    const sets = checkSets[direction];
    for (let i = 0; i < sets.length; i++) {
        if (i > 0 && (direction == "west" || direction == "east"))
            break;
        const set = sets[i];
        const cx = x + set[0];
        const cz = z + set[1];
        const check = data.isSameVoxel(cx, y, cz);
        if (check) {
            key += "1|";
        }
        else {
            key += "0|";
            if (i == 0)
                break;
        }
    }
    if (uvsSets[direction][key] == undefined)
        return 0;
    const index = uvsSets[direction][key];
    return overlayTextures[index];
};
let uv = 0;
function GetDreamEther(DVEC) {
    DVEC.hooks.texturesRegistered.addToRun((textureManager) => {
        uv = textureManager.getTextureUV(["#dve_liquid", "liquid-dream-ether", "still-1"]);
        overlayTextures.push(textureManager.getTextureUV(["#dve_liquid", "foam", "top"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "ctr"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "ctl"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "ctltr"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "bottom"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "cbr"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "cbl"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "cblbr"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "right"], true), textureManager.getTextureUV(["#dve_liquid", "foam", "left"], true));
    });
    DVEC.voxelManager.registerVoxel({
        id: "dve_liquiddreamether",
        process(templater) {
            if (templater.isFaceExpposed("top")) {
                templater.addUV(uv);
                if (templater.currentVoxel.getLevel() == 15 &&
                    templater.currentVoxel.getLevelState() != 1) {
                    const x = templater.currentVoxel.x;
                    const y = templater.currentVoxel.y;
                    const z = templater.currentVoxel.z;
                    templater.addOverlayUVs([
                        getUV("north", x, y, z, templater.currentVoxel),
                        getUV("south", x, y, z, templater.currentVoxel),
                        getUV("east", x, y, z, templater.currentVoxel),
                        getUV("west", x, y, z, templater.currentVoxel),
                    ]);
                }
                else {
                    templater.addOverlayUVs([0]);
                }
            }
            if (templater.isFaceExpposed("bottom")) {
                templater.addUV(uv).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("east")) {
                templater.addUV(uv).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("west")) {
                templater.addUV(uv).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("south")) {
                templater.addUV(uv).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("north")) {
                templater.addUV(uv).addOverlayUVs([0]);
            }
            templater.processVoxelLight(true);
        },
    });
}


/***/ }),

/***/ "./compiled/dev/core/data/client/Voxels/MarkerBox.js":
/*!***********************************************************!*\
  !*** ./compiled/dev/core/data/client/Voxels/MarkerBox.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetMarkerBox": () => (/* binding */ GetMarkerBox)
/* harmony export */ });
function GetMarkerBox(DVEC) {
    const textures = [];
    DVEC.hooks.texturesRegistered.addToRun((textureMangager) => {
        for (let i = 0; i < 16; i++) {
            textures.push(textureMangager.getTextureUV(["#dve_solid", "light-debug", `light-level-${i}`]));
        }
    });
    return DVEC.voxelManager.registerVoxel({
        id: "dve_markerbox",
        process(templater) {
            const uv = textures[templater.currentVoxel.getState()];
            if (templater.isFaceExpposed("top")) {
                templater.addUV(textures[uv]).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("bottom")) {
                templater.addUV(textures[uv]).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("east")) {
                templater.addUV(textures[uv]).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("west")) {
                templater.addUV(textures[uv]).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("south")) {
                templater.addUV(textures[uv]).addOverlayUVs([0]);
            }
            if (templater.isFaceExpposed("north")) {
                templater.addUV(textures[uv]).addOverlayUVs([0]);
            }
            templater.processVoxelLight();
        },
    });
}


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

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/Analyzer.js":
/*!****************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/Analyzer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Analyzer": () => (/* binding */ Analyzer)
/* harmony export */ });
/* harmony import */ var _Propagation_Flow_Functions_FlowUpdate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Propagation/Flow/Functions/FlowUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/Functions/FlowUpdate.js");
/* harmony import */ var _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Propagation/Propagation.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Propagation.js");
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var _Constructor_DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Constructor/DivineVoxelEngineConstructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/DivineVoxelEngineConstructor.js");
/* harmony import */ var _AnalyzerProcessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnalyzerProcessor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/AnalyzerProcessor.js");
/* harmony import */ var _AnalyzerUpdater_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnalyzerUpdater.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/AnalyzerUpdater.js");
/* harmony import */ var _Tasks_TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Tasks/TasksRequest.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/TasksRequest.js");
/* harmony import */ var _Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Tools/Data/ConstructorDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Data/ConstructorDataTool.js");
//propagation


//objects





//tools

const mainDT = (0,_Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_7__.GetConstructorDataTool)();
const secondaryDT = (0,_Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_7__.GetConstructorDataTool)();
const Analyzer = {
    updater: _AnalyzerUpdater_js__WEBPACK_IMPORTED_MODULE_5__.AnalyzerUpdater,
    processor: _AnalyzerProcessor_js__WEBPACK_IMPORTED_MODULE_4__.AnalyzerProcessor,
    _flowChecks: [
        [0, -1, 0],
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
    ],
    async runPropagation(data) {
        const options = {
            light: _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_2__.EngineSettings.doLight(),
            flow: _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_2__.EngineSettings.doFlow(),
        };
        mainDT.setDimension(data[0][0]);
        secondaryDT.setDimension(data[0][0]);
        const tasks = _Tasks_TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getVoxelUpdateRequests(data[0], "none", "self");
        this.processor.goThroughColumn(data[0], (x, y, z) => {
            if (!mainDT.loadInAt(x, y, z))
                return;
            const substance = mainDT.getSubstance();
            if (options.light) {
                if (mainDT.isLightSource()) {
                    tasks.queues.rgb.update.push(x, y, z);
                }
            }
            if (options.flow) {
                if (substance == "#dve_liquid" || substance == "#dve_magma") {
                    let add = false;
                    for (const check of this._flowChecks) {
                        if (secondaryDT.loadInAt(x + check[0], y + check[1], z + check[2])) {
                            if (secondaryDT.isAir()) {
                                add = true;
                                break;
                            }
                        }
                    }
                    if (add) {
                        tasks.queues.flow.update.queue.push([x, y, z]);
                    }
                }
            }
        });
        tasks.start();
        _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_1__.Propagation.rgb.update(tasks);
        const dimension = data[0][0];
        for (const flowUpdate of tasks.queues.flow.update.queue) {
            const [x, y, z] = flowUpdate;
            if (!mainDT.loadInAt(x, y, z))
                continue;
            await (0,_Propagation_Flow_Functions_FlowUpdate_js__WEBPACK_IMPORTED_MODULE_0__.FlowUpdate)(_Tasks_TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getFlowUpdateRequest([dimension, x, y, z], "none", "self"), false, mainDT.getStringId());
        }
        tasks.stop();
    },
    async runUpdate(data) {
        if (!this.processor.columnTool.setLocation(data[0]).loadIn())
            return;
        const deltaTime = Date.now() - this.processor.columnTool.getLastAnalyzerUpdateTimestamp();
        const location = [...data[0]];
        this.processor.goThroughColumn(data[0], (x, y, z) => {
            if (!mainDT.loadInAt(x, y, z))
                return;
            location[1] = x;
            location[2] = y;
            location[3] = z;
            const run = this.updater.getVoxel(mainDT.getStringId());
            if (!run)
                return;
            run(location, deltaTime, this, _Constructor_DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_3__.DVEC);
        });
        this.processor.columnTool.setLastAnalyzerUpdateTimestamp();
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/AnalyzerProcessor.js":
/*!*************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/AnalyzerProcessor.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyzerProcessor": () => (/* binding */ AnalyzerProcessor)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ColumnDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_HeightMapTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Tools/Data/WorldData/HeightMapTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/HeightMapTool.js");
/* harmony import */ var _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");





const columnTool = new _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_1__.ColumnDataTool();
const heightMapTool = new _Tools_Data_WorldData_HeightMapTool_js__WEBPACK_IMPORTED_MODULE_2__.HeightMapTool();
const chunkTool = new _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_3__.ChunkDataTool();
const AnalyzerProcessor = {
    columnTool: columnTool,
    chunkTool: chunkTool,
    goThroughColumn(location, run) {
        if (!columnTool.setLocation(location).loadIn())
            return;
        _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_4__.WorldRegister.cache.enable();
        const column = columnTool.getColumn();
        let maxX = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.chunk._bounds.x + location[1];
        let maxZ = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.chunk._bounds.z + location[3];
        for (const [index, chunk] of column.chunks) {
            heightMapTool.chunk.setChunk(chunk);
            chunkTool.setChunk(chunk);
            const [dimension, cx, cy, cz] = chunkTool.getLocationData();
            let [minY, maxY] = heightMapTool.chunk.getMinMax();
            minY += cy;
            maxY += cy + 1;
            for (let x = cx; x < maxX; x += 1) {
                for (let z = cz; z < maxZ; z += 1) {
                    for (let y = minY; y < maxY; y += 1) {
                        run(x, y, z, columnTool);
                    }
                }
            }
        }
        _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_4__.WorldRegister.cache.disable();
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/AnalyzerUpdater.js":
/*!***********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/AnalyzerUpdater.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyzerUpdater": () => (/* binding */ AnalyzerUpdater)
/* harmony export */ });
const AnalyzerUpdater = {
    _voxels: new Map(),
    registerVoxel(id, run) {
        this._voxels.set(id, run);
    },
    getVoxel(id) {
        const run = this._voxels.get(id);
        if (!run)
            return false;
        return run;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Builder.js":
/*!**************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Builder.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Builder": () => (/* binding */ Builder)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DivineVoxelEngineConstructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/DivineVoxelEngineConstructor.js");
/* harmony import */ var _Shapes_ShapeManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shapes/ShapeManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/ShapeManager.js");
/* harmony import */ var _Textures_TextureManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Textures/TextureManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Textures/TextureManager.js");
/* harmony import */ var _Processor_Processor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Processor/Processor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Processor.js");
/* harmony import */ var _Mesher_ChunkMesher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Mesher/ChunkMesher.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Mesher/ChunkMesher.js");
/* harmony import */ var _Rules_SubstanceRules_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rules/SubstanceRules.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/SubstanceRules.js");
/* harmony import */ var _Init_InitBuilder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Init/InitBuilder.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Init/InitBuilder.js");
/* harmony import */ var _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Rules/Overrides/OverridesManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js");
//objects






//functions


const Builder = {
    textureManager: _Textures_TextureManager_js__WEBPACK_IMPORTED_MODULE_2__.TextureManager,
    shapeManager: _Shapes_ShapeManager_js__WEBPACK_IMPORTED_MODULE_1__.ShapeManager,
    chunkMesher: _Mesher_ChunkMesher_js__WEBPACK_IMPORTED_MODULE_4__.ChunkMesher,
    processor: _Processor_Processor_js__WEBPACK_IMPORTED_MODULE_3__.Processor,
    substanceRules: _Rules_SubstanceRules_js__WEBPACK_IMPORTED_MODULE_5__.SubstanceRules,
    overrides: _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_7__.OverrideManager,
    dimension: 0,
    async $INIT() {
        (0,_Init_InitBuilder_js__WEBPACK_IMPORTED_MODULE_6__.InitBuilder)(this);
    },
    syncSettings(settings) {
        this.processor.syncSettings(settings);
    },
    buildChunk(location, LOD = 1) {
        let chunk = _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_0__.DVEC.data.worldRegister.chunk.get(location);
        if (!chunk) {
            console.warn(`${location.toString()}could not be loaded`);
            return;
        }
        _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_0__.DVEC.data.worldRegister.cache.enable();
        const template = this.processor.makeAllChunkTemplates(location, LOD);
        this.chunkMesher.buildChunkMesh(location, template, LOD);
        this.processor.flush();
        _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_0__.DVEC.data.worldRegister.cache.disable();
        return true;
    },
    constructEntity() {
        /*   const template = this.processor.constructEntity();
        this.entityMesher.buildEntityMesh(
         this.entityConstructor.pos.x,
         this.entityConstructor.pos.y,
         this.entityConstructor.pos.z,
         template.solid
        );
        this.entityConstructor.clearEntityData();
        this.processor.flush(); */
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/VoxelConstructors.js":
/*!*******************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/VoxelConstructors.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelConstructors": () => (/* binding */ VoxelConstructors)
/* harmony export */ });
/* harmony import */ var _classes_Box_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Box.constructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Box.constructor.js");
/* harmony import */ var _classes_Liquid_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Liquid.constructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Liquid.constructor.js");
/* harmony import */ var _classes_Panel_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Panel.constructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Panel.constructor.js");



const VoxelConstructors = {
    voxelObjects: new Map(),
    getVoxel(id) {
        return this.voxelObjects.get(id);
    },
    registerVoxel(voxel) {
        if (Array.isArray(voxel)) {
            for (const vox of voxel) {
                this.voxelObjects.set(vox.id, vox);
            }
            return;
        }
        this.voxelObjects.set(voxel.id, voxel);
    },
    defaults: {
        box: {
            simple(id, textures) {
                return new _classes_Box_constructor_js__WEBPACK_IMPORTED_MODULE_0__.BoxVoxelConstructor(id, textures);
            },
            pillar(id, textures) {
                return new _classes_Box_constructor_js__WEBPACK_IMPORTED_MODULE_0__.PillarBoxVoxelConstructor(id, textures);
            },
        },
        panel: {
            simple(id, texture) {
                return new _classes_Panel_constructor_js__WEBPACK_IMPORTED_MODULE_2__.PanelVoxelConstructor(id, texture);
            },
        },
        liquid: {
            simple(id, textures) {
                return new _classes_Liquid_constructor_js__WEBPACK_IMPORTED_MODULE_1__.LiquidVoxelConstructor(id, textures);
            },
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Box.constructor.js":
/*!*************************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Box.constructor.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxVoxelConstructor": () => (/* binding */ BoxVoxelConstructor),
/* harmony export */   "PillarBoxVoxelConstructor": () => (/* binding */ PillarBoxVoxelConstructor)
/* harmony export */ });
/* harmony import */ var _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Hooks/ConstructorHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Hooks/ConstructorHooks.js");

class BoxVoxelConstructor {
    id;
    textures = [];
    constructor(id, textures) {
        this.id = id;
        _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorHooks.texturesRegistered.addToRun((textureManager) => {
            if (Array.isArray(textures)) {
                let i = 6;
                while (i--) {
                    this.textures.push(textureManager.getTextureUV(textures));
                }
                return;
            }
            this.textures.push(textureManager.getTextureUV(textures.top));
            this.textures.push(textureManager.getTextureUV(textures.bottom));
            this.textures.push(textureManager.getTextureUV(textures.east));
            this.textures.push(textureManager.getTextureUV(textures.west));
            this.textures.push(textureManager.getTextureUV(textures.south));
            this.textures.push(textureManager.getTextureUV(textures.north));
        });
    }
    process(templater) {
        if (templater.isFaceExpposed("top")) {
            templater.addUV(this.textures[0]).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("bottom")) {
            templater.addUV(this.textures[1]).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("east")) {
            templater.addUV(this.textures[2]).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("west")) {
            templater.addUV(this.textures[3]).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("south")) {
            templater.addUV(this.textures[4]).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("north")) {
            templater.addUV(this.textures[5]).addOverlayUVs([0]);
        }
        templater.processVoxelLight();
    }
}
class PillarBoxVoxelConstructor {
    id;
    textures;
    constructor(id, textures) {
        this.id = id;
        _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorHooks.texturesRegistered.addToRun((textureManager) => {
            this.textures = [
                textureManager.getTextureUV(textures.top),
                textureManager.getTextureUV(textures.bottom),
                textureManager.getTextureUV(textures.sideMiddle),
                textureManager.getTextureUV(textures.sideBottom),
                textureManager.getTextureUV(textures.sideTop),
                textureManager.getTextureUV(textures.sideFloat),
            ];
        });
    }
    process(templater) {
        const topCheck = templater.currentVoxel.isSameVoxel(templater.currentVoxel.x, templater.currentVoxel.y + 1, templater.currentVoxel.z);
        const bottomCheck = templater.currentVoxel.isSameVoxel(templater.currentVoxel.x, templater.currentVoxel.y, templater.currentVoxel.z);
        let side = -1;
        determineText: if (side) {
            if (topCheck && bottomCheck) {
                side = this.textures[2];
                break determineText;
            }
            if (topCheck && !bottomCheck) {
                side = this.textures[3];
                break determineText;
            }
            if (!topCheck && bottomCheck) {
                side = this.textures[4];
                break determineText;
            }
            if (!topCheck && !bottomCheck) {
                side = this.textures[5];
                break determineText;
            }
            side = 0;
        }
        if (templater.isFaceExpposed("top")) {
            templater.addUV(this.textures[0]).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("bottom")) {
            templater.addUV(this.textures[1]).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("east")) {
            templater.addUV(side).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("west")) {
            templater.addUV(side).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("south")) {
            templater.addUV(side).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("north")) {
            templater.addUV(side).addOverlayUVs([0]);
        }
        templater.processVoxelLight();
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Liquid.constructor.js":
/*!****************************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Liquid.constructor.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiquidVoxelConstructor": () => (/* binding */ LiquidVoxelConstructor)
/* harmony export */ });
/* harmony import */ var _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Hooks/ConstructorHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Hooks/ConstructorHooks.js");

class LiquidVoxelConstructor {
    id;
    textures;
    ignoreAO = true;
    constructor(id, textures) {
        this.id = id;
        _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorHooks.texturesRegistered.addToRun((textureManager) => {
            this.textures = [
                textureManager.getTextureUV(textures[0]),
                textureManager.getTextureUV(textures[1]),
            ];
        });
    }
    process(templater) {
        const [still, flowing] = this.textures;
        if (templater.isFaceExpposed("top")) {
            templater.addUV(still).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("bottom")) {
            templater.addUV(still).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("east")) {
            templater.addUV(flowing).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("west")) {
            templater.addUV(flowing).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("south")) {
            templater.addUV(flowing).addOverlayUVs([0]);
        }
        if (templater.isFaceExpposed("north")) {
            templater.addUV(flowing).addOverlayUVs([0]);
        }
        templater.processVoxelLight(this.ignoreAO);
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Panel.constructor.js":
/*!***************************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/classes/Panel.constructor.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelVoxelConstructor": () => (/* binding */ PanelVoxelConstructor)
/* harmony export */ });
/* harmony import */ var _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Hooks/ConstructorHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Hooks/ConstructorHooks.js");

class PanelVoxelConstructor {
    id;
    texture = 0;
    constructor(id, textures) {
        this.id = id;
        _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorHooks.texturesRegistered.addToRun((textureManager) => {
            this.texture = textureManager.getTextureUV(textures);
        });
    }
    process(templater) {
        templater
            .addUV(this.texture, 2)
            .addOverlayUVs([0], 2)
            .addCurrentLightValue(2)
            .addAOValue(1, 2);
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/GeometryBuilder.js":
/*!*******************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/GeometryBuilder.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeometryBuilder": () => (/* binding */ GeometryBuilder)
/* harmony export */ });
/* harmony import */ var _Quad_QuadBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quad/QuadBuilder.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/Quad/QuadBuilder.js");
/* harmony import */ var _Quad_QuadUVs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quad/QuadUVs.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/Quad/QuadUVs.js");


const GeometryBuilder = {
    data: {},
    quads: {
        builder: _Quad_QuadBuilder_js__WEBPACK_IMPORTED_MODULE_0__.QuadBuilder,
        uvs: _Quad_QuadUVs_js__WEBPACK_IMPORTED_MODULE_1__.QuadUVs,
    },
    setData(data) {
        this.data = data;
    },
    clearData() {
        this.data = null;
    },
    createQuad(directon, dimensions, origion, flip = false, transforms) {
        _Quad_QuadBuilder_js__WEBPACK_IMPORTED_MODULE_0__.QuadBuilder.create(directon, origion, dimensions, this.data, flip, transforms);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/Quad/QuadBuilder.js":
/*!********************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/Quad/QuadBuilder.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuadBuilder": () => (/* binding */ QuadBuilder)
/* harmony export */ });
const defaultTransform = {
    1: { x: 0, y: 0, z: 0 },
    2: { x: 0, y: 0, z: 0 },
    3: { x: 0, y: 0, z: 0 },
    4: { x: 0, y: 0, z: 0 },
};
const qDimensinos = {
    width: 0,
    height: 0,
};
const QuadBuilder = {
    faceFunctions: {
        top: (origin, data, transform, flip) => {
            if (!flip) {
                data.positions.push(
                //v1
                origin.x - qDimensinos.width + transform[1].x, origin.y + transform[1].y, origin.z - qDimensinos.height + transform[1].z, 
                //v2
                origin.x - qDimensinos.width + transform[2].x, origin.y + transform[2].y, origin.z + qDimensinos.height + transform[2].z, 
                //v3
                origin.x + qDimensinos.width + transform[3].x, origin.y + transform[3].y, origin.z + qDimensinos.height + transform[3].z, 
                //v4
                origin.x + qDimensinos.width + transform[4].x, origin.y + transform[4].y, origin.z - qDimensinos.height + transform[4].z);
            }
            else {
                data.positions.push(
                //v1
                origin.x + qDimensinos.width + transform[4].x, origin.y + transform[4].y, origin.z - qDimensinos.height + transform[4].z, 
                //v2
                origin.x - qDimensinos.width + transform[1].x, origin.y + transform[1].y, origin.z - qDimensinos.height + transform[1].z, 
                //v3
                origin.x - qDimensinos.width + transform[2].x, origin.y + transform[2].y, origin.z + qDimensinos.height + transform[2].z, 
                //v4
                origin.x + qDimensinos.width + transform[3].x, origin.y + transform[3].y, origin.z + qDimensinos.height + transform[3].z);
            }
            data.indices.push(data.indicieIndex + 3, data.indicieIndex + 2, data.indicieIndex, data.indicieIndex + 2, data.indicieIndex + 1, data.indicieIndex);
            data.normals.push(0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0);
            data.indicieIndex += 4;
        },
        bottom: (origin, data, transform, flip) => {
            if (!flip) {
                data.positions.push(
                //v1
                origin.x - qDimensinos.width + transform[1].x, origin.y + transform[1].y, origin.z - qDimensinos.height + transform[1].z, 
                //v2
                origin.x + qDimensinos.width + transform[2].x, origin.y + transform[2].y, origin.z - qDimensinos.height + transform[2].z, 
                //v3
                origin.x + qDimensinos.width + transform[3].x, origin.y + transform[3].y, origin.z + qDimensinos.height + transform[3].z, 
                //v4
                origin.x - qDimensinos.width + transform[4].x, origin.y + transform[4].y, origin.z + qDimensinos.height + transform[4].z);
            }
            else {
                data.positions.push(
                //v1
                origin.x - qDimensinos.width + transform[4].x, origin.y + transform[4].y, origin.z + qDimensinos.height + transform[4].z, 
                //v2
                origin.x - qDimensinos.width + transform[1].x, origin.y + transform[1].y, origin.z - qDimensinos.height + transform[1].z, 
                //v3
                origin.x + qDimensinos.width + transform[2].x, origin.y + transform[2].y, origin.z - qDimensinos.height + transform[2].z, 
                //v4
                origin.x + qDimensinos.width + transform[3].x, origin.y + transform[3].y, origin.z + qDimensinos.height + transform[3].z);
            }
            data.indices.push(data.indicieIndex + 2, data.indicieIndex + 1, data.indicieIndex, data.indicieIndex + 3, data.indicieIndex + 2, data.indicieIndex);
            data.normals.push(0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0);
            data.indicieIndex += 4;
        },
        //front
        south: (origin, data, transform, flip) => {
            if (!flip) {
                data.positions.push(
                //v1
                origin.x - qDimensinos.width + transform[1].x, origin.y + qDimensinos.height + transform[1].y, origin.z + transform[1].z, 
                //v2
                origin.x + qDimensinos.width + transform[2].x, origin.y + qDimensinos.height + transform[2].y, origin.z + transform[2].z, 
                //v3
                origin.x + qDimensinos.width + transform[3].x, origin.y - qDimensinos.height + transform[3].y, origin.z + transform[3].z, 
                //v4
                origin.x - qDimensinos.width + transform[4].x, origin.y - qDimensinos.height + transform[4].y, origin.z + transform[4].z);
            }
            else {
                data.positions.push(
                //v1
                origin.x - qDimensinos.width + transform[4].x, origin.y - qDimensinos.height + transform[4].y, origin.z + transform[4].z, 
                //v2
                origin.x - qDimensinos.width + transform[1].x, origin.y + qDimensinos.height + transform[1].y, origin.z + transform[1].z, 
                //v3
                origin.x + qDimensinos.width + transform[2].x, origin.y + qDimensinos.height + transform[2].y, origin.z + transform[2].z, 
                //v4
                origin.x + qDimensinos.width + transform[3].x, origin.y - qDimensinos.height + transform[3].y, origin.z + transform[3].z);
            }
            data.indices.push(data.indicieIndex + 2, data.indicieIndex + 1, data.indicieIndex, data.indicieIndex + 3, data.indicieIndex + 2, data.indicieIndex);
            data.normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
            data.indicieIndex += 4;
        },
        //back
        north: (origin, data, transform, flip) => {
            if (!flip) {
                data.positions.push(
                //v1
                origin.x + qDimensinos.width + transform[1].x, origin.y + qDimensinos.height + transform[1].y, origin.z + transform[1].z, 
                //v2
                origin.x - qDimensinos.width + transform[2].x, origin.y + qDimensinos.height + transform[2].y, origin.z + transform[2].z, 
                //v3
                origin.x - qDimensinos.width + transform[3].x, origin.y - qDimensinos.height + transform[3].y, origin.z + transform[3].z, 
                //v4
                origin.x + qDimensinos.width + transform[4].x, origin.y - qDimensinos.height + transform[4].y, origin.z + transform[4].z);
            }
            else {
                data.positions.push(
                //v1
                origin.x + qDimensinos.width + transform[4].x, origin.y - qDimensinos.height + transform[4].y, origin.z + transform[4].z, 
                //v2
                origin.x + qDimensinos.width + transform[1].x, origin.y + qDimensinos.height + transform[1].y, origin.z + transform[1].z, 
                //v3
                origin.x - qDimensinos.width + transform[2].x, origin.y + qDimensinos.height + transform[2].y, origin.z + transform[2].z, 
                //v4
                origin.x - qDimensinos.width + transform[3].x, origin.y - qDimensinos.height + transform[3].y, origin.z + transform[3].z);
            }
            data.indices.push(data.indicieIndex + 2, data.indicieIndex + 1, data.indicieIndex, data.indicieIndex + 3, data.indicieIndex + 2, data.indicieIndex);
            data.normals.push(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1);
            data.indicieIndex += 4;
        },
        //left
        west: (origin, data, transform, flip) => {
            if (!flip) {
                data.positions.push(
                //v1
                origin.x + transform[1].x, origin.y + qDimensinos.height + transform[1].y, origin.z + qDimensinos.width + transform[1].z, 
                //v2
                origin.x + transform[2].x, origin.y + qDimensinos.height + transform[2].y, origin.z - qDimensinos.width + transform[2].z, 
                //v3
                origin.x + transform[3].x, origin.y - qDimensinos.height + transform[3].y, origin.z - qDimensinos.width + +transform[3].z, 
                //v4
                origin.x + transform[4].x, origin.y - qDimensinos.height + transform[4].y, origin.z + qDimensinos.width + transform[4].z);
            }
            else {
                data.positions.push(
                //v1
                origin.x + transform[4].x, origin.y - qDimensinos.height + transform[4].y, origin.z + qDimensinos.width + transform[4].z, 
                //v2
                origin.x + transform[1].x, origin.y + qDimensinos.height + transform[1].y, origin.z + qDimensinos.width + transform[1].z, 
                //v3
                origin.x + transform[2].x, origin.y + qDimensinos.height + transform[2].y, origin.z - qDimensinos.width + transform[2].z, 
                //v4
                origin.x + transform[3].x, origin.y - qDimensinos.height + transform[3].y, origin.z - qDimensinos.width + transform[3].z);
            }
            data.indices.push(data.indicieIndex + 2, data.indicieIndex + 1, data.indicieIndex, data.indicieIndex + 3, data.indicieIndex + 2, data.indicieIndex);
            data.normals.push(-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0);
            data.indicieIndex += 4;
        },
        //right
        east: (origin, data, transform, flip) => {
            if (!flip) {
                data.positions.push(
                //v1
                origin.x + transform[1].x, origin.y + qDimensinos.height + transform[1].y, origin.z - qDimensinos.width + transform[1].z, 
                //v2
                origin.x + transform[2].x, origin.y + qDimensinos.height + transform[2].y, origin.z + qDimensinos.width + transform[2].z, 
                //v3
                origin.x + transform[3].x, origin.y - qDimensinos.height + transform[3].y, origin.z + qDimensinos.width + transform[3].z, 
                //v4
                origin.x + transform[4].x, origin.y - qDimensinos.height + transform[4].y, origin.z - qDimensinos.width + transform[4].z);
            }
            else {
                data.positions.push(
                //v1
                origin.x + transform[4].x, origin.y - qDimensinos.height + transform[4].y, origin.z - qDimensinos.width + transform[4].z, 
                //v2
                origin.x + transform[1].x, origin.y + qDimensinos.height + transform[1].y, origin.z - qDimensinos.width + transform[1].z, 
                //v3
                origin.x + transform[2].x, origin.y + qDimensinos.height + transform[2].y, origin.z + qDimensinos.width + transform[2].z, 
                //v4
                origin.x + transform[3].x, origin.y - qDimensinos.height + transform[3].y, origin.z + qDimensinos.width + transform[3].z);
            }
            data.indices.push(data.indicieIndex + 2, data.indicieIndex + 1, data.indicieIndex, data.indicieIndex + 3, data.indicieIndex + 2, data.indicieIndex);
            data.normals.push(1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0);
            data.indicieIndex += 4;
        },
    },
    create(direction, origin, dimensions, data, flip = false, transform = defaultTransform) {
        qDimensinos.width = dimensions.width / 2;
        qDimensinos.height = dimensions.height / 2;
        this.faceFunctions[direction](origin, data, transform, flip);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/Quad/QuadUVs.js":
/*!****************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/Quad/QuadUVs.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuadUVs": () => (/* binding */ QuadUVs)
/* harmony export */ });
/**
 * |||||||||||||||||||||||||||||||||||||
 * [TOP & BOTTOM]
 * Not Flipped
 *
 * 2: w 0,h 0        3: w 1, h 0
 *          |--------|
 *          |      / |
 *          |   /    |
 *          |/       |
 *          |--------|
 * 1: w 0,h 1        4: w 1,h 1
 *
 * ===============================
 * Flipped
 *
 * 4: w 1,h 0        3: w 0, h 0
 *          |--------|
 *          |\       |
 *          |   \    |
 *          |      \ |
 *          |--------|
 * 1: w 1,h 1        2: w 0, h 1
 *
 *||||||||||||||||||||||||||||||||||||||||
 * [Sides]
 * Not Flipped
 * 4: w 1,h 0        3: w 0, h 0
 *          |--------|
 *          |\       |
 *          |   \    |
 *          |      \ |
 *          |--------|
 * 1: w 1,h 1        2: w 0, h 1
 *
 * ===============================
 * Flipped
 * 2: w 0,h 0        3: w 1, h 0
 *          |--------|
 *          |      / |
 *          |   /    |
 *          |/       |
 *          |--------|
 * 1: w 0,h 1        4: w 1,h 1
 *
 */
const QuadUVs = {
    uvRotations: {
        top: {
            0: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(ws, he, uv, ws, hs, uv, we, hs, uv, we, he, uv);
                }
                else {
                    uvs.push(we, he, uv, ws, he, uv, ws, hs, uv, we, hs, uv);
                }
            },
            45: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(0.5, 1, uv, 1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv);
                }
                else {
                    uvs.push(0, 0.5, uv, 0.5, 1, uv, 1, 0.5, uv, 0.5, 0, uv);
                }
            },
            //-45
            315: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv, 0.5, 1, uv);
                }
                else {
                    uvs.push(0.5, 1, uv, 1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv);
                }
            },
            90: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(we, he, uv, ws, he, uv, ws, hs, uv, we, hs, uv);
                }
                else {
                    uvs.push(we, hs, uv, we, he, uv, ws, he, uv, ws, hs, uv);
                }
            },
            180: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(we, hs, uv, we, he, uv, ws, he, uv, ws, hs, uv);
                }
                else {
                    uvs.push(ws, hs, uv, we, hs, uv, we, he, uv, ws, he, uv);
                }
            },
            270: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(ws, hs, uv, we, hs, uv, we, he, uv, ws, he, uv);
                }
                else {
                    uvs.push(ws, he, uv, ws, hs, uv, we, hs, uv, we, he, uv);
                }
            },
            360: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(he, we, uv, he, ws, uv, hs, ws, uv, hs, we, uv);
                }
                else {
                    uvs.push(hs, we, uv, he, we, uv, he, ws, uv, hs, ws, uv);
                }
            },
        },
        bottom: {
            0: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(ws, hs, uv, we, hs, uv, we, he, uv, ws, he, uv);
                }
                else {
                    uvs.push(ws, he, uv, ws, hs, uv, we, hs, uv, we, he, uv);
                }
            },
            90: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(ws, he, uv, ws, hs, uv, we, hs, uv, we, he, uv);
                }
                else {
                    uvs.push(we, he, uv, ws, he, uv, ws, hs, uv, we, hs, uv);
                }
            },
            45: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(0.5, 1, uv, 1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv);
                }
                else {
                    uvs.push(0.5, 1, uv, 1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv);
                }
            },
            //-45
            315: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv, 0.5, 1, uv);
                }
                else {
                    uvs.push(1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv, 0.5, 1, uv);
                }
            },
            180: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(we, he, uv, ws, he, uv, ws, hs, uv, we, hs, uv);
                }
                else {
                    uvs.push(we, hs, uv, we, he, uv, ws, he, uv, ws, hs, uv);
                }
            },
            270: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(we, hs, uv, we, he, uv, ws, he, uv, ws, hs, uv);
                }
                else {
                    uvs.push(ws, hs, uv, we, hs, uv, we, he, uv, ws, he, uv);
                }
            },
            360: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(he, ws, uv, hs, hs, uv, hs, we, uv, he, we, uv);
                }
                else {
                    uvs.push(he, we, uv, he, ws, uv, hs, ws, uv, hs, we, uv);
                }
            },
        },
        side: {
            0: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(ws, hs, uv, we, hs, uv, we, he, uv, ws, he, uv);
                }
                else {
                    uvs.push(ws, he, uv, ws, hs, uv, we, hs, uv, we, he, uv);
                }
            },
            90: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(ws, he, uv, ws, hs, uv, we, hs, uv, we, he, uv);
                }
                else {
                    uvs.push(we, he, uv, ws, he, uv, ws, hs, uv, we, hs, uv);
                }
            },
            45: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(0.5, 1, uv, 1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv);
                }
                else {
                    uvs.push(0.5, 1, uv, 1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv);
                }
            },
            //-45
            315: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv, 0.5, 1, uv);
                }
                else {
                    uvs.push(1, 0.5, uv, 0.5, 0, uv, 0, 0.5, uv, 0.5, 1, uv);
                }
            },
            180: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(we, he, uv, ws, he, uv, ws, hs, uv, we, hs, uv);
                }
                else {
                    uvs.push(we, hs, uv, we, he, uv, ws, he, uv, ws, hs, uv);
                }
            },
            270: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(we, hs, uv, we, he, uv, ws, he, uv, ws, hs, uv);
                }
                else {
                    uvs.push(ws, hs, uv, we, hs, uv, we, he, uv, ws, he, uv);
                }
            },
            360: (uv, ws, we, hs, he, flipped, uvs) => {
                if (!flipped) {
                    uvs.push(he, ws, uv, hs, ws, uv, hs, we, uv, he, we, uv);
                }
                else {
                    uvs.push(he, we, uv, he, ws, uv, hs, ws, uv, hs, we, uv);
                }
            },
        },
    },
    advancedUVs: {
        top: (uv, data, uvs, flipped = false) => {
            if (!flipped) {
                uvs.push(data.ws1, data.he1, uv, data.ws2, data.hs1, uv, data.we1, data.hs2, uv, data.we2, data.he2, uv);
            }
            else {
                uvs.push(data.ws1, data.he1, uv, data.ws2, data.hs1, uv, data.we1, data.hs2, uv, data.we2, data.he2, uv);
            }
        },
        side: (uv, data, uvs, flipped = false) => {
            if (!flipped) {
                uvs.push(data.ws1, data.hs1, uv, data.we1, data.hs2, uv, data.we2, data.he1, uv, data.ws2, data.he2, uv);
                return;
            }
            else {
                uvs.push(data.ws2, data.he2, uv, data.ws1, data.hs1, uv, data.we1, data.hs2, uv, data.we2, data.he1, uv);
            }
        },
    },
    uvFunctions: {
        top: (data) => {
            QuadUVs.uvRotations.top[data.rotoate](data.uv, data.width.start, data.width.end, data.height.start, data.height.end, data.flipped, data.uvs);
        },
        bottom: (data) => {
            QuadUVs.uvRotations.bottom[data.rotoate](data.uv, data.width.start, data.width.end, data.height.start, data.height.end, data.flipped, data.uvs);
        },
        north: (data) => {
            QuadUVs.uvRotations.side[data.rotoate](data.uv, data.width.start, data.width.end, data.height.start, data.height.end, data.flipped, data.uvs);
        },
        south: (data) => {
            QuadUVs.uvRotations.side[data.rotoate](data.uv, data.width.start, data.width.end, data.height.start, data.height.end, data.flipped, data.uvs);
        },
        east: (data) => {
            QuadUVs.uvRotations.side[data.rotoate](data.uv, data.width.start, data.width.end, data.height.start, data.height.end, data.flipped, data.uvs);
        },
        west: (data) => {
            QuadUVs.uvRotations.side[data.rotoate](data.uv, data.width.start, data.width.end, data.height.start, data.height.end, data.flipped, data.uvs);
        },
    },
    addUVs(face, data) {
        this.uvFunctions[face](data);
    },
    addAdvancedUVs(direction, uv, uvs, data, flipped = false) {
        let d = "top";
        if (direction != "top") {
            d = "side";
        }
        this.advancedUVs[d](uv, data, uvs, flipped);
    },
    processOverlayUVs(data) {
        let k = data.overylayUVTemplateIndex;
        let i = 4;
        while (i--) {
            data.overlayUVs.push(data.overylayUVTemplate[k], data.overylayUVTemplate[k + 1], data.overylayUVTemplate[k + 2], data.overylayUVTemplate[k + 3]);
        }
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Init/InitBuilder.js":
/*!***********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Init/InitBuilder.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitBuilder": () => (/* binding */ InitBuilder)
/* harmony export */ });
/* harmony import */ var _Shapes_default_RegisterDefaultShapes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shapes/default/RegisterDefaultShapes.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/RegisterDefaultShapes.js");

function InitBuilder(DVEB) {
    DVEB.processor.$INIT();
    DVEB.substanceRules.$INIT();
    (0,_Shapes_default_RegisterDefaultShapes_js__WEBPACK_IMPORTED_MODULE_0__.RegisterDefaultShapes)(DVEB);
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Mesher/ChunkMesher.js":
/*!*************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Mesher/ChunkMesher.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChunkMesher": () => (/* binding */ ChunkMesher)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DivineVoxelEngineConstructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/DivineVoxelEngineConstructor.js");
/* harmony import */ var _Tools_VoxelMesher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tools/VoxelMesher.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Tools/VoxelMesher.js");
//types
//objects


const ChunkMesher = {
    voxelBuildOrder: [
        "#dve_solid",
        "#dve_flora",
        "#dve_liquid",
        "#dve_magma",
    ],
    buildChunkMesh(location, template, LOD = 1) {
        let i = this.voxelBuildOrder.length;
        const chunks = [location, []];
        const trasnfers = [];
        for (const key of this.voxelBuildOrder) {
            const baseTemplate = template[key];
            if (!baseTemplate) {
                chunks[1].push([key, false]);
                continue;
            }
            const meshData = _Tools_VoxelMesher_js__WEBPACK_IMPORTED_MODULE_1__.VoxelMesher.$buildMesh(key, baseTemplate, LOD, location);
            if (!meshData)
                return;
            chunks[1].push([
                key,
                //@ts-ignore
                ...meshData[0],
            ]);
            trasnfers.push(...meshData[1]);
        }
        _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_0__.DVEC.parentComm.runTasks("set-chunk", chunks, trasnfers);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Functions/CalculateFlow.js":
/*!****************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Functions/CalculateFlow.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculateFlow": () => (/* binding */ CalculateFlow)
/* harmony export */ });
const checkSets = {
    1: [
        -1, 0, 0, -1,
        //corner
        -1, -1,
    ],
    2: [
        -1, 0, 0, 1,
        //corner
        -1, 1,
    ],
    3: [
        1, 0, 0, 1,
        //corner
        1, 1,
    ],
    4: [
        1, 0, 0, -1,
        //corner
        1, -1,
    ],
};
let currentId = "";
const flowStates = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
};
function CalculateFlow(faceFlipped, x, y, z, flowTemplate) {
    currentId = this.mDataTool.getStringId();
    const currentLevel = this.mDataTool.getLevel();
    const state = this.mDataTool.getLevelState();
    //flowTemplate.push(state);
    calculateFlowV(this, state, currentLevel, 1, x, y, z);
    calculateFlowV(this, state, currentLevel, 2, x, y, z);
    calculateFlowV(this, state, currentLevel, 3, x, y, z);
    calculateFlowV(this, state, currentLevel, 4, x, y, z);
    flowTemplate.push(flowStates[1], flowStates[2], flowStates[3], flowStates[4]);
}
const getLevel = (process) => {
    if (!process.nDataTool.isRenderable())
        return -1;
    if (process.nDataTool.getStringId() != currentId)
        return -1;
    const level = process.nDataTool.getLevel();
    return level;
};
const getState = (process) => {
    if (!process.nDataTool.isRenderable())
        return -1;
    if (process.nDataTool.getStringId() != currentId)
        return -1;
    const state = process.nDataTool.getLevelState();
    return state;
};
const calculateFlowV = (process, cs, cl, vertex, x, y, z) => {
    const checkSet = checkSets[vertex];
    if (cl == 15 && cs != 1) {
        flowStates[vertex] = 15;
        return;
    }
    let finalLevel = cl;
    let voxelCount = 0;
    let zeroCount = 0;
    let totalZero = true;
    let ovveride = false;
    let totalLevel = 0;
    for (let iy = 0; iy < 2; iy++) {
        for (let i = 0; i < 6; i += 2) {
            const cx = checkSet[i] + x;
            const cz = checkSet[i + 1] + z;
            const loadedIn = process.nDataTool.loadInAt(cx, y + iy, cz);
            if (!loadedIn)
                continue;
            const level = getLevel(process);
            const hasVoxel = process.nDataTool.isRenderable();
            if (hasVoxel && process.nDataTool.getSubstance() == "#dve_solid") {
                voxelCount++;
            }
            if (iy == 1) {
                if (level > 0) {
                    finalLevel = 15;
                    totalZero = false;
                    ovveride = true;
                    totalLevel += level;
                }
            }
            if (level <= 0 && !hasVoxel) {
                if (iy == 0) {
                    zeroCount++;
                }
                continue;
            }
            if (level == 15) {
                finalLevel = 15;
                totalZero = false;
                zeroCount = 0;
                break;
            }
            if (level > 0 && !hasVoxel) {
                totalZero = false;
            }
            if (finalLevel < level) {
                finalLevel += level - finalLevel;
            }
        }
    }
    if (ovveride && totalLevel == 1 && voxelCount == 3) {
        finalLevel = cl;
    }
    if (zeroCount >= 1 && cs == 0 && !ovveride) {
        finalLevel = 0;
    }
    if (totalZero && cs == 1 && cl == 15) {
        finalLevel = 7;
    }
    if (finalLevel > 15)
        finalLevel = 15;
    if (finalLevel < 1)
        finalLevel = 1;
    flowStates[vertex] = finalLevel;
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Functions/CalculateVoxelLight.js":
/*!**********************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Functions/CalculateVoxelLight.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculateVoxelLight": () => (/* binding */ CalculateVoxelLight),
/* harmony export */   "VoxelLightMixCalc": () => (/* binding */ VoxelLightMixCalc)
/* harmony export */ });
/* harmony import */ var _Processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Processor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Processor.js");
/* harmony import */ var _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Data/Constants/Util/CardinalNeighbors.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js");
/* harmony import */ var _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Data/Constants/Util/Faces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/Faces.js");
/* harmony import */ var _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Data/Light/LightByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js");
/* harmony import */ var _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Rules/Overrides/OverridesManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js");





const LD = _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_3__.LightData;
const RGBvertexStates = {
    1: {
        totalZero: false,
        value: 0,
    },
    2: {
        totalZero: false,
        value: 0,
    },
    3: {
        totalZero: false,
        value: 0,
    },
    4: {
        totalZero: false,
        value: 0,
    },
};
const sunVertexStates = {
    1: {
        totalZero: false,
        value: 0,
    },
    2: {
        totalZero: false,
        value: 0,
    },
    3: {
        totalZero: false,
        value: 0,
    },
    4: {
        totalZero: false,
        value: 0,
    },
};
const AOVerotexStates = {
    1: {
        totalLight: false,
        value: 1,
    },
    2: {
        totalLight: false,
        value: 1,
    },
    3: {
        totalLight: false,
        value: 1,
    },
    4: {
        totalLight: false,
        value: 1,
    },
};
const swapSun = () => {
    let v1 = LD.getS(RGBvertexStates[1].value);
    let v2 = LD.getS(RGBvertexStates[2].value);
    let v3 = LD.getS(RGBvertexStates[3].value);
    let v4 = LD.getS(RGBvertexStates[4].value);
    RGBvertexStates[1].value = LD.setS(v1, RGBvertexStates[1].value);
    RGBvertexStates[2].value = LD.setS(v4, RGBvertexStates[2].value);
    RGBvertexStates[3].value = LD.setS(v3, RGBvertexStates[3].value);
    RGBvertexStates[4].value = LD.setS(v2, RGBvertexStates[4].value);
};
const swapRGB = () => {
    let v1 = LD.getRGB(RGBvertexStates[1].value);
    let v2 = LD.getRGB(RGBvertexStates[2].value);
    let v3 = LD.getRGB(RGBvertexStates[3].value);
    let v4 = LD.getRGB(RGBvertexStates[4].value);
    RGBvertexStates[2].value = LD.setRGB(v4, RGBvertexStates[2].value);
    RGBvertexStates[1].value = LD.setRGB(v1, RGBvertexStates[1].value);
    RGBvertexStates[4].value = LD.setRGB(v2, RGBvertexStates[4].value);
    RGBvertexStates[3].value = LD.setRGB(v3, RGBvertexStates[3].value);
};
const swapAO = () => {
    let v1 = AOVerotexStates[1].value;
    let v2 = AOVerotexStates[2].value;
    let v3 = AOVerotexStates[3].value;
    let v4 = AOVerotexStates[4].value;
    AOVerotexStates[1].value = v1;
    AOVerotexStates[2].value = v2;
    AOVerotexStates[3].value = v3;
    AOVerotexStates[4].value = v4;
};
const shouldRGBFlip = () => {
    let t1 = !RGBvertexStates[1].totalZero &&
        RGBvertexStates[2].totalZero &&
        RGBvertexStates[3].totalZero &&
        RGBvertexStates[4].totalZero;
    let t2 = RGBvertexStates[1].totalZero &&
        RGBvertexStates[2].totalZero &&
        !RGBvertexStates[3].totalZero &&
        RGBvertexStates[4].totalZero;
    let t3 = !RGBvertexStates[1].totalZero &&
        RGBvertexStates[2].totalZero &&
        !RGBvertexStates[3].totalZero &&
        RGBvertexStates[4].totalZero;
    return t1 || t2 || t3;
};
const shouldSunFlip = () => {
    if (_Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.settings.ignoreSun)
        return false;
    let t1 = !sunVertexStates[1].totalZero &&
        sunVertexStates[2].totalZero &&
        sunVertexStates[3].totalZero &&
        sunVertexStates[4].totalZero;
    let t2 = sunVertexStates[1].totalZero &&
        sunVertexStates[2].totalZero &&
        !sunVertexStates[3].totalZero &&
        sunVertexStates[4].totalZero;
    let t3 = !sunVertexStates[1].totalZero &&
        sunVertexStates[2].totalZero &&
        !sunVertexStates[3].totalZero &&
        sunVertexStates[4].totalZero;
    return t1 || t2 || t3;
};
const shouldAOFlip = (face) => {
    _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.faceDataOverride.face = face;
    _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.faceDataOverride["default"] = false;
    if (currentVoxelData.currentShape) {
        if (_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_4__.OverrideManager.runOverride("AOFlipFace", currentVoxelData.currentShape.id, "Any", _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.faceDataOverride)) {
            return false;
        }
    }
    let check = false;
    if (!states.ignoreAO) {
        let t1 = !AOVerotexStates[1].totalLight &&
            AOVerotexStates[2].totalLight &&
            AOVerotexStates[3].totalLight &&
            AOVerotexStates[4].totalLight;
        let t2 = AOVerotexStates[1].totalLight &&
            AOVerotexStates[2].totalLight &&
            !AOVerotexStates[3].totalLight &&
            AOVerotexStates[4].totalLight;
        let t3 = !AOVerotexStates[1].totalLight &&
            AOVerotexStates[2].totalLight &&
            !AOVerotexStates[3].totalLight &&
            AOVerotexStates[4].totalLight;
        check = t1 || t2 || t3;
    }
    return check;
};
const flipCheck = (face) => {
    const rgbFlip = shouldRGBFlip();
    const sunFlip = shouldSunFlip();
    if (rgbFlip && !sunFlip) {
        swapSun();
    }
    if (!rgbFlip && sunFlip) {
        swapRGB();
    }
    const aoFlip = shouldAOFlip(face);
    if ((sunFlip || rgbFlip) && !aoFlip) {
        swapAO();
    }
    if (!sunFlip && aoFlip) {
        swapSun();
    }
    if (!rgbFlip && aoFlip) {
        swapRGB();
    }
    return rgbFlip || sunFlip || aoFlip;
};
const handleAdd = (data, face, direction) => {
    if (flipCheck(direction)) {
        _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.faceStates[face] = 1;
        data.lightTemplate.push(RGBvertexStates[2].value, RGBvertexStates[1].value, RGBvertexStates[4].value, RGBvertexStates[3].value);
        if (!states.ignoreAO) {
            data.aoTemplate.push(AOVerotexStates[4].value, AOVerotexStates[1].value, AOVerotexStates[2].value, AOVerotexStates[3].value);
        }
    }
    else {
        data.lightTemplate.push(RGBvertexStates[1].value, RGBvertexStates[2].value, RGBvertexStates[3].value, RGBvertexStates[4].value);
        if (!states.ignoreAO) {
            data.aoTemplate.push(AOVerotexStates[1].value, AOVerotexStates[2].value, AOVerotexStates[3].value, AOVerotexStates[4].value);
        }
    }
};
const checkSets = {
    top: {
        1: [-1, 1, 0, 0, 1, -1, -1, 1, -1],
        2: [-1, 1, 0, 0, 1, 1, -1, 1, 1],
        3: [1, 1, 0, 0, 1, 1, 1, 1, 1],
        4: [1, 1, 0, 0, 1, -1, 1, 1, -1],
    },
    bottom: {
        1: [0, -1, -1, -1, -1, 0, -1, -1, -1],
        2: [0, -1, -1, 1, -1, 0, 1, -1, -1],
        3: [0, -1, 1, 1, -1, 0, 1, -1, 1],
        4: [0, -1, 1, -1, -1, 0, -1, -1, 1],
    },
    east: {
        1: [1, 0, -1, 1, 1, 0, 1, 1, -1],
        2: [1, 0, 1, 1, 1, 0, 1, 1, 1],
        3: [1, 0, 1, 1, -1, 0, 1, -1, 1],
        4: [1, 0, -1, 1, -1, 0, 1, -1, -1],
    },
    west: {
        1: [-1, 0, 1, -1, 1, 0, -1, 1, 1],
        2: [-1, 0, -1, -1, 1, 0, -1, 1, -1],
        3: [-1, 0, -1, -1, -1, 0, -1, -1, -1],
        4: [-1, 0, 1, -1, -1, 0, -1, -1, 1],
    },
    south: {
        1: [-1, 0, -1, 0, 1, -1, -1, 1, -1],
        2: [1, 0, -1, 0, 1, -1, 1, 1, -1],
        3: [1, 0, -1, 0, -1, -1, 1, -1, -1],
        4: [-1, 0, -1, 0, -1, -1, -1, -1, -1],
    },
    north: {
        1: [1, 0, 1, 0, 1, 1, 1, 1, 1],
        2: [-1, 0, 1, 0, 1, 1, -1, 1, 1],
        3: [-1, 0, 1, 0, -1, 1, -1, -1, 1],
        4: [1, 0, 1, 0, -1, 1, 1, -1, 1],
    },
};
const states = { ignoreAO: false };
const newRGBValues = [];
const zeroCheck = { s: 0, r: 0, g: 0, b: 0 };
const currentVoxelData = {
    light: 0,
    isLightSource: false,
    voxelSubstance: "#dve_solid",
    shapeState: 0,
    currentShape: {},
};
const RGBValues = { r: 0, g: 0, b: 0 };
const sunValues = { s: 0 };
const nlValues = { s: 0, r: 0, g: 0, b: 0 };
const AOValues = { a: 0 };
function CalculateVoxelLight(data, tx, ty, tz, ignoreAO = false, LOD = 2) {
    currentVoxelData.voxelSubstance = this.mDataTool.getSubstance();
    currentVoxelData.isLightSource = this.mDataTool.isLightSource();
    currentVoxelData.currentShape = this.mDataTool.getVoxelShapeObj();
    currentVoxelData.shapeState = this.mDataTool.getShapeState();
    if (this.settings.doAO && !ignoreAO) {
        AOVerotexStates[1].value = 1;
        AOVerotexStates[2].value = 1;
        AOVerotexStates[3].value = 1;
        AOVerotexStates[4].value = 1;
        AOVerotexStates[1].totalLight = true;
        AOVerotexStates[2].totalLight = true;
        AOVerotexStates[3].totalLight = true;
        AOVerotexStates[4].totalLight = true;
        states.ignoreAO = false;
    }
    else {
        states.ignoreAO = true;
    }
    const currentLight = this.mDataTool.getLight();
    const max = _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_1__.$3dCardinalNeighbors.length;
    for (let faceIndex = 0; faceIndex < max; faceIndex++) {
        const point = _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_1__.$3dCardinalNeighbors[faceIndex];
        if (_Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.exposedFaces[faceIndex]) {
            this.nDataTool.loadInAt(point[0] + tx, point[1] + ty, point[2] + tz);
            currentVoxelData.light = this.nDataTool.getLight();
            if (currentVoxelData.light < 0) {
                if (currentLight >= 0) {
                    currentVoxelData.light = currentLight;
                }
                else {
                    currentVoxelData.light = 0;
                }
            }
            const face = _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_2__.FaceMap[faceIndex];
            this.voxellightMixCalc(face, tx, ty, tz, checkSets[face][1], 1, LOD);
            this.voxellightMixCalc(face, tx, ty, tz, checkSets[face][2], 2, LOD);
            this.voxellightMixCalc(face, tx, ty, tz, checkSets[face][3], 3, LOD);
            this.voxellightMixCalc(face, tx, ty, tz, checkSets[face][4], 4, LOD);
            handleAdd(data, faceIndex, face);
        }
    }
}
const doRGB = (neighborLightValue) => {
    if (nlValues.r == 0)
        zeroCheck.r++;
    if (nlValues.g == 0)
        zeroCheck.g++;
    if (nlValues.b == 0)
        zeroCheck.b++;
    if (!neighborLightValue)
        return;
    if (nlValues.r > RGBValues.r && RGBValues.r < 15) {
        RGBValues.r++;
    }
    if (nlValues.g > RGBValues.g && RGBValues.g < 15) {
        RGBValues.g++;
    }
    if (nlValues.b > RGBValues.b && RGBValues.b < 15) {
        RGBValues.b++;
    }
};
const doSun = (neighborLightValue) => {
    if (nlValues.s == 0)
        zeroCheck.s++;
    if (!neighborLightValue)
        return;
    if (sunValues.s < nlValues.s && sunValues.s < 15) {
        sunValues.s += LD.SRS;
    }
};
const lightEnd = (vertex) => {
    let zeroTolerance = 2;
    let totalZero = true;
    if (zeroCheck.s >= zeroTolerance) {
        sunVertexStates[vertex].totalZero = true;
        newRGBValues[0] = 0;
    }
    else {
        sunVertexStates[vertex].totalZero = false;
        newRGBValues[0] = sunValues.s;
    }
    if (zeroCheck.r >= zeroTolerance) {
        newRGBValues[1] = 0;
    }
    else {
        totalZero = false;
        newRGBValues[1] = RGBValues.r;
    }
    if (zeroCheck.g >= zeroTolerance) {
        newRGBValues[2] = 0;
    }
    else {
        totalZero = false;
        newRGBValues[2] = RGBValues.g;
    }
    if (zeroCheck.b >= zeroTolerance) {
        newRGBValues[3] = 0;
    }
    else {
        totalZero = false;
        newRGBValues[3] = RGBValues.b;
    }
    const returnValue = LD.setLightValues(newRGBValues);
    RGBvertexStates[vertex].totalZero = totalZero;
    RGBvertexStates[vertex].value = returnValue;
    zeroCheck.s = 0;
    zeroCheck.r = 0;
    zeroCheck.b = 0;
    zeroCheck.g = 0;
};
const doAO = (face, vertex) => {
    if (!_Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.nDataTool.isRenderable())
        return;
    const neighborVoxelSubstance = _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.nDataTool.getSubstance();
    let finalResult = false;
    let substanceRuleResult = true;
    const voxelSubstance = currentVoxelData.voxelSubstance;
    if (voxelSubstance == "#dve_transparent" || voxelSubstance == "#dve_solid") {
        if (neighborVoxelSubstance != "#dve_solid" &&
            neighborVoxelSubstance != "#dve_transparent") {
            substanceRuleResult = false;
        }
    }
    else {
        if (neighborVoxelSubstance !== voxelSubstance) {
            substanceRuleResult = false;
        }
    }
    const neightLightSource = _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.nDataTool.isLightSource();
    if (currentVoxelData.isLightSource || neightLightSource) {
        substanceRuleResult = false;
    }
    _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.faceDataOverride.face = face;
    _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.faceDataOverride["default"] = substanceRuleResult;
    finalResult = _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_4__.OverrideManager.runOverride("AO", currentVoxelData.currentShape.id, _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.nDataTool.getVoxelShapeObj().id, _Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.faceDataOverride);
    if (finalResult) {
        AOVerotexStates[vertex].totalLight = false;
        AOValues.a *= 0.65;
    }
};
const AOEnd = (vertex) => {
    AOVerotexStates[vertex].value = AOValues.a;
};
function VoxelLightMixCalc(face, x, y, z, checkSet, vertex, LOD = 1) {
    if (this.settings.doRGB || this.settings.doSun) {
        const values = this.lightData.getLightValues(currentVoxelData.light);
        if (this.settings.doSun) {
            sunValues.s = values[0];
            if (sunValues.s == 0)
                zeroCheck.s++;
        }
        if (this.settings.doRGB) {
            RGBValues.r = values[1];
            if (RGBValues.r == 0)
                zeroCheck.r++;
            RGBValues.g = values[2];
            if (RGBValues.g == 0)
                zeroCheck.g++;
            RGBValues.b = values[3];
            if (RGBValues.b == 0)
                zeroCheck.b++;
        }
    }
    if (!states.ignoreAO) {
        AOValues.a = 1;
    }
    for (let i = 0; i < 9; i += 3) {
        const cx = checkSet[i] * LOD + x;
        const cy = checkSet[i + 1] * LOD + y;
        const cz = checkSet[i + 2] * LOD + z;
        if (this.settings.doRGB || this.settings.doSun) {
            if (!this.nDataTool.loadInAt(cx, cy, cz))
                continue;
            const nl = this.nDataTool.getLight();
            if (nl != -1) {
                const values = LD.getLightValues(nl);
                nlValues.s = values[0];
                nlValues.r = values[1];
                nlValues.g = values[2];
                nlValues.b = values[3];
                if (this.settings.doRGB) {
                    doRGB(LD.removeS(nl));
                }
                if (this.settings.doSun) {
                    doSun(LD.getS(nl));
                }
            }
        }
        if (!states.ignoreAO) {
            doAO(face, vertex);
        }
    }
    if (this.settings.doSun || this.settings.doRGB) {
        lightEnd(vertex);
    }
    if (this.settings.doAO) {
        AOEnd(vertex);
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Processor.js":
/*!**************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Processor.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Processor": () => (/* binding */ Processor)
/* harmony export */ });
/* harmony import */ var _Functions_CalculateVoxelLight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions/CalculateVoxelLight.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Functions/CalculateVoxelLight.js");
/* harmony import */ var _Functions_CalculateFlow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Functions/CalculateFlow.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Functions/CalculateFlow.js");
/* harmony import */ var _Data_Meshing_FaceByte_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/Meshing/FaceByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Meshing/FaceByte.js");
/* harmony import */ var _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/Light/LightByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js");
/* harmony import */ var _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Data/Constants/Util/CardinalNeighbors.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js");
/* harmony import */ var _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Data/Constants/Util/Faces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/Faces.js");
/* harmony import */ var _Constructor_Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Constructor/Tools/Data/ConstructorDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Data/ConstructorDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_HeightMapTool_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Tools/Data/WorldData/HeightMapTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/HeightMapTool.js");
/* harmony import */ var _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Rules/Overrides/OverridesManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _Tools_VoxelTemplater_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Tools/VoxelTemplater.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Tools/VoxelTemplater.js");
/* harmony import */ var _Rules_SubstanceRules_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Rules/SubstanceRules.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/SubstanceRules.js");
//functions


//objects
//data


//maps


//tools






const mDT = (0,_Constructor_Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_6__.GetConstructorDataTool)();
const nDT = (0,_Constructor_Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_6__.GetConstructorDataTool)();
const heightMapTool = new _Tools_Data_WorldData_HeightMapTool_js__WEBPACK_IMPORTED_MODULE_7__.HeightMapTool();
/**# Chunk Processor
 * ---
 * Takes the given world data and generates templates
 * to build chunk meshes.
 */
const Processor = {
    LOD: 1,
    mDataTool: mDT,
    nDataTool: nDT,
    faceByte: _Data_Meshing_FaceByte_js__WEBPACK_IMPORTED_MODULE_2__.FaceByte,
    lightData: _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_3__.LightData,
    calculatFlow: _Functions_CalculateFlow_js__WEBPACK_IMPORTED_MODULE_1__.CalculateFlow,
    voxellightMixCalc: _Functions_CalculateVoxelLight_js__WEBPACK_IMPORTED_MODULE_0__.VoxelLightMixCalc,
    doVoxelLight: _Functions_CalculateVoxelLight_js__WEBPACK_IMPORTED_MODULE_0__.CalculateVoxelLight,
    nLocation: ["main", 0, 0, 0],
    exposedFaces: [],
    faceStates: [],
    textureRotation: [],
    settings: {
        doAO: true,
        doSun: true,
        doRGB: true,
        ignoreSun: false,
        entity: false,
        composedEntity: 1,
    },
    faceDataOverride: {
        face: "south",
        default: false,
        currentVoxel: mDT,
        neighborVoxel: nDT,
    },
    template: {},
    getVoxelTemplate() {
        return {
            aoTemplate: [],
            colorTemplate: [],
            faceTemplate: [],
            flowTemplate: [],
            lightTemplate: [],
            overlayUVTemplate: [],
            positionTemplate: [],
            uvTemplate: [],
        };
    },
    $INIT() {
        _Rules_SubstanceRules_js__WEBPACK_IMPORTED_MODULE_11__.SubstanceRules.$INIT();
        _Tools_VoxelTemplater_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTemplater.currentVoxel = mDT;
        _Tools_VoxelTemplater_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTemplater.utilDataTool = nDT;
    },
    cullCheck(face, voxelObject, voxelShape, voxelSubstance, faceBit) {
        const voxelExists = this.nDataTool.loadIn();
        let finalResult = false;
        if (voxelExists && this.nDataTool.isRenderable()) {
            let substanceRuleResult = _Rules_SubstanceRules_js__WEBPACK_IMPORTED_MODULE_11__.SubstanceRules.exposedCheck(voxelSubstance, this.nDataTool.getSubstance());
            this.faceDataOverride.face = face;
            this.faceDataOverride.default = substanceRuleResult;
            finalResult = substanceRuleResult;
            this.faceDataOverride.default = finalResult;
            finalResult = _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_8__.OverrideManager.runOverride("CullFace", voxelShape.id, "Any", this.faceDataOverride);
            this.faceDataOverride.default = finalResult;
            finalResult = _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_8__.OverrideManager.runOverride("CullFace", voxelShape.id, this.nDataTool.getVoxelShapeObj().id, this.faceDataOverride);
            this.faceDataOverride.default = finalResult;
            finalResult = _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_8__.OverrideManager.runOverride("CullFace", voxelObject.id, this.nDataTool.getVoxelShapeObj().id, this.faceDataOverride);
        }
        else {
            finalResult = true;
        }
        const faceIndex = _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_5__.FaceRecord[face];
        if (finalResult) {
            this.exposedFaces[faceIndex] = 1;
            this.faceStates[faceIndex] = 0;
            this.textureRotation[faceIndex] = 0;
            faceBit = this.faceByte.markFaceAsExposed(face, faceBit);
        }
        else {
            this.exposedFaces[faceIndex] = 0;
            this.faceStates[faceIndex] = -1;
            this.textureRotation[faceIndex] = 0;
        }
        return faceBit;
    },
    faceStateCheck(face, faceBit) {
        const faceIndex = _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_5__.FaceRecord[face];
        if (this.exposedFaces[faceIndex]) {
            faceBit = this.faceByte.setFaceRotateState(face, this.faceStates[faceIndex], faceBit);
            faceBit = this.faceByte.setFaceTextureState(face, this.textureRotation[faceIndex], faceBit);
        }
        return faceBit;
    },
    _process(doSecondCheck = false) {
        if (!this.mDataTool.loadInAtLocation(this.nLocation))
            return;
        if (!this.mDataTool.isRenderable())
            return;
        if (!doSecondCheck) {
            if (this.mDataTool.hasSecondaryVoxel()) {
                this._process(true);
            }
        }
        this.mDataTool.setSecondary(doSecondCheck);
        const voxelObject = this.mDataTool.getVoxelObj();
        if (!voxelObject)
            return;
        const voxelShape = this.mDataTool.getVoxelShapeObj();
        const voxelSubstance = this.mDataTool.getSubstance();
        let faceBit = 0;
        let i = _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_4__.$3dCardinalNeighbors.length;
        while (i--) {
            const point = _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_4__.$3dCardinalNeighbors[i];
            this.nDataTool.setXYZ(this.nLocation[1] + point[0] * this.LOD, this.nLocation[2] + point[1] * this.LOD, this.nLocation[3] + point[2] * this.LOD);
            faceBit = this.cullCheck(_Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_5__.FaceMap[i], voxelObject, voxelShape, voxelSubstance, faceBit);
        }
        if (faceBit == 0)
            return;
        let baseTemplate = this.template[_Rules_SubstanceRules_js__WEBPACK_IMPORTED_MODULE_11__.SubstanceRules.getSubstanceParent(voxelSubstance)];
        if (!baseTemplate) {
            baseTemplate = this.getVoxelTemplate();
            this.template[_Rules_SubstanceRules_js__WEBPACK_IMPORTED_MODULE_11__.SubstanceRules.getSubstanceParent(voxelSubstance)] =
                baseTemplate;
        }
        _Tools_VoxelTemplater_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTemplater._template = baseTemplate;
        voxelObject.process(_Tools_VoxelTemplater_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTemplater);
        const voxelPOS = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__.WorldSpaces.voxel.getPositionLocation(this.nLocation);
        baseTemplate.positionTemplate.push(voxelPOS.x, voxelPOS.y, voxelPOS.z);
        i = _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_5__.FaceMap.length;
        while (i--) {
            faceBit = this.faceStateCheck(_Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_5__.FaceMap[i], faceBit);
        }
        baseTemplate.faceTemplate.push(faceBit);
        if (this.exposedFaces[0] &&
            (voxelSubstance == "#dve_liquid" || voxelSubstance == "#dve_magma")) {
            this.calculatFlow(this.faceStates[0] == 1, this.nLocation[1], this.nLocation[2], this.nLocation[3], baseTemplate.flowTemplate);
        }
    },
    makeAllChunkTemplates(location, LOD = 1) {
        heightMapTool.chunk.loadInAtLocation(location);
        this.nDataTool.setDimension(location[0]);
        this.mDataTool.setDimension(location[0]);
        this.settings.entity = false;
        this.LOD = LOD;
        const [dimension, cx, cy, cz] = location;
        this.nLocation[0] = dimension;
        let maxX = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__.WorldSpaces.chunk._bounds.x + cx;
        let maxZ = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__.WorldSpaces.chunk._bounds.z + cz;
        let [minY, maxY] = heightMapTool.chunk.getMinMax();
        minY += cy;
        maxY += cy + 1;
        for (let x = cx; x < maxX; x += LOD) {
            for (let z = cz; z < maxZ; z += LOD) {
                for (let y = minY; y < maxY; y += LOD) {
                    this.nLocation[1] = x;
                    this.nLocation[2] = y;
                    this.nLocation[3] = z;
                    this._process();
                }
            }
        }
        return this.template;
    },
    syncSettings(settings) {
        const materials = settings.materials;
        if (materials?.doAO) {
            this.settings.doAO = true;
        }
        if (materials?.doRGBLight) {
            this.settings.doRGB = true;
        }
        if (materials?.doSunLight) {
            this.settings.doSun = true;
        }
    },
    flush() {
        this.template = {};
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js":
/*!***************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverrideManager": () => (/* binding */ OverrideManager)
/* harmony export */ });
const OverrideManager = {
    overrides: {
        AO: new Map(),
        AOFlipFace: new Map(),
        CullFace: new Map(),
        FlipFace: new Map(),
    },
    registerOverride(type, subjectId, neighborShapeId, run) {
        let map = this.overrides[type].get(subjectId);
        if (!map) {
            map = new Map();
            this.overrides[type].set(subjectId, map);
        }
        map.set(neighborShapeId, run);
    },
    hasOverride(type, shapeId, neighborShapeId) {
        let map = this.overrides[type].get(shapeId);
        if (!map)
            return false;
        return map.has(neighborShapeId);
    },
    runOverride(type, shapeId, neighborShapeId, data) {
        let map = this.overrides[type].get(shapeId);
        if (!map)
            return data.default;
        const run = map.get(neighborShapeId);
        if (!run)
            return data.default;
        return run(data);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/SubstanceRules.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/SubstanceRules.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstanceRules": () => (/* binding */ SubstanceRules)
/* harmony export */ });
//types
const SubstanceRules = {
    rules: new Map(),
    parents: new Map(),
    registerSubstance(id, substanceCulls, parentId) {
        const map = new Map();
        this.rules.set(id, map);
        if (substanceCulls) {
            for (const culls of substanceCulls) {
                map.set(culls, true);
            }
        }
        if (parentId) {
            this.parents.set(id, parentId);
            return;
        }
        this.parents.set(id, id);
    },
    $INIT() {
        SubstanceRules.registerSubstance("#dve_solid", ["#dve_solid"]);
        SubstanceRules.registerSubstance("#dve_flora");
        SubstanceRules.registerSubstance("#dve_transparent", ["#dve_transparent"], "#dve_solid");
        SubstanceRules.registerSubstance("#dve_liquid", [
            "#dve_solid",
            "#dve_liquid",
        ]);
        SubstanceRules.registerSubstance("#dve_magma", ["#dve_solid", "#dve_magma"]);
    },
    exposedCheck(subject, neightborVoxel) {
        const rules = this.rules.get(subject);
        if (!rules)
            return true;
        if (rules.has(neightborVoxel))
            return false;
        return true;
    },
    getSubstanceParent(id) {
        return this.parents.get(id);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/ShapeManager.js":
/*!**************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/ShapeManager.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeManager": () => (/* binding */ ShapeManager)
/* harmony export */ });
const ShapeManager = {
    shapes: new Map(),
    shapeCount: 0,
    registerShape(shapeObject) {
        this.shapes.set(shapeObject.id, shapeObject);
    },
    getShape(shapeId) {
        const shape = this.shapes.get(shapeId);
        if (!shape) {
            throw new Error(`%${shapeId} does not exists.`);
        }
        return shape;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Box/Box.voxel.shape.js":
/*!*****************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Box/Box.voxel.shape.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxVoxelShape": () => (/* binding */ BoxVoxelShape)
/* harmony export */ });
/* harmony import */ var _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Rules/Overrides/OverridesManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js");

const BoxVoxelShape = {
    id: "#dve_box",
    build(mesher) {
        mesher.quad.setDimensions(1, 1);
        let animationState = 0;
        if (mesher.data.getSubstance() == "#dve_flora") {
            animationState = 3;
        }
        if (mesher.templateData.loadIn("top").isExposed()) {
            mesher.quad
                .setDirection("top")
                .updatePosition(0.5, 1, 0.5)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("bottom").isExposed()) {
            mesher.quad
                .setDirection("bottom")
                .updatePosition(0.5, 0, 0.5)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("east").isExposed()) {
            mesher.quad
                .setDirection("east")
                .updatePosition(1, 0.5, 0.5)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("west").isExposed()) {
            mesher.quad
                .setDirection("west")
                .updatePosition(0, 0.5, 0.5)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("south").isExposed()) {
            mesher.quad
                .setDirection("south")
                .updatePosition(0.5, 0.5, 0)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("north").isExposed()) {
            mesher.quad
                .setDirection("north")
                .updatePosition(0.5, 0.5, 1)
                .addData(4, animationState)
                .create();
        }
    },
};
//cull leaf faces
const BoxCullFunctions = {
    top: (data) => {
        if (data.currentVoxel.getSubstance() == "#dve_flora" &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1], data.currentVoxel.location[2] + 1, data.currentVoxel.location[3]) &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1], data.currentVoxel.location[2] + 2, data.currentVoxel.location[3])) {
            return false;
        }
        return data.default;
    },
    bottom: (data) => {
        if (data.currentVoxel.getSubstance() == "#dve_flora" &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1], data.currentVoxel.location[2] - 1, data.currentVoxel.location[3]) &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1], data.currentVoxel.location[2] - 2, data.currentVoxel.location[3])) {
            return false;
        }
        return data.default;
    },
    east: (data) => {
        if (data.currentVoxel.getSubstance() == "#dve_flora" &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1] + 1, data.currentVoxel.location[2], data.currentVoxel.location[3]) &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1] + 2, data.currentVoxel.location[2], data.currentVoxel.location[3])) {
            return false;
        }
        return data.default;
    },
    west: (data) => {
        if (data.currentVoxel.getSubstance() == "#dve_flora" &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1] - 1, data.currentVoxel.location[2], data.currentVoxel.location[3]) &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1] - 2, data.currentVoxel.location[2], data.currentVoxel.location[3])) {
            return false;
        }
        return data.default;
    },
    north: (data) => {
        if (data.currentVoxel.getSubstance() == "#dve_flora" &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1], data.currentVoxel.location[2], data.currentVoxel.location[3] + 1) &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1], data.currentVoxel.location[2], data.currentVoxel.location[3] + 2)) {
            return false;
        }
        return data.default;
    },
    south: (data) => {
        if (data.currentVoxel.getSubstance() == "#dve_flora" &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1], data.currentVoxel.location[2], data.currentVoxel.location[3] - 1) &&
            data.currentVoxel.isSameVoxel(data.currentVoxel.location[1], data.currentVoxel.location[2], data.currentVoxel.location[3] - 2)) {
            return false;
        }
        return data.default;
    },
};
//cullface
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_box", "#dve_box", (data) => {
    return BoxCullFunctions[data.face](data);
});
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_box", "Panel", (data) => {
    return true;
});
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_box", "#dve_halfbox", (data) => {
    if (data.face == "top") {
        if (data.neighborVoxel.getShapeState() == 0) {
            return true;
        }
        return false;
    }
    return true;
});
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_box", "#dve_stair", (data) => {
    StairCullFunctions[data.face](data);
    return true;
});
//ao
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("AO", "#dve_box", "Panel", (data) => {
    return false;
});
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("AO", "#dve_box", "#dve_half_box", (data) => {
    if (data.face == "top") {
        if (data.neighborVoxel.getShapeState() == 0) {
            return true;
        }
        return false;
    }
    return true;
});
const StairCullFunctions = {
    top: (data) => {
        const neighborVoxelShapeState = data.neighborVoxel.getShapeState();
        if ((neighborVoxelShapeState >= 0 && neighborVoxelShapeState <= 3) ||
            (neighborVoxelShapeState >= 8 && neighborVoxelShapeState <= 11)) {
            return false;
        }
        return true;
    },
    bottom: (data) => {
        const neighborVoxelShapeState = data.neighborVoxel.getShapeState();
        if ((neighborVoxelShapeState >= 4 && neighborVoxelShapeState <= 7) ||
            (neighborVoxelShapeState >= 12 && neighborVoxelShapeState <= 15)) {
            return false;
        }
        return true;
    },
    east: (data) => {
        const neighborVoxelShapeState = data.neighborVoxel.getShapeState();
        if (neighborVoxelShapeState == 1 || neighborVoxelShapeState == 5)
            return false;
        return true;
    },
    west: (data) => {
        const neighborVoxelShapeState = data.neighborVoxel.getShapeState();
        if (neighborVoxelShapeState == 3 || neighborVoxelShapeState == 7)
            return false;
        return true;
    },
    north: (data) => {
        const neighborVoxelShapeState = data.neighborVoxel.getShapeState();
        if (neighborVoxelShapeState == 0 || neighborVoxelShapeState == 4)
            return false;
        return true;
    },
    south: (data) => {
        const neighborVoxelShapeState = data.neighborVoxel.getShapeState();
        if (neighborVoxelShapeState == 2 || neighborVoxelShapeState == 6)
            return false;
        return true;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Box/HalfBox.voxel.shape.js":
/*!*********************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Box/HalfBox.voxel.shape.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HalfBoxVoxelShape": () => (/* binding */ HalfBoxVoxelShape)
/* harmony export */ });
/* harmony import */ var _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Rules/Overrides/OverridesManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js");

const HalfBoxVoxelShape = {
    id: "#dve_half_box",
    build(mesher) {
        mesher.quad.setDimensions(1, 1);
        let animationState = 0;
        if (mesher.data.getSubstance() == "#dve_flora") {
            animationState = 3;
        }
        const shapeState = mesher.data.getShapeState();
        let yAdd = 0;
        if (shapeState == 1) {
            yAdd = 0.5;
        }
        if (mesher.templateData.loadIn("top").isExposed()) {
            mesher.quad
                .setDirection("top")
                .updatePosition(0.5, 0.5 + yAdd, 0.5)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("bottom").isExposed()) {
            mesher.quad
                .setDirection("bottom")
                .updatePosition(0.5, 0 + yAdd, 0.5)
                .addData(4, animationState)
                .create();
        }
        mesher.quad.setDimensions(1, 0.5).uvs.setWidth(0, 1).setHeight(0, 0.5);
        if (mesher.templateData.loadIn("east").isExposed()) {
            mesher.quad
                .setDirection("east")
                .updatePosition(1, 0.25 + yAdd, 0.5)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("west").isExposed()) {
            mesher.quad
                .setDirection("west")
                .updatePosition(0, 0.25 + yAdd, 0.5)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("south").isExposed()) {
            mesher.quad
                .setDirection("south")
                .updatePosition(0.5, 0.25 + yAdd, 0)
                .addData(4, animationState)
                .create();
        }
        if (mesher.templateData.loadIn("north").isExposed()) {
            mesher.quad
                .setDirection("north")
                .updatePosition(0.5, 0.25 + yAdd, 1)
                .addData(4, animationState)
                .create();
        }
    },
};
//cullface
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_half_box", "#dve_panel", (data) => {
    return false;
});
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_half_box", "#dve_box", (data) => {
    if (data.face == "bottom") {
        if (data.currentVoxel.getShapeState() == 0) {
            return false;
        }
    }
    if (data.face == "top") {
        if (data.currentVoxel.getShapeState() == 1) {
            return false;
        }
    }
    return true;
});
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_half_box", "#dve_stair", (data) => {
    return data.default;
});
//AO
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("AO", "#dve_half_box", "#dve_panel", (data) => {
    return false;
});
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("AO", "#dve_half_box", "#dve_box", (data) => {
    const shapeState = data.currentVoxel.getShapeState();
    if (shapeState == 1) {
        if (data.face == "top") {
            if (data.neighborVoxel.location[2] > data.currentVoxel.location[2]) {
                return true;
            }
        }
        if (data.neighborVoxel.location[2] == data.currentVoxel.location[2]) {
            return true;
        }
        return false;
    }
    return data.default;
});


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Liquid/Liquid.voxel.shape.js":
/*!***********************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Liquid/Liquid.voxel.shape.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiquidVoxelShape": () => (/* binding */ LiquidVoxelShape)
/* harmony export */ });
/* harmony import */ var _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Rules/Overrides/OverridesManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js");
//objects

const LiquidVoxelShape = {
    id: "#dve_liquid",
    build(mesher) {
        const data = mesher._data;
        mesher.quad.setDimensions(1, 1);
        flowAnimationState = 0;
        let topFaceExposed = false;
        if (mesher.templateData.loadIn("top").isExposed()) {
            calculateVertexLevels(data);
            topFaceExposed = true;
            const angle = getAngle(data);
            mesher.quad
                .setTransform(1, 0, vertexLevels.v1v, 0)
                .setTransform(2, 0, vertexLevels.v2v, 0)
                .setTransform(3, 0, vertexLevels.v3v, 0)
                .setTransform(4, 0, vertexLevels.v4v, 0)
                .uvs.setRoation(angle);
            mesher.quad
                .setDirection("top")
                .updatePosition(0.5, 1, 0.5)
                .addData(4, flowAnimationState, false)
                .create()
                .clearTransform()
                .uvs.setRoation(0);
        }
        if (mesher.templateData.loadIn("bottom").isExposed()) {
            mesher.quad
                .setDirection("bottom")
                .updatePosition(0.5, 0, 0.5)
                .addData(4, flowAnimationState, false)
                .create();
        }
        flowAnimationState = 1;
        mesher.quad.uvs.setRoation(0);
        if (mesher.templateData.loadIn("east").isExposed()) {
            mesher.quad
                .setDirection("east")
                .updatePosition(1, 0.5, 0.5)
                .setTransform(1, 0, vertexLevels.v4v, 0)
                .setTransform(2, 0, vertexLevels.v3v, 0)
                .light.add()
                .oUVS.add()
                .setAnimationState(flowAnimationState)
                .create()
                .clearTransform();
            if (topFaceExposed) {
                mesher.quad.uvs.advancedUVs.hs1 = Math.abs(vertexLevels.v4v);
                mesher.quad.uvs.advancedUVs.hs2 = Math.abs(vertexLevels.v3v);
                mesher.quad.uvs.addAdvancedUVs().resetAdvancedUVs();
            }
            else {
                mesher.quad.uvs.add();
            }
        }
        if (mesher.templateData.loadIn("west").isExposed()) {
            mesher.quad
                .setDirection("west")
                .updatePosition(0, 0.5, 0.5)
                .setTransform(1, 0, vertexLevels.v2v, 0)
                .setTransform(2, 0, vertexLevels.v1v, 0)
                .light.add()
                .oUVS.add()
                .setAnimationState(flowAnimationState)
                .create()
                .clearTransform();
            if (topFaceExposed) {
                mesher.quad.uvs.advancedUVs.hs1 = Math.abs(vertexLevels.v2v);
                mesher.quad.uvs.advancedUVs.hs2 = Math.abs(vertexLevels.v1v);
                mesher.quad.uvs.addAdvancedUVs().resetAdvancedUVs();
            }
            else {
                mesher.quad.uvs.add();
            }
        }
        if (mesher.templateData.loadIn("south").isExposed()) {
            mesher.quad
                .setDirection("south")
                .updatePosition(0.5, 0.5, 0)
                .setTransform(1, 0, vertexLevels.v1v, 0)
                .setTransform(2, 0, vertexLevels.v4v, 0)
                .light.add()
                .oUVS.add()
                .setAnimationState(flowAnimationState)
                .create()
                .clearTransform();
            if (topFaceExposed) {
                mesher.quad.uvs.advancedUVs.hs1 = Math.abs(vertexLevels.v1v);
                mesher.quad.uvs.advancedUVs.hs2 = Math.abs(vertexLevels.v4v);
                mesher.quad.uvs.addAdvancedUVs().resetAdvancedUVs();
            }
            else {
                mesher.quad.uvs.add();
            }
        }
        if (mesher.templateData.loadIn("north").isExposed()) {
            mesher.quad
                .setDirection("north")
                .updatePosition(0.5, 0.5, 1)
                .setTransform(1, 0, vertexLevels.v3v, 0)
                .setTransform(2, 0, vertexLevels.v2v, 0)
                .light.add()
                .oUVS.add()
                .setAnimationState(flowAnimationState)
                .create()
                .clearTransform();
            if (topFaceExposed) {
                mesher.quad.uvs.advancedUVs.hs1 = Math.abs(vertexLevels.v3v);
                mesher.quad.uvs.advancedUVs.hs2 = Math.abs(vertexLevels.v2v);
                mesher.quad.uvs.addAdvancedUVs().resetAdvancedUVs();
            }
            else {
                mesher.quad.uvs.add();
            }
        }
        clearVertexLevels(data);
    },
};
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_liquid", "Any", (data) => {
    if (data.face == "top" &&
        data.neighborVoxel.getSubstance() != "#dve_liquid" &&
        data.currentVoxel.getStringId() != data.neighborVoxel.getStringId()) {
        return true;
    }
    return data.default;
});
let flowAnimationState = 0;
const vertexLevels = {
    v1l: 0,
    v2l: 0,
    v3l: 0,
    v4l: 0,
    v1v: 0,
    v2v: 0,
    v3v: 0,
    v4v: 0,
};
const getAngle = (data) => {
    if (sourceBlockTest(data)) {
        flowAnimationState = 0;
        return 0;
    }
    const v1 = vertexLevels.v1l;
    const v2 = vertexLevels.v2l;
    const v3 = vertexLevels.v3l;
    const v4 = vertexLevels.v4l;
    if (v1 == v2 && v3 == v4 && v1 == v4 && v2 == v3) {
        flowAnimationState = 0;
        return 0;
    }
    if (v2 == v3 && v1 == v4 && v2 > v1) {
        //flowing south
        flowAnimationState = 1;
        return 0;
    }
    if (v2 == v3 && v1 == v4 && v2 < v1) {
        //flowing north
        flowAnimationState = 2;
        return 0;
    }
    if (v2 == v1 && v3 == v4 && v1 > v4) {
        //flowing east
        flowAnimationState = 2;
        return 90;
    }
    if (v3 == v4 && v2 == v1 && v4 > v1) {
        //flowing west
        flowAnimationState = 1;
        return 90;
    }
    if (v2 < v4) {
        //flowing north west
        flowAnimationState = 2;
        return 315;
    }
    if (v2 > v4) {
        //flowing south east
        flowAnimationState = 1;
        return 315;
    }
    if (v1 > v3) {
        //flowing north east
        flowAnimationState = 2;
        return 45;
    }
    if (v1 < v3) {
        //flowing south west
        flowAnimationState = 1;
        return 45;
    }
    return 0;
};
const sourceBlockTest = (data) => {
    if (data.flowTemplate && data.flowTemplateIndex != undefined) {
        if (data.flowTemplate[data.flowTemplateIndex] == 15 &&
            data.flowTemplate[data.flowTemplateIndex + 1] == 15 &&
            data.flowTemplate[data.flowTemplateIndex + 2] == 15 &&
            data.flowTemplate[data.flowTemplateIndex + 3] == 15) {
            return true;
        }
    }
    return false;
};
const calculateVertexLevels = (data) => {
    if (data.flowTemplate && data.flowTemplateIndex != undefined) {
        vertexLevels.v1l = data.flowTemplate[data.flowTemplateIndex];
        vertexLevels.v2l = data.flowTemplate[data.flowTemplateIndex + 1];
        vertexLevels.v3l = data.flowTemplate[data.flowTemplateIndex + 2];
        vertexLevels.v4l = data.flowTemplate[data.flowTemplateIndex + 3];
        vertexLevels.v1v = vertexLevels.v1l / 15 - 1;
        vertexLevels.v2v = vertexLevels.v2l / 15 - 1;
        vertexLevels.v3v = vertexLevels.v3l / 15 - 1;
        vertexLevels.v4v = vertexLevels.v4l / 15 - 1;
    }
};
const clearVertexLevels = (data) => {
    if (data.flowTemplate && data.flowTemplateIndex != undefined) {
        vertexLevels.v1l = 0;
        vertexLevels.v2l = 0;
        vertexLevels.v3l = 0;
        vertexLevels.v4l = 0;
        vertexLevels.v1v = 0;
        vertexLevels.v2v = 0;
        vertexLevels.v3v = 0;
        vertexLevels.v4v = 0;
    }
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Panel/CrossedPanels.voxel.shape.js":
/*!*****************************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Panel/CrossedPanels.voxel.shape.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrossedPanels": () => (/* binding */ CrossedPanels)
/* harmony export */ });
let topANIM = 0;
let bottomANIM = 0;
const CrossedPanels = {
    id: "#dve_crossed_panels",
    build(mesher) {
        topANIM = 0;
        bottomANIM = 0;
        if (mesher.data.getSubstance() == "#dve_flora") {
            if (mesher.data.isSameVoxel(mesher.data.x, mesher.data.y + 1, mesher.data.z)) {
                topANIM = 3;
                bottomANIM = 3;
            }
            else {
                topANIM = 1;
            }
        }
        mesher.quad.setDimensions(1, 1);
        mesher.setTemplateIncrement(false).templateData.loadIn("top");
        mesher.quad
            .setDirection("north")
            .setFlipped(false)
            .addData(1)
            .setAnimationState([bottomANIM, bottomANIM, topANIM, topANIM])
            .updatePosition(0.5, 0.5, 1)
            .setTransform(1, 0, 0, -1)
            .setTransform(4, 0, 0, -1)
            .create()
            .clearTransform();
        mesher.setTemplateIncrement(true).templateData.loadIn("top");
        mesher.quad
            .setDirection("north")
            .setFlipped(false)
            .addData(1)
            .setAnimationState([bottomANIM, bottomANIM, topANIM, topANIM])
            .updatePosition(0.5, 0.5, 0)
            .setTransform(1, 0, 0, 1)
            .setTransform(4, 0, 0, 1)
            .create()
            .clearTransform();
        mesher.setTemplateIncrement(false).templateData.loadIn("bottom");
        mesher.quad
            .setDirection("south")
            .setFlipped(false)
            .addData(1)
            .setAnimationState([bottomANIM, bottomANIM, topANIM, topANIM])
            .updatePosition(0.5, 0.5, 0)
            .setTransform(1, 0, 0, 1)
            .setTransform(4, 0, 0, 1)
            .create()
            .clearTransform();
        mesher.setTemplateIncrement(true).templateData.loadIn("bottom");
        mesher.quad
            .setDirection("south")
            .setFlipped(false)
            .addData(1)
            .setAnimationState([bottomANIM, bottomANIM, topANIM, topANIM])
            .updatePosition(0.5, 0.5, 1)
            .setTransform(1, 0, 0, -1)
            .setTransform(4, 0, 0, -1)
            .create()
            .clearTransform();
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Panel/Panel.voxel.shape.js":
/*!*********************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Panel/Panel.voxel.shape.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelVoxelShape": () => (/* binding */ PanelVoxelShape)
/* harmony export */ });
/* harmony import */ var _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Rules/Overrides/OverridesManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js");

let animationState = 0;
const shapeStates = {
    0: (mesher) => {
        mesher.templateData.loadIn("top");
        mesher.quad
            .setDirection("south")
            .addData(1, animationState)
            .updatePosition(0.5, 0.5, 0.05)
            .create();
        mesher.templateData.loadIn("bottom");
        mesher.quad
            .setDirection("north")
            .addData(1, animationState)
            .updatePosition(0.5, 0.5, 0.05)
            .create();
    },
    1: (mesher) => {
        mesher.templateData.loadIn("top");
        mesher.quad
            .setDirection("north")
            .addData(1, animationState)
            .updatePosition(0.5, 0.5, 0.95)
            .create();
        mesher.templateData.loadIn("bottom");
        mesher.quad
            .setDirection("south")
            .addData(1, animationState)
            .updatePosition(0.5, 0.5, 0.95)
            .create();
    },
    2: (mesher) => {
        mesher.templateData.loadIn("top");
        mesher.quad
            .setDirection("east")
            .addData(1, animationState)
            .updatePosition(0.95, 0.5, 0.5)
            .create();
        mesher.templateData.loadIn("bottom");
        mesher.quad
            .setDirection("west")
            .addData(1, animationState)
            .updatePosition(0.95, 0.5, 0.5)
            .create();
    },
    3: (mesher) => {
        mesher.templateData.loadIn("top");
        mesher.quad
            .setDirection("west")
            .addData(1, animationState)
            .updatePosition(0.05, 0.5, 0.5)
            .create();
        mesher.templateData.loadIn("bottom");
        mesher.quad
            .setDirection("east")
            .addData(1, animationState)
            .updatePosition(0.05, 0.5, 0.5)
            .create();
    },
    4: (mesher) => {
        mesher.templateData.loadIn("top");
        mesher.quad
            .setDirection("top")
            .addData(1, animationState)
            .updatePosition(0.5, 0.05, 0.5)
            .create();
        mesher.templateData.loadIn("bottom");
        mesher.quad
            .setDirection("bottom")
            .addData(1, animationState)
            .updatePosition(0.5, 0.05, 0.5)
            .create();
    },
    5: (mesher) => {
        mesher.templateData.loadIn("top");
        mesher.quad
            .setDirection("bottom")
            .addData(1, animationState)
            .updatePosition(0.5, 0.95, 0.5)
            .create();
        mesher.templateData.loadIn("bottom");
        mesher.quad
            .setDirection("top")
            .addData(1, animationState)
            .updatePosition(0.5, 0.95, 0.5)
            .create();
    },
};
const PanelVoxelShape = {
    id: "#dve_panel",
    build(mesher) {
        animationState = 0;
        if (mesher.data.getSubstance() == "#dve_flora") {
            animationState = 2;
        }
        mesher.quad.setDimensions(1, 1);
        const shapeState = mesher.data.getShapeState();
        shapeStates[shapeState](mesher);
    },
};
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "Panel", "Any", (data) => {
    if (data.currentVoxel.getSubstance() == "#dve_flora") {
        return false;
    }
    return data.default;
});
_Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "Panel", "Any", (data) => {
    if (data.currentVoxel.getSubstance() == "#dve_flora") {
        return false;
    }
    return data.default;
});


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/RegisterDefaultShapes.js":
/*!*******************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/RegisterDefaultShapes.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterDefaultShapes": () => (/* binding */ RegisterDefaultShapes)
/* harmony export */ });
/* harmony import */ var _Panel_CrossedPanels_voxel_shape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel/CrossedPanels.voxel.shape.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Panel/CrossedPanels.voxel.shape.js");
/* harmony import */ var _Box_Box_voxel_shape_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box/Box.voxel.shape.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Box/Box.voxel.shape.js");
/* harmony import */ var _Liquid_Liquid_voxel_shape_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Liquid/Liquid.voxel.shape.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Liquid/Liquid.voxel.shape.js");
/* harmony import */ var _Box_HalfBox_voxel_shape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Box/HalfBox.voxel.shape.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Box/HalfBox.voxel.shape.js");
/* harmony import */ var _Panel_Panel_voxel_shape_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Panel/Panel.voxel.shape.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Panel/Panel.voxel.shape.js");
/* harmony import */ var _Stair_Stair_voxel_shape_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stair/Stair.voxel.shape.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/Stair.voxel.shape.js");
//shapes






function RegisterDefaultShapes(builder) {
    builder.shapeManager.registerShape(_Box_Box_voxel_shape_js__WEBPACK_IMPORTED_MODULE_1__.BoxVoxelShape);
    builder.shapeManager.registerShape(_Box_HalfBox_voxel_shape_js__WEBPACK_IMPORTED_MODULE_3__.HalfBoxVoxelShape);
    builder.shapeManager.registerShape(_Stair_Stair_voxel_shape_js__WEBPACK_IMPORTED_MODULE_5__.StairVoxelShape);
    builder.shapeManager.registerShape(_Panel_Panel_voxel_shape_js__WEBPACK_IMPORTED_MODULE_4__.PanelVoxelShape);
    builder.shapeManager.registerShape(_Liquid_Liquid_voxel_shape_js__WEBPACK_IMPORTED_MODULE_2__.LiquidVoxelShape);
    builder.shapeManager.registerShape(_Panel_CrossedPanels_voxel_shape_js__WEBPACK_IMPORTED_MODULE_0__.CrossedPanels);
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/Stair.overrides.js":
/*!*******************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/Stair.overrides.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetUpStairOverrides": () => (/* binding */ SetUpStairOverrides),
/* harmony export */   "StairCullFace": () => (/* binding */ StairCullFace)
/* harmony export */ });
/* harmony import */ var _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Rules/Overrides/OverridesManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Rules/Overrides/OverridesManager.js");
/* harmony import */ var _Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Data/Shapes/StairStates.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Shapes/StairStates.js");
/* harmony import */ var _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Data/Constants/Util/Faces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/Faces.js");



/*
 "top",
 "bottom",
 "east",
 "west",
 "south",
 "north",
*/
const stairCulls = {};
stairCulls[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_1__.StairStates.normal.bottom.north] = {
    faces: [0, 1, 3, 0, 3, 1, 0, 1],
    stateCulls: [
        [_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_1__.StairStates.normal.bottom.north],
        [_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_1__.StairStates.normal.bottom.north],
    ],
};
const halfBoxCull = (Data) => {
    return true;
};
const stairCull = (data) => {
    const shapeState = data.currentVoxel.getShapeState();
    const stairData = stairCulls[shapeState];
    if (!stairData)
        return false;
    const neighborShapeState = data.neighborVoxel.getShapeState();
    let finalResult = false;
    const faces = stairData.faces;
    const type = faces[_Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_2__.FaceRecord[data.face]];
    if (type == 2 || type == 3) {
        const i = faces[_Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_2__.FaceRecord[data.face] + 1];
        const override = stairData.stateCulls[i];
        finalResult = !override.includes(neighborShapeState);
    }
    return finalResult;
};
const boxCull = (data) => {
    const shapeState = data.currentVoxel.getShapeState();
    const stairData = stairCulls[shapeState];
    if (!stairData)
        return false;
    let finalResult = false;
    const faces = stairData.faces;
    const type = faces[_Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_2__.FaceRecord[data.face]];
    if (type == 1 || type == 3) {
        finalResult = false;
    }
    return finalResult;
};
const StairCullFace = (data) => {
    const id = data.neighborVoxel.getVoxelShapeObj().id;
    if (id == "#dve_box") {
        return boxCull(data);
    }
    if (id == "#dve_half_box") {
        return halfBoxCull(data);
    }
    if (id == "#dve_stair") {
        return stairCull(data);
    }
    return true;
};
function SetUpStairOverrides() {
    _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("CullFace", "#dve_stair", "Any", (data) => {
        return StairCullFace(data);
    });
    _Rules_Overrides_OverridesManager_js__WEBPACK_IMPORTED_MODULE_0__.OverrideManager.registerOverride("AOFlipFace", "#dve_stair", "Any", (data) => {
        if (data.face == "top" || data.face == "bottom")
            return true;
        return false;
    });
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/Stair.voxel.shape.js":
/*!*********************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/Stair.voxel.shape.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StairVoxelShape": () => (/* binding */ StairVoxelShape)
/* harmony export */ });
/* harmony import */ var _Stair_overrides_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stair.overrides.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/Stair.overrides.js");
/* harmony import */ var _StairData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StairData.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/StairData.js");
/* harmony import */ var _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Data/Constants/Util/Faces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/Faces.js");
//functions

//data


const StairVoxelShape = {
    id: "#dve_stair",
    build(mesher) {
        const data = _StairData_js__WEBPACK_IMPORTED_MODULE_1__.StairBuilderData[mesher.data.getShapeState()];
        if (!data)
            return;
        let i = 0;
        for (const face of _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_2__.FaceMap) {
            const node = data[i];
            if (mesher.templateData.loadIn(face).isExposed()) {
                let k = node.length;
                for (const quad of node) {
                    k--;
                    mesher.setTemplateIncrement(k == 0);
                    if (quad[6] >= 0) {
                        mesher.quad.setFlipped(quad[6] == 1);
                    }
                    mesher.quad
                        .setDimensions(quad[1][0], quad[1][1])
                        .setDirection(quad[0])
                        .updatePosition(quad[2][0], quad[2][1], quad[2][2])
                        .AO.addCustom(quad[3])
                        .light.addCustom(quad[4])
                        .oUVS.add()
                        .uvs.setRoation(quad[5][0])
                        .setWidth(quad[5][1], quad[5][2])
                        .setHeight(quad[5][3], quad[5][4])
                        .add()
                        .create()
                        .clearTransform();
                }
            }
            mesher.setTemplateIncrement(true);
            i++;
        }
    },
};
(0,_Stair_overrides_js__WEBPACK_IMPORTED_MODULE_0__.SetUpStairOverrides)();


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/StairData.js":
/*!*************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/default/Stair/StairData.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StairBuilderData": () => (/* binding */ StairBuilderData)
/* harmony export */ });
/* harmony import */ var _Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Data/Shapes/StairStates.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Shapes/StairStates.js");

const halfHeightQuad = (direction, position, AO, uvs) => {
    const mewQuad = quad(direction, position);
    mewQuad[1][1] = 0.5;
    mewQuad[3] = AO;
    mewQuad[4] = [-5, -5, -5, -5];
    mewQuad[5] = [0, 0, 1, uvs[0], uvs[1]];
    return mewQuad;
};
const halfWidthQuad = (direction, position, AO, uvs) => {
    const quad = halfHeightQuad(direction, position, AO, uvs);
    quad[1][0] = 0.5;
    quad[1][1] = 1;
    quad[4] = [-5, -5, -5, -5];
    quad[5] = [0, uvs[0], uvs[1], 0, 1];
    return quad;
};
const quaterQuad = (direction, position, AO, uvs) => {
    const mewQuad = quad(direction, position);
    mewQuad[1][0] = 0.5;
    mewQuad[1][1] = 0.5;
    mewQuad[3] = AO;
    mewQuad[4] = [-5, -5, -5, -5];
    mewQuad[5] = uvs;
    return mewQuad;
};
const quad = (direction, position, AO = [-1, -2, -3, -4], flip = -1 | 0 | 1) => {
    return [
        direction,
        [1, 1],
        position,
        AO,
        [-1, -2, -3, -4],
        [0, 0, 1, 0, 1],
        flip,
    ];
};
const fullQuads = {
    top: quad("top", [0.5, 1, 0.5]),
    bottom: quad("bottom", [0.5, 0, 0.5]),
    east: quad("east", [1, 0.5, 0.5]),
    west: quad("west", [0, 0.5, 0.5]),
    south: quad("south", [0.5, 0.5, 0]),
    north: quad("north", [0.5, 0.5, 1]),
};
const a = 0.65;
const StairBuilderData = {};
//bottom
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.normal.bottom.north] = [
    [
        halfHeightQuad("top", [0.5, 1, 0.75], [1, -2, -3, 1], [0, 0.5]),
        halfHeightQuad("top", [0.5, 0.5, 0.25], [1, a, a, 1], [0.5, 1]),
    ],
    [fullQuads.bottom],
    [
        quaterQuad("east", [1, 0.75, 0.75], [-1, -2, 1, 1], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("east", [1, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("west", [0, 0.75, 0.75], [-1, -2, 1, 1], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("west", [0, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        halfHeightQuad("south", [0.5, 0.25, 0], [1, 1, -3, -4], [0.5, 1]),
        halfHeightQuad("south", [0.5, 0.75, 0.5], [-1, -2, a, a], [0, 0.5]),
    ],
    [fullQuads.north],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.normal.bottom.south] = [
    [
        halfHeightQuad("top", [0.5, 0.5, 0.75], [a, 1, 1, a], [0, 0.5]),
        halfHeightQuad("top", [0.5, 1, 0.25], [-1, 1, 1, -4], [0.5, 1]),
    ],
    [fullQuads.bottom],
    [
        quaterQuad("east", [1, 0.75, 0.25], [-1, -2, 1, 1], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("east", [1, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("west", [0, 0.75, 0.25], [-1, -2, 1, 1], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("west", [0, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [fullQuads.south],
    [
        halfHeightQuad("north", [0.5, 0.25, 1], [1, 1, -3, -4], [0.5, 1]),
        halfHeightQuad("north", [0.5, 0.75, 0.5], [-1, -2, a, a], [0, 0.5]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.normal.bottom.east] = [
    [
        halfWidthQuad("top", [0.75, 1, 0.5], [1, 1, -3, -5], [0.5, 1]),
        halfWidthQuad("top", [0.25, 0.5, 0.5], [1, 1, a, a], [0, 0.5]),
    ],
    [fullQuads.bottom],
    [fullQuads.east],
    [
        halfHeightQuad("west", [0, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
        halfHeightQuad("west", [0.5, 0.75, 0.5], [-1, -2, a, a], [0, 0.5]),
    ],
    [
        quaterQuad("south", [0.75, 0.75, 0], [-1, -2, 1, 1], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("south", [0.5, 0.25, 0], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("north", [0.75, 0.75, 1], [-1, -2, 1, 1], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("north", [0.5, 0.25, 1], [1, 1, -3, -4], [0.5, 1]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.normal.bottom.west] = [
    [
        halfWidthQuad("top", [0.75, 0.5, 0.5], [a, a, 1, 1], [0.5, 1]),
        halfWidthQuad("top", [0.25, 1, 0.5], [-1, -2, 1, 1], [0, 0.5]),
    ],
    [fullQuads.bottom],
    [
        halfHeightQuad("east", [1, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
        halfHeightQuad("east", [0.5, 0.75, 0.5], [-1, -2, a, a], [0, 0.5]),
    ],
    [fullQuads.west],
    [
        quaterQuad("south", [0.25, 0.75, 0], [-1, -2, 1, 1], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("south", [0.5, 0.25, 0], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("north", [0.25, 0.75, 1], [-1, -2, 1, 1], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("north", [0.5, 0.25, 1], [1, 1, -3, -4], [0.5, 1]),
    ],
];
//top
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.normal.top.north] = [
    [fullQuads.top],
    [
        halfHeightQuad("bottom", [0.5, 0, 0.75], [1, 1, -3, -4], [0, 0.5]),
        halfHeightQuad("bottom", [0.5, 0.5, 0.25], [1, 1, a, a], [0.5, 1]),
    ],
    [
        quaterQuad("east", [1, 0.25, 0.75], [-1, -2, 1, 1], [0, 0.5, 1, 0.5, 1]),
        halfHeightQuad("east", [1, 0.75, 0.5], [1, 1, -3, -4], [0, 0.5]),
    ],
    [
        quaterQuad("west", [0, 0.25, 0.75], [-1, -2, 1, 1], [0, 0, 0.5, 0.5, 1]),
        halfHeightQuad("west", [0, 0.75, 0.5], [1, 1, -3, -4], [0, 0.5]),
    ],
    [
        halfHeightQuad("south", [0.5, 0.25, 0.5], [a, a, 1, 1], [0.5, 1]),
        halfHeightQuad("south", [0.5, 0.75, 0], [-1, -2, 1, 1], [0, 0.5]),
    ],
    [fullQuads.north],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.normal.top.south] = [
    [fullQuads.top],
    [
        halfHeightQuad("bottom", [0.5, 0, 0.25], [-1, -2, 1, 1], [0, 0.5]),
        halfHeightQuad("bottom", [0.5, 0.5, 0.75], [a, a, 1, 1], [0.5, 1]),
    ],
    [
        quaterQuad("east", [1, 0.25, 0.25], [-1, -2, 1, 1], [0, 0, 0.5, 0.5, 1]),
        halfHeightQuad("east", [1, 0.75, 0.5], [1, 1, -3, -4], [0, 0.5]),
    ],
    [
        quaterQuad("west", [0, 0.25, 0.25], [-1, -2, 1, 1], [0, 0.5, 1, 0.5, 1]),
        halfHeightQuad("west", [0, 0.75, 0.5], [1, 1, -3, -4], [0, 0.5]),
    ],
    [fullQuads.south],
    [
        halfHeightQuad("north", [0.5, 0.25, 0.5], [a, a, 1, 1], [0.5, 1]),
        halfHeightQuad("north", [0.5, 0.75, 1], [-1, -2, 1, 1], [0, 0.5]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.normal.top.east] = [
    [fullQuads.top],
    [
        halfWidthQuad("bottom", [0.75, 0, 0.5], [1, -2, -3, 1], [0.5, 1]),
        halfWidthQuad("bottom", [0.25, 0.5, 0.5], [1, a, a, 1], [0, 0.5]),
    ],
    [fullQuads.east],
    [
        halfHeightQuad("west", [0.5, 0.25, 0.5], [a, a, 1, 1], [0.5, 1]),
        halfHeightQuad("west", [0, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
    ],
    [
        quaterQuad("south", [0.75, 0.25, 0], [-1, -2, 1, 1], [0, 0.5, 1, 0.5, 1]),
        halfHeightQuad("south", [0.5, 0.75, 0], [1, 1, -3, -4], [0, 0.5]),
    ],
    [
        quaterQuad("north", [0.75, 0.25, 1], [-1, -2, 1, 1], [0, 0, 0.5, 0.5, 1]),
        halfHeightQuad("north", [0.5, 0.75, 1], [1, 1, -3, -4], [0, 0.5]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.normal.top.west] = [
    [fullQuads.top],
    [
        halfWidthQuad("bottom", [0.75, 0.5, 0.5], [a, 1, 1, a], [0.5, 1]),
        halfWidthQuad("bottom", [0.25, 0, 0.5], [-1, 1, 1, -4], [0, 0.5]),
    ],
    [
        halfHeightQuad("east", [0.5, 0.25, 0.5], [a, a, 1, 1], [0.5, 1]),
        halfHeightQuad("east", [1, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
    ],
    [fullQuads.west],
    [
        quaterQuad("south", [0.25, 0.25, 0], [-1, -2, 1, 1], [0, 0, 0.5, 0.5, 1]),
        halfHeightQuad("south", [0.5, 0.75, 0], [1, 1, -3, -4], [0, 0.5]),
    ],
    [
        quaterQuad("north", [0.25, 0.25, 1], [-1, -2, 1, 1], [0, 0.5, 1, 0.5, 1]),
        halfHeightQuad("north", [0.5, 0.75, 1], [1, 1, -3, -4], [0, 0.5]),
    ],
];
//connected states
//bottom
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.connected.bottom.northEast] = [
    [
        quaterQuad("top", [0.75, 1, 0.75], [1, -2, -3, 1], [0, 0, 0.5, 0.5, 1]),
        quad("top", [0.5, 0.5, 0.5], [1, 1, a, 1]),
    ],
    [fullQuads.bottom],
    [
        quaterQuad("east", [1, 0.75, 0.75], [-1, -2, 1, 1], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("east", [1, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("west", [0.5, 0.75, 0.75], [-1, -2, a, a], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("west", [0, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("south", [0.75, 0.75, 0.5], [-1, -2, a, a], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("south", [0.5, 0.25, 0], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("north", [0.75, 0.75, 1], [-1, -2, 1, 1], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("north", [0.5, 0.25, 1], [1, 1, -3, -4], [0.5, 1]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.connected.bottom.northWest] = [
    [
        quaterQuad("top", [0.25, 1, 0.75], [1, -2, -3, 1], [0, 0, 0.5, 0.5, 1]),
        quad("top", [0.5, 0.5, 0.5], [1, 1, a, 1], 1),
    ],
    [fullQuads.bottom],
    [
        quaterQuad("east", [0.5, 0.75, 0.75], [-1, -2, a, a], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("east", [1, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("west", [0, 0.75, 0.75], [-1, -2, 1, 1], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("west", [0, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("south", [0.25, 0.75, 0.5], [-1, -2, a, a], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("south", [0.5, 0.25, 0], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("north", [0.25, 0.75, 1], [-1, -2, 1, 1], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("north", [0.5, 0.25, 1], [1, 1, -3, -4], [0.5, 1]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.connected.bottom.southEast] = [
    [
        quaterQuad("top", [0.75, 1, 0.25], [1, -2, -3, 1], [0, 0, 0.5, 0.5, 1]),
        quad("top", [0.5, 0.5, 0.5], [a, 1, 1, 1], 1),
    ],
    [fullQuads.bottom],
    [
        quaterQuad("east", [1, 0.75, 0.25], [-1, -2, 1, 1], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("east", [1, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("west", [0.5, 0.75, 0.25], [-1, -2, a, a], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("west", [0, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("south", [0.75, 0.75, 0], [-1, -2, 1, 1], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("south", [0.5, 0.25, 0], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("north", [0.75, 0.75, 0.5], [-1, -2, a, a], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("north", [0.5, 0.25, 1], [1, 1, -3, -4], [0.5, 1]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.connected.bottom.southWest] = [
    [
        quaterQuad("top", [0.25, 1, 0.25], [1, -2, -3, 1], [0, 0, 0.5, 0.5, 1]),
        quad("top", [0.5, 0.5, 0.5], [a, 1, 1, 1]),
    ],
    [fullQuads.bottom],
    [
        quaterQuad("east", [0.5, 0.75, 0.25], [-1, -2, a, a], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("east", [1, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("west", [0, 0.75, 0.25], [-1, -2, 1, 1], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("west", [0, 0.25, 0.5], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("south", [0.25, 0.75, 0], [-1, -2, 1, 1], [0, 0, 0.5, 0, 0.5]),
        halfHeightQuad("south", [0.5, 0.25, 0], [1, 1, -3, -4], [0.5, 1]),
    ],
    [
        quaterQuad("north", [0.25, 0.75, 0.5], [-1, -2, a, a], [0, 0.5, 1, 0, 0.5]),
        halfHeightQuad("north", [0.5, 0.25, 1], [1, 1, -3, -4], [0.5, 1]),
    ],
];
//top
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.connected.top.northEast] = [
    [fullQuads.top],
    [
        quaterQuad("bottom", [0.75, 0, 0.75], [1, -2, -3, 1], [0, 0.5, 1, 0.5, 1]),
        quad("bottom", [0.5, 0.5, 0.5], [1, 1, a, 1]),
    ],
    [
        halfHeightQuad("east", [1, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("east", [1, 0.25, 0.75], [1, 1, -3, -4], [0, 0.5, 1, 0.5, 1]),
    ],
    [
        halfHeightQuad("west", [0, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("west", [0.5, 0.25, 0.75], [a, a, -3, -4], [0, 0, 0.5, 0.5, 1]),
    ],
    [
        halfHeightQuad("south", [0.5, 0.75, 0], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("south", [0.75, 0.25, 0.5], [a, a, -3, -4], [0, 0.5, 1, 0.5, 1]),
    ],
    [
        halfHeightQuad("north", [0.5, 0.75, 1], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("north", [0.75, 0.25, 1], [1, 1, -3, -4], [0, 0, 0.5, 0.5, 1]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.connected.top.northWest] = [
    [fullQuads.top],
    [
        quaterQuad("bottom", [0.25, 0, 0.75], [1, -2, -3, 1], [0, 0, 0.5, 0.5, 1]),
        quad("bottom", [0.5, 0.5, 0.5], [a, 1, 1, 1], 1),
    ],
    [
        halfHeightQuad("east", [1, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("east", [0.5, 0.25, 0.75], [a, a, -3, -4], [0, 0.5, 1, 0.5, 1]),
    ],
    [
        halfHeightQuad("west", [0, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("west", [0, 0.25, 0.75], [1, 1, -3, -4], [0, 0, 0.5, 0.5, 1]),
    ],
    [
        halfHeightQuad("south", [0.5, 0.75, 0], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("south", [0.25, 0.25, 0.5], [a, a, -3, -4], [0, 0, 0.5, 0.5, 1]),
    ],
    [
        halfHeightQuad("north", [0.5, 0.75, 1], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("north", [0.25, 0.25, 1], [1, 1, -3, -4], [0, 0.5, 1, 0.5, 1]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.connected.top.southEast] = [
    [fullQuads.top],
    [
        quaterQuad("bottom", [0.75, 0, 0.25], [1, -2, -3, 1], [0, 0.5, 1, 0, 0.5]),
        quad("bottom", [0.5, 0.5, 0.5], [1, 1, a, 1], 1),
    ],
    [
        halfHeightQuad("east", [1, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("east", [1, 0.25, 0.25], [1, 1, -3, -4], [0, 0, 0.5, 0.5, 1]),
    ],
    [
        halfHeightQuad("west", [0, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("west", [0.5, 0.25, 0.25], [a, a, -3, -4], [0, 0.5, 1, 0.5, 1]),
    ],
    [
        halfHeightQuad("south", [0.5, 0.75, 0], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("south", [0.75, 0.25, 0], [1, 1, -3, -4], [0, 0.5, 1, 0.5, 1]),
    ],
    [
        halfHeightQuad("north", [0.5, 0.75, 1], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("north", [0.75, 0.25, 0.5], [a, a, -3, -4], [0, 0, 0.5, 0.5, 1]),
    ],
];
StairBuilderData[_Data_Shapes_StairStates_js__WEBPACK_IMPORTED_MODULE_0__.StairStates.connected.top.southWest] = [
    [fullQuads.top],
    [
        quaterQuad("bottom", [0.25, 0, 0.25], [1, -2, -3, 1], [0, 0, 0.5, 0, 0.5]),
        quad("bottom", [0.5, 0.5, 0.5], [a, 1, 1, 1]),
    ],
    [
        halfHeightQuad("east", [1, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("east", [0.5, 0.25, 0.25], [a, a, -3, -4], [0, 0, 0.5, 0.5, 1]),
    ],
    [
        halfHeightQuad("west", [0, 0.75, 0.5], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("west", [0, 0.25, 0.25], [1, 1, -3, -4], [0, 0.5, 1, 0.5, 1]),
    ],
    [
        halfHeightQuad("south", [0.5, 0.75, 0], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("south", [0.25, 0.25, 0], [1, 1, -3, -4], [0, 0, 0.5, 0.5, 1]),
    ],
    [
        halfHeightQuad("north", [0.5, 0.75, 1], [-1, -2, 1, 1], [0, 0.5]),
        quaterQuad("north", [0.25, 0.25, 0.5], [a, a, -3, -4], [0, 0.5, 1, 0.5, 1]),
    ],
];


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Textures/TextureManager.js":
/*!******************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Textures/TextureManager.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextureManager": () => (/* binding */ TextureManager)
/* harmony export */ });
const TextureManager = {
    textureDataHasBeenSet: false,
    data: {},
    getTextureUV(data, overlay = false) {
        const [textureType, textureId, varation] = data;
        let id = textureId;
        if (varation) {
            id = `${textureId}:${varation}`;
        }
        let uv = -1;
        if (!overlay) {
            uv = this.data[textureType]["main"][id];
        }
        else {
            uv = this.data[textureType]["overlay"][id];
        }
        if (uv == -1) {
            throw new Error(`Texture with id: ${id} does not exists. Overlay : ${overlay}`);
        }
        return uv;
    },
    setUVTextureMap(data) {
        this.textureDataHasBeenSet = true;
        this.data = data;
    },
    releaseTextureData() {
        this.data = null;
        delete this["data"];
    },
    isReady() {
        return this.textureDataHasBeenSet;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Tools/VoxelMesher.js":
/*!************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Tools/VoxelMesher.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelMesher": () => (/* binding */ VoxelMesher)
/* harmony export */ });
/* harmony import */ var _Data_Meshing_MeshFaceDataBytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/Meshing/MeshFaceDataBytes.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Meshing/MeshFaceDataBytes.js");
/* harmony import */ var _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/Light/LightByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js");
/* harmony import */ var _Data_Meshing_FaceByte_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/Meshing/FaceByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Meshing/FaceByte.js");
/* harmony import */ var _Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tools/Data/ConstructorDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Data/ConstructorDataTool.js");
/* harmony import */ var _Geometry_GeometryBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Geometry/GeometryBuilder.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Geometry/GeometryBuilder.js");
//data





const dataTool = (0,_Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_3__.GetConstructorDataTool)();
/**# Voxel Mesher Tool
 * ---
 * Tool desinged to help make it easy to build voxel meshes.
 */
const VoxelMesher = {
    _data: {},
    _template: {},
    templateIncrement: true,
    setTemplateIncrement(onOff) {
        this.templateIncrement = onOff;
        return this;
    },
    $buildMesh(type, template, LOD = 1, location) {
        const data = {
            substance: type,
            LOD: LOD,
            //mesh data
            positions: [],
            normals: [],
            indices: [],
            faceData: [],
            lightColors: [],
            colors: [],
            AOColors: [],
            uvs: [],
            overlayUVs: [],
            indicieIndex: 0,
            //chunks template
            shapeState: 0,
            flowTemplateIndex: 0,
            flowTemplate: template.flowTemplate,
            unTemplate: template.uvTemplate,
            uvTemplateIndex: 0,
            overylayUVTemplate: template.overlayUVTemplate,
            overylayUVTemplateIndex: 0,
            colorTemplate: template.colorTemplate,
            colorIndex: 0,
            lightTemplate: template.lightTemplate,
            lightIndex: 0,
            aoTemplate: template.aoTemplate,
            aoIndex: 0,
            //voxel data
            face: 0,
            position: { x: 0, y: 0, z: 0 },
        };
        _Geometry_GeometryBuilder_js__WEBPACK_IMPORTED_MODULE_4__.GeometryBuilder.setData(data);
        this._template = template;
        this._data = data;
        let i = 0;
        for (let positionIndex = 0; positionIndex < template.positionTemplate.length; positionIndex += 3) {
            data.position.x = template.positionTemplate[positionIndex];
            data.position.y = template.positionTemplate[positionIndex + 1];
            data.position.z = template.positionTemplate[positionIndex + 2];
            if (!this.data.loadInAt(location[1] + data.position.x, location[2] + data.position.y, location[3] + data.position.z)) {
                return false;
            }
            if (!this.data.isRenderable()) {
                return false;
            }
            this.quad.setPosition(data.position.x, data.position.y, data.position.z);
            data.face = template.faceTemplate[i];
            data.shapeState = this.data.getShapeState();
            this.data.getVoxelShapeObj().build(this);
            if (data.flowTemplate) {
                if (this.templateData.loadIn("top").isExposed()) {
                    data.flowTemplateIndex += 4;
                }
            }
            this.quad.clear();
            i++;
        }
        _Geometry_GeometryBuilder_js__WEBPACK_IMPORTED_MODULE_4__.GeometryBuilder.clearData();
        const positionArray = new Float32Array(data.positions);
        const normalsArray = new Float32Array(data.normals);
        const indiciesArray = new Uint16Array(data.indices);
        const faceDataArray = new Float32Array(data.faceData);
        const AOColorsArray = new Float32Array(data.AOColors);
        const lightColors = new Float32Array(data.lightColors);
        const colorsArray = new Float32Array(data.colors);
        const uvArray = new Float32Array(data.uvs);
        const overlayUVArray = new Float32Array(data.overlayUVs);
        this._template = null;
        this._data = null;
        return [
            [
                positionArray,
                normalsArray,
                indiciesArray,
                faceDataArray,
                AOColorsArray,
                lightColors,
                colorsArray,
                uvArray,
                overlayUVArray,
            ],
            [
                positionArray.buffer,
                normalsArray.buffer,
                indiciesArray.buffer,
                faceDataArray.buffer,
                AOColorsArray.buffer,
                lightColors.buffer,
                colorsArray.buffer,
                uvArray.buffer,
                overlayUVArray.buffer,
            ],
        ];
    },
    data: dataTool,
    quad: {
        _direction: "top",
        _faceData: [0, 0, 0, 0],
        _fliped: false,
        _cachedPosition: { x: 0, y: 0, z: 0 },
        _dimension: { height: 0, width: 0 },
        _transform: {
            1: { x: 0, y: 0, z: 0 },
            2: { x: 0, y: 0, z: 0 },
            3: { x: 0, y: 0, z: 0 },
            4: { x: 0, y: 0, z: 0 },
        },
        setAnimationState(type) {
            if (Array.isArray(type)) {
                for (let i = 0; i < this._faceData.length; i++) {
                    this._faceData[i] = _Data_Meshing_MeshFaceDataBytes_js__WEBPACK_IMPORTED_MODULE_0__.MeshFaceDataByte.setAnimationType(type[i], this._faceData[i]);
                }
                return this;
            }
            for (let i = 0; i < this._faceData.length; i++) {
                this._faceData[i] = _Data_Meshing_MeshFaceDataBytes_js__WEBPACK_IMPORTED_MODULE_0__.MeshFaceDataByte.setAnimationType(type, this._faceData[i]);
            }
            return this;
        },
        setDimensions(width = 0, height = 0) {
            this._dimension.width = width;
            this._dimension.height = height;
            return this;
        },
        setPosition(x = 0, y = 0, z = 0) {
            VoxelMesher._data.position.x = x;
            VoxelMesher._data.position.y = y;
            VoxelMesher._data.position.z = z;
            this._cachedPosition.x = x;
            this._cachedPosition.y = y;
            this._cachedPosition.z = z;
            return this;
        },
        updatePosition(x = 0, y = 0, z = 0) {
            VoxelMesher._data.position.x = this._cachedPosition.x + x;
            VoxelMesher._data.position.y = this._cachedPosition.y + y;
            VoxelMesher._data.position.z = this._cachedPosition.z + z;
            return this;
        },
        updatePositionInPlace(x = 0, y = 0, z = 0) {
            VoxelMesher._data.position.x += x;
            VoxelMesher._data.position.y += y;
            VoxelMesher._data.position.z += z;
            return this;
        },
        setTransform(vertex, x = 0, y = 0, z = 0) {
            const t = this._transform[vertex];
            t.x = x;
            t.y = y;
            t.z = z;
            return this;
        },
        clearTransform() {
            this.setTransform(1);
            this.setTransform(2);
            this.setTransform(3);
            this.setTransform(4);
            return this;
        },
        setFlipped(flipped) {
            this._fliped = flipped;
            this.uvs._fliped = flipped;
            return this;
        },
        setDirection(direction) {
            this._direction = direction;
            return this;
        },
        create() {
            _Geometry_GeometryBuilder_js__WEBPACK_IMPORTED_MODULE_4__.GeometryBuilder.createQuad(this._direction, this._dimension, VoxelMesher._data.position, this._fliped, this._transform);
            let i = 4;
            while (i--) {
                VoxelMesher._data.faceData.push(this._faceData[i]);
                this._faceData[i] = 0;
            }
            return VoxelMesher.quad;
        },
        addData(stride = 4, animationState = 0, doAO = true) {
            if (animationState) {
                this.setAnimationState(animationState);
            }
            this.uvs.add().oUVS.add();
            if (doAO) {
                this.AO.add(stride);
            }
            this.light.add(stride);
            return this;
        },
        clear() {
            this.uvs.clear();
            this.uvs.resetAdvancedUVs();
            this._fliped = false;
            this._cachedPosition.x = 0;
            this._cachedPosition.y = 0;
            this._cachedPosition.z = 0;
            for (let i = 1; i < 5; i++) {
                this._transform[i].x = 0;
                this._transform[i].y = 0;
                this._transform[i].z = 0;
            }
            return VoxelMesher;
        },
        oUVS: {
            getCurrent() {
                const data = VoxelMesher._data;
                let i = data.overylayUVTemplateIndex;
                return [
                    data.overylayUVTemplate[i],
                    data.overylayUVTemplate[i + 1],
                    data.overylayUVTemplate[i + 2],
                    data.overylayUVTemplate[i + 3],
                ];
            },
            add(cumstomUVS) {
                const data = VoxelMesher._data;
                let uv1 = 0;
                let uv2 = 0;
                let uv3 = 0;
                let uv4 = 0;
                if (!cumstomUVS) {
                    let i = data.overylayUVTemplateIndex;
                    uv1 = data.overylayUVTemplate[i];
                    uv2 = data.overylayUVTemplate[i + 1];
                    uv3 = data.overylayUVTemplate[i + 2];
                    uv4 = data.overylayUVTemplate[i + 3];
                    if (VoxelMesher.templateIncrement) {
                        data.overylayUVTemplateIndex += 4;
                    }
                }
                else {
                    if (cumstomUVS.length == 1) {
                        const uv = cumstomUVS[0];
                        uv1 = uv;
                        uv2 = uv;
                        uv3 = uv;
                        uv4 = uv;
                    }
                    else {
                        uv1 = cumstomUVS[0];
                        uv2 = cumstomUVS[1];
                        uv3 = cumstomUVS[2];
                        uv4 = cumstomUVS[3];
                    }
                }
                let i = 4;
                while (i--) {
                    data.overlayUVs.push(uv1, uv2, uv3, uv4);
                }
                return VoxelMesher.quad;
            },
        },
        uvs: {
            _data: {
                width: [0, 1],
                height: [0, 1],
            },
            _fliped: false,
            advancedUVs: {
                hs1: 0,
                hs2: 0,
                he1: 1,
                he2: 1,
                ws1: 0,
                ws2: 0,
                we1: 1,
                we2: 1,
            },
            resetAdvancedUVs() {
                this.advancedUVs.hs1 = 0;
                this.advancedUVs.hs2 = 0;
                this.advancedUVs.he1 = 1;
                this.advancedUVs.he2 = 1;
                this.advancedUVs.ws1 = 0;
                this.advancedUVs.ws2 = 0;
                this.advancedUVs.we1 = 1;
                this.advancedUVs.we2 = 1;
            },
            addAdvancedUVs(uv) {
                const data = VoxelMesher._data;
                if (!uv) {
                    uv = this.getCurrentUV();
                    if (VoxelMesher.templateIncrement) {
                        data.uvTemplateIndex += 1;
                    }
                }
                _Geometry_GeometryBuilder_js__WEBPACK_IMPORTED_MODULE_4__.GeometryBuilder.quads.uvs.addAdvancedUVs(VoxelMesher.quad._direction, uv, VoxelMesher._data.uvs, this.advancedUVs, this._fliped);
                return this;
            },
            _rotation: 0,
            clear() {
                this._data.width[0] = 0;
                this._data.width[1] = 1;
                this._data.height[0] = 0;
                this._data.height[1] = 1;
                this._fliped = false;
                this._rotation = 0;
            },
            setFlipped(flipped) {
                this._fliped = flipped;
                return this;
            },
            setWidth(start, end) {
                this._data.width[0] = start;
                this._data.width[1] = end;
                return this;
            },
            setHeight(start, end) {
                this._data.height[0] = start;
                this._data.height[1] = end;
                return this;
            },
            setRoation(rotation) {
                this._rotation = rotation;
                return this;
            },
            getCurrentUV() {
                const data = VoxelMesher._data;
                return data.unTemplate[data.uvTemplateIndex];
            },
            add(uv) {
                const data = VoxelMesher._data;
                if (!uv) {
                    uv = this.getCurrentUV();
                    if (VoxelMesher.templateIncrement) {
                        data.uvTemplateIndex += 1;
                    }
                }
                _Geometry_GeometryBuilder_js__WEBPACK_IMPORTED_MODULE_4__.GeometryBuilder.quads.uvs.addUVs(VoxelMesher.quad._direction, {
                    uvs: data.uvs,
                    uv: uv,
                    width: { start: this._data.width[0], end: this._data.width[1] },
                    height: { start: this._data.height[0], end: this._data.height[1] },
                    flipped: this._fliped,
                    rotoate: this._rotation,
                });
                return VoxelMesher.quad;
            },
        },
        AO: {
            add(stride = 4) {
                if (stride == 4) {
                    for (let v = 0; v < 4; v++) {
                        const aColor = VoxelMesher._data.aoTemplate[VoxelMesher._data.aoIndex + v];
                        const newColor = aColor ** 2.2;
                        VoxelMesher._data.AOColors.push(newColor);
                    }
                    if (VoxelMesher.templateIncrement) {
                        VoxelMesher._data.aoIndex += 4;
                    }
                }
                if (stride == 1) {
                    const aoValue = VoxelMesher._data.aoTemplate[VoxelMesher._data.aoIndex];
                    const newColor = aoValue ** 2.2;
                    for (let v = 0; v < 4; v++) {
                        VoxelMesher._data.AOColors.push(newColor);
                    }
                    if (VoxelMesher.templateIncrement) {
                        VoxelMesher._data.aoIndex += 1;
                    }
                }
                return VoxelMesher.quad;
            },
            addCustom(data) {
                if (data.length == 4) {
                    for (let v = 0; v < 4; v++) {
                        let aColor = data[v];
                        if (aColor < 0) {
                            aColor =
                                VoxelMesher._data.aoTemplate[VoxelMesher._data.aoIndex + Math.abs(aColor) - 1];
                        }
                        const newColor = aColor ** 2.2;
                        VoxelMesher._data.AOColors.push(newColor);
                    }
                    if (VoxelMesher.templateIncrement) {
                        VoxelMesher._data.aoIndex += 4;
                    }
                }
                if (data.length == 1) {
                    let aoValue = data[0];
                    if (aoValue < 0) {
                        aoValue =
                            VoxelMesher._data.aoTemplate[VoxelMesher._data.aoIndex + Math.abs(aoValue) - 1];
                    }
                    const newColor = aoValue ** 2.2;
                    for (let v = 0; v < 4; v++) {
                        VoxelMesher._data.AOColors.push(newColor);
                    }
                    if (VoxelMesher.templateIncrement) {
                        VoxelMesher._data.aoIndex += 1;
                    }
                }
                return VoxelMesher.quad;
            },
        },
        light: {
            lightMap: [
                0.06, 0.1, 0.11, 0.14, 0.17, 0.21, 0.26, 0.31, 0.38, 0.45, 0.54, 0.64, 0.74,
                0.85, 0.97, 1,
            ],
            add(stride = 4) {
                if (stride == 4) {
                    for (let v = 0; v < 4; v++) {
                        const values = _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__.LightData.getLightValues(VoxelMesher._data.lightTemplate[VoxelMesher._data.lightIndex + v]);
                        const s = this.lightMap[values[0]];
                        const r = this.lightMap[values[1]];
                        const g = this.lightMap[values[2]];
                        const b = this.lightMap[values[3]];
                        VoxelMesher._data.lightColors.push(r, g, b, s);
                    }
                    if (VoxelMesher.templateIncrement) {
                        VoxelMesher._data.lightIndex += 4;
                    }
                }
                if (stride == 1) {
                    const lightValue = VoxelMesher._data.lightTemplate[VoxelMesher._data.lightIndex];
                    const values = _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__.LightData.getLightValues(lightValue);
                    const s = this.lightMap[values[0]];
                    const r = this.lightMap[values[1]];
                    const g = this.lightMap[values[2]];
                    const b = this.lightMap[values[3]];
                    for (let v = 0; v < 4; v++) {
                        VoxelMesher._data.lightColors.push(r, g, b, s);
                    }
                    if (VoxelMesher.templateIncrement) {
                        VoxelMesher._data.lightIndex += 1;
                    }
                }
                return VoxelMesher.quad;
            },
            addCustom(data) {
                if (data.length == 4) {
                    for (let v = 0; v < 4; v++) {
                        let value = data[v];
                        if (value < 0 && value > -5) {
                            value =
                                VoxelMesher._data.lightTemplate[VoxelMesher._data.lightIndex + Math.abs(value) - 1];
                        }
                        if (value == -5) {
                            value = this._getBrightestLight();
                        }
                        const values = _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__.LightData.getLightValues(value);
                        const s = this.lightMap[values[0]];
                        const r = this.lightMap[values[1]];
                        const g = this.lightMap[values[2]];
                        const b = this.lightMap[values[3]];
                        VoxelMesher._data.lightColors.push(r, g, b, s);
                    }
                    if (VoxelMesher.templateIncrement) {
                        VoxelMesher._data.lightIndex += 4;
                    }
                }
                if (data.length == 1) {
                    let lightValue = data[0];
                    if (lightValue < 0 && lightValue > -5) {
                        lightValue =
                            VoxelMesher._data.lightTemplate[VoxelMesher._data.lightIndex + Math.abs(lightValue) - 1];
                    }
                    if (lightValue == -5) {
                        lightValue = this._getBrightestLight();
                    }
                    const values = _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__.LightData.getLightValues(lightValue);
                    const s = this.lightMap[values[0]];
                    const r = this.lightMap[values[1]];
                    const g = this.lightMap[values[2]];
                    const b = this.lightMap[values[3]];
                    for (let v = 0; v < 4; v++) {
                        VoxelMesher._data.lightColors.push(r, g, b, s);
                    }
                    if (VoxelMesher.templateIncrement) {
                        VoxelMesher._data.lightIndex += 1;
                    }
                }
                return VoxelMesher.quad;
            },
            _getBrightestLight() {
                const direction = VoxelMesher.quad._direction;
                const x = dataTool.location[1];
                const y = dataTool.location[2];
                const z = dataTool.location[3];
                let l = this._getLight[direction](x, y, z);
                dataTool.loadInAt(x, y, z);
                if (l < 0) {
                    l = dataTool.getLight();
                }
                if (l < 0)
                    l = 0;
                return l;
            },
            _getLight: {
                top: (x, y, z) => {
                    if (!dataTool.loadInAt(x, y + 1, z))
                        return -1;
                    return dataTool.getLight();
                },
                bottom: (x, y, z) => {
                    if (!dataTool.loadInAt(x, y - 1, z))
                        return -1;
                    return dataTool.getLight();
                },
                east: (x, y, z) => {
                    if (!dataTool.loadInAt(x + 1, y, z))
                        return -1;
                    return dataTool.getLight();
                },
                west: (x, y, z) => {
                    if (!dataTool.loadInAt(x - 1, y, z))
                        return -1;
                    return dataTool.getLight();
                },
                south: (x, y, z) => {
                    if (!dataTool.loadInAt(x, y, z - 1))
                        return -1;
                    return dataTool.getLight();
                },
                north: (x, y, z) => {
                    if (!dataTool.loadInAt(x, y, z + 1))
                        return -1;
                    return dataTool.getLight();
                },
            },
        },
    },
    templateData: {
        _face: "top",
        _exposed: false,
        loadIn(face) {
            this._face = face;
            const flipped = _Data_Meshing_FaceByte_js__WEBPACK_IMPORTED_MODULE_2__.FaceByte.getFaceRotateState(face, VoxelMesher._data.face) == 1;
            VoxelMesher.quad.setFlipped(flipped);
            this._exposed = _Data_Meshing_FaceByte_js__WEBPACK_IMPORTED_MODULE_2__.FaceByte.isFaceExposed(face, VoxelMesher._data.face);
            VoxelMesher.quad.uvs.setFlipped(flipped);
            VoxelMesher.quad.uvs.setRoation(_Data_Meshing_FaceByte_js__WEBPACK_IMPORTED_MODULE_2__.FaceByte.getFaceTextureState(face, VoxelMesher._data.face));
            return this;
        },
        isExposed() {
            return this._exposed;
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Tools/VoxelTemplater.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Tools/VoxelTemplater.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelTemplater": () => (/* binding */ VoxelTemplater)
/* harmony export */ });
/* harmony import */ var _Processor_Processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Processor/Processor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Processor/Processor.js");
/* harmony import */ var _Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/Constants/Util/Faces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/Faces.js");
//objects


class VoxelTemplaterBase {
    _template = {};
    _faces = 0;
    currentVoxel = {};
    utilDataTool = {};
    addUV(index, forNumFaces = 1) {
        while (forNumFaces--) {
            this._template.uvTemplate.push(index);
        }
        return this;
    }
    addOverlayUVs(index, forNumFaces = 1) {
        if (index.length == 1) {
            while (forNumFaces--) {
                this._template.overlayUVTemplate.push(index[0], index[0], index[0], index[0]);
            }
            return this;
        }
        while (forNumFaces--) {
            this._template.overlayUVTemplate.push(...index);
        }
        return this;
    }
    addAOValue(value, forNumFaces = 1) {
        while (forNumFaces--) {
            this._template.aoTemplate.push(value);
        }
        return this;
    }
    addLightValue(value, forNumFaces = 1) {
        while (forNumFaces--) {
            this._template.lightTemplate.push(value);
        }
        return this;
    }
    addCurrentLightValue(forNumFaces = 1) {
        const l = this.currentVoxel.getLight();
        while (forNumFaces--) {
            this._template.lightTemplate.push(l);
        }
        return this;
    }
    setTextureRotation(face, rotation) {
        _Processor_Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.textureRotation[_Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_1__.FaceRecord[face]] = rotation;
        return this;
    }
    isFaceExpposed(face) {
        return _Processor_Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.exposedFaces[_Data_Constants_Util_Faces_js__WEBPACK_IMPORTED_MODULE_1__.FaceRecord[face]] == 1;
    }
    processVoxelLight(ignoreAO = false) {
        _Processor_Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.doVoxelLight(this._template, this.currentVoxel.x, this.currentVoxel.y, this.currentVoxel.z, ignoreAO, _Processor_Processor_js__WEBPACK_IMPORTED_MODULE_0__.Processor.LOD);
        return this;
    }
}
const VoxelTemplater = new VoxelTemplaterBase();


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/DivineVoxelEngineConstructor.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/DivineVoxelEngineConstructor.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEC": () => (/* binding */ DVEC)
/* harmony export */ });
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Builder_Builder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builder/Builder.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Builder.js");
/* harmony import */ var _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Propagation/Propagation.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Propagation.js");
/* harmony import */ var _WorldGeneration_WorldGeneration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorldGeneration/WorldGeneration.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/WorldGeneration/WorldGeneration.js");
/* harmony import */ var _Tasks_TasksQueue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tasks/TasksQueue.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/TasksQueue.js");
/* harmony import */ var _Analyzer_Analyzer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Analyzer/Analyzer.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/Analyzer.js");
/* harmony import */ var _Data_DataManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Data/DataManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataManager.js");
/* harmony import */ var _Data_DataSyncNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Data/DataSyncNode.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataSyncNode.js");
/* harmony import */ var _Builder_Constructors_Voxel_VoxelConstructors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Builder/Constructors/Voxel/VoxelConstructors.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/VoxelConstructors.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Threads_Parent_ParentComm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Threads/Parent/ParentComm.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Threads/Parent/ParentComm.js");
/* harmony import */ var _Threads_World_WorldComm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Threads/World/WorldComm.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Threads/World/WorldComm.js");
/* harmony import */ var _Tasks_Tasks_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tasks/Tasks.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/Tasks.js");
/* harmony import */ var _Init_InitWorker_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Init/InitWorker.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Init/InitWorker.js");
/* harmony import */ var _Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Tools/Data/ConstructorDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Data/ConstructorDataTool.js");
/* harmony import */ var _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Hooks/ConstructorHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Hooks/ConstructorHooks.js");
//objects







//data



//threadcomm




//functions



const DVEC = {
    environment: "browser",
    __settingsHaveBeenSynced: false,
    UTIL: _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__.Util,
    settings: _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_0__.EngineSettings,
    propagation: _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_3__.Propagation,
    worldGen: _WorldGeneration_WorldGeneration_js__WEBPACK_IMPORTED_MODULE_4__.WorldGeneration,
    builder: _Builder_Builder_js__WEBPACK_IMPORTED_MODULE_2__.Builder,
    analyzer: _Analyzer_Analyzer_js__WEBPACK_IMPORTED_MODULE_6__.Analyzer,
    dataSyncNode: _Data_DataSyncNode_js__WEBPACK_IMPORTED_MODULE_8__.DataSyncNode,
    data: _Data_DataManager_js__WEBPACK_IMPORTED_MODULE_7__.DataManager,
    voxelManager: _Builder_Constructors_Voxel_VoxelConstructors_js__WEBPACK_IMPORTED_MODULE_9__.VoxelConstructors,
    TC: threadcomm__WEBPACK_IMPORTED_MODULE_10__.ThreadComm,
    parentComm: _Threads_Parent_ParentComm_js__WEBPACK_IMPORTED_MODULE_11__.ParentComm,
    worldComm: _Threads_World_WorldComm_js__WEBPACK_IMPORTED_MODULE_12__.WorldComm,
    tasks: _Tasks_Tasks_js__WEBPACK_IMPORTED_MODULE_13__.Tasks,
    tasksQueue: _Tasks_TasksQueue_js__WEBPACK_IMPORTED_MODULE_5__.TasksQueue,
    hooks: _Hooks_ConstructorHooks_js__WEBPACK_IMPORTED_MODULE_16__.ConstructorHooks,
    syncSettings(data) {
        this.settings.syncSettings(data);
        _Builder_Builder_js__WEBPACK_IMPORTED_MODULE_2__.Builder.syncSettings(data);
        this.__settingsHaveBeenSynced = true;
    },
    reStart() { },
    isReady() {
        if (this.environment == "node") {
            return (DVEC.worldComm.isPortSet() &&
                DVEC.__settingsHaveBeenSynced &&
                _Data_DataSyncNode_js__WEBPACK_IMPORTED_MODULE_8__.DataSyncNode.isReady());
        }
        else {
            return (DVEC.worldComm.isPortSet() &&
                DVEC.__settingsHaveBeenSynced &&
                _Builder_Builder_js__WEBPACK_IMPORTED_MODULE_2__.Builder.textureManager.isReady() &&
                _Data_DataSyncNode_js__WEBPACK_IMPORTED_MODULE_8__.DataSyncNode.isReady());
        }
    },
    async $INIT() {
        await (0,_Init_InitWorker_js__WEBPACK_IMPORTED_MODULE_14__.InitWorker)(this);
    },
    getDataTool() {
        return (0,_Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_15__.GetConstructorDataTool)();
    },
};
DVEC.environment = _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__.Util.getEnviorment();


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Hooks/ConstructorHooks.js":
/*!*********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Hooks/ConstructorHooks.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructorHooks": () => (/* binding */ ConstructorHooks)
/* harmony export */ });
/* harmony import */ var divine_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-hooks */ "../../DSLIBS/divineHooks/dist/index.js");

const ConstructorHooks = {
    texturesRegistered: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Init/InitWorker.js":
/*!**************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Init/InitWorker.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitWorker": () => (/* binding */ InitWorker)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");

async function InitWorker(DVEC) {
    let parent = "render";
    if (DVEC.environment == "node") {
        parent = "server";
    }
    await threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.$INIT("constructor", parent);
    DVEC.builder.$INIT();
    DVEC.tasksQueue.$INIT();
    await DVEC.UTIL.createPromiseCheck({
        check: () => {
            return DVEC.isReady();
        },
        onReady() { },
        checkInterval: 1,
    });
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Explosion/ExplosionManager.js":
/*!*************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Explosion/ExplosionManager.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplosionManager": () => (/* binding */ ExplosionManager)
/* harmony export */ });
/* harmony import */ var _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/Constants/Util/CardinalNeighbors.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js");
/* harmony import */ var _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/Light/LightByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js");
/* harmony import */ var _Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Math/Functions/Distance3d.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance3d.js");
/* harmony import */ var _Illumanation_Functions_RGBUpdate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Illumanation/Functions/RGBUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/RGBUpdate.js");
/* harmony import */ var _Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Illumanation/Functions/SunUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/SunUpdate.js");
/* harmony import */ var _Flow_FlowManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Flow/FlowManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/FlowManager.js");
//data

//objects


//functions




const dataTool = new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_1__.DataTool();
const nDataTool = new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_1__.DataTool();
const ExplosionManager = {
    runExplosion(tasks) {
        tasks.start();
        const [dimension, sx, sy, sz] = tasks.origin;
        _Flow_FlowManager_js__WEBPACK_IMPORTED_MODULE_6__.FlowManager.setDimension(dimension);
        tasks.setPriority(0);
        const queue = tasks.queues.queue;
        const map = tasks.queues.map;
        queue.push([sx, sy, sz]);
        dataTool.setDimension(dimension);
        nDataTool.setDimension(dimension);
        const radius = tasks.getData();
        while (queue.length) {
            const node = queue.shift();
            if (!node)
                break;
            const x = node[0];
            const y = node[1];
            const z = node[2];
            if (!map.inMap(x + 1, y, z)) {
                if (dataTool.loadInAt(x + 1, y, z)) {
                    const d = (0,_Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_3__.Distance3D)(sx, sy, sz, x + 1, y, z);
                    if (d <= radius) {
                        queue.push([x + 1, y, z]);
                    }
                    map.add(x + 1, y, z);
                }
            }
            if (!map.inMap(x - 1, y, z)) {
                if (dataTool.loadInAt(x - 1, y, z)) {
                    const d = (0,_Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_3__.Distance3D)(sx, sy, sz, x - 1, y, z);
                    if (d <= radius) {
                        queue.push([x - 1, y, z]);
                    }
                }
                map.add(x - 1, y, z);
            }
            if (!map.inMap(x, y, z + 1)) {
                if (dataTool.loadInAt(x, y, z + 1)) {
                    const d = (0,_Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_3__.Distance3D)(sx, sy, sz, x, y, z + 1);
                    if (d <= radius) {
                        queue.push([x, y, z + 1]);
                    }
                }
                map.add(x, y, z + 1);
            }
            if (!map.inMap(x, y, z - 1)) {
                if (dataTool.loadInAt(x, y, z - 1)) {
                    const d = (0,_Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_3__.Distance3D)(sx, sy, sz, x, y, z - 1);
                    if (d <= radius) {
                        queue.push([x, y, z - 1]);
                    }
                }
                map.add(x, y, z - 1);
            }
            if (!map.inMap(x, y + 1, z)) {
                if (dataTool.loadInAt(x, y + 1, z)) {
                    const d = (0,_Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_3__.Distance3D)(sx, sy, sz, x, y + 1, z);
                    if (d <= radius) {
                        queue.push([x, y + 1, z]);
                    }
                }
                map.add(x, y + 1, z);
            }
            if (!map.inMap(x, y - 1, z)) {
                if (dataTool.loadInAt(x, y - 1, z)) {
                    const d = (0,_Math_Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_3__.Distance3D)(sx, sy, sz, x, y - 1, z);
                    if (d <= radius) {
                        queue.push([x, y - 1, z]);
                    }
                }
                map.add(x, y - 1, z);
            }
            if (dataTool.loadInAt(x, y, z)) {
                if (dataTool.isRenderable()) {
                    const substance = dataTool.getSubstance();
                    for (const n of _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_0__.$3dCardinalNeighbors) {
                        const nx = x + n[0];
                        const ny = y + n[1];
                        const nz = z + n[2];
                        if (nDataTool.loadInAt(nx, ny, nz)) {
                            const l = nDataTool.getLight();
                            if (l > 0) {
                                if (_Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_2__.LightData.getS(l) > 0) {
                                    tasks.queues.sun.rmeove.push(nx, ny, nz);
                                }
                                if (_Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_2__.LightData.hasRGBLight(l)) {
                                    tasks.queues.rgb.rmeove.push(nx, ny, nz);
                                }
                            }
                        }
                    }
                    tasks.addNeighborsToRebuildQueue(x, y, z);
                    if (dataTool.getHardness() > 10_000 ||
                        substance == "#dve_liquid" ||
                        substance == "#dve_magma") {
                        continue;
                    }
                    dataTool.setAir().commit(2);
                }
            }
        }
        (0,_Illumanation_Functions_RGBUpdate_js__WEBPACK_IMPORTED_MODULE_4__.RGBRemove)(tasks);
        (0,_Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_5__.SunRemove)(tasks);
        (0,_Illumanation_Functions_RGBUpdate_js__WEBPACK_IMPORTED_MODULE_4__.RGBUpdate)(tasks);
        (0,_Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_5__.SunUpdate)(tasks);
        tasks.runRebuildQueue();
        tasks.stop();
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/FlowManager.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/FlowManager.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowManager": () => (/* binding */ FlowManager)
/* harmony export */ });
/* harmony import */ var _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/Constants/Util/CardinalNeighbors.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js");
/* harmony import */ var _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/Light/LightByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js");
/* harmony import */ var _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _Tools_Brush_Brush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Tools/Brush/Brush.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/Brush.js");
/* harmony import */ var _Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Illumanation/Functions/SunUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/SunUpdate.js");
/* harmony import */ var _Illumanation_Functions_RGBUpdate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Illumanation/Functions/RGBUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/RGBUpdate.js");
/* harmony import */ var _Illumanation_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Illumanation/IlluminationManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/IlluminationManager.js");







const FlowManager = {
    lightData: _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__.LightData,
    _brush: new _Tools_Brush_Brush_js__WEBPACK_IMPORTED_MODULE_3__.BrushTool(),
    _sDataTool: new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_2__.DataTool(),
    _nDataTool: new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_2__.DataTool(),
    setVoxel(tasks, vox, level, levelState, x, y, z) {
        this.sunCheck(tasks, x, y, z);
        this._brush.setId(vox).setXYZ(x, y, z).paint();
        this._sDataTool.loadInAt(x, y, z);
        this._sDataTool
            .setLevel(level)
            .setLevelState(levelState)
            .setLight(this.getAbsorbLight(x, y, z))
            .commit();
    },
    setDimension(dimension) {
        this._sDataTool.setDimension(dimension);
        this._nDataTool.setDimension(dimension);
        this._brush.setDimension(dimension);
        _Illumanation_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_6__.IlluminationManager.setDimension(dimension);
    },
    removeVoxel(tasks, x, y, z) {
        for (const n of _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_0__.$3dCardinalNeighbors) {
            const nx = x + n[0];
            const ny = y + n[1];
            const nz = z + n[2];
            if (!this._nDataTool.loadInAt(nx, ny, nz))
                continue;
            const l = this._nDataTool.getLight();
            if (l <= 0)
                continue;
            if (this.lightData.getS(l) > 0) {
                tasks.queues.sun.update.push(nx, ny, nz);
            }
            if (this.lightData.hasRGBLight(l)) {
                tasks.queues.rgb.update.push(nx, ny, nz);
            }
        }
        this._brush.setXYZ(x, y, z).erase();
        (0,_Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_4__.SunUpdate)(tasks);
        (0,_Illumanation_Functions_RGBUpdate_js__WEBPACK_IMPORTED_MODULE_5__.RGBUpdate)(tasks);
    },
    getVoxel(x, y, z) {
        if (!this._sDataTool.loadInAt(x, y, z))
            return "";
        if (!this._sDataTool.isRenderable())
            return "";
        const substance = this._sDataTool.getSubstance();
        if (substance != "#dve_liquid" && substance != "#dve_magma")
            return "";
        return this._sDataTool.getStringId();
    },
    setLevel(level, x, y, z) {
        this._nDataTool.loadInAt(x, y, z);
        this._nDataTool.setLevel(level).commit();
    },
    getLevel(vox, x, y, z) {
        if (!this._nDataTool.loadInAt(x, y, z))
            return -2;
        const voxel = this._nDataTool.getStringId();
        if (this._nDataTool.isAir()) {
            return 0;
        }
        if (voxel == vox) {
            return this._nDataTool.getLevel();
        }
        return -1;
    },
    getLevelState(vox, x, y, z) {
        if (!this._nDataTool.loadInAt(x, y, z))
            return -2;
        const voxel = this._nDataTool.getStringId();
        if (voxel == vox) {
            return this._nDataTool.getLevelState();
        }
        if (this._nDataTool.isAir()) {
            return -1;
        }
        return -3;
    },
    canFlowOutwardTest(vox, x, y, z) {
        const level = this.getLevel(vox, x, y - 1, z);
        if (level == -1) {
            return true;
        }
        return false;
    },
    flowDownTest(vox, x, y, z) {
        const level = this.getLevel(vox, x, y - 1, z);
        if (level >= 0) {
            return true;
        }
        return false;
    },
    wait(ms) {
        return new Promise((resolve, reject) => setTimeout(resolve, ms));
    },
    _lightValues: [0, 0, 0, 0],
    getAbsorbLight(x, y, z) {
        for (const n of _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_0__.$3dCardinalNeighbors) {
            if (!this._nDataTool.loadInAt(x + n[0], y + n[1], z + n[2]))
                continue;
            let l = this._nDataTool.getLight();
            if (l <= 0)
                continue;
            const v = this.lightData.getLightValues(l);
            for (let i = 0; i < 4; i++) {
                if (this._lightValues[i] < v[i]) {
                    this._lightValues[i] = v[i];
                }
            }
        }
        let brightest = this.lightData.setLightValues(this._lightValues);
        for (let i = 0; i < 4; i++) {
            this._lightValues[i] = 0;
        }
        return this.lightData.minusOneForAll(brightest);
    },
    sunCheck(tasks, x, y, z) {
        if (!this._nDataTool.loadInAt(x, y - 1, z))
            return;
        if (!this._nDataTool.isAir())
            return;
        const l = this._nDataTool.getLight();
        if (this.lightData.getS(l) == 0xf) {
            tasks.queues.sun.rmeove.push(x, y - 1, z);
            (0,_Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_4__.SunRemove)(tasks);
        }
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/Functions/FlowRemove.js":
/*!************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/Functions/FlowRemove.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowRemove": () => (/* binding */ FlowRemove)
/* harmony export */ });
/* harmony import */ var _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FlowManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/FlowManager.js");
/* harmony import */ var _FlowUpdate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlowUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/Functions/FlowUpdate.js");


function RunRemoveCheck(tasks, vox) {
    const [dimension, x, y, z] = tasks.origin;
    const queue = tasks.queues.flow.rmeove.queue;
    const cl = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z);
    queue.push([x, y, z]);
    const n1 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x + 1, y, z);
    const n1s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x + 1, y, z);
    if ((n1 > -1 && n1 < cl) || n1s == 1) {
        queue.push([x + 1, y, z]);
    }
    const n2 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x - 1, y, z);
    const n2s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x - 1, y, z);
    if ((n2 > 0 && n2 < cl) || n2s == 1) {
        queue.push([x - 1, y, z]);
    }
    const n3 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z + 1);
    const n3s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y, z + 1);
    if ((n3 > 0 && n3 < cl) || n3s == 1) {
        queue.push([x, y, z + 1]);
    }
    const n4 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z - 1);
    const n4s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y, z - 1);
    if ((n4 > 0 && n4 < cl) || n4s == 1) {
        queue.push([x, y, z - 1]);
    }
}
async function FlowRemove(tasks) {
    const [dimension, x, y, z] = tasks.origin;
    const vox = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getVoxel(x, y, z);
    if (!vox)
        return;
    RunRemoveCheck(tasks, vox);
    const noRemoveMap = tasks.queues.flow.rmeove.noRemoveMap;
    while (tasks.queues.flow.rmeove.queue.length != 0) {
        _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.setDimension(dimension);
        RunRemovePropagation(tasks, vox);
        RunFlowReduce(tasks, vox);
        await (0,_FlowUpdate_js__WEBPACK_IMPORTED_MODULE_1__.FlowUpdate)(tasks, false, vox);
        noRemoveMap.clear();
        tasks.runRebuildQueue();
        await _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.wait(100);
    }
}
function RunRemovePropagation(tasks, vox) {
    const removeQ = tasks.queues.flow.rmeove.queue;
    const updateQ = tasks.queues.flow.update.queue;
    const map = tasks.queues.flow.update.map;
    const noRemoveMap = tasks.queues.flow.rmeove.noRemoveMap;
    for (let i = 0; i < removeQ.length; i++) {
        const node = removeQ[i];
        const x = node[0];
        const y = node[1];
        const z = node[2];
        const l = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z);
        const s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y, z);
        map.add(x, y, z);
        if (noRemoveMap.inMap(x, y, z))
            continue;
        n1t: if (!map.inMap(x + 1, y, z)) {
            const n1 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x + 1, y, z);
            const n1s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x + 1, y, z);
            if (n1 <= 0 || n1s == 1)
                break n1t;
            if (n1 < l && l > 0 && n1 > 0) {
                removeQ.push([x + 1, y, z]);
            }
            if (n1 > l) {
                updateQ.push([x + 1, y, z]);
            }
        }
        n2t: if (!map.inMap(x - 1, y, z)) {
            const n2 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x - 1, y, z);
            const n2s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x - 1, y, z);
            if (n2 <= 0 || n2s == 1)
                break n2t;
            if (n2 < l && l > 0 && n2 > 0) {
                removeQ.push([x - 1, y, z]);
            }
            if (n2 > l) {
                updateQ.push([x - 1, y, z]);
            }
        }
        n3t: if (!map.inMap(x, y, z + 1)) {
            const n3 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z + 1);
            const n3s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y, z + 1);
            if (n3 <= 0 || n3s == 1)
                break n3t;
            if (n3 < l && l > 0 && n3 > 0) {
                removeQ.push([x, y, z + 1]);
            }
            if (n3 > l) {
                updateQ.push([x, y, z + 1]);
            }
        }
        n4t: if (!map.inMap(x, y, z - 1)) {
            const n4 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z - 1);
            const n4s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y, z - 1);
            if (n4 <= 0 || n4s == 1)
                break n4t;
            if (n4 < l && l > 0 && n4 > 0) {
                removeQ.push([x, y, z - 1]);
            }
            if (n4 > l) {
                updateQ.push([x, y, z - 1]);
            }
        }
        if (!map.inMap(x, y - 1, z)) {
            const n5 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y - 1, z);
            if (n5 < 0)
                continue;
            const n5s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y - 1, z);
            let add = false;
            if (s == 1 && n5s == 1) {
                if (l < 2) {
                    add = true;
                }
            }
            if (s == 0 && l < 2) {
                add = true;
            }
            if (add) {
                removeQ.push([x, y - 1, z]);
            }
        }
    }
    map.clear();
}
function RunFlowReduce(tasks, vox) {
    const queue = tasks.queues.flow.rmeove.queue;
    const map = tasks.queues.flow.rmeove.map;
    const reque = [];
    while (queue.length != 0) {
        const node = queue.shift();
        if (!node) {
            break;
        }
        const x = node[0];
        const y = node[1];
        const z = node[2];
        if (map.inMap(x, y, z))
            continue;
        map.add(x, y, z);
        const l = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z);
        const state = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y, z);
        let syncRebuild = false;
        if (l <= 1) {
            _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.removeVoxel(tasks, x, y, z);
            if (state == 1)
                syncRebuild = true;
        }
        else {
            _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.setLevel(l - 1, x, y, z);
            reque.push([x, y, z]);
        }
        tasks.setBuldMode(syncRebuild ? "sync" : "async").addToRebuildQueue(x, y, z);
    }
    tasks.queues.flow.rmeove.queue = reque;
    map.clear();
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/Functions/FlowUpdate.js":
/*!************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/Functions/FlowUpdate.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowUpdate": () => (/* binding */ FlowUpdate)
/* harmony export */ });
/* harmony import */ var _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FlowManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/FlowManager.js");

async function FlowUpdate(tasks, rebuild = true, vox = "") {
    const [dimension, x, y, z] = tasks.origin;
    vox = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getVoxel(x, y, z);
    if (!vox)
        return;
    const level = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z);
    if (level < 0)
        return;
    const levelState = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y, z);
    tasks.queues.flow.update.queue.push([x, y, z, level, levelState]);
    while (tasks.queues.flow.update.queue.length != 0) {
        _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.setDimension(dimension);
        RunFlowPropagation(tasks, vox);
        RunFlowIncrease(tasks, vox);
        if (rebuild) {
            tasks.runRebuildQueue();
            await _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.wait(100);
        }
    }
}
function RunFlowPropagation(tasks, vox) {
    const que = tasks.queues.flow.update.queue;
    const noRemoveMap = tasks.queues.flow.rmeove.noRemoveMap;
    for (let i = 0; i < que.length; i++) {
        const node = que[i];
        const x = node[0];
        const y = node[1];
        const z = node[2];
        const l = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z);
        const s = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevelState(vox, x, y, z);
        noRemoveMap.add(x, y, z);
        if (_FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.canFlowOutwardTest(vox, x, y, z)) {
            const n1 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x + 1, y, z);
            if (n1 + 2 < l && n1 >= 0) {
                let n1l = l - 2;
                que.push([x + 1, y, z, n1l, 0]);
            }
            const n2 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x - 1, y, z);
            if (n2 + 2 < l && n2 >= 0) {
                let n2l = l - 2;
                que.push([x - 1, y, z, n2l, 0]);
            }
            const n3 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z + 1);
            if (n3 + 2 < l && n3 >= 0) {
                let n3l = l - 2;
                que.push([x, y, z + 1, n3l, 0]);
            }
            const n4 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y, z - 1);
            if (n4 + 2 < l && n4 >= 0) {
                let n4l = l - 2;
                que.push([x, y, z - 1, n4l, 0]);
            }
        }
        const n5 = _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.getLevel(vox, x, y - 1, z);
        if (n5 <= l && n5 >= 0) {
            let state = 1;
            let level = 15;
            if (l <= 0 && s != 1) {
                state = 0;
                level = l - 2;
            }
            que.push([x, y - 1, z, level, state]);
        }
    }
}
function RunFlowIncrease(tasks, vox) {
    const que = tasks.queues.flow.update.queue;
    const map = tasks.queues.flow.update.map;
    const reque = [];
    while (que.length != 0) {
        const node = que.shift();
        if (!node) {
            break;
        }
        const x = node[0];
        const y = node[1];
        const z = node[2];
        const level = node[3];
        const levelState = node[4];
        if (map.inMap(x, y, z))
            continue;
        map.add(x, y, z);
        if (level > -1) {
            _FlowManager_js__WEBPACK_IMPORTED_MODULE_0__.FlowManager.setVoxel(tasks, vox, level, levelState, x, y, z);
            reque.push([x, y, z, -1]);
        }
        tasks.addToRebuildQueue(x, y, z);
    }
    //@ts-ignore
    tasks.queues.flow.update.queue = reque;
    map.clear();
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/RGBUpdate.js":
/*!*******************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/RGBUpdate.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RGBRemove": () => (/* binding */ RGBRemove),
/* harmony export */   "RGBUpdate": () => (/* binding */ RGBUpdate)
/* harmony export */ });
/* harmony import */ var _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IlluminationManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/IlluminationManager.js");

function RGBUpdate(tasks) {
    _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.setDimension(tasks.origin[0]);
    const queue = tasks.queues.rgb.update;
    while (queue.length != 0) {
        const x = queue.shift();
        const y = queue.shift();
        const z = queue.shift();
        if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.loadInAt(x, y, z))
            continue;
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.isBarrier())
            continue;
        const sl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.getLight();
        if (sl <= 0)
            continue;
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x - 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBAdd(nl, sl)) {
                queue.push(x - 1, y, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x + 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBAdd(nl, sl)) {
                queue.push(x + 1, y, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y, z - 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBAdd(nl, sl)) {
                queue.push(x, y, z - 1);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y, z + 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBAdd(nl, sl)) {
                queue.push(x, y, z + 1);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y - 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBAdd(nl, sl)) {
                queue.push(x, y - 1, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y + 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBAdd(nl, sl)) {
                queue.push(x, y + 1, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        tasks.addNeighborsToRebuildQueue(x, y, z);
    }
}
function RGBRemove(tasks) {
    _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.setDimension(tasks.origin[0]);
    const remove = tasks.queues.rgb.rmeove;
    const update = tasks.queues.rgb.update;
    const map = tasks.queues.rgb.map;
    while (remove.length != 0) {
        const x = remove.shift();
        const y = remove.shift();
        const z = remove.shift();
        if (map.inMap(x, y, z))
            continue;
        map.add(x, y, z);
        if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.loadInAt(x, y, z))
            continue;
        const sl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.getLight();
        if (sl <= 0)
            continue;
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x - 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            const n1HasRGB = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.hasRGBLight(nl);
            if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBRemove(nl, sl)) {
                remove.push(x - 1, y, z);
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.isLightSource()) {
                    update.push(x - 1, y, z);
                }
            }
            else {
                if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    update.push(x - 1, y, z);
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x + 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            const n1HasRGB = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.hasRGBLight(nl);
            if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBRemove(nl, sl)) {
                remove.push(x + 1, y, z);
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.isLightSource()) {
                    update.push(x + 1, y, z);
                }
            }
            else {
                if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    update.push(x + 1, y, z);
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y, z - 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            const n1HasRGB = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.hasRGBLight(nl);
            if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBRemove(nl, sl)) {
                remove.push(x, y, z - 1);
            }
            else {
                if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    update.push(x, y, z - 1);
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y, z + 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            const n1HasRGB = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.hasRGBLight(nl);
            if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBRemove(nl, sl)) {
                remove.push(x, y, z + 1);
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.isLightSource()) {
                    update.push(x, y, z + 1);
                }
            }
            else {
                if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    update.push(x, y, z + 1);
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y - 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            const n1HasRGB = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.hasRGBLight(nl);
            if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBRemove(nl, sl)) {
                remove.push(x, y - 1, z);
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.isLightSource()) {
                    update.push(x, y - 1, z);
                }
            }
            else {
                if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    update.push(x, y - 1, z);
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y + 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            const n1HasRGB = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.hasRGBLight(nl);
            if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForRGBRemove(nl, sl)) {
                remove.push(x, y + 1, z);
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.isLightSource()) {
                    update.push(x, y + 1, z);
                }
            }
            else {
                if (n1HasRGB && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    update.push(x, y + 1, z);
                }
            }
        }
        tasks.addNeighborsToRebuildQueue(x, y, z);
        _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.removeRGBLight(sl)).commit();
    }
    map.clear();
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/SunUpdate.js":
/*!*******************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/SunUpdate.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SunRemove": () => (/* binding */ SunRemove),
/* harmony export */   "SunUpdate": () => (/* binding */ SunUpdate)
/* harmony export */ });
/* harmony import */ var _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IlluminationManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/IlluminationManager.js");

function SunUpdate(tasks) {
    const update = tasks.queues.sun.update;
    while (update.length > 0) {
        const x = update.shift();
        const y = update.shift();
        const z = update.shift();
        if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.loadInAt(x, y, z))
            continue;
        const sl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.getLight();
        if (sl <= 0)
            continue;
        if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getS(sl))
            continue;
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x - 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                update.push(x - 1, y, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x + 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                update.push(x + 1, y, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y, z - 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                update.push(x, y, z - 1);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y, z + 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                update.push(x, y, z + 1);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y - 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunAddDown(nl, sl)) {
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.isAir()) {
                    update.push(x, y - 1, z);
                    _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getSunLightForUnderVoxel(sl, nl))
                        .commit();
                }
                else {
                    const substance = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getSubstance();
                    if (substance != "#dve_magma" && substance != "#dve_solid") {
                        update.push(x, y - 1, z);
                        _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
                    }
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y + 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                update.push(x, y + 1, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        tasks.addNeighborsToRebuildQueue(x, y, z);
    }
}
function SunRemove(tasks) {
    const remove = tasks.queues.sun.rmeove;
    const update = tasks.queues.sun.update;
    while (remove.length != 0) {
        const x = remove.shift();
        const y = remove.shift();
        const z = remove.shift();
        if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.loadInAt(x, y, z))
            continue;
        const sl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.getLight();
        if (sl <= 0)
            continue;
        if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.getS(sl))
            continue;
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x - 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > 0) {
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunRemove(nl, sl)) {
                    remove.push(x - 1, y, z);
                }
                else {
                    if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForSunRemove(nl, sl)) {
                        update.push(x - 1, y, z);
                    }
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x + 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > 0) {
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunRemove(nl, sl)) {
                    remove.push(x + 1, y, z);
                }
                else {
                    if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForSunRemove(nl, sl)) {
                        update.push(x + 1, y, z);
                    }
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y, z - 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > 0) {
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunRemove(nl, sl)) {
                    remove.push(x, y, z - 1);
                }
                else {
                    if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForSunRemove(nl, sl)) {
                        update.push(x, y, z - 1);
                    }
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y, z + 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > 0) {
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunRemove(nl, sl)) {
                    remove.push(x, y, z + 1);
                }
                else {
                    if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForSunRemove(nl, sl)) {
                        update.push(x, y, z + 1);
                    }
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y - 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (nl > 0) {
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.sunLightCompareForDownSunRemove(nl, sl)) {
                    remove.push(x, y - 1, z);
                }
                else {
                    if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForSunRemove(nl, sl)) {
                        update.push(x, y - 1, z);
                    }
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.loadInAt(x, y + 1, z)) {
            const n6 = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._nDataTool.getLight();
            if (n6 > 0) {
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isLessThanForSunRemove(n6, sl)) {
                    remove.push(x, y + 1, z);
                }
                else {
                    if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.isGreaterOrEqualThanForSunRemove(n6, sl)) {
                        update.push(x, y + 1, z);
                    }
                }
            }
        }
        tasks.addNeighborsToRebuildQueue(x, y, z);
        _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager._sDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_0__.IlluminationManager.lightData.removeSunLight(sl)).commit();
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/WorldSun.js":
/*!******************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/WorldSun.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunWorldSun": () => (/* binding */ RunWorldSun)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Data/World/WorldBounds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldBounds.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Data/Constants/Util/CardinalNeighbors.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IlluminationManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/IlluminationManager.js");
//data





const inColumnBounds = (cx, cz, x, z) => {
    if (x >= cx &&
        x <= cx + _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_3__.WorldSpaces.chunk._bounds.x &&
        z >= cz &&
        z <= cz + _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_3__.WorldSpaces.chunk._bounds.z)
        return true;
    return false;
};
function RunWorldSun(tasks) {
    _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.setDimension(tasks.origin[0]);
    tasks.start();
    if (!_Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.column.get(tasks.origin))
        return false;
    const [dimension, cx, cy, cz] = tasks.origin;
    const queue = tasks.queues.sun;
    _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._sDataTool.setDimension(dimension);
    const RmaxY = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.column.height.getRelative(tasks.origin);
    const AmaxY = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.column.height.getAbsolute(tasks.origin);
    //fill
    for (let ix = cx; ix < cx + _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_3__.WorldSpaces.chunk._bounds.x; ix++) {
        for (let iz = cz; iz < cz + _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_3__.WorldSpaces.chunk._bounds.z; iz++) {
            for (let iy = AmaxY; iy < _Data_World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_0__.WorldBounds.bounds.MaxY; iy++) {
                if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._sDataTool.loadInAt(ix, iy, iz))
                    continue;
                const l = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._sDataTool.getLight();
                if (l < 0)
                    continue;
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._sDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.setS(0xf, l)).commit();
            }
        }
    }
    //accumulate
    for (let ix = cx; ix < cx + _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_3__.WorldSpaces.chunk._bounds.x; ix++) {
        for (let iz = cz; iz < cz + _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_3__.WorldSpaces.chunk._bounds.z; iz++) {
            for (let iy = AmaxY; iy <= RmaxY; iy++) {
                if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._sDataTool.loadInAt(ix, iy, iz))
                    continue;
                const l = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._sDataTool.getLight();
                if (l < 0 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getS(l) != 0xf)
                    continue;
                let add = false;
                for (const n of _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_2__.$3dCardinalNeighbors) {
                    const nx = ix + n[0];
                    const ny = iy + n[1];
                    const nz = iz + n[2];
                    if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.loadInAt(nx, ny, nz)) {
                        const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.getLight();
                        if (nl >= 0 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getS(nl) < 0xf) {
                            add = true;
                            break;
                        }
                    }
                }
                if (add) {
                    queue.push(ix, iy, iz);
                }
            }
        }
    }
    //flood
    while (queue.length) {
        const x = queue.shift();
        const y = queue.shift();
        const z = queue.shift();
        if (!_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._sDataTool.loadInAt(x, y, z))
            continue;
        const sl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._sDataTool.getLight();
        if (sl <= 0)
            continue;
        const sunL = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getS(sl);
        if (sunL >= 0xf && !inColumnBounds(cx, cz, x, z))
            continue;
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.loadInAt(x - 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                queue.push(x - 1, y, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.loadInAt(x + 1, y, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                queue.push(x + 1, y, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.loadInAt(x, y, z - 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                queue.push(x, y, z - 1);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.loadInAt(x, y, z + 1)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                queue.push(x, y, z + 1);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.loadInAt(x, y - 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.isLessThanForSunAddDown(nl, sl)) {
                if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.isAir()) {
                    queue.push(x, y - 1, z);
                    _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getSunLightForUnderVoxel(sl, nl))
                        .commit();
                }
                else {
                    const substance = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.getSubstance();
                    if (substance != "#dve_magma" && substance != "#dve_solid") {
                        queue.push(x, y - 1, z);
                        _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
                    }
                }
            }
        }
        if (_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.loadInAt(x, y + 1, z)) {
            const nl = _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.getLight();
            if (nl > -1 && _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.isLessThanForSunAdd(nl, sl)) {
                queue.push(x, y + 1, z);
                _IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager._nDataTool.setLight(_IlluminationManager_js__WEBPACK_IMPORTED_MODULE_4__.IlluminationManager.lightData.getMinusOneForSun(sl, nl)).commit();
            }
        }
    }
    tasks.stop();
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/IlluminationManager.js":
/*!*******************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/IlluminationManager.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IlluminationManager": () => (/* binding */ IlluminationManager)
/* harmony export */ });
/* harmony import */ var _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/Light/LightByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js");
//functions


const IlluminationManager = {
    lightData: _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_1__.LightData,
    //tools
    _sDataTool: new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_0__.DataTool(),
    _nDataTool: new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_0__.DataTool(),
    setDimension(dimension) {
        this._sDataTool.setDimension(dimension);
        this._nDataTool.setDimension(dimension);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Propagation.js":
/*!**********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Propagation.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Propagation": () => (/* binding */ Propagation)
/* harmony export */ });
/* harmony import */ var _Illumanation_Functions_RGBUpdate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Illumanation/Functions/RGBUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/RGBUpdate.js");
/* harmony import */ var _Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Illumanation/Functions/SunUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/SunUpdate.js");
/* harmony import */ var _Illumanation_Functions_WorldSun_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Illumanation/Functions/WorldSun.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Illumanation/Functions/WorldSun.js");
/* harmony import */ var _Flow_Functions_FlowUpdate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flow/Functions/FlowUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/Functions/FlowUpdate.js");
/* harmony import */ var _Flow_Functions_FlowRemove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Flow/Functions/FlowRemove.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Flow/Functions/FlowRemove.js");
/* harmony import */ var _Explosion_ExplosionManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Explosion/ExplosionManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Explosion/ExplosionManager.js");






const Propagation = {
    expolosion: {
        run(tasks) {
            _Explosion_ExplosionManager_js__WEBPACK_IMPORTED_MODULE_5__.ExplosionManager.runExplosion(tasks);
        },
    },
    flow: {
        async update(tasks) {
            await (0,_Flow_Functions_FlowUpdate_js__WEBPACK_IMPORTED_MODULE_3__.FlowUpdate)(tasks);
        },
        async remove(tasks) {
            await (0,_Flow_Functions_FlowRemove_js__WEBPACK_IMPORTED_MODULE_4__.FlowRemove)(tasks);
        },
    },
    worldSun: {
        run(tasks) {
            (0,_Illumanation_Functions_WorldSun_js__WEBPACK_IMPORTED_MODULE_2__.RunWorldSun)(tasks);
        },
    },
    rgb: {
        update(tasks) {
            (0,_Illumanation_Functions_RGBUpdate_js__WEBPACK_IMPORTED_MODULE_0__.RGBUpdate)(tasks);
        },
        remove(tasks) {
            (0,_Illumanation_Functions_RGBUpdate_js__WEBPACK_IMPORTED_MODULE_0__.RGBRemove)(tasks);
        },
    },
    sun: {
        update(tasks) {
            (0,_Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_1__.SunUpdate)(tasks);
        },
        remove(tasks) {
            (0,_Illumanation_Functions_SunUpdate_js__WEBPACK_IMPORTED_MODULE_1__.SunRemove)(tasks);
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/Functions/VoxelUpdate.js":
/*!**************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/Functions/VoxelUpdate.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EreaseAndUpdate": () => (/* binding */ EreaseAndUpdate),
/* harmony export */   "PaintAndUpdate": () => (/* binding */ PaintAndUpdate)
/* harmony export */ });
/* harmony import */ var _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Propagation/Propagation.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Propagation/Propagation.js");
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/Constants/Util/CardinalNeighbors.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js");
/* harmony import */ var _Tools_Brush_Brush_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Tools/Brush/Brush.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/Brush.js");
/* harmony import */ var _TasksRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TasksRequest.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/TasksRequest.js");
/* harmony import */ var _Math_Functions_DistnaceSort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Math/Functions/DistnaceSort.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/DistnaceSort.js");







const dataTool = new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_2__.DataTool();
const nDataTool = new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_2__.DataTool();
const brushTool = new _Tools_Brush_Brush_js__WEBPACK_IMPORTED_MODULE_4__.BrushTool();
brushTool._update = false;
const updateLightTask = (tasks) => {
    let doRGB = _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doRGBPropagation();
    let doSun = _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doSunPropagation();
    const [dimension, x, y, z] = tasks.origin;
    nDataTool.setDimension(dimension);
    for (const n of _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_3__.$3dCardinalNeighbors) {
        const nx = n[0] + x;
        const ny = n[1] + y;
        const nz = n[2] + z;
        if (!nDataTool.loadInAt(nx, ny, nz))
            continue;
        if (doRGB) {
            if (nDataTool.hasRGBLight()) {
                tasks.queues.rgb.update.push(nx, ny, nz);
            }
        }
        if (doSun) {
            if (nDataTool.hasSunLight()) {
                tasks.queues.sun.update.push(nx, ny, nz);
            }
        }
    }
};
async function EreaseAndUpdate(data) {
    if (!dataTool.setLocation(data[0]).loadIn())
        return false;
    const [dimension, x, y, z] = data[0];
    const tasks = _TasksRequest_js__WEBPACK_IMPORTED_MODULE_5__.TasksRequest.getVoxelUpdateRequests(data[0], data[1], data[2]);
    tasks
        .setPriority(0)
        .start()
        .setBuldMode("sync")
        .addNeighborsToRebuildQueue(x, y, z);
    tasks.setBuldMode("async");
    if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doFlow()) {
        const substance = dataTool.getSubstance();
        if (substance == "#dve_liquid" || substance == "#dve_magma") {
            await _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.flow.remove(tasks);
            tasks.stop();
            return true;
        }
    }
    const light = dataTool.getLight();
    const isLightSource = dataTool.isLightSource();
    dataTool
        .setLight(light > 0 ? light : 0)
        .setAir()
        .commit(2);
    if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doLight()) {
        if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doRGBPropagation() && isLightSource) {
            tasks.queues.rgb.rmeove.push(x, y, z);
            _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.rgb.remove(tasks);
        }
        updateLightTask(tasks);
        if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doRGBPropagation()) {
            _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.rgb.update(tasks);
        }
        if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doSunPropagation()) {
            _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.sun.update(tasks);
        }
    }
    (0,_Math_Functions_DistnaceSort_js__WEBPACK_IMPORTED_MODULE_6__.LocationDataDistanceSort)(tasks.origin, tasks.syncQueue);
    tasks.runRebuildQueue();
    tasks.stop();
    return true;
}
async function PaintAndUpdate(data) {
    if (!dataTool.setLocation(data[0]).loadIn())
        return false;
    const [dimension, x, y, z] = data[0];
    const raw = data[1];
    const tasks = _TasksRequest_js__WEBPACK_IMPORTED_MODULE_5__.TasksRequest.getVoxelUpdateRequests(data[0], data[2], data[3]);
    tasks
        .start()
        .setPriority(0)
        .setBuldMode("sync")
        .addNeighborsToRebuildQueue(x, y, z);
    tasks.setBuldMode("async");
    brushTool.setLocation(data[0]).setRaw(raw);
    nDataTool.loadInRaw(raw);
    const isOpaque = nDataTool.isOpaque();
    let doRGB = _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doRGBPropagation();
    let doSun = _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doSunPropagation();
    lighttest: if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doLight()) {
        const light = dataTool.getLight();
        if (light <= 0)
            break lighttest;
        if (doSun) {
            if (dataTool.hasSunLight()) {
                tasks.queues.sun.rmeove.push(x, y, z);
                _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.sun.remove(tasks);
            }
        }
        if (doRGB) {
            if (dataTool.hasRGBLight() && isOpaque) {
                tasks.queues.rgb.rmeove.push(x, y, z);
                _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.rgb.remove(tasks);
            }
        }
    }
    brushTool.paint();
    if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doLight()) {
        updateLightTask(tasks);
        if (doRGB) {
            tasks.queues.rgb.update.push(x, y, z);
            _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.rgb.update(tasks);
        }
        if (doSun) {
            _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.sun.update(tasks);
        }
    }
    if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.doFlow()) {
        const substance = brushTool._dt.getSubstance();
        if (substance == "#dve_liquid" || substance == "#dve_magma") {
            _Propagation_Propagation_js__WEBPACK_IMPORTED_MODULE_0__.Propagation.flow.update(tasks);
        }
    }
    tasks.runRebuildQueue();
    tasks.stop();
    return;
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/Tasks.js":
/*!**********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/Tasks.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tasks": () => (/* binding */ Tasks)
/* harmony export */ });
/* harmony import */ var _Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common/Threads/Contracts/ConstructorTasks.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorTasks.js");
/* harmony import */ var _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DivineVoxelEngineConstructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/DivineVoxelEngineConstructor.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Functions_VoxelUpdate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Functions/VoxelUpdate.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/Functions/VoxelUpdate.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TasksRequest.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/TasksRequest.js");







const chunkTool = new _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_5__.ChunkDataTool();
const Tasks = {
    data: {
        syncTextures: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks("sync-uv-texuture-data", (data) => {
            _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.builder.textureManager.setUVTextureMap(data);
            _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.hooks.texturesRegistered.run(_DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.builder.textureManager);
        }),
    },
    build: {
        chunk: {
            tasks: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.buildChunk, async (buildData) => {
                if (buildData.priority == 0) {
                    Tasks.build.chunk.run(buildData.data);
                    return;
                }
                _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.tasksQueue.addTasks(buildData.priority, buildData.data, Tasks.build.chunk.run);
            }),
            async run(data) {
                const location = data[0];
                await _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.builder.buildChunk(location, data[1]);
            },
        },
        column: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.buildColumn, async (data, onDone) => {
            const column = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_4__.WorldRegister.column.get(data[0]);
            if (!column)
                return false;
            if (column.chunks.size == 0)
                return false;
            let totalChunks = 0;
            const location = data[0];
            for (const [key, chunk] of column.chunks) {
                chunkTool.setChunk(chunk);
                const chunkPOS = chunkTool.getPositionData();
                location[1] = chunkPOS.x;
                location[2] = chunkPOS.y;
                location[3] = chunkPOS.z;
                totalChunks++;
                _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.tasksQueue.addTasks(2, [[...location], data[1]], async (data) => {
                    await Tasks.build.chunk.run(data);
                    totalChunks--;
                    if (totalChunks == 0) {
                        if (onDone)
                            onDone(true);
                    }
                });
            }
        }, "deffered"),
    },
    voxelUpdate: {
        erase: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.voxelErease, async (data, onDone) => {
            await (0,_Functions_VoxelUpdate_js__WEBPACK_IMPORTED_MODULE_3__.EreaseAndUpdate)(data);
            if (onDone)
                onDone();
        }, "deffered"),
        paint: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.voxelPaint, async (data, onDone) => {
            await (0,_Functions_VoxelUpdate_js__WEBPACK_IMPORTED_MODULE_3__.PaintAndUpdate)(data);
            if (onDone)
                onDone();
        }, "deffered"),
    },
    explosion: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.explosion, async (data) => {
        await _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.propagation.expolosion.run(_TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getExplosionRequests(data[0], data[1], data[2], data[3]));
    }),
    worldSun: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.worldSun, (data, onDone) => {
        _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.tasksQueue.addTasks(2, data, () => {
            _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.propagation.worldSun.run(_TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getWorldSunRequests(data[0], data[1]));
            if (onDone)
                onDone();
        });
    }, "deffered"),
    worldGen: {
        generate: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.generate, (data, onDone) => {
            if (!onDone)
                return;
            _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.tasksQueue.addTasks(2, data, () => {
                _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.worldGen.generate(data, onDone);
            });
        }, "deffered"),
    },
    anaylzer: {
        propagation: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.analyzerPropagation, async (data, onDone) => {
            await _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.analyzer.runPropagation(data);
            if (onDone)
                onDone();
        }, "deffered"),
        update: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.analyzerUpdate, async (data, onDone) => {
            await _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.analyzer.runUpdate(data);
            if (onDone)
                onDone();
        }, "deffered"),
    },
    flow: {
        update: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.flowUpdate, async (data) => {
            const tasks = _TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getFlowUpdateRequest(data[0], data[1], data[2]);
            tasks.start();
            await _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.propagation.flow.update(tasks);
            tasks.stop();
        }),
        remove: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.flowRemove, async (data) => {
            const tasks = _TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getFlowUpdateRequest(data[0], data[1], data[2]);
            tasks.start();
            await _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.propagation.flow.remove(tasks);
            tasks.stop();
        }),
    },
    rgb: {
        update: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.RGBlightUpdate, (data) => {
            const tasks = _TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getLightUpdateRequest(data[0], data[1], data[2]);
            const [dimension, x, y, z] = data[0];
            tasks.queues.rgb.update.push(x, y, z);
            tasks.start();
            _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.propagation.rgb.update(tasks);
            tasks.stop();
        }),
        remove: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.RGBlightRemove, (data) => {
            const tasks = _TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getLightUpdateRequest(data[0], data[1], data[2]);
            const [dimension, x, y, z] = data[0];
            tasks.queues.rgb.rmeove.push(x, y, z);
            tasks.start();
            _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.propagation.rgb.remove(tasks);
            tasks.stop();
        }),
    },
    sun: {
        update: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.sunLightUpdate, (data) => {
            const tasks = _TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getLightUpdateRequest(data[0], data[1], data[2]);
            const [dimension, x, y, z] = data[0];
            tasks.queues.sun.update.push(x, y, z);
            tasks.start();
            _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.propagation.sun.update(tasks);
            tasks.stop();
        }),
        remove: threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.registerTasks(_Common_Threads_Contracts_ConstructorTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorTasks.sunLightRemove, (data) => {
            const tasks = _TasksRequest_js__WEBPACK_IMPORTED_MODULE_6__.TasksRequest.getLightUpdateRequest(data[0], data[1], data[2]);
            const [dimension, x, y, z] = data[0];
            tasks.queues.sun.rmeove.push(x, y, z);
            tasks.start();
            _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.propagation.sun.remove(tasks);
            tasks.stop();
        }),
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/TasksQueue.js":
/*!***************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/TasksQueue.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksQueue": () => (/* binding */ TasksQueue)
/* harmony export */ });
const TasksQueue = {
    tasks: new Map(),
    addTasks(priority, data, run) {
        const tasks = this.tasks.get(priority);
        if (!tasks)
            return;
        tasks.push([data, run]);
    },
    $INIT() {
        this.tasks.set(0, []);
        this.tasks.set(1, []);
        this.tasks.set(2, []);
        this.tasks.set(3, []);
        setInterval(() => {
            for (const [priority, tasks] of this.tasks) {
                if (tasks.length) {
                    const node = tasks.shift();
                    if (!node)
                        return;
                    node[1](node[0]);
                    break;
                }
            }
        }, 50);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/TasksRequest.js":
/*!*****************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Tasks/TasksRequest.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksRequest": () => (/* binding */ TasksRequest)
/* harmony export */ });
/* harmony import */ var _Common_Threads_Contracts_ConstructorRemoteThreadTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common/Threads/Contracts/ConstructorRemoteThreadTasks.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/ConstructorRemoteThreadTasks.js");
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/Constants/Util/CardinalNeighbors.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Constructor_Builder_Builder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Constructor/Builder/Builder.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Builder.js");
/* harmony import */ var _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _Global_Util_VisistedMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Global/Util/VisistedMap.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util/VisistedMap.js");









const chunkTool = new _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_7__.ChunkDataTool();
class Request {
    tasksType;
    origin;
    data;
    buildQueue;
    originThread;
    queues;
    rebuildQueMap = new Map();
    comm;
    priority = 2;
    LOD = 0;
    syncQueue = [];
    aSyncQueue = [];
    buildMode = "sync";
    buildTasks = {
        data: [["main", 0, 0, 0], 1],
        priority: 0,
    };
    rebuildTasks;
    constructor(tasksType, origin, data, buildQueue = "none", originThread = "self", queues) {
        this.tasksType = tasksType;
        this.origin = origin;
        this.data = data;
        this.buildQueue = buildQueue;
        this.originThread = originThread;
        this.queues = queues;
        if (originThread != "self") {
            this.comm = threadcomm__WEBPACK_IMPORTED_MODULE_2__.ThreadComm.getComm(originThread);
        }
        this.rebuildTasks = [this.origin, this.buildQueue, this.priority];
        return this;
    }
    start() {
        _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_5__.WorldRegister.cache.enable();
        return this;
    }
    stop() {
        _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_5__.WorldRegister.cache.disable();
        return this;
    }
    setPriority(priority) {
        this.priority = priority;
        return this;
    }
    getData() {
        return this.data;
    }
    getOriginThread() {
        return this.origin;
    }
    getBuildQueue() {
        return this.buildQueue;
    }
    getOrigin() {
        return this.origin;
    }
    needsRebuild() {
        return this.buildQueue != "none";
    }
    needsToUpdateOriginThread() {
        return this.originThread != "self";
    }
    setBuldMode(mode) {
        this.buildMode = mode;
        return this;
    }
    addToRebuildQueue(x, y, z) {
        if (_Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_1__.EngineSettings.isServer())
            return false;
        if (!this.needsRebuild())
            return false;
        if (!chunkTool.setDimension(this.origin[0]).loadInAt(x, y, z))
            return false;
        const chunkKey = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_4__.WorldSpaces.chunk.getKeyLocation(chunkTool.location);
        if (this.rebuildQueMap.has(chunkKey))
            return false;
        this.rebuildQueMap.set(chunkKey, true);
        if (this.buildMode == "async") {
            this.aSyncQueue.push([...chunkTool.location]);
            return true;
        }
        this.syncQueue.push([...chunkTool.location]);
        return true;
    }
    addNeighborsToRebuildQueue(x, y, z) {
        if (!this.needsRebuild())
            return false;
        const voxelPOS = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_4__.WorldSpaces.voxel.getPositionXYZ(x, y, z);
        if (voxelPOS.x == 0 ||
            voxelPOS.x == _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_4__.WorldSpaces.chunk._bounds.x - 1 ||
            voxelPOS.y == 0 ||
            voxelPOS.y == _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_4__.WorldSpaces.chunk._bounds.y - 1 ||
            voxelPOS.z == 0 ||
            voxelPOS.z == _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_4__.WorldSpaces.chunk._bounds.z - 1) {
            let i = _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_3__.$3dMooreNeighborhood.length;
            while (i--) {
                this.addToRebuildQueue(x + _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_3__.$3dMooreNeighborhood[i][0], y + _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_3__.$3dMooreNeighborhood[i][1], z + _Data_Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_3__.$3dMooreNeighborhood[i][2]);
            }
            return;
        }
        this.addToRebuildQueue(x, y, z);
        return this;
    }
    runRebuildQueue() {
        while (this.aSyncQueue.length !== 0) {
            const node = this.aSyncQueue.shift();
            this.buildTasks.priority = this.priority;
            if (!node)
                break;
            this.buildTasks.data[0] = node;
            this.comm.runTasks(_Common_Threads_Contracts_ConstructorRemoteThreadTasks_js__WEBPACK_IMPORTED_MODULE_0__.ConstructorRemoteThreadTasks.buildChunk, this.buildTasks);
        }
        while (this.syncQueue.length !== 0) {
            const node = this.syncQueue.shift();
            if (!node)
                break;
            _Constructor_Builder_Builder_js__WEBPACK_IMPORTED_MODULE_6__.Builder.buildChunk(node);
        }
        this.rebuildQueMap.clear();
        return this;
    }
}
const getLightQueues = () => {
    return {
        rgb: {
            update: [],
            rmeove: [],
            map: new _Global_Util_VisistedMap_js__WEBPACK_IMPORTED_MODULE_8__.VisitedMap(),
        },
        sun: {
            update: [],
            rmeove: [],
        },
    };
};
const getFlowQueues = () => {
    return {
        update: {
            queue: [],
            map: new _Global_Util_VisistedMap_js__WEBPACK_IMPORTED_MODULE_8__.VisitedMap(),
        },
        rmeove: {
            queue: [],
            map: new _Global_Util_VisistedMap_js__WEBPACK_IMPORTED_MODULE_8__.VisitedMap(),
            noRemoveMap: new _Global_Util_VisistedMap_js__WEBPACK_IMPORTED_MODULE_8__.VisitedMap(),
        },
    };
};
const getVoxelUpdateQueueData = () => {
    return { ...getLightQueues(), flow: getFlowQueues() };
};
const getExplosionQueuesData = () => {
    return {
        queue: [],
        map: new _Global_Util_VisistedMap_js__WEBPACK_IMPORTED_MODULE_8__.VisitedMap(),
        ...getLightQueues(),
        flow: getFlowQueues(),
    };
};
const TasksRequest = {
    getLightUpdateRequest(origin, buildQueue = "none", originThread = "self") {
        return new Request("light-update", origin, null, buildQueue, originThread, getLightQueues());
    },
    getFlowUpdateRequest(origin, buildQueue = "none", originThread = "self") {
        return new Request("flow-update", origin, null, buildQueue, originThread, getVoxelUpdateQueueData());
    },
    getVoxelUpdateRequests(origin, buildQueue = "none", originThread = "self") {
        return new Request("voxel-update", origin, null, buildQueue, originThread, getVoxelUpdateQueueData());
    },
    getWorldSunRequests(origin, buildQueue = "none", originThread = "self") {
        return new Request("world-sun", origin, null, buildQueue, originThread, {
            sun: [],
        });
    },
    getExplosionRequests(origin, radius, buildQueue = "none", originThread = "self") {
        return new Request("voxel-update", origin, radius, buildQueue, originThread, getExplosionQueuesData());
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Threads/Parent/ParentComm.js":
/*!************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Threads/Parent/ParentComm.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentComm": () => (/* binding */ ParentComm)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DivineVoxelEngineConstructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/DivineVoxelEngineConstructor.js");


const parentComm = threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.parent;
parentComm.listenForMessage("connect-world", (data, event) => {
    if (!event)
        return;
    const port = event.ports[0];
    _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.worldComm.setPort(port);
});
parentComm.listenForMessage("sync-settings", (data, event) => {
    const settings = data[1];
    _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.syncSettings(settings);
});
parentComm.listenForMessage("re-start", (data, event) => {
    _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_1__.DVEC.reStart();
});
parentComm.listenForMessage("sync-uv-texuture-data", (data, event) => {
});
const ParentComm = parentComm;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Threads/World/WorldComm.js":
/*!**********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Threads/World/WorldComm.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldComm": () => (/* binding */ WorldComm)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");

const worldComm = threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.createComm("world", {});
const WorldComm = worldComm;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Brush/ConstructorBrush.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Brush/ConstructorBrush.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetConstructorBrush": () => (/* binding */ GetConstructorBrush)
/* harmony export */ });
/* harmony import */ var _WorldGeneration_Register_WorldGenRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../WorldGeneration/Register/WorldGenRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/WorldGeneration/Register/WorldGenRegister.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Tools_Brush_Brush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Tools/Brush/Brush.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/Brush.js");
/* harmony import */ var _Data_World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/World/WorldPainter.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldPainter.js");




function GetConstructorBrush() {
    const newBrush = _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__.Util.merge(new _Tools_Brush_Brush_js__WEBPACK_IMPORTED_MODULE_2__.BrushTool(), {
        requestsId: "",
        paint() {
            if (!this._dt.loadInAtLocation(this.location)) {
                _WorldGeneration_Register_WorldGenRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldGenRegister.addToRequest(newBrush.requestsId, this.location, [
                    ...this.getRaw(),
                ]);
                return this;
            }
            _Data_World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_3__.WorldPainter.paint.voxel(this.location, this.data);
            return this;
        },
    });
    return newBrush;
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Data/ConstructorDataTool.js":
/*!*****************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Data/ConstructorDataTool.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetConstructorDataTool": () => (/* binding */ GetConstructorDataTool)
/* harmony export */ });
/* harmony import */ var _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _Builder_Shapes_ShapeManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Builder/Shapes/ShapeManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Shapes/ShapeManager.js");
/* harmony import */ var _Builder_Constructors_Voxel_VoxelConstructors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Builder/Constructors/Voxel/VoxelConstructors.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Constructors/Voxel/VoxelConstructors.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");




function GetConstructorDataTool() {
    const dataTool = new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_0__.DataTool();
    const mergeObj = {
        getVoxelShapeObj() {
            return _Builder_Shapes_ShapeManager_js__WEBPACK_IMPORTED_MODULE_1__.ShapeManager.getShape(dataTool.getShapeId());
        },
        getVoxelObj() {
            return _Builder_Constructors_Voxel_VoxelConstructors_js__WEBPACK_IMPORTED_MODULE_2__.VoxelConstructors.getVoxel(dataTool.getStringId());
        },
    };
    return _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_3__.Util.merge(dataTool, mergeObj);
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/WorldGeneration/Register/WorldGenRegister.js":
/*!****************************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/WorldGeneration/Register/WorldGenRegister.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldGenRegister": () => (/* binding */ WorldGenRegister)
/* harmony export */ });
/* harmony import */ var _Tools_Brush_Brush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Tools/Brush/Brush.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Brush/Brush.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Tools/Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");




const brush = new _Tools_Brush_Brush_js__WEBPACK_IMPORTED_MODULE_0__.BrushTool();
const dataTool = brush._dt;
const chunkTool = new _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_3__.ChunkDataTool();
const WorldGenRegister = {
    MAX_ATTEMPTS: 100,
    _requests: new Map(),
    registerRequest(dimension, x, y, z) {
        const id = `${dimension}-${x}-${y}-${z}`;
        this._requests.set(id, {
            attempts: 0,
            chunks: new Map(),
            dimension: dimension,
            voxels: [],
        });
        return id;
    },
    addToRequest(registerId, location, rawData) {
        const requests = this._requests.get(registerId);
        if (!requests)
            return;
        const chunkPOS = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.chunk.getPositionLocation(location);
        const chunkKey = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.chunk.getKeyLocation(location);
        if (!chunkTool.loadInAtLocation(location)) {
            if (!requests.chunks.has(chunkKey)) {
                const world = threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.getComm("world");
                world.runTasks("add-chunk", [
                    requests.dimension,
                    chunkPOS.x,
                    chunkPOS.y,
                    chunkPOS.z,
                ]);
                requests.chunks.set(chunkKey, [chunkPOS.x, chunkPOS.y, chunkPOS.z]);
            }
        }
        const [dim, x, y, z] = location;
        requests.voxels.push([x, y, z, rawData]);
    },
    attemptRequestFullFill(registerId) {
        const requests = this._requests.get(registerId);
        if (!requests)
            return true;
        chunkTool.setDimension(requests.dimension);
        const world = threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.getComm("world");
        let done = true;
        for (const [key, pos] of requests.chunks) {
            if (!chunkTool.loadInAt(pos[0], pos[1], pos[2])) {
                done = false;
                world.runTasks("add-chunk", [requests.dimension, pos[0], pos[1], pos[2]]);
            }
        }
        if (!done) {
            requests.attempts++;
            if (requests.attempts >= this.MAX_ATTEMPTS) {
                console.error(`World gen requests cancled after max attempts`, requests);
                this._requests.delete(registerId);
                return true;
            }
            return false;
        }
        brush.setDimension(requests.dimension);
        const voxels = requests.voxels;
        brush.start();
        while (voxels.length) {
            const data = voxels.shift();
            if (!data)
                break;
            brush.setXYZ(data[0], data[1], data[2]).setRaw(data[3]).paint();
        }
        brush.stop();
        this._requests.delete(registerId);
        return true;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/WorldGeneration/WorldGeneration.js":
/*!******************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/WorldGeneration/WorldGeneration.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldGeneration": () => (/* binding */ WorldGeneration)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Data/World/WorldBounds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldBounds.js");
/* harmony import */ var _Constructor_Tools_Brush_ConstructorBrush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constructor/Tools/Brush/ConstructorBrush.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Brush/ConstructorBrush.js");
/* harmony import */ var _Register_WorldGenRegister_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register/WorldGenRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/WorldGeneration/Register/WorldGenRegister.js");
//objects



const WorldGeneration = {
    worldGen: null,
    register: _Register_WorldGenRegister_js__WEBPACK_IMPORTED_MODULE_2__.WorldGenRegister,
    worldBounds: _Data_World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_0__.WorldBounds,
    _brushes: [],
    setWorldGen(worldGen) {
        this.worldGen = worldGen;
    },
    generate(data, onDone) {
        if (!this.worldGen) {
            throw new Error(`A World Generator must be set.`);
        }
        const [dimension, x, y, z] = data[0];
        const genData = data[1];
        const requestsId = _Register_WorldGenRegister_js__WEBPACK_IMPORTED_MODULE_2__.WorldGenRegister.registerRequest(dimension, x, y, z);
        for (const brush of this._brushes) {
            brush.requestsId = requestsId;
        }
        this.worldGen.generate(dimension, x, y, z, genData);
        const inte = setInterval(() => {
            if (_Register_WorldGenRegister_js__WEBPACK_IMPORTED_MODULE_2__.WorldGenRegister.attemptRequestFullFill(requestsId)) {
                onDone();
                clearInterval(inte);
            }
        }, 100);
    },
    getBrush() {
        const brush = (0,_Constructor_Tools_Brush_ConstructorBrush_js__WEBPACK_IMPORTED_MODULE_1__.GetConstructorBrush)();
        this._brushes.push(brush);
        return brush;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Constructor/index.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Constructor/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Analyzer": () => (/* reexport safe */ _Analyzer_Analyzer_js__WEBPACK_IMPORTED_MODULE_1__.Analyzer),
/* harmony export */   "DVEC": () => (/* reexport safe */ _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_0__.DVEC),
/* harmony export */   "GetConstructorBrush": () => (/* reexport safe */ _Tools_Brush_ConstructorBrush_js__WEBPACK_IMPORTED_MODULE_3__.GetConstructorBrush),
/* harmony export */   "GetConstructorDataTool": () => (/* reexport safe */ _Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_4__.GetConstructorDataTool),
/* harmony export */   "VoxelTemplater": () => (/* reexport safe */ _Builder_Tools_VoxelTemplater_js__WEBPACK_IMPORTED_MODULE_5__.VoxelTemplater),
/* harmony export */   "WorldGeneration": () => (/* reexport safe */ _WorldGeneration_WorldGeneration_js__WEBPACK_IMPORTED_MODULE_2__.WorldGeneration)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineConstructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DivineVoxelEngineConstructor.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/DivineVoxelEngineConstructor.js");
/* harmony import */ var _Analyzer_Analyzer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Analyzer/Analyzer.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Analyzer/Analyzer.js");
/* harmony import */ var _WorldGeneration_WorldGeneration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldGeneration/WorldGeneration.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/WorldGeneration/WorldGeneration.js");
/* harmony import */ var _Tools_Brush_ConstructorBrush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tools/Brush/ConstructorBrush.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Brush/ConstructorBrush.js");
/* harmony import */ var _Tools_Data_ConstructorDataTool_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tools/Data/ConstructorDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Tools/Data/ConstructorDataTool.js");
/* harmony import */ var _Builder_Tools_VoxelTemplater_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Builder/Tools/VoxelTemplater.js */ "../../DSLIBS/divineVoxelEngine/dist/Constructor/Builder/Tools/VoxelTemplater.js");








/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/Faces.js":
/*!************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/Faces.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceMap": () => (/* binding */ FaceMap),
/* harmony export */   "FaceRecord": () => (/* binding */ FaceRecord)
/* harmony export */ });
const FaceMap = [
    "top",
    "bottom",
    "east",
    "west",
    "south",
    "north",
];
const FaceRecord = {
    top: 0,
    bottom: 1,
    east: 2,
    west: 3,
    south: 4,
    north: 5,
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/DataSyncNode.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/DataSyncNode.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSyncNode": () => (/* binding */ DataSyncNode)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Threads/Contracts/DataSync.js */ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/DataSync.js");
/* harmony import */ var _Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Voxel/VoxelPalette.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelPalette.js");
/* harmony import */ var _World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./World/Dimensions/DimensionsRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Dimensions/DimensionsRegister.js");
/* harmony import */ var _World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./World/Chunk/ChunkTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Chunk/ChunkTags.js");
/* harmony import */ var _World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./World/Region/RegionTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionTags.js");
/* harmony import */ var _World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./World/Column/ColumnTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Column/ColumnTags.js");
/* harmony import */ var _Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Voxel/VoxelTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelTags.js");
/* harmony import */ var _Register_Register_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Register/Register.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Register/Register.js");
/* harmony import */ var _World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./World/Region/RegionHeaderRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionHeaderRegister.js");
//objects











const DataSyncNode = {
    _states: {
        voxelData: false,
    },
    isReady() {
        let done = true;
        for (const state of Object.keys(this._states)) {
            if (!this._states[state]) {
                done = false;
            }
        }
        return true;
    },
    voxelPalette: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.voxelPalette, (data) => {
        _Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__.VoxelPaletteReader.setVoxelPalette(data[0], data[1]);
    }),
    voxelData: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.voxelTags, (data) => {
        _Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_8__.VoxelTags.$INIT(data[0]);
        _Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_8__.VoxelTags.sync(new Uint16Array(data[1]));
        DataSyncNode._states.voxelData = true;
    }),
    dimension: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.dimesnion),
    chunk: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.chunk),
    column: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.column),
    region: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.region),
    regionHeader: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.regionHeader),
    chunkTags: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.chunkTags),
    columnTags: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.columnTags),
    regionTags: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.regionTags),
    stringMap: threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.onDataSync(_Common_Threads_Contracts_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncTypes.registerStringMap, (data) => {
        _Register_Register_js__WEBPACK_IMPORTED_MODULE_9__.Register.stringMaps.syncStringMap(data);
    }),
};
DataSyncNode.dimension.addOnSync((data) => {
    _World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_4__.DimensionsRegister.registerDimension(data.id, data.options);
});
DataSyncNode.chunk.addOnSync((data) => {
    _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.chunk.add(data[0], data[1]);
});
DataSyncNode.chunk.addOnUnSync((data) => {
    _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.chunk.remove(data);
});
DataSyncNode.column.addOnSync((data) => {
    _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.column.add(data[0], data[1]);
});
DataSyncNode.column.addOnUnSync((data) => {
    _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.column.remove(data);
});
DataSyncNode.region.addOnSync((data) => {
    _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.region.add(data[0], data[1]);
});
DataSyncNode.region.addOnUnSync((data) => {
    _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.region.remove(data);
});
DataSyncNode.regionHeader.addOnSync((data) => {
    _World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_10__.RegionHeaderRegister.add(data[0], data[1]);
});
DataSyncNode.chunkTags.addOnSync((data) => {
    _World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_5__.ChunkTags.$INIT(data);
});
DataSyncNode.columnTags.addOnSync((data) => {
    _World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_7__.ColumnTags.$INIT(data);
});
DataSyncNode.regionTags.addOnSync((data) => {
    _World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_6__.RegionTags.$INIT(data[0]);
    _World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_6__.RegionHeaderTags.$INIT(data[1]);
});


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Meshing/FaceByte.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Meshing/FaceByte.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceByte": () => (/* binding */ FaceByte)
/* harmony export */ });
// (this.byteValue >>> index) & 1
const faceMasks = {
    top: 0b11111,
    bottom: 0b11111_00000,
    north: 0b11111_00000_00000,
    south: 0b11111_00000_00000_00000,
    east: 0b11111_00000_00000_00000_00000,
    west: 0b11111_00000_00000_00000_00000_00000,
};
const FaceByte = {
    _rotationMap: {
        0: 0,
        90: 1,
        180: 2,
        270: 3,
    },
    _rotationReverseMap: {
        0: 0,
        1: 90,
        2: 180,
        3: 270,
    },
    _setFaceTextureState: {
        top: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 3)) | faceBit;
            return faceBit | (state << 3);
        },
        bottom: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 8)) | faceBit;
            return faceBit | (state << 8);
        },
        north: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 13)) | faceBit;
            return faceBit | (state << 13);
        },
        south: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 18)) | faceBit;
            return faceBit | (state << 18);
        },
        east: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 23)) | faceBit;
            return faceBit | (state << 23);
        },
        west: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 28)) | faceBit;
            return faceBit | (state << 28);
        },
    },
    _getFaceTextureState: {
        top: (faceBit) => {
            let newBit = faceMasks.top & faceBit;
            return (newBit >>> 3) & 0b11;
        },
        bottom: (faceBit) => {
            let newBit = faceMasks.bottom & faceBit;
            return (newBit >>> 8) & 0b11;
        },
        north: (faceBit) => {
            let newBit = faceMasks.north & faceBit;
            return (newBit >>> 13) & 0b11;
        },
        south: (faceBit) => {
            let newBit = faceMasks.south & faceBit;
            return (newBit >>> 18) & 0b11;
        },
        east: (faceBit) => {
            let newBit = faceMasks.east & faceBit;
            return (newBit >>> 23) & 0b11;
        },
        west: (faceBit) => {
            let newBit = faceMasks.west & faceBit;
            return (newBit >>> 28) & 0b11;
        },
    },
    _setFaceRotateState: {
        top: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 1)) | faceBit;
            return faceBit | (state << 1);
        },
        bottom: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 6)) | faceBit;
            return faceBit | (state << 6);
        },
        north: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 11)) | faceBit;
            return faceBit | (state << 11);
        },
        south: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 16)) | faceBit;
            return faceBit | (state << 16);
        },
        east: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 21)) | faceBit;
            return faceBit | (state << 21);
        },
        west: (state, faceBit) => {
            faceBit = (faceBit & (0b00 << 26)) | faceBit;
            return faceBit | (state << 26);
        },
    },
    _getFaceRotateState: {
        top: (faceBit) => {
            let newBit = faceMasks.top & faceBit;
            return (newBit >>> 1) & 0b11;
        },
        bottom: (faceBit) => {
            let newBit = faceMasks.bottom & faceBit;
            return (newBit >>> 6) & 0b11;
        },
        north: (faceBit) => {
            let newBit = faceMasks.north & faceBit;
            return (newBit >>> 11) & 0b11;
        },
        south: (faceBit) => {
            let newBit = faceMasks.south & faceBit;
            return (newBit >>> 16) & 0b11;
        },
        east: (faceBit) => {
            let newBit = faceMasks.east & faceBit;
            return (newBit >>> 21) & 0b11;
        },
        west: (faceBit) => {
            let newBit = faceMasks.west & faceBit;
            return (newBit >>> 26) & 0b11;
        },
    },
    _markExposedFace: {
        top: (faceBit) => {
            return faceBit | (1 << 0);
        },
        bottom: (faceBit) => {
            return faceBit | (1 << 5);
        },
        north: (faceBit) => {
            return faceBit | (1 << 10);
        },
        south: (faceBit) => {
            return faceBit | (1 << 15);
        },
        east: (faceBit) => {
            return faceBit | (1 << 20);
        },
        west: (faceBit) => {
            return faceBit | (1 << 25);
        },
    },
    _checkExposedFace: {
        top: (faceBit) => {
            return ((faceBit >>> 0) & 1) == 1;
        },
        bottom: (faceBit) => {
            return ((faceBit >>> 5) & 1) == 1;
        },
        north: (faceBit) => {
            return ((faceBit >>> 10) & 1) == 1;
        },
        south: (faceBit) => {
            return ((faceBit >>> 15) & 1) == 1;
        },
        east: (faceBit) => {
            return ((faceBit >>> 20) & 1) == 1;
        },
        west: (faceBit) => {
            return ((faceBit >>> 25) & 1) == 1;
        },
    },
    markFaceAsExposed(direction, rawData) {
        return this._markExposedFace[direction](rawData);
    },
    isFaceExposed(direction, rawData) {
        return this._checkExposedFace[direction](rawData);
    },
    setFaceRotateState(direction, state, rawData) {
        return this._setFaceRotateState[direction](state, rawData);
    },
    getFaceRotateState(direction, rawData) {
        return this._getFaceRotateState[direction](rawData);
    },
    setFaceTextureState(direction, rotation, rawData) {
        const state = this._rotationMap[rotation];
        return this._setFaceTextureState[direction](state, rawData);
    },
    getFaceTextureState(direction, rawData) {
        const state = this._getFaceTextureState[direction](rawData);
        return this._rotationReverseMap[state];
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Meshing/MeshFaceDataBytes.js":
/*!*****************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Meshing/MeshFaceDataBytes.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeshFaceDataByte": () => (/* binding */ MeshFaceDataByte)
/* harmony export */ });
const MeshFaceDataByte = {
    setAnimationType(animationType, rawData) {
        return (rawData & ~(0xff << 0)) | (animationType << 0);
    },
    getAnimationType(rawData) {
        return (rawData & (0xff));
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Shapes/StairStates.js":
/*!**********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Shapes/StairStates.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StairStates": () => (/* binding */ StairStates)
/* harmony export */ });
const StairStates = {
    normal: {
        bottom: {
            north: 0,
            south: 1,
            east: 2,
            west: 3,
        },
        top: {
            north: 4,
            south: 5,
            east: 6,
            west: 7,
        },
    },
    connected: {
        bottom: {
            northEast: 8,
            northWest: 9,
            southEast: 10,
            southWest: 11,
        },
        top: {
            northEast: 12,
            northWest: 13,
            southEast: 14,
            southWest: 15,
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Global/Util/VisistedMap.js":
/*!**********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Global/Util/VisistedMap.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitedMap": () => (/* binding */ VisitedMap)
/* harmony export */ });
class VisitedMap {
    _map = new Map();
    get size() {
        return this._map.size;
    }
    _getKey(x, y, z) {
        return `${x}_${y}_${z}`;
    }
    inMap(x, y, z) {
        return this._map.has(this._getKey(x, y, z));
    }
    add(x, y, z) {
        this._map.set(this._getKey(x, y, z), true);
    }
    remove(x, y, z) {
        this._map.delete(this._getKey(x, y, z));
    }
    removeDiffernce(map) {
        for (const [key] of map._map) {
            if (this._map.has(key)) {
                this._map.delete(key);
            }
        }
        return map;
    }
    clear() {
        this._map.clear();
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance3d.js":
/*!************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance3d.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Distance3D": () => (/* binding */ Distance3D)
/* harmony export */ });
function Distance3D(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/DistnaceSort.js":
/*!**************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Functions/DistnaceSort.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationDataDistanceSort": () => (/* binding */ LocationDataDistanceSort),
/* harmony export */   "Vec3ArrayDistanceSort": () => (/* binding */ Vec3ArrayDistanceSort)
/* harmony export */ });
/* harmony import */ var _Distance3d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Distance3d.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance3d.js");

function Vec3ArrayDistanceSort(origion, array) {
    //filter tasks to keep them close to the player
    return array.sort((a, b) => {
        const aDistance = (0,_Distance3d_js__WEBPACK_IMPORTED_MODULE_0__.Distance3D)(a[0], a[1], a[2], origion[0], origion[1], origion[2]);
        const bDistance = (0,_Distance3d_js__WEBPACK_IMPORTED_MODULE_0__.Distance3D)(b[0], b[1], b[2], origion[0], origion[1], origion[2]);
        //if a is closer then b put it first
        if (aDistance < bDistance)
            return -1;
        //if b is closer then a put it first
        if (aDistance > bDistance)
            return 1;
        //no change
        return 0;
    });
}
function LocationDataDistanceSort(origion, array) {
    //filter tasks to keep them close to the player
    return array.sort((a, b) => {
        const aDistance = (0,_Distance3d_js__WEBPACK_IMPORTED_MODULE_0__.Distance3D)(a[1], a[2], a[3], origion[1], origion[2], origion[3]);
        const bDistance = (0,_Distance3d_js__WEBPACK_IMPORTED_MODULE_0__.Distance3D)(b[1], b[2], b[3], origion[1], origion[2], origion[3]);
        //if a is closer then b put it first
        if (aDistance < bDistance)
            return -1;
        //if b is closer then a put it first
        if (aDistance > bDistance)
            return 1;
        //no change
        return 0;
    });
}


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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["DSLIBS_divineVoxelEngine_dist_Data_Settings_EngineSettings_js-DSLIBS_threadComm_dist_index_js","DSLIBS_divineVoxelEngine_dist_Common_Threads_Contracts_DataSync_js-DSLIBS_divineVoxelEngine_d-d7fdd9"], () => (__webpack_require__("./compiled/dev/client/Contexts/Constructor/Constructor.js")))
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
/******/ 			"compiled_dev_client_Contexts_Constructor_Constructor_js": 1
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
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e("DSLIBS_divineVoxelEngine_dist_Data_Settings_EngineSettings_js-DSLIBS_threadComm_dist_index_js"),
/******/ 				__webpack_require__.e("DSLIBS_divineVoxelEngine_dist_Common_Threads_Contracts_DataSync_js-DSLIBS_divineVoxelEngine_d-d7fdd9")
/******/ 			]).then(next);
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
//# sourceMappingURL=compiled_dev_client_Contexts_Constructor_Constructor_js.DVE.js.map