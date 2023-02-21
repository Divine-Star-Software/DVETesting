/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compiled/dev/client/Contexts/Nexus/nexus.js":
/*!*****************************************************!*\
  !*** ./compiled/dev/client/Contexts/Nexus/nexus.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var divine_voxel_engine_Nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/Nexus */ "../../DSLIBS/divineVoxelEngine/dist/Nexus/index.js");
/* harmony import */ var dve_plugins_player_Nexus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dve-plugins-player/Nexus */ "../../DSLIBS/dvePlugIns/Player/dist/Nexus/index.js");

//import { GetNexusPlayer } from "./Player/InitNexusPlayer.js";

await divine_voxel_engine_Nexus__WEBPACK_IMPORTED_MODULE_0__.DVEN.$INIT();
const player = await (0,dve_plugins_player_Nexus__WEBPACK_IMPORTED_MODULE_1__.INIT_NEXUS_PLAYER)(divine_voxel_engine_Nexus__WEBPACK_IMPORTED_MODULE_0__.DVEN);
player.setPosition(0, 200, 0);
setTimeout(() => {
    setInterval(() => {
        player.update();
    }, 17);
}, 2000);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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

/***/ "../../DSLIBS/divineVoxelEngine/dist/Nexus/DivineVoxelEngineNexus.js":
/*!***************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Nexus/DivineVoxelEngineNexus.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEN": () => (/* binding */ DVEN)
/* harmony export */ });
/* harmony import */ var _Threads_Parent_ParentComm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Threads/Parent/ParentComm.js */ "../../DSLIBS/divineVoxelEngine/dist/Nexus/Threads/Parent/ParentComm.js");
/* harmony import */ var _Threads_World_WorldComm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Threads/World/WorldComm.js */ "../../DSLIBS/divineVoxelEngine/dist/Nexus/Threads/World/WorldComm.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var _Init_InitNexusWorker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Init/InitNexusWorker.js */ "../../DSLIBS/divineVoxelEngine/dist/Nexus/Init/InitNexusWorker.js");
/* harmony import */ var _Data_DataSyncNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Data/DataSyncNode.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataSyncNode.js");
/* harmony import */ var _Data_DataManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/DataManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataManager.js");
/* harmony import */ var _Data_World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Data/World/WorldPainter.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldPainter.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
//comms


//objects


//functions





const DVEN = {
    environment: "browser",
    TC: threadcomm__WEBPACK_IMPORTED_MODULE_8__.ThreadComm,
    UTIL: _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_2__.Util,
    settings: _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_3__.EngineSettings,
    dataSyncNode: _Data_DataSyncNode_js__WEBPACK_IMPORTED_MODULE_5__.DataSyncNode,
    data: _Data_DataManager_js__WEBPACK_IMPORTED_MODULE_6__.DataManager,
    worldData: _Data_World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_7__.WorldPainter,
    worldComm: _Threads_World_WorldComm_js__WEBPACK_IMPORTED_MODULE_1__.WorldComm,
    parentComm: _Threads_Parent_ParentComm_js__WEBPACK_IMPORTED_MODULE_0__.ParentComm,
    async $INIT() {
        await (0,_Init_InitNexusWorker_js__WEBPACK_IMPORTED_MODULE_4__.InitNexusWorker)(this);
    },
    isReady() {
        return DVEN.worldComm.isPortSet();
    },
    syncSettings(data) {
        this.settings.syncSettings(data);
    },
};
DVEN.environment = _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_2__.Util.getEnviorment();


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Nexus/Init/InitNexusWorker.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Nexus/Init/InitNexusWorker.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitNexusWorker": () => (/* binding */ InitNexusWorker)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");

