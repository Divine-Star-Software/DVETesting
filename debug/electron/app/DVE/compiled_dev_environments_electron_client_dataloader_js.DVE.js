/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compiled/dev/core/data/ENV/DVEENV.js":
/*!**********************************************!*\
  !*** ./compiled/dev/core/data/ENV/DVEENV.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEDENV": () => (/* binding */ DVEDENV)
/* harmony export */ });
const DVEDENV = {
    data: {},
    async $INIT(url = ".DVE_ENV") {
        const envDataResponse = await fetch(url);
        const envData = await envDataResponse.json();
        this.data = envData;
    },
};


/***/ }),

/***/ "./compiled/dev/databases/App/AppDataBase.js":
/*!***************************************************!*\
  !*** ./compiled/dev/databases/App/AppDataBase.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDataBase": () => (/* binding */ AppDataBase)
/* harmony export */ });
/* harmony import */ var dved_Broswer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dved/Broswer */ "../../DSLIBS/divineVoxelEngineData/dist/Broswer/index.js");
/* harmony import */ var zeneithdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zeneithdb */ "../../DSLIBS/zeneithDB/dist/index.js");
/* harmony import */ var _core_data_ENV_DVEENV__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/ENV/DVEENV */ "./compiled/dev/core/data/ENV/DVEENV.js");



const AppDataBase = {
    db: {},
    async $INIT() {
        await zeneithdb__WEBPACK_IMPORTED_MODULE_1__.ZeneithDB.$INIT();
        const dbName = "ECD_APP";
        let db;
        const existanceCheck = await zeneithdb__WEBPACK_IMPORTED_MODULE_1__.ZeneithDB.databaseExists(dbName);
        if (!existanceCheck) {
            db = await zeneithdb__WEBPACK_IMPORTED_MODULE_1__.ZeneithDB.createDatabase({
                databaseName: dbName,
                collections: [
                    {
                        name: "meta-data",
                        schema: [],
                    },
                ],
            });
            this.db = db;
        }
        else {
            db = await zeneithdb__WEBPACK_IMPORTED_MODULE_1__.ZeneithDB.getDatabase(dbName);
            this.db = db;
        }
        await this.db.open();
    },
    async inSaveRecord(id) {
        const saveRecord = await this.db.getData("meta-data", "save-record");
        if (!saveRecord) {
            this.db.setData("meta-data", "save-record", {});
            return false;
        }
        const save = saveRecord[id];
        return save !== undefined;
    },
    async addToSaveRecord(id) {
        let saveRecord = await this.db.getData("meta-data", "save-record");
        if (!saveRecord) {
            saveRecord = {};
        }
        saveRecord[id] = _core_data_ENV_DVEENV__WEBPACK_IMPORTED_MODULE_2__.DVEDENV.data.version;
        this.db.setData("meta-data", "save-record", saveRecord);
    },
    async removeFromSaveRecord(id) {
        let saveRecord = await this.db.getData("meta-data", "save-record");
        if (!saveRecord)
            return false;
        delete saveRecord[id];
        this.db.setData("meta-data", "save-record", saveRecord);
    },
    async getWorldSave(id) {
        const worldDB = await dved_Broswer__WEBPACK_IMPORTED_MODULE_0__.DVEDBrowser.getWorldDataBase(id);
        const inWorldSave = await this.inSaveRecord(id);
        if (!inWorldSave) {
            await this.addToSaveRecord(id);
            worldDB.database.setData("world-meta", "version", _core_data_ENV_DVEENV__WEBPACK_IMPORTED_MODULE_2__.DVEDENV.data.version);
        }
    },
    async removeWorldSave(id) {
        await zeneithdb__WEBPACK_IMPORTED_MODULE_1__.ZeneithDB.deleteDatabase(id);
        await this.removeFromSaveRecord(id);
    },
};


/***/ }),

/***/ "./compiled/dev/databases/World/DVEDDataBase.js":
/*!******************************************************!*\
  !*** ./compiled/dev/databases/World/DVEDDataBase.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEDDataBase": () => (/* binding */ DVEDDataBase)
/* harmony export */ });
/* harmony import */ var crystal_compressor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crystal-compressor */ "./node_modules/crystal-compressor/index.js");
/* harmony import */ var dved_Broswer___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dved/Broswer/ */ "../../DSLIBS/divineVoxelEngineData/dist/Broswer/index.js");
/* harmony import */ var divine_voxel_engine_Data_World_WorldSpaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! divine-voxel-engine/Data/World/WorldSpaces */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");



const DVEDDataBase = {
    async setPath(id) {
        return true;
    },
    async columnExists(location) {
        return (await this.columnTimestamp(location)) > 0;
    },
    async columnTimestamp(location) {
        const stamp = await dved_Broswer___WEBPACK_IMPORTED_MODULE_1__.WorldDataBase.columnTimestamp.get(divine_voxel_engine_Data_World_WorldSpaces__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.column.getKeyLocation(location), "world-data");
        if (!stamp)
            return 0;
        return stamp;
    },
    async loadRegionHeader(location) {
        const buffer = await dved_Broswer___WEBPACK_IMPORTED_MODULE_1__.WorldDataBase.regionHeader.get(divine_voxel_engine_Data_World_WorldSpaces__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.region.getKeyLocation(location), "world-data");
        if (!buffer)
            return new ArrayBuffer(0);
        return buffer;
    },
    async loadColumn(location) {
        const buffer = await dved_Broswer___WEBPACK_IMPORTED_MODULE_1__.WorldDataBase.column.get(divine_voxel_engine_Data_World_WorldSpaces__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.column.getKeyLocation(location), "world-data");
        if (!buffer)
            return new ArrayBuffer(0);
        const d = await (await crystal_compressor__WEBPACK_IMPORTED_MODULE_0__.CrystalCompressor.decompressArray(buffer, "Uint8")).buffer;
        return d;
    },
    async saveColumn(location, buffer) {
        const compressed = await crystal_compressor__WEBPACK_IMPORTED_MODULE_0__.CrystalCompressor.compressArray(new Uint8Array(buffer));
        await dved_Broswer___WEBPACK_IMPORTED_MODULE_1__.WorldDataBase.column.set(divine_voxel_engine_Data_World_WorldSpaces__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.column.getKeyLocation(location), "world-data", compressed.buffer);
        await dved_Broswer___WEBPACK_IMPORTED_MODULE_1__.WorldDataBase.columnTimestamp.set(divine_voxel_engine_Data_World_WorldSpaces__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.column.getKeyLocation(location), "world-data", Date.now());
        return true;
    },
    async loadRegion(location) {
        const uncompressed = await crystal_compressor__WEBPACK_IMPORTED_MODULE_0__.CrystalCompressor.decompressArray(new ArrayBuffer(0), "Uint8");
        return [uncompressed.buffer];
    },
    async saveRegion(buffer) {
        const proms = [];
        for (const column of buffer) {
            proms.push(this.saveColumn(column[0], column[1]));
        }
        await Promise.all(proms);
        return true;
    },
};


/***/ }),

/***/ "./compiled/dev/environments/electron/client/dataloader.js":
/*!*****************************************************************!*\
  !*** ./compiled/dev/environments/electron/client/dataloader.js ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var divine_voxel_engine_DataLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/DataLoader */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/index.js");
