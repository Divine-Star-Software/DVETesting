"use strict";
(self["webpackChunkdve_testing"] = self["webpackChunkdve_testing"] || []).push([[0],{

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js":
/*!***************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineSettings": () => (/* binding */ EngineSettings)
/* harmony export */ });
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../World/WorldBounds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldBounds.js");
/* harmony import */ var _World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");



/**# Engine Settings
 * ---
 * Handles common settings for all contexts
 */
const EngineSettings = {
    enviorment: _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__.Util.getEnviorment(),
    //context: <EngineSettingsContext>"MatrixLoadedThread",
    settings: {
        nexus: {
            enabled: false,
            autoSyncChunks: true,
            autoSyncVoxelPalette: true,
        },
        data: {
            enabled: false,
            autoSyncChunks: true,
            mode: "server",
        },
        fx: {
            enabled: false,
            autoSyncChunks: true,
            autoSyncVoxelPalette: true,
        },
        server: {
            enabled: false,
        },
        richWorld: {
            enabled: false,
            autoSyncChunks: true,
            autoSyncVoxelPalette: true,
        },
        textures: {
            animationTime: 20,
            textureSize: 16,
            mipMapSizes: [16, 12, 8, 4],
        },
        updating: {
            autoRebuild: true,
        },
        world: {
            maxX: Infinity,
            minX: -Infinity,
            maxZ: Infinity,
            minZ: -Infinity,
            maxY: 256,
            minY: 0,
        },
        regions: {
            regionXPow2: 9,
            regionYPow2: 8,
            regionZPow2: 9,
        },
        chunks: {
            autoHeightMap: true,
            chunkXPow2: 4,
            chunkYPow2: 4,
            chunkZPow2: 4,
        },
        voxels: {
            doColors: true,
        },
        flow: {
            enable: true,
        },
        lighting: {
            doAO: true,
            doSunLight: true,
            doRGBLight: true,
            autoRGBLight: true,
            autoSunLight: true,
        },
        meshes: {
            clearChachedGeometry: true,
            checkMagmaCollisions: false,
            checkLiquidCollisions: false,
            checkFloraCollisions: false,
            checkSolidCollisions: false,
            seralize: false,
            pickable: false,
        },
        materials: {
            mode: "classic",
            doAO: true,
            doSunLight: true,
            doRGBLight: true,
            disableFloraShaderEffects: false,
            disableLiquidShaderEffects: false,
        },
    },
    getSettings() {
        return this.settings;
    },
    syncSettings(data) {
        //safetly set data without prototype pollution
        for (const settingsKey of Object.keys(data)) {
            if (settingsKey.includes("__")) {
                throw new Error("Can not include properties with multpile underscores.");
            }
            if (this.settings[settingsKey] !== undefined) {
                for (const propertyKey of Object.keys(data[settingsKey])) {
                    if (propertyKey.includes("__")) {
                        throw new Error("Can not include properties with multpile underscores.");
                    }
                    if (this.settings[settingsKey][propertyKey] !== undefined) {
                        //@ts-ignore
                        this.settings[settingsKey][propertyKey] = data[settingsKey][propertyKey];
                    }
                }
            }
        }
        this.__syncWithObjects();
    },
    __syncWithObjects() {
        _World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.$INIT(this.settings);
        if (this.settings.world) {
            _World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_1__.WorldBounds.setWorldBounds(this.settings.world.minX, this.settings.world.maxX, this.settings.world.minZ, this.settings.world.maxZ, this.settings.world.minY, this.settings.world.maxY);
        }
    },
    syncWithWorldBounds(worldBounds) { },
    getSettingsCopy() {
        return JSON.parse(JSON.stringify(this.settings));
    },
    syncChunkInRichWorldThread() {
        return (this.settings.richWorld.enabled && this.settings.richWorld.autoSyncChunks);
    },
    richDataEnabled() {
        return this.settings.richWorld.enabled;
    },
    syncChunkInFXThread() {
        return this.settings.fx.enabled && this.settings.fx.autoSyncChunks;
    },
    syncChunkInDataThread() {
        return this.settings.data.enabled && this.settings.data.autoSyncChunks;
    },
    syncChunksInNexusThread() {
        return this.settings.nexus.enabled && this.settings.nexus.autoSyncChunks;
    },
    doSunPropagation() {
        return this.settings.lighting.autoSunLight == true;
    },
    doRGBPropagation() {
        return this.settings.lighting.autoRGBLight == true;
    },
    doLight() {
        return this.doRGBPropagation() || this.doSunPropagation();
    },
    doFlow() {
        return this.settings.flow.enable;
    },
    saveWorldData() {
        return this.settings.data.enabled;
    },
    isServer() {
        return this.settings.server.enabled && this.enviorment == "node";
    },
    isClient() {
        return this.enviorment != "browser";
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldBounds.js":
/*!*********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldBounds.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldBounds": () => (/* binding */ WorldBounds)
/* harmony export */ });
const WorldBounds = {
    bounds: {
        MinZ: -Infinity,
        MaxZ: Infinity,
        MinX: -Infinity,
        MaxX: Infinity,
        MinY: 0,
        MaxY: 256,
    },
    setWorldBounds(minX, maxX, minZ, maxZ, minY, maxY) {
        this.bounds.MinX = minX;
        this.bounds.MaxX = maxX;
        this.bounds.MinX = minZ;
        this.bounds.MaxZ = maxZ;
        this.bounds.MinY = minY;
        this.bounds.MaxY = maxY;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js":
/*!*********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldSpaces": () => (/* binding */ WorldSpaces)
/* harmony export */ });
/* harmony import */ var voxelspaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voxelspaces */ "../../DSLIBS/voxelspaces/dist/index.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
//types

//Objects

const WorldSpaces = _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__.Util.merge(voxelspaces__WEBPACK_IMPORTED_MODULE_0__.VoxelSpaces.getVoxelSpaces(), {
    $INIT(settings) {
        WorldSpaces.setDimensions({
            regions: {
                x: settings.regions.regionXPow2,
                y: settings.regions.regionYPow2,
                z: settings.regions.regionZPow2,
            },
            columns: {
                x: settings.chunks.chunkXPow2,
                y: settings.regions.regionYPow2,
                z: settings.chunks.chunkZPow2,
            },
            chunks: {
                x: settings.chunks.chunkXPow2,
                y: settings.chunks.chunkYPow2,
                z: settings.chunks.chunkZPow2,
            },
        });
    },
});


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js":
/*!*****************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Util": () => (/* binding */ Util)
/* harmony export */ });
/* harmony import */ var _Util_CreatePromiseCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util/CreatePromiseCheck.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util/CreatePromiseCheck.js");
/* harmony import */ var _Util_Queue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util/Queue.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util/Queue.js");