async function InitNexusWorker(DVEN) {
    let parent = "render";
    if (DVEN.environment == "node") {
        parent = "server";
    }
    await threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.$INIT("nexus", parent);
    await DVEN.UTIL.createPromiseCheck({ check: DVEN.isReady, checkInterval: 1 });
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Nexus/Threads/Parent/ParentComm.js":
/*!******************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Nexus/Threads/Parent/ParentComm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentComm": () => (/* binding */ ParentComm)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _DivineVoxelEngineNexus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DivineVoxelEngineNexus.js */ "../../DSLIBS/divineVoxelEngine/dist/Nexus/DivineVoxelEngineNexus.js");


const parentComm = threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.parent;
parentComm.listenForMessage("sync-settings", (data, event) => {
    const settings = data[1];
    _DivineVoxelEngineNexus_js__WEBPACK_IMPORTED_MODULE_1__.DVEN.syncSettings(settings);
});
const ParentComm = parentComm;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Nexus/Threads/World/WorldComm.js":
/*!****************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Nexus/Threads/World/WorldComm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldComm": () => (/* binding */ WorldComm)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");

const worldComm = threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.createComm("world");
const WorldComm = worldComm;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Nexus/index.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Nexus/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEN": () => (/* reexport safe */ _DivineVoxelEngineNexus_js__WEBPACK_IMPORTED_MODULE_0__.DVEN)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineNexus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DivineVoxelEngineNexus.js */ "../../DSLIBS/divineVoxelEngine/dist/Nexus/DivineVoxelEngineNexus.js");



/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/ColliderManager.js":
/*!*******************************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/ColliderManager.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColliderManager": () => (/* binding */ ColliderManager)
/* harmony export */ });
const ColliderManager = {
    colliders: {},
    registerCollider(collider) {
        this.colliders[collider.id] = collider;
    },
    getCollider(id) {
        const collider = this.colliders[id];
        if (!collider) {
            throw new Error(`Collider with ${id} does not exists.`);
        }
        return collider;
    },
};


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/Functions/RegisterDefaultColliders.js":
/*!**************************************************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/Functions/RegisterDefaultColliders.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterDefaultColliders": () => (/* binding */ RegisterDefaultColliders)
/* harmony export */ });
/* harmony import */ var _default_Box_Box_collider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default/Box/Box.collider.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/default/Box/Box.collider.js");
/* harmony import */ var _default_Stair_Stair_collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default/Stair/Stair.collider.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/default/Stair/Stair.collider.js");
//default colliders