/* harmony import */ var _io_client_DataHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../io/client/DataHandler.js */ "./compiled/dev/io/client/DataHandler.js");
/* harmony import */ var _core_data_ENV_DVEENV__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/ENV/DVEENV */ "./compiled/dev/core/data/ENV/DVEENV.js");
/* harmony import */ var _io_client_Tasks_RegisterIOTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../io/client/Tasks/RegisterIOTasks */ "./compiled/dev/io/client/Tasks/RegisterIOTasks.js");
/* harmony import */ var _databases_App_AppDataBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../databases/App/AppDataBase */ "./compiled/dev/databases/App/AppDataBase.js");





await divine_voxel_engine_DataLoader__WEBPACK_IMPORTED_MODULE_0__.DVEDL.$INIT(_io_client_DataHandler_js__WEBPACK_IMPORTED_MODULE_1__.DVEDDataHandler);
await _core_data_ENV_DVEENV__WEBPACK_IMPORTED_MODULE_2__.DVEDENV.$INIT("../.DVE_ENV");
await _databases_App_AppDataBase__WEBPACK_IMPORTED_MODULE_4__.AppDataBase.$INIT();
(0,_io_client_Tasks_RegisterIOTasks__WEBPACK_IMPORTED_MODULE_3__.RegisterIOTasks)(divine_voxel_engine_DataLoader__WEBPACK_IMPORTED_MODULE_0__.DVEDL);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./compiled/dev/io/client/DataHandler.js":
/*!***********************************************!*\
  !*** ./compiled/dev/io/client/DataHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEDDataHandler": () => (/* binding */ DVEDDataHandler)
/* harmony export */ });
/* harmony import */ var _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../databases/World/DVEDDataBase.js */ "./compiled/dev/databases/World/DVEDDataBase.js");
/* harmony import */ var _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Server/DVEDServer.js */ "./compiled/dev/io/client/Server/DVEDServer.js");


let mode = "indexdb";
const DVEDDataHandler = {
    async getRegion(location) {
        if (mode == "server")
            return await _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__.DVEDServer.loadRegion(location);
        return await _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__.DVEDDataBase.loadRegion(location);
    },
    async saveRegion(buffers) {
        if (mode == "server")
            return await _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__.DVEDServer.saveRegion(buffers);
        return await _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__.DVEDDataBase.saveRegion(buffers);
    },
    async getRegionHeader(location) {
        if (mode == "server")
            return await _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__.DVEDServer.loadRegionHeader(location);
        return await _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__.DVEDDataBase.loadRegionHeader(location);
    },
    async getColumn(location) {
        if (mode == "server")
            return await _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__.DVEDServer.loadColumn(location);
        return await _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__.DVEDDataBase.loadColumn(location);
    },
    async saveColumn(location, buffer) {
        if (mode == "server")
            return await _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__.DVEDServer.saveColumn(location, buffer);
        return await _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__.DVEDDataBase.saveColumn(location, buffer);
    },
    async setPath(id) {
        if (mode == "server")
            return _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__.DVEDServer.setPath(id);
        return _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__.DVEDDataBase.setPath(id);
    },
    async columnExists(location) {
        if (mode == "server")
            return await _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__.DVEDServer.columnExists(location);
        return await _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__.DVEDDataBase.columnExists(location);
    },
    async columnTimestamp(location) {
        if (mode == "server")
            return await _Server_DVEDServer_js__WEBPACK_IMPORTED_MODULE_1__.DVEDServer.columnTimestamp(location);
        return await _databases_World_DVEDDataBase_js__WEBPACK_IMPORTED_MODULE_0__.DVEDDataBase.columnTimestamp(location);
    },
};


/***/ }),

/***/ "./compiled/dev/io/client/Server/DVEDServer.js":
/*!*****************************************************!*\
  !*** ./compiled/dev/io/client/Server/DVEDServer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEDServer": () => (/* binding */ DVEDServer)
/* harmony export */ });
/* harmony import */ var crystal_compressor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crystal-compressor */ "./node_modules/crystal-compressor/index.js");

const DVEDServer = {
    url: `http://127.0.0.1:3000`,
    async _compressToString(buffer) {
        let dataString = "";
        const compressed = await crystal_compressor__WEBPACK_IMPORTED_MODULE_0__.CrystalCompressor.compressArray(new Uint8Array(buffer));
        let length = compressed.length;
        for (let i = 0; i < length; i++) {
            dataString += String.fromCharCode(compressed[i]);
        }
        return dataString;
    },
    async sendDVEDMessage(dveMessage, buffer) {
        let dataString = "";
        if (buffer) {
            if (Array.isArray(buffer)) {
            }
            else {
                dataString = await this._compressToString(buffer);
            }
        }
        const message = `|${JSON.stringify(dveMessage)}|${dataString}`;
        return fetch(this.url, {
            method: "POST",
            body: message,
            headers: { "Content-Type": "application/dved" },
        });
    },
    async setPath(id) {
        const response = await this.sendDVEDMessage({
            type: "set-path",
            id: id,
        });
        const error = (await this._determineError(response)) != Infinity;
        if (error) {
            console.warn(`Problem setting path with id ${id}`);
            return false;
        }
        return true;
    },
    async _determineError(response) {
        let error = Infinity;
        if (!response)
            error = -1;
        const responseBuffer = await response.arrayBuffer();
        if (!responseBuffer)
            error = -1;
        const responseCode = new Uint8Array(responseBuffer)[0];
        if (responseCode !== 1)
            error = responseCode;
        if (error !== Infinity)
            return error;
        return Infinity;
    },
    async columnExists(location) {
        const response = await this.sendDVEDMessage({
            type: `column-exists`,
            location: location,
        });
        const buffer = await response.arrayBuffer();
        if (!buffer)
            return false;
        const data = new Uint8Array(buffer);
        return data[0] == 1;
    },
    async columnTimestamp(location) {
        const response = await this.sendDVEDMessage({
            type: `column-timestamp`,
            location: location,
        });
        const buffer = await response.arrayBuffer();
        if (!buffer)
            return 0;
        const data = new Uint32Array(buffer);
        return data[0];
    },
    async loadColumn(location) {
        try {
            const response = await this.sendDVEDMessage({
                type: `load-column`,
                location: location,
            });
            const buffer = await response.arrayBuffer();
            if (buffer.byteLength == 0) {
                throw new Error(`Column at ${location.toString()} could not be loaded`);
            }
            const uncompressed = await crystal_compressor__WEBPACK_IMPORTED_MODULE_0__.CrystalCompressor.core.decompressArrayBuffer(buffer);
            return uncompressed.buffer;
        }
        catch (error) {
            console.log(error);
            return new Uint8Array(0).buffer;
        }
    },
    async loadRegionHeader(location) {
        try {
            const response = await this.sendDVEDMessage({
                type: `load-region-header`,
                location: location,
            });
            const buffer = await response.arrayBuffer();
            if (buffer.byteLength == 1) {
                throw new Error(`Region header at ${location.toString()} could not be loaded`);
            }
            return buffer;
        }
        catch (error) {
            console.log(error);
            return new Uint8Array(0).buffer;
        }
    },
    async saveColumn(location, buffer) {
        const response = await this.sendDVEDMessage({
            type: `save-column`,
            location: location,
        }, buffer);
        const error = (await this._determineError(response)) != Infinity;
        if (error) {
            console.warn(`Problem saving data at ${location.toString()} code : ${error}`);
            return false;
        }
        return true;
    },
    async loadRegion(location) {
        const response = await this.sendDVEDMessage({
            type: `load-column`,
            location: location,
        });
        const buffer = await response.arrayBuffer();
        const uncompressed = await crystal_compressor__WEBPACK_IMPORTED_MODULE_0__.CrystalCompressor.decompressArray(buffer, "Uint8");
        return [uncompressed.buffer];
    },
    async saveRegion(buffer) {
        const proms = [];
        for (const column of buffer) {
            proms.push(this.saveColumn(column[0], column[1]));
        }
        await Promise.all(proms);
        return true;
    },
};