const Util = {
    createPromiseCheck: _Util_CreatePromiseCheck_js__WEBPACK_IMPORTED_MODULE_0__.CreatePromiseCheck,
    getEnviorment() {
        let environment = "browser";
        //@ts-ignore
        if (typeof process !== "undefined" && typeof Worker === "undefined") {
            environment = "node";
        }
        return environment;
    },
    getAQueue() {
        return new _Util_Queue_js__WEBPACK_IMPORTED_MODULE_1__.Queue();
    },
    merge(target, newObject) {
        return Object.assign(target, newObject);
    },
    degtoRad(degrees) {
        return degrees * (Math.PI / 180);
    },
    radToDeg(radians) {
        return radians * (180 / Math.PI);
    },
    convertBufferToSAB(buffer) {
        const sab = new SharedArrayBuffer(buffer.byteLength);
        const temp = new Uint8Array(buffer);
        const temp2 = new Uint8Array(sab);
        temp2.set(temp, 0);
        return sab;
    },
    converSABToBuffer(buffer) {
        const newBuffer = new ArrayBuffer(buffer.byteLength);
        const temp = new Uint8Array(buffer);
        const temp2 = new Uint8Array(newBuffer);
        temp2.set(temp, 0);
        return newBuffer;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Global/Util/CreatePromiseCheck.js":
/*!*****************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Global/Util/CreatePromiseCheck.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePromiseCheck": () => (/* binding */ CreatePromiseCheck)
/* harmony export */ });
const CreatePromiseCheck = (data) => {
    return new Promise((resolve) => {
        const times = {
            inte: -1,
            fail: -1,
        };
        times.inte = setInterval(() => {
            if (data.check()) {
                if (data.onReady) {
                    data.onReady();
                }
                if (times.fail > -1) {
                    clearTimeout(times.fail);
                }
                clearInterval(times.inte);
                resolve(true);
            }
        }, data.checkInterval);
        if (data.failTimeOut) {
            times.fail = setTimeout(() => {
                clearInterval(times.inte);
                if (data.onFail) {
                    data.onFail();
                }
                resolve(false);
            }, data.failTimeOut);
        }
    });
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Global/Util/Queue.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Global/Util/Queue.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Queue": () => (/* binding */ Queue)
/* harmony export */ });
class QueueNode {
    data;
    next;
    constructor(data) {
        this.data = data;
    }
}
class Queue {
    size = 0;
    first;
    last;
    enqueue(data) {
        const node = new QueueNode(data);
        if (this.size == 0) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    }
    dequeue() {
        if (this.size == 0)
            return null;
        if (!this.first)
            return null;
        let prevFirst = this.first;
        this.first = prevFirst.next;
        prevFirst.next = null;
        this.size--;
        return prevFirst.data;
    }
}


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Comm/Comm.js":
/*!*************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Comm/Comm.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommBase": () => (/* binding */ CommBase)
/* harmony export */ });
/* harmony import */ var _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ThreadComm.js */ "../../DSLIBS/threadComm/dist/ThreadComm.js");
/* harmony import */ var _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/Messages.js */ "../../DSLIBS/threadComm/dist/Constants/Messages.js");
/* harmony import */ var _Tasks_PromiseTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tasks/PromiseTasks.js */ "../../DSLIBS/threadComm/dist/Tasks/PromiseTasks.js");