function RegisterDefaultColliders(colliders) {
    colliders.registerCollider(_default_Box_Box_collider_js__WEBPACK_IMPORTED_MODULE_0__.BoxCollider);
    colliders.registerCollider(_default_Stair_Stair_collider_js__WEBPACK_IMPORTED_MODULE_1__.StairCollider);
}


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/default/Box/Box.collider.js":
/*!****************************************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/default/Box/Box.collider.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxCollider": () => (/* binding */ BoxCollider)
/* harmony export */ });
const collisionReturn = [
    {
        name: "main",
        boundingBox: {
            w: 1,
            h: 1,
            d: 1,
        },
        position: [0, 0, 0],
    },
];
const BoxCollider = {
    id: "#dve_box",
    getColliderData(x, y, z) {
        collisionReturn[0].position[0] = x;
        collisionReturn[0].position[1] = y;
        collisionReturn[0].position[2] = z;
        return collisionReturn;
    },
};


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/default/Stair/Stair.collider.js":
/*!********************************************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/default/Stair/Stair.collider.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StairCollider": () => (/* binding */ StairCollider)
/* harmony export */ });
const collisionReturn = [
    {
        name: "stair-bottom",
        boundingBox: {
            w: 1,
            h: 0.5,
            d: 1,
        },
        position: [0, 0, 0],
    },
    {
        name: "stair-top",
        boundingBox: {
            w: 1,
            h: 0.5,
            d: 0.5,
        },
        position: [0, 0, 0],
    },
];
const StairCollider = {
    id: "#dve_stair",
    getColliderData(x, y, z) {
        collisionReturn[0].position[0] = x;
        collisionReturn[0].position[1] = y;
        collisionReturn[0].position[2] = z;
        collisionReturn[1].position[0] = x;
        collisionReturn[1].position[1] = y + .5;
        collisionReturn[1].position[2] = z;
        return collisionReturn;
    },
};


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Collisions/CollisionsHandler.js":
/*!**********************************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Collisions/CollisionsHandler.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollisionsHanlder": () => (/* binding */ CollisionsHanlder)
/* harmony export */ });
const CollisionsHanlder = {
    sweepAABB(
    //entity 
    ax, ay, az, ahx, ahy, ahz, 
    //position
    bx, by, bz, 
    //collider
    bhx, bhy, bhz, 
    //velocity
    dx, dy, dz) {
        var mx, my, mz, mhx, mhy, mhz;
        mx = bx - (ax + ahx);
        my = by - (ay + ahy);
        mz = bz - (az + ahz);
        mhx = ahx + bhx;
        mhy = ahy + bhy;
        mhz = ahz + bhz;
        var h = 1, s, nx = 0, ny = 0, nz = 0;
        // X min
        s = this.lineToPlane(0, 0, 0, dx, dy, dz, mx, my, mz, -1, 0, 0);
        if (s >= 0 &&
            dx > 0 &&
            s < h &&
            this.between(s * dy, my, my + mhy) &&
            this.between(s * dz, mz, mz + mhz)) {
            h = s;
            nx = -1;
            ny = 0;
            nz = 0;
        }
        // X max
        s = this.lineToPlane(0, 0, 0, dx, dy, dz, mx + mhx, my, mz, 1, 0, 0);
        if (s >= 0 &&
            dx < 0 &&
            s < h &&
            this.between(s * dy, my, my + mhy) &&
            this.between(s * dz, mz, mz + mhz)) {
            h = s;
            nx = 1;
            ny = 0;
            nz = 0;
        }
        // Y min
        s = this.lineToPlane(0, 0, 0, dx, dy, dz, mx, my, mz, 0, -1, 0);
        if (s >= 0 &&
            dy > 0 &&
            s < h &&
            this.between(s * dx, mx, mx + mhx) &&
            this.between(s * dz, mz, mz + mhz)) {
            h = s;
            nx = 0;
            ny = -1;
            nz = 0;
        }
        // Y max
        s = this.lineToPlane(0, 0, 0, dx, dy, dz, mx, my + mhy, mz, 0, 1, 0);
        if (s >= 0 &&
            dy < 0 &&
            s < h &&
            this.between(s * dx, mx, mx + mhx) &&
            this.between(s * dz, mz, mz + mhz)) {
            h = s;
            nx = 0;
            ny = 1;
            nz = 0;
        }
        // Z min
        s = this.lineToPlane(0, 0, 0, dx, dy, dz, mx, my, mz, 0, 0, -1);
        if (s >= 0 &&
            dz > 0 &&
            s < h &&
            this.between(s * dx, mx, mx + mhx) &&
            this.between(s * dy, my, my + mhy)) {
            h = s;
            nx = 0;
            ny = 0;
            nz = -1;
        }
        // Z max
        s = this.lineToPlane(0, 0, 0, dx, dy, dz, mx, my, mz + mhz, 0, 0, 1);
        if (s >= 0 &&
            dz < 0 &&
            s < h &&
            this.between(s * dx, mx, mx + mhx) &&
            this.between(s * dy, my, my + mhy)) {
            h = s;
            nx = 0;
            ny = 0;
            nz = 1;
        }
        return { h: h, nx: nx, ny: ny, nz: nz };
    },
    lineToPlane(px, py, pz, ux, uy, uz, vx, vy, vz, nx, ny, nz) {
        var NdotU = nx * ux + ny * uy + nz * uz;
        if (NdotU == 0)
            return Infinity;
        // return n.(v-p) / n.u
        return (nx * (vx - px) + ny * (vy - py) + nz * (vz - pz)) / NdotU;
    },
    between(x, a, b) {
        return x >= a && x <= b;
    },
};


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/DivineVoxelPhysics.js":
/*!************************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Physics/dist/Nexus/DivineVoxelPhysics.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVP": () => (/* binding */ DVP)
/* harmony export */ });
/* harmony import */ var divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/Math/index.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/index.js");
/* harmony import */ var _Collisions_CollisionsHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collisions/CollisionsHandler.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Collisions/CollisionsHandler.js");
/* harmony import */ var _Colliders_ColliderManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Colliders/ColliderManager.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/ColliderManager.js");
/* harmony import */ var divine_voxel_engine_Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! divine-voxel-engine/Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _Colliders_Functions_RegisterDefaultColliders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Colliders/Functions/RegisterDefaultColliders.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Colliders/Functions/RegisterDefaultColliders.js");
//objects