/***/ }),

/***/ "./compiled/dev/io/client/Tasks/RegisterIOTasks.js":
/*!*********************************************************!*\
  !*** ./compiled/dev/io/client/Tasks/RegisterIOTasks.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterIOTasks": () => (/* binding */ RegisterIOTasks)
/* harmony export */ });
/* harmony import */ var _databases_App_AppDataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../databases/App/AppDataBase */ "./compiled/dev/databases/App/AppDataBase.js");

function RegisterIOTasks(DVEDL) {
    console.log("register tasks like it should");
    DVEDL.TC.registerTasks("set-save", async (id, onDone) => {
        console.log("set save again", id);
        await _databases_App_AppDataBase__WEBPACK_IMPORTED_MODULE_0__.AppDataBase.getWorldSave(id);
        if (onDone)
            onDone();
    }, "deffered");
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngineData/dist/Broswer/DataBase/WorldDataBase.js":
/*!*********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngineData/dist/Broswer/DataBase/WorldDataBase.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldDataBase": () => (/* binding */ WorldDataBase)
/* harmony export */ });
const WorldDataBase = {
    database: {},
    dimension: "",
    typeStores: {},
    async setDimension(id) {
        if (this.dimension != id) {
            const worldDataId = `${id}-world-data`;
            const richDataId = `${id}-rich-data`;
            const entitiesId = `${id}-entities`;
            const dboId = `${id}-dbo`;
            await this.database.addCollection([
                {
                    name: worldDataId,
                    schema: [],
                },
                {
                    name: richDataId,
                    schema: [],
                },
                {
                    name: entitiesId,
                    schema: [],
                },
                {
                    name: dboId,
                    schema: [],
                },
            ]);
            this.typeStores["world-data"] = await this.database.getCollection(worldDataId);
            this.typeStores["rich-data"] = await this.database.getCollection(richDataId);
            this.typeStores["entities"] = await this.database.getCollection(entitiesId);
            this.typeStores["dbo"] = await this.database.getCollection(dboId);
        }
        this.dimension = id;
    },
    regionHeader: {
        async set(key, type, data) {
            await WorldDataBase.typeStores[type].set(this._getKey(key, type), new Blob([data]));
        },
        async get(key, type) {
            const blob = (await WorldDataBase.typeStores[type].get(this._getKey(key, type)));
            if (!blob)
                return false;
            return await blob.arrayBuffer();
        },
        _getKey(key, type) {
            return `${key}_${type}_region_header`;
        },
    },
    column: {
        async set(key, type, data) {
            await WorldDataBase.typeStores[type].set(this._getKey(key, type), new Blob([data]));
        },
        async get(key, type) {
            const blob = (await WorldDataBase.typeStores[type].get(this._getKey(key, type)));
            if (!blob)
                return false;
            return await blob.arrayBuffer();
        },
        _getKey(key, type) {
            return `${key}_${type}_column`;
        },
    },
    columnTimestamp: {
        async set(key, type, timeStamp) {
            await WorldDataBase.typeStores[type].set(this._getKey(key, type), timeStamp);
        },
        async get(key, type) {
            const timeStamp = (await WorldDataBase.typeStores[type].get(this._getKey(key, type)));
            if (!timeStamp)
                return false;
            return Number(timeStamp);
        },
        _getKey(key, type) {
            return `${key}_${type}_column_timestamp`;
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngineData/dist/Broswer/DivineVoxelEngineDataClient.js":
/*!**************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngineData/dist/Broswer/DivineVoxelEngineDataClient.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEDBrowser": () => (/* binding */ DVEDBrowser)
/* harmony export */ });
/* harmony import */ var zeneithdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zeneithdb */ "../../DSLIBS/zeneithDB/dist/index.js");
/* harmony import */ var _DataBase_WorldDataBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataBase/WorldDataBase.js */ "../../DSLIBS/divineVoxelEngineData/dist/Broswer/DataBase/WorldDataBase.js");


const DVEDBrowser = {
    async $INIT() {
        await zeneithdb__WEBPACK_IMPORTED_MODULE_0__.ZeneithDB.$INIT();
    },
    async getWorldDataBase(dbName, dimension = "main") {
        let db;
        const existanceCheck = await zeneithdb__WEBPACK_IMPORTED_MODULE_0__.ZeneithDB.databaseExists(dbName);
        if (!existanceCheck) {
            db = await zeneithdb__WEBPACK_IMPORTED_MODULE_0__.ZeneithDB.createDatabase({
                databaseName: dbName,
                collections: [
                    {
                        name: "world-meta",
                        schema: [],
                    },
                ],
            });
            _DataBase_WorldDataBase_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataBase.database = db;
        }
        else {
            db = await zeneithdb__WEBPACK_IMPORTED_MODULE_0__.ZeneithDB.getDatabase(dbName);
            _DataBase_WorldDataBase_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataBase.database = db;
        }
        await _DataBase_WorldDataBase_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataBase.setDimension(dimension);
        return _DataBase_WorldDataBase_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataBase;
    },
    async deleteWorldDataBase(dbName) {
        await zeneithdb__WEBPACK_IMPORTED_MODULE_0__.ZeneithDB.deleteDatabase(dbName);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngineData/dist/Broswer/index.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngineData/dist/Broswer/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEDBrowser": () => (/* reexport safe */ _DivineVoxelEngineDataClient_js__WEBPACK_IMPORTED_MODULE_0__.DVEDBrowser),
/* harmony export */   "WorldDataBase": () => (/* reexport safe */ _DataBase_WorldDataBase_js__WEBPACK_IMPORTED_MODULE_1__.WorldDataBase)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineDataClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DivineVoxelEngineDataClient.js */ "../../DSLIBS/divineVoxelEngineData/dist/Broswer/DivineVoxelEngineDataClient.js");
/* harmony import */ var _DataBase_WorldDataBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataBase/WorldDataBase.js */ "../../DSLIBS/divineVoxelEngineData/dist/Broswer/DataBase/WorldDataBase.js");




/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/DataHandler/DataHandlerWrapper.js":
/*!****************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/DataLoader/DataHandler/DataHandlerWrapper.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataHanlderWrapper": () => (/* binding */ DataHanlderWrapper)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DivineVoxelEngineDataLoader.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/DivineVoxelEngineDataLoader.js");
/* harmony import */ var _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ColumnDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js");
/* harmony import */ var _Serializers_WorldDataSerializer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Serializers/WorldDataSerializer.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Serializers/WorldDataSerializer.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
//objects