class CommBase {
    name;
    managerName;
    environment = "browser";
    __ready = false;
    port = null;
    messageFunctions = {};
    _manager = null;
    constructor(name, managerName = "worker", commManager = null) {
        this.name = name;
        this.managerName = managerName;
        this._manager = commManager;
    }
    destroy() {
        if (!this.port)
            return;
        if ("terminate" in this.port) {
            this.port.terminate();
        }
    }
    isReady() {
        return this.__ready;
    }
    __sendReadySignal() {
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.internal, [
            _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCInternalMessages.IsReady,
            _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.threadName,
        ]);
    }
    __onSetPortRun = (port) => { };
    isPortSet() {
        return Boolean(this.port);
    }
    onSetPort(set) {
        this.__onSetPortRun = set;
    }
    __handleMessage(data, event) {
        this.onMessage(data, event);
        if (_ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.__isInternalMessage(data)) {
            _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.__handleInternalMessage(data, event);
            return;
        }
        if (_ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.__isTasks(data)) {
            _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.__handleTasksMessage(data);
            return;
        }
        if (_ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.__isTasksCheck(data)) {
            _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.__handleTasksCheckMessage(data);
            return;
        }
        if (_ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.__isDataSync(data)) {
            _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.__hanldeDataSyncMessage(data);
            return;
        }
        if (this._manager) {
            if (this._manager.__isManagerMessage(data)) {
                this._manager.__handleManagerMessage(data, event);
                return;
            }
        }
        const message = data[0];
        if (this.messageFunctions[message]) {
            this.messageFunctions[message].forEach((_) => _(data, event));
            return;
        }
    }
    setPort(port) {
        if (!port) {
            return this.__throwError("Port or worker must not be null.");
        }
        this.port = port;
        this.__onSetPortRun(port);
        if (this.environment == "browser") {
            port.onmessage = (event) => {
                this.__handleMessage(event.data, event);
            };
            port.onmessageerror = (event) => {
                console.log(event);
                this.__throwError("Error occured.");
            };
        }
        if (this.environment == "node") {
            port.on("message", (data) => {
                this.__handleMessage(data, data);
            });
            port.on("error", (data) => {
                console.log(data);
                this.__throwError("Error occured.");
            });
        }
        this.__sendReadySignal();
    }
    __throwError(message) {
        throw new Error(`[ThreadComm: ${this.name}] ${message}`);
    }
    sendMessage(message, data = [], transfers) {
        if (!this.port) {
            return this.__throwError("Port is not set.");
        }
        if (this.environment == "browser" && transfers) {
            this.port.postMessage([message, ...data], transfers);
            return;
        }
        this.port.postMessage([message, ...data]);
    }
    listenForMessage(message, run) {
        this.messageFunctions[message] ??= [];
        this.messageFunctions[message].push(run);
    }
    connectToComm(commToConnectTo) {
        const channel = new MessageChannel();
        commToConnectTo.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.internal, [
            _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCInternalMessages.connectPort,
            this.name,
            this.managerName,
            channel.port1,
        ], [channel.port1]);
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.internal, [
            _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCInternalMessages.connectPort,
            commToConnectTo.name,
            commToConnectTo.managerName,
            channel.port2,
        ], [channel.port2]);
    }
    runTasks(id, data, transfers = [], queueId) {
        let mode = 0;
        let tid = "";
        if (queueId) {
            mode = 2;
            tid = queueId;
        }
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.runTasks, [id, _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.threadName, mode, tid, data], transfers);
    }
    waitTillTasksExist(id) {
        return new Promise((resolve) => {
            const inte = setInterval(() => {
                this.tasksExist(id, (exists) => {
                    if (exists) {
                        resolve(true);
                        clearInterval(inte);
                    }
                });
            }, 10);
        });
    }
    tasksExist(id, onDone) {
        const promiseId = `${this.name}-${id}-${Date.now()}`;
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.checkTasks, [
            id,
            _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.threadName,
            promiseId,
        ]);
        _Tasks_PromiseTasks_js__WEBPACK_IMPORTED_MODULE_2__.PromiseTasks.addPromiseTakss("tasks-check", promiseId, (data) => {
            onDone(data);
        });
    }
    runPromiseTasks(id, requestsID, onDone, data, transfers = []) {
        _Tasks_PromiseTasks_js__WEBPACK_IMPORTED_MODULE_2__.PromiseTasks.addPromiseTakss(id, requestsID, onDone);
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.runTasks, [id, _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.threadName, 1, requestsID, data], transfers);
    }
    __syncQueue(id, sab) {
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.internal, [
            _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCInternalMessages.syncQueue,
            _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.threadName,
            id,
            sab,
        ]);
    }
    __unSyqncQueue(id) {
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.internal, [
            _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCInternalMessages.unSyncQueue,
            _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.threadName,
            id,
        ]);
    }
    syncData(dataType, data, transfers) {
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.dataSync, [_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCDataSyncMessages.SyncData, dataType, data], transfers);
    }
    unSyncData(dataType, data, transfers) {
        this.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCMessageHeaders.dataSync, [_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_1__.TCDataSyncMessages.UnSyncData, dataType, data], transfers);
    }
    waitTillReady() {
        const self = this;
        return new Promise((resolve, reject) => {
            const inte = setInterval(() => {
                if (this.isReady()) {
                    clearInterval(inte);
                    resolve(true);
                }
            }, 1);
        });
    }
    //meant to be over-ridden for debugging or custom behavior
    onMessage(data, event) { }
}


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Constants/Messages.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Constants/Messages.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TCDataSyncMessages": () => (/* binding */ TCDataSyncMessages),
/* harmony export */   "TCInternalMessages": () => (/* binding */ TCInternalMessages),
/* harmony export */   "TCMessageHeaders": () => (/* binding */ TCMessageHeaders)
/* harmony export */ });
const TCMessageHeaders = Object.freeze({
    internal: -99,
    runTasks: -98,
    checkTasks: -97,
    dataSync: -96,
    message: -95,
});
const TCInternalMessages = Object.freeze({
    IsReady: -99,
    nameThread: -98,
    connectPort: -97,
    syncQueue: -96,
    unSyncQueue: -95,
    completeTasks: -94,
    checkTasksResult: -93,
});
const TCDataSyncMessages = Object.freeze({
    SyncData: -990,
    UnSyncData: -980,
});


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Data/DataSync.js":
/*!*****************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Data/DataSync.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSync": () => (/* binding */ DataSync)
/* harmony export */ });
class DataSync {
    __onSyncFunctions = [];
    __onUnSyncFunctions = [];
    constructor() { }
    addOnSync(func) {
        this.__onSyncFunctions.push(func);
    }
    addOnUnSync(func) {
        this.__onUnSyncFunctions.push(func);
    }
    sync(data) {
        for (const func of this.__onSyncFunctions) {
            func(data);
        }
    }
    unSync(data) {
        for (const func of this.__onUnSyncFunctions) {
            func(data);
        }
    }
}


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Manager/CommManager.js":
/*!***********************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Manager/CommManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommManager": () => (/* binding */ CommManager)
/* harmony export */ });
/* harmony import */ var _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/Messages.js */ "../../DSLIBS/threadComm/dist/Constants/Messages.js");
/* harmony import */ var _Comm_Comm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Comm/Comm.js */ "../../DSLIBS/threadComm/dist/Comm/Comm.js");
/* harmony import */ var _Queue_QueueManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Queue/QueueManager.js */ "../../DSLIBS/threadComm/dist/Queue/QueueManager.js");
/* harmony import */ var _ThreadComm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThreadComm.js */ "../../DSLIBS/threadComm/dist/ThreadComm.js");
//constants

//classes