//functions

const DVP = {
    math: divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__.VoxelMath,
    collisions: _Collisions_CollisionsHandler_js__WEBPACK_IMPORTED_MODULE_1__.CollisionsHanlder,
    colliders: _Colliders_ColliderManager_js__WEBPACK_IMPORTED_MODULE_2__.ColliderManager,
    _dataTool: new divine_voxel_engine_Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_3__.DataTool(),
    getCollider(x, y, z, dimension = 0) {
        if (!this._dataTool.loadInAt(x, y, z))
            return false;
        if (!this._dataTool.checkCollisions())
            return false;
        if (this._dataTool.getSubstance() == "#dve_liquid")
            return false;
        let collider = this._dataTool.getCollider();
        return this.colliders.getCollider(collider != "none" ? collider : "Box");
    },
};
(0,_Colliders_Functions_RegisterDefaultColliders_js__WEBPACK_IMPORTED_MODULE_4__.RegisterDefaultColliders)(DVP.colliders);


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Entities/Entity.base.js":
/*!**************************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Entities/Entity.base.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityBase": () => (/* binding */ EntityBase)
/* harmony export */ });
/* harmony import */ var divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/Math/index.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/index.js");
/* harmony import */ var divine_voxel_engine_Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! divine-voxel-engine/Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");
/* harmony import */ var _DivineVoxelPhysics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DivineVoxelPhysics.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/DivineVoxelPhysics.js");