const columnDatatool = new _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_1__.ColumnDataTool();
const DataHanlderWrapper = {
    handler: {},
    $INIT(handler) {
        this.handler = handler;
    },
    async loadRegionHeader(location) {
        try {
            const headerBuffer = await this.handler.getRegionHeader(location);
            if (!headerBuffer)
                return false;
            const sab = _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_3__.Util.convertBufferToSAB(headerBuffer);
            _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.worldComm.runTasks("load-region-header", [
                location,
                sab,
            ]);
            return true;
        }
        catch (error) {
            console.error(`Problem getting region header at ${location.toString()}`);
            console.error(error);
            return false;
        }
    },
    async saveColumn(location) {
        if (columnDatatool.setLocation(location).loadIn()) {
            try {
                columnDatatool.markAsStored();
                const column = _Serializers_WorldDataSerializer_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataSerialize.serializeColumn(location);
                if (!column)
                    return false;
                const success = await this.handler.saveColumn(location, column);
                if (!success) {
                    columnDatatool.markAsNotStored();
                    throw new Error(`Could not store column at ${location.toString()}`);
                }
            }
            catch (error) {
                console.error(`Problem storing column at ${location.toString()}`);
                console.error(error);
            }
        }
    },
    async loadColumn(location) {
        try {
            const column = await this.handler.getColumn(location);
            const data = _Serializers_WorldDataSerializer_js__WEBPACK_IMPORTED_MODULE_2__.WorldDataSerialize.deSerializeColumn(column);
            columnDatatool.setBuffer(data.column);
            _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.worldComm.runTasks("load-column", [data.column]);
            for (const chunk of data.chunks) {
                _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.worldComm.runTasks("load-chunk", [chunk]);
            }
            return true;
        }
        catch (error) {
            console.error(`Problem loading column at ${location.toString()}`);
            console.error(error);
            return false;
        }
    },
    async setPath(id) {
        try {
            await this.handler.setPath(id);
            return true;
        }
        catch (error) {
            console.error(`Problem setting path to ${id}`);
            console.error(error);
            return false;
        }
    },
    async columnExists(location) {
        try {
            return await this.handler.columnExists(location);
        }
        catch (error) {
            console.error(`Problem checking if column exists at ${location.toString()}`);
            console.error(error);
            return false;
        }
    },
    async columnTimestamp(location) {
        try {
            return await this.handler.columnTimestamp(location);
        }
        catch (error) {
            console.error(`Problem getting column timestamp at ${location.toString()}`);
            console.error(error);
            return 0;
        }
    },
    async saveRegion(location) {
        /** @TO-DO*/
        return true;
    },
    async loadRegion(location) {
        /** @TO-DO*/
        return true;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/DivineVoxelEngineDataLoader.js":
/*!*************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/DataLoader/DivineVoxelEngineDataLoader.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEDL": () => (/* binding */ DVEDL)
/* harmony export */ });
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Data_DataSyncNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/DataSyncNode.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataSyncNode.js");
/* harmony import */ var _Data_DataManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/DataManager.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataManager.js");
/* harmony import */ var _Serializers_WorldDataSerializer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Serializers/WorldDataSerializer.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Serializers/WorldDataSerializer.js");
/* harmony import */ var _Threads_World_WorldComm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Threads/World/WorldComm.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Threads/World/WorldComm.js");
/* harmony import */ var _Threads_Parent_ParentComm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Threads/Parent/ParentComm.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Threads/Parent/ParentComm.js");
/* harmony import */ var _Init_InitWorker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Init/InitWorker.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Init/InitWorker.js");
/* harmony import */ var _Tasks_DataLoaderTasks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tasks/DataLoaderTasks.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Tasks/DataLoaderTasks.js");
/* harmony import */ var _DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DataHandler/DataHandlerWrapper.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/DataHandler/DataHandlerWrapper.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
//objects





//intercomms


//functions




const DVEDL = {
    environment: "browser",
    __settingsHaveBeenSynced: false,
    TC: threadcomm__WEBPACK_IMPORTED_MODULE_10__.ThreadComm,
    UTIL: _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__.Util,
    settings: _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_0__.EngineSettings,
    dataSyncNode: _Data_DataSyncNode_js__WEBPACK_IMPORTED_MODULE_2__.DataSyncNode,
    data: _Data_DataManager_js__WEBPACK_IMPORTED_MODULE_3__.DataManager,
    worldComm: _Threads_World_WorldComm_js__WEBPACK_IMPORTED_MODULE_5__.WorldComm,
    parentComm: _Threads_Parent_ParentComm_js__WEBPACK_IMPORTED_MODULE_6__.ParentComm,
    tasks: _Tasks_DataLoaderTasks_js__WEBPACK_IMPORTED_MODULE_8__.DataLoaderTasks,
    serializer: _Serializers_WorldDataSerializer_js__WEBPACK_IMPORTED_MODULE_4__.WorldDataSerialize,
    dataHandler: _DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_9__.DataHanlderWrapper,
    syncSettings(data) {
        this.settings.syncSettings(data);
        this.__settingsHaveBeenSynced = true;
    },
    reStart() { },
    isReady() {
        return DVEDL.worldComm.isPortSet() && DVEDL.__settingsHaveBeenSynced;
    },
    async $INIT(dataHanlder) {
        this.dataHandler.$INIT(dataHanlder);
        await (0,_Init_InitWorker_js__WEBPACK_IMPORTED_MODULE_7__.InitWorker)(this);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Init/InitWorker.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/DataLoader/Init/InitWorker.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitWorker": () => (/* binding */ InitWorker)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");

async function InitWorker(DVED) {
    let parent = "render";
    if (DVED.environment == "node") {
        parent = "server";
    }
    await threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.$INIT("data-loader", parent);
    await DVED.UTIL.createPromiseCheck({
        check: () => {
            return DVED.isReady();
        },
        checkInterval: 1,
    });
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Serializers/WorldDataSerializer.js":
/*!*****************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/DataLoader/Serializers/WorldDataSerializer.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldDataSerialize": () => (/* binding */ WorldDataSerialize)
/* harmony export */ });
/* harmony import */ var _Tools_Data_WorldData_RegionDataTool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Tools/Data/WorldData/RegionDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/RegionDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ColumnDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/Constants/DataHeaders.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/DataHeaders.js");
//objects