class CommManager {
    _totalComms = 0;
    _currentCom = 0;
    name = "";
    __comms = [];
    __data = {
        name: "",
        onPortSet: (port, commName) => { },
    };
    __queues = {};
    messageFunctions = {};
    constructor(data) {
        this.__data = data;
        this.name = data.name;
    }
    __throwError(message) {
        throw new Error(`[ThreadCommManager : ${this.__data.name}] ${message}`);
    }
    connectToCom(commToConnectTo) {
        for (const comm of this.__comms) {
            comm.connectToComm(commToConnectTo);
        }
    }
    destroyAll() {
        for (const comm of this.__comms) {
            comm.destroy();
        }
    }
    isReady() {
        let ready = true;
        for (const comm of this.__comms) {
            if (!comm.isReady())
                ready = false;
        }
        return ready;
    }
    waitTillAllAreReady() {
        const self = this;
        return new Promise((resolve, reject) => {
            const inte = setInterval(() => {
                if (this.isReady()) {
                    clearInterval(inte);
                    resolve(true);
                }
            }, 1);
        });
    }
    addPort(port) {
        this._totalComms++;
        const newCommName = `${this.__data.name}-${this._totalComms}`;
        const newComm = new _Comm_Comm_js__WEBPACK_IMPORTED_MODULE_1__.CommBase(newCommName, this.__data.name, this);
        _ThreadComm_js__WEBPACK_IMPORTED_MODULE_3__.ThreadComm.addComm(newComm);
        newComm.setPort(port);
        this.__data.onPortSet(port, newCommName);
        this.__comms.push(newComm);
        newComm.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCMessageHeaders.internal, [
            _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.nameThread,
            newCommName,
            this._totalComms,
        ]);
    }
    addPorts(ports) {
        for (const port of ports) {
            this.addPort(port);
        }
    }
    addComms(comms) {
        this._totalComms += comms.length;
        this.__comms.push(...comms);
    }
    __isManagerMessage(data) {
        return this.messageFunctions[data[0]] !== undefined;
    }
    __handleManagerMessage(data, event) {
        if (!this.messageFunctions[data[0]])
            return;
        this.messageFunctions[data[0]].forEach((_) => _(data, event));
    }
    listenForMessage(message, run) {
        this.messageFunctions[message] ??= [];
        this.messageFunctions[message].push(run);
    }
    sendMessageToAll(message, data = [], transfers) {
        for (const comm of this.__comms) {
            comm.sendMessage(message, data, transfers);
        }
    }
    runTasksForAll(id, data, transfers = [], queueId) {
        for (const comm of this.__comms) {
            comm.runTasks(id, data, transfers, queueId);
        }
    }
    runTask(id, data, transfers = [], threadNumber = -1, queueId) {
        if (threadNumber < 0) {
            const comm = this.__comms[this._currentCom];
            comm.runTasks(id, data, transfers, queueId);
            return this.__handleCount();
        }
        else {
            const comm = this.__comms[threadNumber];
            comm.runTasks(id, data, transfers, queueId);
            return threadNumber;
        }
    }
    runPromiseTasks(id, requestsID, onDone, data, transfers = [], threadNumber = -1) {
        if (threadNumber < 0) {
            const comm = this.__comms[this._currentCom];
            comm.runPromiseTasks(id, requestsID, onDone, data, transfers);
            return this.__handleCount();
        }
        else {
            const comm = this.__comms[threadNumber];
            comm.runPromiseTasks(id, requestsID, onDone, data, transfers);
            return threadNumber;
        }
    }
    __handleCount() {
        let countReturn = this._currentCom;
        this._currentCom++;
        if (this._currentCom >= this._totalComms) {
            this._currentCom = 0;
        }
        return countReturn;
    }
    addQueue(id, associatedTasksId, getQueueKey = null, beforeRun = (data) => data, afterRun = (data, thread) => { }, getThread = (data) => -1, getTransfers = (data) => []) {
        if (this.__queues[id]) {
            this.__throwError(`Queue with ${id} already exists.`);
        }
        const newQueue = new _Queue_QueueManager_js__WEBPACK_IMPORTED_MODULE_2__.QueueManager(id, (data, queueId) => {
            data = beforeRun(data);
            const thread = this.runTask(associatedTasksId, data, getTransfers(data), getThread(data), queueId);
            afterRun(data, thread);
        }, this, getQueueKey);
        this.__queues[id] = newQueue;
        return newQueue;
    }
    getQueue(id) {
        const queue = this.__queues[id];
        if (!queue) {
            this.__throwError(`Queue with ${id} does not exists.`);
        }
        return queue;
    }
    __syncQueue(id, sab) {
        for (const comm of this.__comms) {
            comm.__syncQueue(id, sab);
        }
    }
    __unSyncQueue(id) {
        for (const comm of this.__comms) {
            comm.__unSyqncQueue(id);
        }
    }
    syncData(dataType, data) {
        for (const comm of this.__comms) {
            comm.syncData(dataType, data);
        }
    }
    unSyncData(dataType, data) {
        for (const comm of this.__comms) {
            comm.unSyncData(dataType, data);
        }
    }
}


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Meta/Comm/Comm.types.js":
/*!************************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Meta/Comm/Comm.types.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Queue/QueueManager.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Queue/QueueManager.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueManager": () => (/* binding */ QueueManager)
/* harmony export */ });
/* harmony import */ var _tools_Queue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/Queue.js */ "../../DSLIBS/threadComm/dist/tools/Queue.js");