const ep = 0.001;
class EntityBase {
    dataTool = new divine_voxel_engine_Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_1__.DataTool();
    active = true;
    onGround = false;
    position = new divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0);
    previousPosiiton = new divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0);
    direction = new divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0);
    speed = 0.01;
    velocity = new divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0);
    hitBox = { w: 0.8, h: 1.8, d: 0.8 };
    setPosition(x, y, z) {
        this.position.updateVector(x, y, z);
    }
    syncPosition(position) {
        position.x = this.position.x;
        position.y = this.position.y;
        position.z = this.position.z;
    }
    cachePosition() {
        this.previousPosiiton.updateFromVec3(this.position);
    }
    setVelocity(x, y, z) {
        this.velocity.updateVector(x, y, z);
    }
    applyVelocity() {
        this.position.addFromVec3(this.velocity);
    }
    update() {
        if (!this.active)
            return;
        this.beforeUpdate();
        this.cachePosition();
        this.applyVelocity();
        this.onGround = false;
        //Notice there is a cycle. We may have to run the algorithm several times until the collision is resolved
        while (true) {
            // First we calculate the movement vector for this frame
            // This is the entity's current position minus its last position.
            // The last position is set at the beggining of each frame.
            const dx = this.position.x - this.previousPosiiton.x;
            const dy = this.position.y - this.previousPosiiton.y;
            const dz = this.position.z - this.previousPosiiton.z;
            // These are the bounds of the AABB that may collide with the entity.
            const minX = Math.floor(Math.min(this.position.x, this.previousPosiiton.x) - this.hitBox.w / 2);
            const maxX = Math.floor(Math.max(this.position.x, this.previousPosiiton.x) + this.hitBox.w / 2);
            const minY = Math.floor(Math.min(this.position.y, this.previousPosiiton.y) - this.hitBox.h / 2);
            const maxY = Math.floor(Math.max(this.position.y, this.previousPosiiton.y) + this.hitBox.h / 2);
            const minZ = Math.floor(Math.min(this.position.z, this.previousPosiiton.z) - this.hitBox.d / 2);
            const maxZ = Math.floor(Math.max(this.position.z, this.previousPosiiton.z) + this.hitBox.d / 2);
            let r = { h: 1, nx: 0, ny: 0, nz: 0 };
            // For each voxel that may collide with the entity, find the first that colides with it
            for (let y = minY; y <= maxY; y++) {
                for (let z = minZ; z <= maxZ; z++) {
                    for (let x = minX; x <= maxX; x++) {
                        if (!this.dataTool.loadInAt(x, y, z))
                            continue;
                        const colliderObject = _DivineVoxelPhysics_js__WEBPACK_IMPORTED_MODULE_2__.DVP.getCollider(x, y, z);
                        if (!colliderObject)
                            continue;
                        const colliders = colliderObject.getColliderData(x, y, z);
                        const collidersLength = colliders.length;
                        for (let i = 0; i < collidersLength; i++) {
                            const collider = colliders[i];
                            // Check swept collision
                            const c = _DivineVoxelPhysics_js__WEBPACK_IMPORTED_MODULE_2__.DVP.collisions.sweepAABB(this.previousPosiiton.x - this.hitBox.w / 2, this.previousPosiiton.y - this.hitBox.h / 2, this.previousPosiiton.z - this.hitBox.d / 2, this.hitBox.w, this.hitBox.h, this.hitBox.d, collider.position[0], collider.position[1], collider.position[2], collider.boundingBox.w, collider.boundingBox.h, collider.boundingBox.d, dx, dy, dz);
                            if (c.ny == 1 && c.h < 0.3) {
                                this.onGround = true;
                            }
                            if (c.h < 1) {
                                this.doCollision(collider.name, c);
                            }
                            //Check if this collision is closer than the closest so far.
                            if (c.h < r.h) {
                                r = c;
                            }
                        }
                    }
                }
            }
            // Update the entity's position
            // We move the entity slightly away from the block in order to miss seams.
            this.position.x = this.previousPosiiton.x + r.h * dx + ep * r.nx;
            this.position.y = this.previousPosiiton.y + r.h * dy + ep * r.ny;
            this.position.z = this.previousPosiiton.z + r.h * dz + ep * r.nz;
            // If there was no collision, end the algorithm.
            if (r.h == 1)
                break;
            // Wall Sliding
            // c = a - (a.b)/(b.b) b
            // c - slide vector (rejection of a over b)
            // b - normal to the block
            // a - remaining speed (= (1-h)*speed)
            const BdotB = r.nx * r.nx + r.ny * r.ny + r.nz * r.nz;
            if (BdotB != 0) {
                // Store the current position for the next iteration
                this.cachePosition();
                // Apply Slide
                const AdotB = (1 - r.h) * (dx * r.nx + dy * r.ny + dz * r.nz);
                this.position.x += (1 - r.h) * dx - (AdotB / BdotB) * r.nx;
                this.position.y += (1 - r.h) * dy - (AdotB / BdotB) * r.ny;
                this.position.z += (1 - r.h) * dz - (AdotB / BdotB) * r.nz;
            }
        }
        this.afterUpdate();
    }
}


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/index.js":
/*!***********************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Physics/dist/Nexus/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVP": () => (/* reexport safe */ _DivineVoxelPhysics_js__WEBPACK_IMPORTED_MODULE_0__.DVP),
/* harmony export */   "EntityBase": () => (/* reexport safe */ _Entities_Entity_base_js__WEBPACK_IMPORTED_MODULE_1__.EntityBase)
/* harmony export */ });
/* harmony import */ var _DivineVoxelPhysics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DivineVoxelPhysics.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/DivineVoxelPhysics.js");
/* harmony import */ var _Entities_Entity_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entities/Entity.base.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/Entities/Entity.base.js");