const WorldDataSerialize = {
    regions: new _Tools_Data_WorldData_RegionDataTool_js__WEBPACK_IMPORTED_MODULE_0__.RegionDataTool(),
    columns: new _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_1__.ColumnDataTool(),
    chunks: new _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_2__.ChunkDataTool(),
    serializeRegion(location) {
        if (!this.regions
            .setDimension(location[0])
            .loadInAt(location[1], location[2], location[3]))
            return false;
        const region = this.regions.getRegion();
        const columnBuffers = [];
        region.columns.forEach((column) => {
            this.columns.setColumn(column);
            const location = this.columns.getLocationData();
            const columnBuffer = this.serializeColumn(location);
            if (columnBuffer)
                columnBuffers.push([[...location], columnBuffer]);
        });
        return columnBuffers;
    },
    serializeColumn(location) {
        if (!this.columns.setLocation(location).loadIn())
            return false;
        const columnSize = this.columns.getBufferSizeForWholeColumn();
        const columnBuffer = new ArrayBuffer(columnSize);
        const columnArray = new Uint8Array(columnBuffer);
        const column = this.columns.getColumn();
        let offset = this._readDataIntoBuffer(0, columnArray, column.buffer);
        column.chunks.forEach((chunk) => {
            offset += this._readDataIntoBuffer(offset, columnArray, chunk.buffer);
        });
        return columnArray;
    },
    deSerializeRegion(regionBuffers) {
        for (const buffer of regionBuffers) {
            this.deSerializeColumn(buffer);
        }
    },
    deSerializeColumn(columnBuffer) {
        const dv = new DataView(columnBuffer);
        if (dv.getUint16(0) != _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_3__.DVEMessageHeader &&
            dv.getUint16(2) != _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataHeaders.column) {
            throw new Error(`Column at ${location} is not the correct format.`);
        }
        const chunks = [];
        const columnSAB = new SharedArrayBuffer(this.columns.getBufferSize());
        const columnArray = new Uint8Array(columnSAB);
        let offset = this._readDataIntoBuffer(0, columnArray, columnBuffer, 0, this.columns.getBufferSize());
        const columnBufferLength = columnBuffer.byteLength;
        while (offset < columnBufferLength) {
            const dataType = dv.getUint16(offset + 2);
            if (dataType == _Data_Constants_DataHeaders_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataHeaders.chunk) {
                const chunkSAB = new SharedArrayBuffer(this.chunks.getBufferSize());
                const chunkArray = new Uint8Array(chunkSAB);
                offset += this._readDataIntoBuffer(0, chunkArray, columnBuffer, offset, this.chunks.getBufferSize());
                chunks.push(chunkSAB);
                continue;
            }
            throw new Error(`Error loading column at: ${location}`);
        }
        return {
            column: columnSAB,
            chunks: chunks,
        };
    },
    _readDataIntoBuffer(offset, target, source, sourceOffset = 0, sourceLength = -1) {
        const bufferArray = new Uint8Array(source, sourceOffset, sourceLength == -1 ? source.byteLength : sourceLength);
        let i = bufferArray.length;
        while (i--) {
            target[i + offset] = bufferArray[i];
        }
        return bufferArray.length;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Tasks/DataLoaderTasks.js":
/*!*******************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/DataLoader/Tasks/DataLoaderTasks.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataLoaderTasks": () => (/* binding */ DataLoaderTasks)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DivineVoxelEngineDataLoader.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/DivineVoxelEngineDataLoader.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
/* harmony import */ var _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DataLoader/DataHandler/DataHandlerWrapper.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/DataHandler/DataHandlerWrapper.js");



const DataLoaderTasks = {
    saveRegion: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("save-region", async (data, onDone) => {
        await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.saveRegion(data);
        return onDone ? onDone() : false;
    }, "deffered"),
    loadRegion: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("load-region", async (data, onDone) => {
        await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.loadRegion(data);
        return onDone ? onDone() : false;
    }, "deffered"),
    loadRegionHeader: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("load-region-header", async (data, onDone) => {
        const success = await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.loadRegionHeader(data);
        return onDone ? onDone(success) : false;
    }, "deffered"),
    saveColumn: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("save-column", async (data, onDone) => {
        await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.saveColumn(data);
        return onDone ? onDone() : false;
    }, "deffered"),
    loadColumn: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("load-column", async (data, onDone) => {
        await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.loadColumn(data);
        const inte = setInterval(() => {
            if (_DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.data.worldRegister.column.get(data)) {
                onDone ? onDone(true) : false;
                clearInterval(inte);
            }
        }, 1);
    }, "deffered"),
    unLoadColumn: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("unload-column", async (data, onDone) => {
        await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.saveColumn(data);
        _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.worldComm.runTasks("unload-column", data);
        const inte = setInterval(() => {
            if (!_DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.data.worldRegister.column.get(data)) {
                onDone ? onDone() : false;
                clearInterval(inte);
            }
        }, 1);
    }, "deffered"),
    setPath: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("set-path", async (data, onDone) => {
        await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.setPath(data[0]);
        return onDone ? onDone() : false;
    }, "deffered"),
    columnExists: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("column-exists", async (data, onDone) => {
        const exists = await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.columnExists(data);
        if (onDone) {
            onDone(exists);
        }
        return false;
    }, "deffered"),
    columnTimestamp: threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.registerTasks("column-timestamp", async (data, onDone) => {
        const time = await _DataLoader_DataHandler_DataHandlerWrapper_js__WEBPACK_IMPORTED_MODULE_2__.DataHanlderWrapper.columnTimestamp(data);
        if (onDone) {
            onDone(time);
        }
        return 0;
    }, "deffered"),
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Threads/Parent/ParentComm.js":
/*!***********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/DataLoader/Threads/Parent/ParentComm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentComm": () => (/* binding */ ParentComm)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DivineVoxelEngineDataLoader.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/DivineVoxelEngineDataLoader.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");


const parentComm = threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.parent;
parentComm.listenForMessage("connect-world", (data, event) => {
    if (!event)
        return;
    const port = event.ports[0];
    _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.worldComm.setPort(port);
});
parentComm.listenForMessage("sync-settings", (data, event) => {
    const settings = data[1];
    _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.syncSettings(settings);
});
parentComm.listenForMessage("re-start", (data, event) => {
    _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL.reStart();
});
const ParentComm = parentComm;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/Threads/World/WorldComm.js":
/*!*********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/DataLoader/Threads/World/WorldComm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldComm": () => (/* binding */ WorldComm)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");

const worldComm = threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.createComm("world", {});
const WorldComm = worldComm;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/index.js":
/*!***************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/DataLoader/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVEDL": () => (/* reexport safe */ _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__.DVEDL)
/* harmony export */ });
/* harmony import */ var _DivineVoxelEngineDataLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DivineVoxelEngineDataLoader.js */ "../../DSLIBS/divineVoxelEngine/dist/DataLoader/DivineVoxelEngineDataLoader.js");



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

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Database/Database.js":
/*!******************************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/Database/Database.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataBase": () => (/* binding */ DataBase)
/* harmony export */ });
/* harmony import */ var _ZeneithDBCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ZeneithDBCore.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithDBCore.js");
/* harmony import */ var _ZeneithUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ZeneithUtil.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithUtil.js");
/* harmony import */ var _Store_ObjectStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/ObjectStore.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Store/ObjectStore.js");