class QueueManager {
    id;
    onRun;
    _manager;
    getQueueKey;
    __queueData = {};
    constructor(id, onRun, _manager, getQueueKey = null) {
        this.id = id;
        this.onRun = onRun;
        this._manager = _manager;
        this.getQueueKey = getQueueKey;
    }
    __getQueueKey(data) {
        if (this.getQueueKey !== null) {
            return this.getQueueKey(data);
        }
        if (Array.isArray(data)) {
            return data.toString();
        }
        if (typeof data == "object") {
            return JSON.stringify(data);
        }
        return String(data);
    }
    __getQueueData(id) {
        const queue = this.__queueData[id];
        if (!queue) {
            throw new Error(`Queue with id: ${id} does not exists.`);
        }
        return this.__queueData[id];
    }
    addQueue(queueId) {
        const sab = new SharedArrayBuffer(4);
        if (this.__queueData[queueId])
            return false;
        this.__queueData[queueId] = {
            queue: new _tools_Queue_js__WEBPACK_IMPORTED_MODULE_0__.Queue(),
            map: {},
            stateSAB: sab,
            state: new Uint32Array(sab),
        };
        const syncId = this._getSyncId(queueId);
        this._manager.__syncQueue(syncId, sab);
        return true;
    }
    _getSyncId(queueId) {
        return `${this.id}-${queueId}`;
    }
    removeQueue(queueId) {
        if (!this.__queueData[queueId])
            return false;
        delete this.__queueData[queueId];
        const syncId = this._getSyncId(queueId);
        this._manager.__unSyncQueue(syncId);
        return true;
    }
    add(data, queueId = "main") {
        const queueData = this.__getQueueData(queueId);
        const queueKey = this.__getQueueKey(data);
        if (queueData.map[queueKey])
            return;
        queueData.map[queueKey] = true;
        queueData.queue.enqueue(data);
    }
    run(queueId = "main", filter) {
        const reQueue = new _tools_Queue_js__WEBPACK_IMPORTED_MODULE_0__.Queue();
        const newMap = {};
        const queueData = this.__getQueueData(queueId);
        const queue = queueData.queue;
        const state = queueData.state;
        const syncId = this._getSyncId(queueId);
        while (true) {
            const data = queue.dequeue();
            if (!data)
                break;
            if (filter) {
                const filterReturn = filter(data);
                if (filterReturn == 0)
                    continue;
                if (filterReturn == 1) {
                    newMap[this.__getQueueKey(data)] = true;
                    reQueue.enqueue(data);
                    continue;
                }
            }
            Atomics.add(state, 0, 1);
            this.onRun(data, syncId);
        }
        this.__queueData[queueId].map = {};
        if (filter) {
            this.__queueData[queueId].queue = queue;
            this.__queueData[queueId].map = newMap;
        }
    }
    runAndAwait(queueId = "main", filter) {
        this.run(queueId, filter);
        return this.awaitAll(queueId);
    }
    awaitAll(queueId = "main") {
        const queueData = this.__getQueueData(queueId);
        return new Promise((resolve, reject) => {
            const inte = setInterval(() => {
                if (Atomics.load(queueData.state, 0) == 0) {
                    clearInterval(inte);
                    resolve(true);
                }
            }, 1);
        });
    }
    onDone(queueId = "main", run) {
        const queueData = this.__getQueueData(queueId);
        const inte = setInterval(() => {
            if (Atomics.load(queueData.state, 0) == 0) {
                clearInterval(inte);
                run();
            }
        }, 1);
    }
    isDone(queueId = "main") {
        const queueData = this.__getQueueData(queueId);
        return Atomics.load(queueData.state, 0) == 0;
    }
}


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Queue/SyncedQueue.js":
/*!*********************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Queue/SyncedQueue.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncedQueue": () => (/* binding */ SyncedQueue)
/* harmony export */ });
class SyncedQueue {
    id;
    sab;
    states = new Uint32Array();
    constructor(id, sab) {
        this.id = id;
        this.sab = sab;
        this.states = new Uint32Array(sab);
    }
    addToCount(total = 1) {
        Atomics.add(this.states, 0, total);
    }
    subtractFromCount(total = 1) {
        Atomics.sub(this.states, 0, total);
    }
    getCount() {
        return Atomics.load(this.states, 0);
    }
    isDone() {
        return this.getCount() == 0;
    }
    onDone(onDone) {
        const inte = setInterval(() => {
            if (this.getCount() == 0) {
                clearInterval(inte);
                onDone();
            }
        }, 1);
    }
    wait() {
        return new Promise((resolve, reject) => {
            this.onDone(() => {
                resolve(true);
            });
        });
    }
}


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Tasks/PromiseTasks.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Tasks/PromiseTasks.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromiseTasks": () => (/* binding */ PromiseTasks)
/* harmony export */ });
const PromiseTasks = {
    _waiting: (new Map()),
    addPromiseTakss(tasksId, tasksRequestsId, onDone) {
        let requestsMap = this._waiting.get(tasksId);
        if (!requestsMap) {
            requestsMap = new Map();
            this._waiting.set(tasksId, requestsMap);
        }
        requestsMap.set(tasksRequestsId, onDone);
    },
    completePromiseTasks(tasksId, tasksRequestsId, data) {
        let requestsMap = this._waiting.get(tasksId);
        if (!requestsMap)
            return;
        const run = requestsMap.get(tasksRequestsId);
        if (!run)
            return;
        run(data);
    },
};


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/Tasks/Tasks.js":
/*!***************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/Tasks/Tasks.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    name;
    run;
    mode;
    constructor(name, run, mode) {
        this.name = name;
        this.run = run;
        this.mode = mode;
    }
}


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/ThreadComm.js":
/*!**************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/ThreadComm.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreadComm": () => (/* binding */ ThreadComm)
/* harmony export */ });
/* harmony import */ var _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants/Messages.js */ "../../DSLIBS/threadComm/dist/Constants/Messages.js");
/* harmony import */ var _Tasks_Tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks/Tasks.js */ "../../DSLIBS/threadComm/dist/Tasks/Tasks.js");
/* harmony import */ var _Manager_CommManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Manager/CommManager.js */ "../../DSLIBS/threadComm/dist/Manager/CommManager.js");
/* harmony import */ var _Comm_Comm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comm/Comm.js */ "../../DSLIBS/threadComm/dist/Comm/Comm.js");
/* harmony import */ var _Queue_SyncedQueue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Queue/SyncedQueue.js */ "../../DSLIBS/threadComm/dist/Queue/SyncedQueue.js");
/* harmony import */ var _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Data/DataSync.js */ "../../DSLIBS/threadComm/dist/Data/DataSync.js");
/* harmony import */ var _Tasks_PromiseTasks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tasks/PromiseTasks.js */ "../../DSLIBS/threadComm/dist/Tasks/PromiseTasks.js");
//constants

//classes