/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Player/dist/Nexus/InitNexusPlayer.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Player/dist/Nexus/InitNexusPlayer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INIT_NEXUS_PLAYER": () => (/* binding */ INIT_NEXUS_PLAYER)
/* harmony export */ });
/* harmony import */ var _Data_PlayerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/PlayerManager.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/PlayerManager.js");
/* harmony import */ var _Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/PlayerPhysicsData.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/PlayerPhysicsData.js");
/* harmony import */ var _Data_PlayerStatsData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/PlayerStatsData.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/PlayerStatsData.js");
/* harmony import */ var _Data_RegisterPlayerData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/RegisterPlayerData.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/RegisterPlayerData.js");
/* harmony import */ var _NexusPlayer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NexusPlayer.js */ "../../DSLIBS/dvePlugIns/Player/dist/Nexus/NexusPlayer.js");





async function SetUpPlayerData(DVEN) {
    const { playerPhysicsTagManager, playerStatesTagManger } = (0,_Data_RegisterPlayerData_js__WEBPACK_IMPORTED_MODULE_3__.$RegisterPlayerData)();
    const physicsRemoteData = playerPhysicsTagManager.initData;
    const playePhysicsrDataSAB = new SharedArrayBuffer(physicsRemoteData.bufferSize);
    playerPhysicsTagManager.setBuffer(playePhysicsrDataSAB);
    _Data_PlayerManager_js__WEBPACK_IMPORTED_MODULE_0__.PlayerManager.physics = new _Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_1__.PlayerPhysicsData(playePhysicsrDataSAB, physicsRemoteData);
    const statsRemoteData = playerStatesTagManger.initData;
    const playeStatsDataSAB = new SharedArrayBuffer(physicsRemoteData.bufferSize);
    playerPhysicsTagManager.setBuffer(playePhysicsrDataSAB);
    _Data_PlayerManager_js__WEBPACK_IMPORTED_MODULE_0__.PlayerManager.stats = new _Data_PlayerStatsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerStatsData(playeStatsDataSAB, statsRemoteData);
    let renderReady = false;
    let worldReady = false;
    DVEN.parentComm.listenForMessage("request-player-tags", (data) => {
        DVEN.parentComm.sendMessage("connect-player-tags", [
            playePhysicsrDataSAB,
            physicsRemoteData,
            playeStatsDataSAB,
            statsRemoteData,
        ]);
        renderReady = true;
    });
    DVEN.worldComm.listenForMessage("request-player-tags", (data) => {
        DVEN.worldComm.sendMessage("connect-player-tags", [
            playePhysicsrDataSAB,
            physicsRemoteData,
            playeStatsDataSAB,
            statsRemoteData,
        ]);
        worldReady = true;
    });
    await DVEN.UTIL.createPromiseCheck({
        checkInterval: 1,
        check: () => {
            return renderReady && worldReady;
        },
    });
}
const INIT_NEXUS_PLAYER = async (DVEN) => {
    await SetUpPlayerData(DVEN);
    const player = new _NexusPlayer_js__WEBPACK_IMPORTED_MODULE_4__.NexusPlayer(_Data_PlayerManager_js__WEBPACK_IMPORTED_MODULE_0__.PlayerManager.physics, _Data_PlayerManager_js__WEBPACK_IMPORTED_MODULE_0__.PlayerManager.stats);
    return player;
};


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Player/dist/Nexus/NexusPlayer.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Player/dist/Nexus/NexusPlayer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NexusPlayer": () => (/* binding */ NexusPlayer)
/* harmony export */ });
/* harmony import */ var dve_plugins_physics_Nexus_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dve-plugins-physics/Nexus/index.js */ "../../DSLIBS/dvePlugIns/Physics/dist/Nexus/index.js");
/* harmony import */ var divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! divine-voxel-engine/Math/index.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/index.js");
/* harmony import */ var _Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/PlayerPhysicsData.js */ "../../DSLIBS/dvePlugIns/Player/dist/Data/PlayerPhysicsData.js");