class DataBase {
    creationData;
    outsideZeneith;
    dataBaseName = "";
    util = _ZeneithUtil_js__WEBPACK_IMPORTED_MODULE_1__.ZeneithUtil;
    opened = false;
    db = null;
    _beingUpgrded = false;
    constructor(creationData, outsideZeneith = false) {
        this.creationData = creationData;
        this.outsideZeneith = outsideZeneith;
        this.dataBaseName = this.creationData.databaseName;
    }
    isOpen() {
        return this.opened && this.db !== null;
    }
    getUUID() {
        return _ZeneithUtil_js__WEBPACK_IMPORTED_MODULE_1__.ZeneithUtil.getUUID();
    }
    open() {
        if (this._beingUpgrded) {
            throw new Error("Database is being upgraded can't open");
        }
        if (this.isOpen())
            return true;
        const self = this;
        const prom = new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dataBaseName);
            request.onerror = function (event) {
                console.warn("Error when opening IndexDB");
                reject(false);
            };
            request.onsuccess = function (event) {
                //@ts-ignore
                self.db = request.result;
                self.opened = true;
                resolve(true);
            };
        });
        return prom;
    }
    close() {
        if (!this.db) {
            return false;
        }
        this.opened = false;
        this.db.close();
        this.db = null;
        return true;
    }
    _openAtVersion(version = 1) {
        const self = this;
        const prom = new Promise(async (resolve, reject) => {
            const request = indexedDB.open(this.dataBaseName, version);
            request.onerror = (event) => {
                reject(false);
                console.log(event);
                throw new Error(`Error opening ${self.dataBaseName}.`);
            };
            request.onblocked = () => {
                console.log("blocked at version");
                reject(false);
            };
            request.onsuccess = (event) => {
                self.db = request.result;
                self.opened = true;
                resolve(true);
            };
        });
        return prom;
    }
    async $create() {
        return await this.forceUpdate(undefined, true);
    }
    async forceUpdate(removeCollections, newDB = false) {
        const self = this;
        let version = newDB ? 1 : await this.getDatabaeVersion();
        if (this.isOpen()) {
            this.close();
        }
        this._beingUpgrded = true;
        const prom = new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dataBaseName, version + 1);
            request.onerror = (event) => {
                reject(false);
                console.log(event);
                throw new Error(`Error opening ${self.dataBaseName}.`);
            };
            request.onblocked = (event) => {
                console.log("blocked");
                console.log(event);
                this._beingUpgrded = false;
                reject(false);
            };
            request.onupgradeneeded = (event) => {
                const db = request.result;
                self.db = db;
                if (!self.outsideZeneith) {
                    _ZeneithDBCore_js__WEBPACK_IMPORTED_MODULE_0__.ZeneithDBCore.updateDatBaseData(self.creationData);
                }
                if (removeCollections) {
                    for (const collectionName of removeCollections) {
                        db.deleteObjectStore(collectionName);
                    }
                }
                for (const collectionData of self.creationData.collections) {
                    const checkCollection = self.doesCollectionExist(collectionData.name);
                    let collection;
                    if (checkCollection) {
                        const transaction = request.transaction;
                        const store = transaction.objectStore(collectionData.name);
                        collection = store;
                    }
                    else {
                        collection = db.createObjectStore(collectionData.name);
                    }
                    self._processCollectionScehma(collection, collectionData.schema);
                }
            };
            request.onsuccess = (event) => {
                self.db = request.result;
                self.opened = true;
                this._beingUpgrded = false;
                resolve(true);
            };
        });
        return prom;
    }
    _processCollectionScehma(collection, schema) {
        this.__traverseColletionScehma(collection, schema);
    }
    __traverseColletionScehma(collection, schema) {
        for (const node of schema) {
            if (Array.isArray(node)) {
                this.__traverseColletionScehma(collection, node);
                continue;
            }
            if (node.index) {
                collection.createIndex(node.name, node.name, { unique: node.isUnique });
            }
            if (node.children) {
                this.__traverseColletionScehma(collection, node.children);
            }
        }
    }
    async getCollection(id) {
        if (!this.isOpen())
            await this.open();
        if (!this.db?.objectStoreNames.contains(id)) {
            throw new Error(`${id} does not exists in database ${this.creationData.databaseName}`);
        }
        return new _Store_ObjectStore_js__WEBPACK_IMPORTED_MODULE_2__.ObjectStore(this, id);
    }
    async addCollection(data) {
        try {
            if (!this.isOpen())
                await this.open();
            for (const store of data) {
                if (this.db.objectStoreNames.contains(store.name))
                    continue;
                this.creationData.collections.push(store);
            }
            await this.forceUpdate();
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
    async removeCollection(collectionName) {
        try {
            let deleteCollections = [];
            if (typeof collectionName == "string") {
                deleteCollections.push(collectionName);
            }
            else {
                deleteCollections.push(...collectionName);
            }
            const collections = [];
            for (const collection of this.creationData.collections) {
                if (!deleteCollections.includes(collection.name)) {
                    collections.push(collection);
                }
            }
            this.creationData.collections = collections;
            await this.forceUpdate(deleteCollections);
            return true;
        }
        catch (error) {
            console.log(`Failed making a new collection with the name ${collectionName}`);
            console.error(error);
            return false;
        }
    }
    getDatabaeVersion() {
        const prom = new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dataBaseName);
            request.onsuccess = (event) => {
                const version = request.result.version;
                request.result.close();
                resolve(version);
            };
            request.onerror = (event) => {
                console.warn("Error when opening IndexDB");
                reject("Error when opening IndexDB");
            };
        });
        return prom;
    }
    doesCollectionExist(collectionName) {
        if (!this.db) {
            throw new Error(`Database ${this.dataBaseName} is not opened.`);
        }
        if (this.db.objectStoreNames.contains(collectionName)) {
            return true;
        }
        else {
            return false;
        }
    }
    getData(collectionName, key) {
        const prom = new Promise(async (resolve, reject) => {
            if (!this.isOpen())
                await this.open();
            if (!this.db) {
                throw new Error(`Database ${this.dataBaseName} is not opened.`);
            }
            const transaction = this.db.transaction([collectionName], "readonly");
            const objectStore = transaction.objectStore(collectionName);
            const request = objectStore.get(key);
            request.onerror = (event) => {
                reject(false);
                transaction.commit();
            };
            request.onsuccess = (event) => {
                if (!request.result) {
                    resolve(false);
                }
                else {
                    resolve(request.result);
                }
                transaction.commit();
            };
        });
        return prom;
    }
    getAllData(collectionName) {
        const prom = new Promise(async (resolve, reject) => {
            if (!this.isOpen())
                await this.open();
            if (!this.db) {
                throw new Error(`Database ${this.dataBaseName} is not opened.`);
            }
            const transaction = this.db.transaction([collectionName], "readonly");
            const request = transaction
                .objectStore(collectionName)
                .getAll();
            request.onerror = (event) => {
                reject(false);
                transaction.commit();
            };
            request.onsuccess = (event) => {
                if (!request.result) {
                    resolve(false);
                }
                else {
                    resolve(request.result);
                }
                transaction.commit();
            };
        });
        return prom;
    }
    getAllKeys(collectionName) {
        const prom = new Promise(async (resolve, reject) => {
            if (!this.isOpen())
                await this.open();
            if (!this.db) {
                throw new Error(`Database ${this.dataBaseName} is not opened.`);
            }
            const transaction = this.db.transaction([collectionName], "readonly");
            const request = transaction
                .objectStore(collectionName)
                .getAllKeys();
            request.onerror = (event) => {
                reject(false);
                transaction.commit();
            };
            request.onsuccess = (event) => {
                if (!request.result) {
                    resolve(false);
                }
                else {
                    resolve(request.result);
                }
                transaction.commit();
            };
        });
        return prom;
    }
    removeData(collectionName, key) {
        const prom = new Promise(async (resolve, reject) => {
            if (!this.isOpen())
                await this.open();
            if (!this.db) {
                throw new Error(`Database ${this.dataBaseName} is not opened.`);
            }
            const transaction = this.db.transaction([collectionName], "readwrite");
            const request = transaction.objectStore(collectionName).delete(key);
            request.onerror = (event) => {
                reject(false);
                transaction.commit();
            };
            request.onsuccess = (event) => {
                resolve(true);
                transaction.commit();
            };
        });
        return prom;
    }
    removeAllData(collectionName) {
        const prom = new Promise(async (resolve, reject) => {
            if (!this.isOpen())
                await this.open();
            if (!this.db) {
                throw new Error(`Database ${this.dataBaseName} is not opened.`);
            }
            const transaction = this.db.transaction([collectionName], "readwrite");
            const request = transaction.objectStore(collectionName).clear();
            request.onerror = (event) => {
                reject(false);
                transaction.commit();
            };
            request.onsuccess = (event) => {
                resolve(true);
                transaction.commit();
            };
        });
        return prom;
    }
    setData(collectionName, key, setData) {
        const prom = new Promise(async (resolve, reject) => {
            if (!this.isOpen())
                await this.open();
            if (!this.db) {
                throw new Error(`Database ${this.dataBaseName} is not opened.`);
            }
            const transaction = this.db.transaction([collectionName], "readwrite");
            const request = transaction.objectStore(collectionName).put(setData, key);
            request.onerror = (event) => {
                reject(false);
                transaction.commit();
            };
            request.onsuccess = (event) => {
                resolve(true);
                transaction.commit();
            };
        });
        return prom;
    }
    updateData(collectionName, key, updateFunction) {
        const prom = new Promise(async (resolve, reject) => {
            if (!this.isOpen())
                await this.open();
            if (!this.db) {
                throw new Error(`Database ${this.dataBaseName} is not opened.`);
            }
            const transaction = this.db.transaction([collectionName], "readwrite");
            const objectStore = transaction.objectStore(collectionName);
            const request = objectStore.get(key);
            request.onerror = (event) => {
                reject(false);
            };
            request.onsuccess = (event) => {
                //@ts-ignore
                const data = event.target.result;
                if (!data) {
                    resolve(false);
                    transaction.commit();
                    return;
                }
                const newData = updateFunction(data);
                const requestUpdate = objectStore.put(newData);
                requestUpdate.onerror = (event) => {
                    reject(false);
                    transaction.commit();
                };
                requestUpdate.onsuccess = (event) => {
                    resolve(true);
                    transaction.commit();
                };
            };
        });
        return prom;
    }
}