const ThreadComm = {
    threadNumber: 0,
    threadName: "unamed-threadcomm-thread",
    environment: "browser",
    _comms: {},
    _commManageras: {},
    _tasks: {},
    _queues: new Map(),
    _onDataSync: {},
    parent: new _Comm_Comm_js__WEBPACK_IMPORTED_MODULE_3__.CommBase(""),
    __internal: {},
    __initalized: false,
    __expectedPorts: {},
    async $INIT(threadName, threadParentName) {
        this.threadName = threadName;
        this.parent.name = threadParentName;
        const port = await this.getWorkerPort();
        this.parent.setPort(port);
        this.__initalized = true;
        this.addComm(this.parent);
    },
    getSyncedQueue(threadId, queueId) {
        if (!this._queues.has(threadId))
            return;
        return this._queues.get(threadId)?.get(queueId);
    },
    addComm(comm) {
        this._comms[comm.name] = comm;
    },
    createComm(name, mergeObject = {}) {
        const newCom = Object.assign(new _Comm_Comm_js__WEBPACK_IMPORTED_MODULE_3__.CommBase(name), mergeObject);
        this._comms[name] = newCom;
        return newCom;
    },
    createCommManager(data) {
        const newCommManager = new _Manager_CommManager_js__WEBPACK_IMPORTED_MODULE_2__.CommManager(data);
        this._commManageras[data.name] = newCommManager;
        return newCommManager;
    },
    getComm(id) {
        return this._comms[id];
    },
    getCommManager(id) {
        return this._commManageras[id];
    },
    __throwError(message) {
        throw new Error(`[ThreadComm] ${message}`);
    },
    async getWorkerPort() {
        if (this.environment == "browser") {
            return self;
        }
        if (this.environment == "node") {
            //@ts-ignore
            const { parentPort } = require("worker_threads");
            return parentPort;
        }
    },
    __handleInternalMessage(data, event) {
        //remove header
        const headerId = data.shift();
        //remove message
        const messageId = data.shift();
        this.__internal[headerId][messageId](data, event);
    },
    __isInternalMessage(data) {
        return this.__internal[data[0]] !== undefined;
    },
    __handleTasksDone(tasksId, mode, threadId, tid, tasksData) {
        if (mode == 1) {
            const comm = this.getComm(threadId);
            comm.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCMessageHeaders.internal, [
                _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.completeTasks,
                tasksId,
                tid,
                tasksData,
            ]);
        }
        if (mode == 2) {
            //complete queue
            if (tid && threadId) {
                const queue = this.getSyncedQueue(threadId, tid);
                if (queue) {
                    queue.subtractFromCount();
                }
            }
        }
    },
    async __handleTasksMessage(data) {
        //remove header
        data.shift();
        //remove tasks id
        const tasksId = data.shift();
        //remove thread id
        const threadId = data.shift();
        //remove queue id
        const mode = data.shift();
        //remove queue id
        const tid = data.shift();
        const takss = this._tasks[tasksId];
        if (takss.mode == "async") {
            const tasksData = await this._tasks[tasksId].run(data[0]);
            this.__handleTasksDone(tasksId, mode, threadId, tid, tasksData);
        }
        if (takss.mode == "deffered") {
            await this._tasks[tasksId].run(data[0], (tasksData) => {
                ThreadComm.__handleTasksDone(tasksId, mode, threadId, tid, tasksData);
            });
        }
    },
    __isTasks(data) {
        return (data[0] == _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCMessageHeaders.runTasks && this._tasks[data[1]] !== undefined);
    },
    async __handleTasksCheckMessage(data) {
        //remove header
        data.shift();
        //remove tasks id
        const tasksId = data.shift();
        //remove thread id
        const threadId = data.shift();
        //remove promise id
        const promiseId = data.shift();
        const thread = this.getComm(threadId);
        const takss = this._tasks[tasksId];
        if (takss && thread) {
            thread.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCMessageHeaders.internal, [
                _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.checkTasksResult,
                true,
                promiseId,
            ]);
        }
        if (!takss && thread) {
            thread.sendMessage(_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCMessageHeaders.internal, [
                _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.checkTasksResult,
                false,
                promiseId,
            ]);
        }
    },
    __isTasksCheck(data) {
        return data[0] == _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCMessageHeaders.checkTasks;
    },
    registerTasks(id, run, mode = "async") {
        const tasks = new _Tasks_Tasks_js__WEBPACK_IMPORTED_MODULE_1__.Task(id, run, mode);
        this._tasks[id] = tasks;
        return tasks;
    },
    async __hanldeDataSyncMessage(data) {
        //remove header
        data.shift();
        //remove queue id
        const action = data.shift();
        //remove tasks id
        const dataTypeId = data.shift();
        const dataSync = this._onDataSync[dataTypeId];
        //get the sync data
        const syncData = data.shift();
        if (action == _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCDataSyncMessages.SyncData) {
            dataSync.sync(syncData);
        }
        if (action == _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCDataSyncMessages.UnSyncData) {
            dataSync.unSync(syncData);
        }
    },
    __isDataSync(data) {
        return data[0] == _Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCMessageHeaders.dataSync;
    },
    onDataSync(dataType, onSync, onUnSync) {
        const sync = new _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_5__.DataSync();
        if (onSync) {
            sync.addOnSync(onSync);
        }
        if (onUnSync) {
            sync.addOnUnSync(onUnSync);
        }
        this._onDataSync[dataType] = sync;
        return sync;
    },
};
if (
//@ts-ignore
typeof process !== "undefined" &&
    typeof Worker === "undefined" &&
    typeof window === "undefined") {
    ThreadComm.environment = "node";
}
const internal = {};
ThreadComm.__internal[_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCMessageHeaders.internal] = internal;
internal[_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.connectPort] = (data, event) => {
    const threadName = data[0];
    const threadManager = data[1];
    let port;
    if (ThreadComm.environment == "browser") {
        port = event.ports[0];
    }
    else {
        port = data[2];
    }
    if (threadManager == "worker") {
        const comm = ThreadComm.getComm(threadName);
        comm.setPort(port);
    }
    if (threadManager != "worker") {
        const comm = ThreadComm.getCommManager(threadManager);
        comm.addPort(port);
    }
};
internal[_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.IsReady] = (data) => {
    const name = data[0];
    const comm = ThreadComm.getComm(name);
    if (!comm)
        return;
    comm.__ready = true;
};
internal[_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.nameThread] = (data) => {
    const name = data[0];
    const number = data[1];
    ThreadComm.threadName = name;
    ThreadComm.threadNumber = number;
};
internal[_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.syncQueue] = (data) => {
    const threadName = data[0];
    const queueId = data[1];
    const queueSAB = data[2];
    if (!ThreadComm._queues.has(threadName)) {
        ThreadComm._queues.set(threadName, new Map());
    }
    //@ts-ignore
    ThreadComm._queues
        .get(threadName)
        .set(queueId, new _Queue_SyncedQueue_js__WEBPACK_IMPORTED_MODULE_4__.SyncedQueue(queueId, queueSAB));
};
internal[_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.unSyncQueue] = (data) => {
    const threadName = data[0];
    const queueId = data[1];
    if (!ThreadComm._queues.has(threadName)) {
        return;
    }
    //@ts-ignore
    ThreadComm._queues.get(threadName).delete(queueId);
};
internal[_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.completeTasks] = (data) => {
    const tasksId = data[0];
    const requestsId = data[1];
    const tasksData = data[2];
    _Tasks_PromiseTasks_js__WEBPACK_IMPORTED_MODULE_6__.PromiseTasks.completePromiseTasks(tasksId, requestsId, tasksData);
};
internal[_Constants_Messages_js__WEBPACK_IMPORTED_MODULE_0__.TCInternalMessages.checkTasksResult] = (data) => {
    const result = data[0];
    const promiseId = data[1];
    _Tasks_PromiseTasks_js__WEBPACK_IMPORTED_MODULE_6__.PromiseTasks.completePromiseTasks("tasks-check", promiseId, result);
};


/***/ }),

/***/ "../../DSLIBS/threadComm/dist/index.js":
/*!*********************************************!*\
  !*** ../../DSLIBS/threadComm/dist/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommBase": () => (/* reexport safe */ _Comm_Comm_js__WEBPACK_IMPORTED_MODULE_1__.CommBase),
/* harmony export */   "CommManager": () => (/* reexport safe */ _Manager_CommManager_js__WEBPACK_IMPORTED_MODULE_3__.CommManager),
/* harmony export */   "DataSync": () => (/* reexport safe */ _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__.DataSync),
/* harmony export */   "Task": () => (/* reexport safe */ _Tasks_Tasks_js__WEBPACK_IMPORTED_MODULE_4__.Task),
/* harmony export */   "ThreadComm": () => (/* reexport safe */ _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__.ThreadComm)
/* harmony export */ });
/* harmony import */ var _ThreadComm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreadComm.js */ "../../DSLIBS/threadComm/dist/ThreadComm.js");
/* harmony import */ var _Comm_Comm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comm/Comm.js */ "../../DSLIBS/threadComm/dist/Comm/Comm.js");
/* harmony import */ var _Data_DataSync_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data/DataSync.js */ "../../DSLIBS/threadComm/dist/Data/DataSync.js");
/* harmony import */ var _Manager_CommManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Manager/CommManager.js */ "../../DSLIBS/threadComm/dist/Manager/CommManager.js");
/* harmony import */ var _Tasks_Tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tasks/Tasks.js */ "../../DSLIBS/threadComm/dist/Tasks/Tasks.js");
/* harmony import */ var _Meta_Comm_Comm_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Meta/Comm/Comm.types.js */ "../../DSLIBS/threadComm/dist/Meta/Comm/Comm.types.js");