class NexusPlayer extends dve_plugins_physics_Nexus_index_js__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
    physics;
    stats;
    states = {
        cilmbingStair: false,
        inWater: false,
        onLadder: false,
        gravity: -0.1,
        jumpMaxDefault: 10,
    };
    msterialStandingOn = "none";
    finalDirection = new divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
    sideDirection = new divine_voxel_engine_Math_index_js__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
    speed = 0.04;
    runSpeed = 0.03;
    hitBox = { w: 0.8, h: 1.8, d: 0.8 };
    jumpStates = {
        count: 0,
        max: 10,
        jumping: false,
        canJump: true,
    };
    movementFunctions = {};
    gravityAcceleration = 0;
    constructor(physics, stats) {
        super();
        this.physics = physics;
        this.stats = stats;
        this.movementFunctions[_Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerPhysicsStatesValues.still] = () => {
            this.direction.scaleXYZ(0);
        };
        this.movementFunctions[_Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerPhysicsStatesValues.secondaryStill] = () => {
            this.sideDirection.scaleXYZ(0);
        };
        this.movementFunctions[_Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerPhysicsStatesValues.walkingForward] = () => { };
        this.movementFunctions[_Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerPhysicsStatesValues.walkingBackward] = () => {
            this.direction.scaleXYZ(-1);
        };
        this.movementFunctions[_Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerPhysicsStatesValues.walkingLeft] = () => { };
        this.movementFunctions[_Data_PlayerPhysicsData_js__WEBPACK_IMPORTED_MODULE_2__.PlayerPhysicsStatesValues.walkingRight] = () => {
            this.sideDirection.scaleXYZ(-1);
        };
    }
    $INIT() {
        this.setPosition(10, 80, 7);
        this.cachePosition();
        this.velocity.y = this.states.gravity;
        //@ts-ignore
        this.syncPosition(PlayerManager.physics.position);
    }
    controlsUpdate() {
        //reset direction
        this.finalDirection.scaleXYZ(0);
        //get forward direction from where the player is looking
        this.direction.updateVector(this.physics.direction.x, 0, this.physics.direction.z);
        this.direction.normalize();
        //get side direction from where the player is looking
        this.sideDirection.updateVector(this.physics.sideDirection.x, 0, this.physics.sideDirection.z);
        this.sideDirection.normalize();
        //apply any changes on the direction vector based on player's state
        this.movementFunctions[this.physics.states.movement]();
        this.movementFunctions[this.physics.states.secondaryMovement]();
        //finally add, nomalize, then scale
        this.finalDirection.addFromVec3(this.direction);
        this.finalDirection.addFromVec3(this.sideDirection);
        if (!this.finalDirection.isZero()) {
            this.finalDirection.normalize();
        }
        this.finalDirection.scaleXYZ(this.getSpeed());
        //set the player's velcoity based on their state
        if (this.physics.states.movement || this.physics.states.secondaryMovement) {
            this.velocity.x = this.finalDirection.x;
            this.velocity.z = this.finalDirection.z;
        }
        if (this.onGround || this.states.inWater) {
            this.gravityAcceleration = 0;
        }
        if (this.onGround) {
            this.velocity.y = this.states.gravity;
        }
        //player jump
        if (this.physics.states.jumping &&
            !this.jumpStates.jumping &&
            (this.onGround || this.states.inWater)) {
            this.jumpStates.jumping = true;
            this.jumpStates.max = this.states.jumpMaxDefault;
            this.velocity.y = 0.1 + this.stats.jumpPower / 1000;
            this.physics.states.jumping = 0;
        }
        if (this.jumpStates.jumping) {
            if (this.jumpStates.count >= this.jumpStates.max) {
                this.jumpStates.count = 0;
                this.jumpStates.jumping = false;
            }
            else {
                this.jumpStates.count++;
            }
        }
        //player in air or water
        if (!this.onGround && !this.jumpStates.jumping) {
            this.gravityAcceleration += 0.0025;
            if (this.states.inWater) {
                this.velocity.y -= 0.0025;
                if (this.velocity.y < -0.01) {
                    this.velocity.y = -0.01;
                }
            }
            else {
                if (this.velocity.y <= this.states.gravity) {
                    this.velocity.y = this.states.gravity;
                }
                this.velocity.y -= this.gravityAcceleration;
            }
        }
    }
    getSpeed() {
        return (this.physics.states.running * this.runSpeed +
            //for every level of speed add a tenth of the player's base speed
            (this.speed + this.stats.speed * this.speed * 0.1));
    }
    beforeUpdate() {
        this.states.inWater = false;
        for (let y = this.position.y; y <= this.position.y + 1; y++) {
            for (let x = this.position.x - 1; x <= this.position.x + 1; x++) {
                for (let z = this.position.z - 1; z <= this.position.z + 1; z++) {
                    if (this.dataTool.loadInAt(x >> 0, y >> 0, z >> 0)) {
                        if (this.dataTool.getSubstance() == "#dve_liquid") {
                            this.states.inWater = true;
                            break;
                        }
                    }
                }
            }
        }
        this.controlsUpdate();
        if (this.onGround) {
            if (this.dataTool.loadInAt(this.position.x >> 0, (this.position.y - 1) >> 0, this.position.z >> 0)) {
                let material = this.dataTool.getMaterial();
                if (material != this.msterialStandingOn) {
                    this.msterialStandingOn = material;
                }
            }
        }
        this.physics.states.onGround = this.onGround;
        this.physics.states.inWater = this.states.inWater;
        if (this.states.cilmbingStair) {
            this.setVelocity(0, 1, -1.5);
            this.velocity.scaleXYZ(this.getSpeed());
        }
        this.states.cilmbingStair = false;
    }
    afterUpdate() {
        //@ts-ignore
        this.syncPosition(this.physics.position);
    }
    doCollision(colliderName, collisionData) {
        if ((colliderName == "stair-bottom" || colliderName == "stair-top") &&
            collisionData.h < 0.3) {
            if (collisionData.nz == 1) {
                this.states.cilmbingStair = true;
                return;
            }
            if (collisionData.ny == 1) {
                this.states.cilmbingStair = false;
                return;
            }
        }
        this.states.cilmbingStair = false;
    }
}