/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Database/Database.types.js":
/*!*****************************************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Database/Database.types.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Database/Schema.types.js":
/*!***************************************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Database/Schema.types.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Zeneith/Database.schema.js":
/*!*****************************************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Zeneith/Database.schema.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/index.js":
/*!***********************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Database_Database_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Database/Database.types.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Database/Database.types.js");
/* harmony import */ var _Database_Schema_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Database/Schema.types.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Database/Schema.types.js");
/* harmony import */ var _Zeneith_Database_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Zeneith/Database.schema.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/Zeneith/Database.schema.js");





/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Store/ObjectStore.js":
/*!******************************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/Store/ObjectStore.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectStore": () => (/* binding */ ObjectStore)
/* harmony export */ });
class ObjectStore {
    db;
    id;
    constructor(db, id) {
        this.db = db;
        this.id = id;
    }
    async get(id) {
        return await this.db.getData(this.id, id);
    }
    async set(id, data) {
        return await this.db.setData(this.id, id, data);
    }
    async delete(id) {
        return await this.db.removeData(this.id, id);
    }
}


/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithDB.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithDB.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZeneithDB": () => (/* binding */ ZeneithDB)
/* harmony export */ });
/* harmony import */ var _ZeneithDBCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ZeneithDBCore.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithDBCore.js");

const ZeneithDB = {
    __initalized: false,
    core: _ZeneithDBCore_js__WEBPACK_IMPORTED_MODULE_0__.ZeneithDBCore,
    async $INIT() {
        if (this.__initalized)
            return;
        await this.core.initialize();
        this.__initalized = true;
    },
    async databaseExists(dataBaseName) {
        return await this.core.dataBaseExist(dataBaseName);
    },
    async createDatabase(data) {
        return await this.core.createDataBase(data);
    },
    async updateDatabase(data) {
        return await this.core.createDataBase(data);
    },
    async getDatabase(name) {
        return await this.core.getDataBase(name);
    },
    async deleteDatabase(name) {
        return await this.core.deleteDataBase(name);
    },
};


/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithDBCore.js":
/*!**************************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithDBCore.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZeneithDBCore": () => (/* binding */ ZeneithDBCore)
/* harmony export */ });
/* harmony import */ var _Database_Database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Database/Database.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Database/Database.js");
/* harmony import */ var _ZeneithUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZeneithUtil.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithUtil.js");


const ZeneithDBCore = {
    dataBase: {},
    __version: 1,
    loadedDatabases: {},
    util: _ZeneithUtil_js__WEBPACK_IMPORTED_MODULE_1__.ZeneithUtil,
    async initialize() {
        this.dataBase = new _Database_Database_js__WEBPACK_IMPORTED_MODULE_0__.DataBase({
            databaseName: "ZeneithDB",
            collections: [
                {
                    name: "meta",
                    schema: [],
                },
                {
                    name: "collections",
                    schema: [],
                },
                {
                    name: "databases",
                    schema: [],
                },
            ],
        }, true);
        const version = await this.dataBase.getDatabaeVersion();
        if (version != this.__version + 1) {
            console.warn("ZeneithDB is being created.");
            await this.dataBase.$create();
        }
        await this.dataBase.open();
    },
    async createDataBase(data) {
        const databaseCheck = await this.dataBase.getData("databases", data.databaseName);
        if (databaseCheck) {
            throw new Error(`The database ${data.databaseName} already exists. Use 'updateDatabase' to update the database instead.`);
        }
        await this.dataBase.setData("databases", data.databaseName, {
            collectionCount: data.collections.length,
            creationData: data,
        });
        const database = new _Database_Database_js__WEBPACK_IMPORTED_MODULE_0__.DataBase(data);
        await database.$create();
        return database;
    },
    async updateDatBaseData(data) {
        await this.dataBase.setData("databases", data.databaseName, {
            collectionCount: data.collections.length,
            creationData: data,
        });
    },
    async getDataBase(dataBasename) {
        if (this.loadedDatabases[dataBasename]) {
            return this.loadedDatabases[dataBasename];
        }
        await this.dataBase.open();
        const dataBaseCheck = await this.dataBase.getData("databases", dataBasename);
        if (!dataBaseCheck) {
            throw new Error(`The database ${dataBasename} does not exists inside of ZeneithDB.`);
        }
        const database = new _Database_Database_js__WEBPACK_IMPORTED_MODULE_0__.DataBase(dataBaseCheck.creationData);
        this.loadedDatabases[dataBasename] = database;
        return database;
    },
    async dataBaseExist(dataBasename) {
        const check = await this.dataBase.getData("databases", dataBasename);
        if (!check) {
            return false;
        }
        else {
            return true;
        }
    },
    async deleteDataBase(dataBasename) {
        await this.dataBase.open();
        const check = await this.dataBase.getData("databases", dataBasename);
        if (!check) {
            return false;
        }
        this.dataBase.removeData("databases", dataBasename);
        for (const collection of check.creationData.collections) {
            await this.dataBase.removeData("collections", `${dataBasename}-${collection.name}`);
        }
        indexedDB.deleteDatabase(dataBasename);
    },
};