/***/ }),

/***/ "../../DSLIBS/threadComm/dist/tools/Queue.js":
/*!***************************************************!*\
  !*** ../../DSLIBS/threadComm/dist/tools/Queue.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Queue": () => (/* binding */ Queue)
/* harmony export */ });
class QueueNode {
    data;
    next;
    constructor(data) {
        this.data = data;
    }
}
//test
class Queue {
    size = 0;
    first;
    last;
    enqueue(data) {
        const node = new QueueNode(data);
        if (this.size == 0) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    }
    dequeue() {
        if (this.size == 0)
            return null;
        if (!this.first)
            return null;
        let prevFirst = this.first;
        this.first = prevFirst.next;
        prevFirst.next = null;
        this.size--;
        return prevFirst.data;
    }
}


/***/ }),

/***/ "../../DSLIBS/voxelspaces/dist/Classes/VoxelSpace.js":
/*!***********************************************************!*\
  !*** ../../DSLIBS/voxelspaces/dist/Classes/VoxelSpace.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelSpace": () => (/* binding */ VoxelSpace)
/* harmony export */ });
class VSVec3 {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    copy() {
        return new VSVec3(this.x, this.y, this.z);
    }
    copyTo(vec3) {
        vec3.x = this.x;
        vec3.y = this.y;
        vec3.z = this.z;
    }
    toString() {
        return `${this.x}_${this.y}_${this.z}`;
    }
    multiply(vec3) {
        this.x *= vec3.x;
        this.y *= vec3.y;
        this.z *= vec3.z;
        return this;
    }
}
//Objects
class VoxelSpace {
    data;
    static simpleCubeHash(space) {
        space._position.x =
            (space._position.x >> space._boundsPower2.x) << space._boundsPower2.x;
        space._position.y =
            (space._position.y >> space._boundsPower2.y) << space._boundsPower2.y;
        space._position.z =
            (space._position.z >> space._boundsPower2.z) << space._boundsPower2.z;
        return space._position;
    }
    static getPositionFromIndex(position, bounds, index) {
        position.x = index % bounds.x >> 0;
        position.y = (index / bounds.x) % bounds.y >> 0;
        position.z = (index / (bounds.x * bounds.y)) >> 0;
        return position;
    }
    static getIndex(position, bounds) {
        return (position.x + position.y * bounds.x + position.z * bounds.z * bounds.y);
    }
    static WholeVec3 = new VSVec3(1, 1, 1);
    static spatialHash(space, parentSpace, divisor = VoxelSpace.WholeVec3) {
        const parentPosition = parentSpace.getPositionXYZ(space._position.x, space._position.y, space._position.z);
        space._hashedPosition.x =
            Math.abs(space._position.x - parentPosition.x) / divisor.x;
        space._hashedPosition.y =
            Math.abs(space._position.y - parentPosition.y) / divisor.y;
        space._hashedPosition.z =
            Math.abs(space._position.z - parentPosition.z) / divisor.z;
        return space._hashedPosition;
    }
    static mapLocationToVec3(location, vector) {
        location[1] = vector.x;
        location[2] = vector.y;
        location[3] = vector.z;
    }
    _location = ["main", 0, 0, 0];
    _position = new VSVec3(0, 0, 0);
    _hashedPosition = new VSVec3(0, 0, 0);
    _bounds = new VSVec3(0, 0, 0);
    _boundsPower2 = new VSVec3(0, 0, 0);
    _boundsSet = false;
    constructor(data) {
        this.data = data;
    }
    getVolume() {
        return this._bounds.x * this._bounds.y * this._bounds.z;
    }
    getArea() {
        return this._bounds.x * this._bounds.z;
    }
    setXYZ(x, y, z) {
        this._position.x = x;
        this._position.y = y;
        this._position.z = z;
        this.getPosition();
        VoxelSpace.mapLocationToVec3(this._location, this._position);
        return this;
    }
    setXZ(x, z) {
        this._position.x = x;
        this._position.z = z;
        this.getPosition();
        VoxelSpace.mapLocationToVec3(this._location, this._position);
        return this;
    }
    getLocation() {
        this.data.getPosition(this);
        VoxelSpace.mapLocationToVec3(this._location, this._position);
        return this._location;
    }
    getLocationXYZ(x, y, z) {
        this.setXYZ(x, y, z);
        VoxelSpace.mapLocationToVec3(this._location, this._position);
        return this._location;
    }
    setLocation(location) {
        this.setXYZ(location[1], location[2], location[3]);
        return this;
    }
    updateLoaction(location) {
        this.setXYZ(location[1], location[2], location[3]);
        location[1] = this._location[1];
        location[2] = this._location[2];
        location[3] = this._location[3];
        return this;
    }
    setCubeBounds(bounds) {
        if (this._boundsSet)
            return;
        this._boundsPower2.x = bounds.x;
        this._boundsPower2.y = bounds.y;
        this._boundsPower2.z = bounds.z;
        this._bounds.x = 2 ** this._boundsPower2.x;
        this._bounds.y = 2 ** this._boundsPower2.y;
        this._bounds.z = 2 ** this._boundsPower2.z;
        this._boundsSet = true;
        return this;
    }
    setBounds(bounds) {
        if (this._boundsSet)
            return;
        this._bounds.x = bounds.x;
        this._bounds.y = bounds.y;
        this._bounds.z = bounds.z;
        this._boundsSet = true;
        return this;
    }
    getPosition() {
        return this.data.getPosition(this);
    }
    getPositionXYZ(x, y, z) {
        return this.setXYZ(x, y, z).data.getPosition(this);
    }
    getPositionLocation(location) {
        return this.setLocation(location).data.getPosition(this);
    }
    getIndex() {
        return this.data.getIndex(this);
    }
    getIndexXYZ(x, y, z) {
        return this.setXYZ(x, y, z).data.getIndex(this);
    }
    getIndexLocation(location) {
        return this.setLocation(location).data.getIndex(this);
    }
    getPositionFromIndex(index) {
        return this.data.getPostionFromIndex(this, index);
    }
    getKey() {
        return `${this._position.x}_${this._position.y}_${this._position.z}`;
    }
    getKeyXYZ(x, y, z) {
        return this.setXYZ(x, y, z).getKey();
    }
    getKeyLocation(location) {
        return this.setLocation(location).getKey();
    }
}