/***/ }),

/***/ "../../DSLIBS/dvePlugIns/Player/dist/Nexus/index.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/dvePlugIns/Player/dist/Nexus/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INIT_NEXUS_PLAYER": () => (/* reexport safe */ _InitNexusPlayer_js__WEBPACK_IMPORTED_MODULE_0__.INIT_NEXUS_PLAYER),
/* harmony export */   "NexusPlayer": () => (/* reexport safe */ _NexusPlayer_js__WEBPACK_IMPORTED_MODULE_1__.NexusPlayer)
/* harmony export */ });
/* harmony import */ var _InitNexusPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitNexusPlayer.js */ "../../DSLIBS/dvePlugIns/Player/dist/Nexus/InitNexusPlayer.js");
/* harmony import */ var _NexusPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NexusPlayer.js */ "../../DSLIBS/dvePlugIns/Player/dist/Nexus/NexusPlayer.js");




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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["DSLIBS_divineVoxelEngine_dist_Data_Settings_EngineSettings_js-DSLIBS_threadComm_dist_index_js","DSLIBS_divineVoxelEngine_dist_Common_Threads_Contracts_DataSync_js-DSLIBS_divineVoxelEngine_d-d7fdd9","DSLIBS_divineVoxelEngine_dist_Math_index_js-DSLIBS_dvePlugIns_Player_dist_Data_PlayerManager_-2f4e53"], () => (__webpack_require__("./compiled/dev/client/Contexts/Nexus/nexus.js")))
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
/******/ 			"compiled_dev_client_Contexts_Nexus_nexus_js": 1
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
//# sourceMappingURL=compiled_dev_client_Contexts_Nexus_nexus_js.DVE.js.map