/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithUtil.js":
/*!************************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithUtil.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZeneithUtil": () => (/* binding */ ZeneithUtil)
/* harmony export */ });
const ZeneithUtil = {
    getUUID: function () {
        let d = new Date().getTime();
        let d2 = (performance && performance.now && performance.now() * 1000) || 0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            let r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            }
            else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
    },
};


/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/ZeneithDB/index.js":
/*!******************************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/ZeneithDB/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataBase": () => (/* reexport safe */ _Database_Database_js__WEBPACK_IMPORTED_MODULE_1__.DataBase),
/* harmony export */   "ObjectStore": () => (/* reexport safe */ _Store_ObjectStore_js__WEBPACK_IMPORTED_MODULE_2__.ObjectStore),
/* harmony export */   "ZeneithDB": () => (/* reexport safe */ _ZeneithDB_js__WEBPACK_IMPORTED_MODULE_0__.ZeneithDB)
/* harmony export */ });
/* harmony import */ var _ZeneithDB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ZeneithDB.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/ZeneithDB.js");
/* harmony import */ var _Database_Database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Database/Database.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Database/Database.js");
/* harmony import */ var _Store_ObjectStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store/ObjectStore.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Store/ObjectStore.js");





/***/ }),

/***/ "../../DSLIBS/zeneithDB/dist/index.js":
/*!********************************************!*\
  !*** ../../DSLIBS/zeneithDB/dist/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataBase": () => (/* reexport safe */ _ZeneithDB_index_js__WEBPACK_IMPORTED_MODULE_0__.DataBase),
/* harmony export */   "ObjectStore": () => (/* reexport safe */ _ZeneithDB_index_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStore),
/* harmony export */   "ZeneithDB": () => (/* reexport safe */ _ZeneithDB_index_js__WEBPACK_IMPORTED_MODULE_0__.ZeneithDB)
/* harmony export */ });
/* harmony import */ var _ZeneithDB_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ZeneithDB/index.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/index.js");
/* harmony import */ var _ZeneithDB_Meta_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZeneithDB/Meta/index.js */ "../../DSLIBS/zeneithDB/dist/ZeneithDB/Meta/index.js");




/***/ }),

/***/ "./node_modules/crystal-compressor/CrystalCompressor/CCCore.js":
/*!*********************************************************************!*\
  !*** ./node_modules/crystal-compressor/CrystalCompressor/CCCore.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CCCore": () => (/* binding */ CCCore)
/* harmony export */ });
const CCCore = {
    async compressArrayBuffer(input) {
        //@ts-ignore
        const cs = new CompressionStream("gzip");
        const writer = cs.writable.getWriter();
        writer.write(input);
        writer.close();
        const output = [];
        const reader = cs.readable.getReader();
        let totalSize = 0;
        while (true) {
            const { value, done } = await reader.read();
            if (done)
                break;
            output.push(value);
            totalSize += value.byteLength;
        }
        const concatenated = new Uint8Array(totalSize);
        let offset = 0;
        for (const array of output) {
            concatenated.set(array, offset);
            offset += array.byteLength;
        }
        return concatenated;
    },
    async decompressArrayBuffer(input) {
        //@ts-ignore
        const ds = new DecompressionStream("gzip");
        const writer = ds.writable.getWriter();
        writer.write(input);
        writer.close();
        const output = [];
        const reader = ds.readable.getReader();
        let totalSize = 0;
        while (true) {
            const { value, done } = await reader.read();
            if (done)
                break;
            output.push(value);
            totalSize += value.byteLength;
        }
        const concatenated = new Uint8Array(totalSize);
        let offset = 0;
        for (const array of output) {
            concatenated.set(array, offset);
            offset += array.byteLength;
        }
        return concatenated;
    },
    processArray(type, array) {
        const returnArray = this.getArray[type](array.buffer);
        return returnArray;
    },
    getArray: {
        Int8: (buffer) => {
            return new Int8Array(buffer);
        },
        Uint8: (buffer) => {
            return new Uint8Array(buffer);
        },
        Uint8Clamped: (buffer) => {
            return new Uint8ClampedArray(buffer);
        },
        Int16: (buffer) => {
            return new Int16Array(buffer);
        },
        Uint16: (buffer) => {
            return new Uint16Array(buffer);
        },
        Int32: (buffer) => {
            return new Int32Array(buffer);
        },
        Uint32: (buffer) => {
            return new Uint32Array(buffer);
        },
        Float32: (buffer) => {
            return new Float32Array(buffer);
        },
        Float64: (buffer) => {
            return new Float64Array(buffer);
        },
        BigInt64: (buffer) => {
            return new BigInt64Array(buffer);
        },
        BigUint64: (buffer) => {
            return new BigUint64Array(buffer);
        },
    },
};


/***/ }),

/***/ "./node_modules/crystal-compressor/CrystalCompressor/CrystalCompressor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/crystal-compressor/CrystalCompressor/CrystalCompressor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrystalCompressor": () => (/* binding */ CrystalCompressor)
/* harmony export */ });
/* harmony import */ var _CCCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CCCore.js */ "./node_modules/crystal-compressor/CrystalCompressor/CCCore.js");

const CrystalCompressor = {
    core: _CCCore_js__WEBPACK_IMPORTED_MODULE_0__.CCCore,
    version: 0.0,
    async compressArray(array) {
        const returnArray = await this.core.compressArrayBuffer(array.buffer);
        return returnArray;
    },
    async decompressArray(buffer, type) {
        const returnData = await this.core.decompressArrayBuffer(buffer);
        return this.core.processArray(type, returnData);
    },
};


/***/ }),

/***/ "./node_modules/crystal-compressor/CrystalCompressor/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/crystal-compressor/CrystalCompressor/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrystalCompressor": () => (/* reexport safe */ _CrystalCompressor_js__WEBPACK_IMPORTED_MODULE_0__.CrystalCompressor)
/* harmony export */ });
/* harmony import */ var _CrystalCompressor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrystalCompressor.js */ "./node_modules/crystal-compressor/CrystalCompressor/CrystalCompressor.js");



/***/ }),

/***/ "./node_modules/crystal-compressor/index.js":
/*!**************************************************!*\
  !*** ./node_modules/crystal-compressor/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrystalCompressor": () => (/* reexport safe */ _CrystalCompressor_index_js__WEBPACK_IMPORTED_MODULE_0__.CrystalCompressor)
/* harmony export */ });
/* harmony import */ var _CrystalCompressor_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrystalCompressor/index.js */ "./node_modules/crystal-compressor/CrystalCompressor/index.js");



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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["DSLIBS_divineVoxelEngine_dist_Data_Settings_EngineSettings_js-DSLIBS_threadComm_dist_index_js","DSLIBS_divineVoxelEngine_dist_Common_Threads_Contracts_DataSync_js-DSLIBS_divineVoxelEngine_d-d7fdd9"], () => (__webpack_require__("./compiled/dev/environments/electron/client/dataloader.js")))
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
/******/ 			"compiled_dev_environments_electron_client_dataloader_js": 1
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
//# sourceMappingURL=compiled_dev_environments_electron_client_dataloader_js.DVE.js.map