/***/ }),

/***/ "../../DSLIBS/voxelspaces/dist/Types/VoxelSpaces.types.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/voxelspaces/dist/Types/VoxelSpaces.types.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../DSLIBS/voxelspaces/dist/VoxelSpaces.js":
/*!****************************************************!*\
  !*** ../../DSLIBS/voxelspaces/dist/VoxelSpaces.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelSpaces": () => (/* binding */ VoxelSpaces)
/* harmony export */ });
/* harmony import */ var _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/VoxelSpace.js */ "../../DSLIBS/voxelspaces/dist/Classes/VoxelSpace.js");

const merge = (target, newObject) => {
    return Object.assign(target, newObject);
};
const VoxelSpaces = {
    zeroPointSpace: new _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace({
        getPosition(space) {
            return space._position;
        },
        getIndex() {
            return 0;
        },
        getPostionFromIndex(space, index) {
            return space._position;
        },
    }),
    getVoxelSpaces() {
        const regionSpace = merge(new _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace({
            getPosition(space) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.simpleCubeHash(space);
            },
            getIndex(space) {
                return -Infinity;
            },
            getPostionFromIndex(space, index) {
                return space._position;
            },
        }), {
            chunkBounds: { x: 0, y: 0, z: 0 },
            columnBounds: { x: 0, y: 0, z: 0 },
            getChunkVolume() {
                return this.chunkBounds.x * this.chunkBounds.y * this.chunkBounds.z;
            },
            getColumnVolume() {
                return (this.columnBounds.x * this.columnBounds.y * this.columnBounds.z);
            },
        });
        const columnSpace = new _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace({
            getPosition(space) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.simpleCubeHash(space);
            },
            getIndex(space) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.getIndex(_Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.spatialHash(space, regionSpace, space._bounds), regionSpace.columnBounds);
            },
            getPostionFromIndex(space, index) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.getPositionFromIndex(space._position, regionSpace.columnBounds, index).multiply(space._bounds);
            },
        });
        const chunkSpace = merge(new _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace({
            getPosition(space) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.simpleCubeHash(space);
            },
            getIndex(space) {
                const ry = (space._position.y >> regionSpace._boundsPower2.y) <<
                    regionSpace._boundsPower2.y;
                const cy = (space._position.y >> space._boundsPower2.y) <<
                    space._boundsPower2.y;
                return (cy - ry) / space._bounds.y;
            },
            getPostionFromIndex(space, index) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.getPositionFromIndex(space._position, regionSpace.chunkBounds, index).multiply(space._bounds);
            },
        }), {
            _regionPosition: { x: 0, y: 0, z: 0 },
            getRegionPositonx() {
                chunkSpace.getPosition();
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.spatialHash(chunkSpace, regionSpace, chunkSpace._bounds);
            },
            getRegionPositonxXYZ(x, y, z) {
                return chunkSpace.setXYZ(x, y, z).getRegionPositonx();
            },
            getRegionIndex() {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.getIndex(chunkSpace._hashedPosition, regionSpace.chunkBounds);
            },
            getRegionIndexXYZ(x, y, z) {
                chunkSpace.getRegionPositonxXYZ(x, y, z);
                return chunkSpace.getRegionIndex();
            },
        });
        const voxelSpace = new _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace({
            getPosition(space) {
                _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.spatialHash(space, chunkSpace);
                space._position.x = space._hashedPosition.x;
                space._position.y = space._hashedPosition.y;
                space._position.z = space._hashedPosition.z;
                return space._position;
            },
            getIndex(space) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.getIndex(space._hashedPosition, space._bounds);
            },
            getPostionFromIndex(space, index) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.getPositionFromIndex(space._position, chunkSpace._bounds, index);
            },
        });
        return {
            region: regionSpace,
            column: columnSpace,
            chunk: chunkSpace,
            voxel: voxelSpace,
            setDimensions(data) {
                regionSpace.setCubeBounds(data.regions);
                columnSpace.setCubeBounds(data.columns);
                chunkSpace.setCubeBounds(data.chunks);
                voxelSpace.setCubeBounds(data.chunks);
                regionSpace.chunkBounds.x =
                    regionSpace._bounds.x / chunkSpace._bounds.x;
                regionSpace.chunkBounds.y =
                    regionSpace._bounds.y / chunkSpace._bounds.y;
                regionSpace.chunkBounds.z =
                    regionSpace._bounds.z / chunkSpace._bounds.z;
                regionSpace.columnBounds.x =
                    regionSpace._bounds.x / columnSpace._bounds.x;
                regionSpace.columnBounds.y =
                    regionSpace._bounds.y / columnSpace._bounds.y;
                regionSpace.columnBounds.z =
                    regionSpace._bounds.z / columnSpace._bounds.z;
            },
        };
    },
    getZeroPointVoxelSpace(dimensions) {
        const space = new _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace({
            getPosition(space) {
                _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.spatialHash(space, VoxelSpaces.zeroPointSpace);
                space._position.x = space._hashedPosition.x;
                space._position.y = space._hashedPosition.y;
                space._position.z = space._hashedPosition.z;
                return space._position;
            },
            getIndex(space) {
                return _Classes_VoxelSpace_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpace.getIndex(space._hashedPosition, space._bounds);
            },
            getPostionFromIndex(space, index) {
                return space._position;
            },
        });
        space.setBounds(dimensions);
        return space;
    },
};


/***/ }),

/***/ "../../DSLIBS/voxelspaces/dist/index.js":
/*!**********************************************!*\
  !*** ../../DSLIBS/voxelspaces/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelSpaces": () => (/* reexport safe */ _VoxelSpaces_js__WEBPACK_IMPORTED_MODULE_0__.VoxelSpaces)
/* harmony export */ });
/* harmony import */ var _VoxelSpaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoxelSpaces.js */ "../../DSLIBS/voxelspaces/dist/VoxelSpaces.js");
/* harmony import */ var _Types_VoxelSpaces_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types/VoxelSpaces.types.js */ "../../DSLIBS/voxelspaces/dist/Types/VoxelSpaces.types.js");




/***/ })

}]);
//# sourceMappingURL=0.DVE.js.map