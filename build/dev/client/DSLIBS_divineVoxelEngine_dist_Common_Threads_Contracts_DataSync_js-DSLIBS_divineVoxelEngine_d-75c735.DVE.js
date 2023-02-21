"use strict";
(self["webpackChunkdve_testing"] = self["webpackChunkdve_testing"] || []).push([["DSLIBS_divineVoxelEngine_dist_Common_Threads_Contracts_DataSync_js-DSLIBS_divineVoxelEngine_d-75c735"],{

/***/ "../../DSLIBS/divineBinaryTags/dist/Classes/TagManagerBase.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/divineBinaryTags/dist/Classes/TagManagerBase.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagManagerBase": () => (/* binding */ TagManagerBase)
/* harmony export */ });
/* harmony import */ var _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/DBTUtil.js */ "../../DSLIBS/divineBinaryTags/dist/Util/DBTUtil.js");

const TagIndexData = [0, 0, 0, 0];
const getIndexData = (data, indexBufferIndex) => {
    TagIndexData[0] = data.getUint32(indexBufferIndex);
    indexBufferIndex += _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("32ui");
    TagIndexData[1] = data.getUint8(indexBufferIndex);
    indexBufferIndex += _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("8ui");
    TagIndexData[2] = data.getUint8(indexBufferIndex);
    indexBufferIndex += _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("8ui");
    TagIndexData[3] = data.getUint8(indexBufferIndex);
    indexBufferIndex += _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("8ui");
    return TagIndexData;
};
class TagManagerBase {
    id;
    byteOffSet = 0;
    tagSize = 0;
    tagIndexes = 0;
    data = new DataView(new ArrayBuffer(0));
    indexMap = new Map();
    index = new DataView(new ArrayBuffer(0));
    constructor(id) {
        this.id = id;
    }
    setBuffer(data) {
        if (data instanceof DataView) {
            this.data = data;
            return;
        }
        this.data = new DataView(data);
    }
    getBuffer() {
        if (this.data instanceof DataView) {
            return this.data.buffer;
        }
        return this.data;
    }
    setTagIndex(index) {
        this.byteOffSet = index * this.tagSize;
    }
    getTag(id) {
        const byteIndex = this.indexMap.get(id);
        if (byteIndex === undefined) {
            throw new Error(`Tag with id: ${id} does not exist.`);
        }
        const indexData = getIndexData(this.index, byteIndex);
        if (indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.boolean ||
            indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.number) {
            return _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getBitValue(this.data.getUint8(indexData[0] + this.byteOffSet), indexData[1], indexData[2]);
        }
        if (indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.typedNumber) {
            return _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedNumber(this.data, indexData[0] + this.byteOffSet, indexData[2]);
        }
        return -Infinity;
    }
    setTag(id, value) {
        const byteIndex = this.indexMap.get(id);
        if (byteIndex === undefined) {
            throw new Error(`Tag with id: ${id} does not exist.`);
        }
        const indexData = getIndexData(this.index, byteIndex);
        if (indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.boolean ||
            indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.number) {
            this.data.setUint8(indexData[0] + this.byteOffSet, _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.setBitValue(this.data.getUint8(indexData[0] + this.byteOffSet), indexData[1], value, indexData[2]));
            return true;
        }
        if (indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.typedNumber) {
            _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.setTypedNumber(this.data, indexData[0] + this.byteOffSet, indexData[2], value);
            return true;
        }
        return false;
    }
    getArrayTagValue(id, index) {
        const byteIndex = this.indexMap.get(id);
        if (byteIndex === undefined) {
            throw new Error(`Tag with id: ${id} does not exist.`);
        }
        const indexData = getIndexData(this.index, byteIndex);
        if (indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.typedNumberArray) {
            return _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedNumber(this.data, indexData[0] +
                this.byteOffSet +
                index * _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSizeFromNumber(indexData[2]), indexData[2]);
        }
        return -Infinity;
    }
    /**## getArrayTagByteIndex
     *  Get the actual byte index for the provided index of the array.
     * @param id
     * @param index
     * @returns
     */
    getArrayTagByteIndex(id, index) {
        const byteIndex = this.indexMap.get(id);
        if (byteIndex === undefined) {
            throw new Error(`Tag with id: ${id} does not exist.`);
        }
        const indexData = getIndexData(this.index, byteIndex);
        if (indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.typedNumberArray) {
            return (indexData[0] +
                this.byteOffSet +
                index * _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSizeFromNumber(indexData[2]));
        }
        return -Infinity;
    }
    setArrayTagValue(id, index, value) {
        const byteIndex = this.indexMap.get(id);
        if (byteIndex === undefined) {
            throw new Error(`Tag with id: ${id} does not exist.`);
        }
        const indexData = getIndexData(this.index, byteIndex);
        if (indexData[3] == _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.typedNumberArray) {
            return _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.setTypedNumber(this.data, indexData[0] +
                this.byteOffSet +
                index * _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSizeFromNumber(indexData[2]), indexData[2], value);
        }
        return -Infinity;
    }
    loopThroughTags(run) {
        this.indexMap.forEach((i, id) => {
            run(id, this.getTag(id));
        });
    }
    loopThroughIndex(run) {
        this.indexMap.forEach((index, id) => {
            const indexData = getIndexData(this.index, index);
            run(indexData);
        });
    }
    loopThroughAllIndexTags(run) {
        for (let index = 0; index < this.tagIndexes; index++) {
            this.setTagIndex(index);
            this.indexMap.forEach((i, id) => {
                run(id, this.getTag(id), index);
            });
        }
    }
}


/***/ }),

/***/ "../../DSLIBS/divineBinaryTags/dist/DivineBinaryTags.js":
/*!**************************************************************!*\
  !*** ../../DSLIBS/divineBinaryTags/dist/DivineBinaryTags.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivineBinaryTags": () => (/* binding */ DivineBinaryTags)
/* harmony export */ });
/* harmony import */ var _RemoteTagManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoteTagManager.js */ "../../DSLIBS/divineBinaryTags/dist/RemoteTagManager.js");
/* harmony import */ var _TagManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagManager.js */ "../../DSLIBS/divineBinaryTags/dist/TagManager.js");


const DivineBinaryTags = {
    createTagManager(id) {
        return new _TagManager_js__WEBPACK_IMPORTED_MODULE_1__.TagManager(id);
    },
    createRemoteTagManager(id) {
        return new _RemoteTagManager_js__WEBPACK_IMPORTED_MODULE_0__.RemoteTagManager(id);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryTags/dist/RemoteTagManager.js":
/*!**************************************************************!*\
  !*** ../../DSLIBS/divineBinaryTags/dist/RemoteTagManager.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoteTagManager": () => (/* binding */ RemoteTagManager)
/* harmony export */ });
/* harmony import */ var _Classes_TagManagerBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/TagManagerBase.js */ "../../DSLIBS/divineBinaryTags/dist/Classes/TagManagerBase.js");

class RemoteTagManager extends _Classes_TagManagerBase_js__WEBPACK_IMPORTED_MODULE_0__.TagManagerBase {
    id;
    initData;
    constructor(id) {
        super(id);
        this.id = id;
    }
    $INIT(data) {
        this.data = new DataView(data.buffer);
        this.index = new DataView(data.indexBuffer);
        this.indexMap = data.indexMap;
        this.tagIndexes = data.totalIndexes;
        this.tagSize = data.tagSize;
        this.initData = data;
    }
}


/***/ }),

/***/ "../../DSLIBS/divineBinaryTags/dist/TagManager.js":
/*!********************************************************!*\
  !*** ../../DSLIBS/divineBinaryTags/dist/TagManager.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagManager": () => (/* binding */ TagManager)
/* harmony export */ });
/* harmony import */ var _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util/DBTUtil.js */ "../../DSLIBS/divineBinaryTags/dist/Util/DBTUtil.js");
/* harmony import */ var _Classes_TagManagerBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/TagManagerBase.js */ "../../DSLIBS/divineBinaryTags/dist/Classes/TagManagerBase.js");


const TagIndexSize = _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("32ui") + _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("8ui") * 3;
const setIndexData = (data, indexBufferIndex, byteIndex, bitOffSet, bitSize, type) => {
    data.setUint32(indexBufferIndex, byteIndex);
    indexBufferIndex += _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("32ui");
    data.setUint8(indexBufferIndex, bitOffSet);
    indexBufferIndex += _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("8ui");
    data.setUint8(indexBufferIndex, bitSize);
    indexBufferIndex += _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("8ui");
    data.setUint8(indexBufferIndex, type);
    indexBufferIndex += _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize("8ui");
    return indexBufferIndex;
};
class TagManager extends _Classes_TagManagerBase_js__WEBPACK_IMPORTED_MODULE_1__.TagManagerBase {
    id;
    schema = new Map();
    initData = {};
    constructor(id) {
        super(id);
        this.id = id;
    }
    registerTag(tagData) {
        this.schema.set(tagData.id, tagData);
    }
    $INIT(initData) {
        /*
    [Process Tags]
    */
        const headers = new Map();
        const booleans = [];
        const numbers = [];
        const typedNumbers = new Map();
        const typedNumbersArrays = new Map();
        this.schema.forEach((tag) => {
            if (tag.type == "header") {
                let tags = headers.get(tag.numberType);
                if (!tags) {
                    tags = [];
                    headers.set(tag.numberType, tags);
                }
                tags.push(tag);
            }
            if (tag.type == "boolean") {
                booleans.push(tag);
            }
            if (tag.type == "number") {
                const range = tag.range;
                const bitSize = _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.calculateBitsNeeded(range[0], range[1]);
                numbers[bitSize] ??= [];
                numbers[bitSize].push(tag);
            }
            if (tag.type == "typed-number") {
                let tags = typedNumbers.get(tag.numberType);
                if (!tags) {
                    tags = [];
                    typedNumbers.set(tag.numberType, tags);
                }
                tags.push(tag);
            }
            if (tag.type == "typed-number-array") {
                let arrayTags = typedNumbersArrays.get(tag.numberType);
                if (!arrayTags) {
                    arrayTags = [];
                    typedNumbersArrays.set(tag.numberType, arrayTags);
                }
                arrayTags.push(tag);
            }
        });
        /*
    [Build Index]
    */
        const indexSize = this.schema.size * TagIndexSize;
        let indexBuffer = new ArrayBuffer(indexSize);
        if (initData?.indexBufferMode == "shared") {
            indexBuffer = new SharedArrayBuffer(indexSize);
        }
        const index = new DataView(indexBuffer);
        this.index = index;
        let indexBufferIndex = 0;
        let byteIndex = 0;
        let bitIndex = 0;
        let bitSize = 1;
        /*
    [Headers]
    */
        headers.forEach((tags, type) => {
            const byteSise = _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize(type);
            for (let i = 0; i < tags.length; i++) {
                const tag = tags[i];
                this.indexMap.set(tag.id, indexBufferIndex);
                indexBufferIndex = setIndexData(index, indexBufferIndex, byteIndex, 0, _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.NumberTypeRecord[tag.numberType], _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.typedNumber);
                byteIndex += byteSise;
            }
        });
        /*
    [Booleans]
    */
        bitSize = 1;
        for (let i = 0; i < booleans.length; i++) {
            const bool = booleans[i];
            this.indexMap.set(bool.id, indexBufferIndex);
            indexBufferIndex = setIndexData(index, indexBufferIndex, byteIndex, bitIndex, bitSize, _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.boolean);
            bitIndex++;
            if (bitIndex >= 8) {
                byteIndex++;
                bitIndex = 0;
            }
        }
        /*
    [Ranged Numbers]
    */
        byteIndex++;
        bitIndex = 0;
        let cachedBitSize = 0;
        numbers.forEach((tags, bitS) => {
            bitSize = bitS;
            if (cachedBitSize != bitSize) {
                byteIndex++;
                bitIndex = 0;
            }
            for (let i = 0; i < tags.length; i++) {
                const tag = tags[i];
                this.indexMap.set(tag.id, indexBufferIndex);
                indexBufferIndex = setIndexData(index, indexBufferIndex, byteIndex, bitIndex, bitSize, _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.number);
                bitIndex += bitSize;
                if (bitIndex >= 8) {
                    byteIndex++;
                    bitIndex = 0;
                }
            }
        });
        /*
    [Typed Numbers]
    */
        bitIndex = 0;
        byteIndex++;
        typedNumbers.forEach((tags, type) => {
            const byteSise = _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize(type);
            for (let i = 0; i < tags.length; i++) {
                const tag = tags[i];
                this.indexMap.set(tag.id, indexBufferIndex);
                indexBufferIndex = setIndexData(index, indexBufferIndex, byteIndex, 0, _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.NumberTypeRecord[tag.numberType], _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.typedNumber);
                byteIndex += byteSise;
            }
        });
        /*
    [Typed Numbers Arrays]
    */
        byteIndex++;
        typedNumbersArrays.forEach((tags, type) => {
            const byteSise = _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.DBTUtil.getTypedSize(type);
            for (let i = 0; i < tags.length; i++) {
                const tag = tags[i];
                this.indexMap.set(tag.id, indexBufferIndex);
                indexBufferIndex = setIndexData(index, indexBufferIndex, byteIndex, 0, _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.NumberTypeRecord[tag.numberType], _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_0__.TagNodeTypes.typedNumberArray);
                byteIndex += byteSise * tag.length;
            }
        });
        /*
    [Create Remote Tag Manager Data]
    */
        let numberOfIndexes = 1;
        if (initData?.numberOfIndexes) {
            numberOfIndexes = initData.numberOfIndexes;
        }
        this.tagIndexes = numberOfIndexes;
        this.tagSize = byteIndex;
        const remoteData = {
            bufferSize: byteIndex * numberOfIndexes,
            buffer: new ArrayBuffer(0),
            indexBuffer: indexBuffer,
            indexMap: this.indexMap,
            tagSize: this.tagSize,
            totalIndexes: numberOfIndexes,
        };
        this.initData = remoteData;
        return remoteData;
    }
}


/***/ }),

/***/ "../../DSLIBS/divineBinaryTags/dist/Types/DBTSchema.types.js":
/*!*******************************************************************!*\
  !*** ../../DSLIBS/divineBinaryTags/dist/Types/DBTSchema.types.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../DSLIBS/divineBinaryTags/dist/Types/Util.types.js":
/*!**************************************************************!*\
  !*** ../../DSLIBS/divineBinaryTags/dist/Types/Util.types.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../DSLIBS/divineBinaryTags/dist/Util/DBTUtil.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/divineBinaryTags/dist/Util/DBTUtil.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBTUtil": () => (/* binding */ DBTUtil),
/* harmony export */   "NumberTypeMap": () => (/* binding */ NumberTypeMap),
/* harmony export */   "NumberTypeRecord": () => (/* binding */ NumberTypeRecord),
/* harmony export */   "TagNodeTypes": () => (/* binding */ TagNodeTypes)
/* harmony export */ });
const TagNodeTypes = {
    boolean: 0,
    number: 1,
    typedNumber: 2,
    typedNumberArray: 3,
};
const NumberTypeByteSize = {
    "8ui": 1,
    "8i": 1,
    "16ui": 2,
    "16i": 2,
    "32ui": 4,
    "32i": 4,
    "32f": 4,
    "64f": 8,
    "64i": 8,
    "64ui": 8,
};
const NumberTypeRecord = {
    "8ui": 0,
    "8i": 1,
    "16ui": 2,
    "16i": 3,
    "32ui": 4,
    "32i": 5,
    "32f": 6,
    "64f": 7,
    "64i": 8,
    "64ui": 9,
};
const NumberTypeMap = {};
for (const key of Object.keys(NumberTypeRecord)) {
    //@ts-ignore
    NumberTypeMap[Number(NumberTypeRecord[key])] = key;
}
const TypedNumberSetFunctions = {
    "8ui": (data, index, value) => {
        data.setUint8(index, value);
    },
    "8i": (data, index, value) => {
        data.setInt8(index, value);
    },
    "16ui": (data, index, value) => {
        data.setUint16(index, value);
    },
    "16i": (data, index, value) => {
        data.setInt16(index, value);
    },
    "32ui": (data, index, value) => {
        data.setUint32(index, value);
    },
    "32i": (data, index, value) => {
        data.setInt32(index, value);
    },
    "32f": (data, index, value) => {
        data.setFloat32(index, value);
    },
    "64f": (data, index, value) => {
        data.setFloat64(index, value);
    },
    "64i": (data, index, value) => {
        data.setBigUint64(index, BigInt(value));
    },
    "64ui": (data, index, value) => {
        data.setBigUint64(index, BigInt(value));
    },
};
const TypedNumberGetFunctions = {
    "8ui": (data, index) => {
        return data.getUint8(index);
    },
    "8i": (data, index) => {
        return data.getInt8(index);
    },
    "16ui": (data, index) => {
        return data.getUint16(index);
    },
    "16i": (data, index) => {
        return data.getInt16(index);
    },
    "32ui": (data, index) => {
        return data.getUint32(index);
    },
    "32i": (data, index) => {
        return data.getInt32(index);
    },
    "32f": (data, index) => {
        return data.getFloat32(index);
    },
    "64f": (data, index) => {
        return data.getFloat64(index);
    },
    "64i": (data, index) => {
        return Number(data.getBigUint64(index));
    },
    "64ui": (data, index) => {
        return Number(data.getBigUint64(index));
    },
};
const DBTUtil = {
    setTypedNumber(data, index, numberType, value) {
        TypedNumberSetFunctions[NumberTypeMap[numberType]](data, index, value);
    },
    getTypedNumber(data, index, numberType) {
        return TypedNumberGetFunctions[NumberTypeMap[numberType]](data, index);
    },
    calculateBitsNeeded(min, max) {
        let range = max - min;
        return Math.ceil(Math.log2(range));
    },
    getTypedSize(type) {
        return NumberTypeByteSize[type];
    },
    getTypedSizeFromNumber(t) {
        return NumberTypeByteSize[NumberTypeMap[t]];
    },
    getBitValue(data, index, bitSize) {
        index *= bitSize;
        const mask = 2 ** bitSize - 1;
        return ((mask << index) & data) >>> index;
    },
    setBitValue(data, index, value, bitSize) {
        index *= bitSize;
        const mask = 2 ** bitSize - 1;
        return (data & ~(mask << index)) | ((value & mask) << index);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryTags/dist/index.js":
/*!***************************************************!*\
  !*** ../../DSLIBS/divineBinaryTags/dist/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBTUtil": () => (/* reexport safe */ _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_6__.DBTUtil),
/* harmony export */   "DivineBinaryTags": () => (/* reexport safe */ _DivineBinaryTags_js__WEBPACK_IMPORTED_MODULE_0__.DivineBinaryTags),
/* harmony export */   "NumberTypeMap": () => (/* reexport safe */ _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_6__.NumberTypeMap),
/* harmony export */   "NumberTypeRecord": () => (/* reexport safe */ _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_6__.NumberTypeRecord),
/* harmony export */   "RemoteTagManager": () => (/* reexport safe */ _RemoteTagManager_js__WEBPACK_IMPORTED_MODULE_1__.RemoteTagManager),
/* harmony export */   "TagManager": () => (/* reexport safe */ _TagManager_js__WEBPACK_IMPORTED_MODULE_2__.TagManager),
/* harmony export */   "TagManagerBase": () => (/* reexport safe */ _Classes_TagManagerBase_js__WEBPACK_IMPORTED_MODULE_3__.TagManagerBase),
/* harmony export */   "TagNodeTypes": () => (/* reexport safe */ _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_6__.TagNodeTypes)
/* harmony export */ });
/* harmony import */ var _DivineBinaryTags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DivineBinaryTags.js */ "../../DSLIBS/divineBinaryTags/dist/DivineBinaryTags.js");
/* harmony import */ var _RemoteTagManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoteTagManager.js */ "../../DSLIBS/divineBinaryTags/dist/RemoteTagManager.js");
/* harmony import */ var _TagManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagManager.js */ "../../DSLIBS/divineBinaryTags/dist/TagManager.js");
/* harmony import */ var _Classes_TagManagerBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classes/TagManagerBase.js */ "../../DSLIBS/divineBinaryTags/dist/Classes/TagManagerBase.js");
/* harmony import */ var _Types_DBTSchema_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Types/DBTSchema.types.js */ "../../DSLIBS/divineBinaryTags/dist/Types/DBTSchema.types.js");
/* harmony import */ var _Types_Util_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Types/Util.types.js */ "../../DSLIBS/divineBinaryTags/dist/Types/Util.types.js");
/* harmony import */ var _Util_DBTUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Util/DBTUtil.js */ "../../DSLIBS/divineBinaryTags/dist/Util/DBTUtil.js");









/***/ }),

/***/ "../../DSLIBS/divineHooks/dist/Classes/AsyncHook.js":
/*!**********************************************************!*\
  !*** ../../DSLIBS/divineHooks/dist/Classes/AsyncHook.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncHook": () => (/* binding */ AsyncHook)
/* harmony export */ });
class AsyncHook {
    _onRun = [];
    async run(data) {
        let returnData = false;
        for (const run of this._onRun) {
            returnData = await run(data);
        }
        return returnData;
    }
    addToRun(run) {
        this._onRun.push(run);
    }
}


/***/ }),

/***/ "../../DSLIBS/divineHooks/dist/Classes/SyncHook.js":
/*!*********************************************************!*\
  !*** ../../DSLIBS/divineHooks/dist/Classes/SyncHook.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncHook": () => (/* binding */ SyncHook)
/* harmony export */ });
class SyncHook {
    _onRun = [];
    run(data) {
        let returnData = false;
        for (const run of this._onRun) {
            returnData = run(data);
        }
        return returnData;
    }
    addToRun(run) {
        this._onRun.push(run);
    }
}


/***/ }),

/***/ "../../DSLIBS/divineHooks/dist/Hooks.js":
/*!**********************************************!*\
  !*** ../../DSLIBS/divineHooks/dist/Hooks.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hooks": () => (/* binding */ Hooks)
/* harmony export */ });
/* harmony import */ var _Classes_AsyncHook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/AsyncHook.js */ "../../DSLIBS/divineHooks/dist/Classes/AsyncHook.js");
/* harmony import */ var _Classes_SyncHook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/SyncHook.js */ "../../DSLIBS/divineHooks/dist/Classes/SyncHook.js");


const Hooks = {
    getAsyncHook() {
        return new _Classes_AsyncHook_js__WEBPACK_IMPORTED_MODULE_0__.AsyncHook();
    },
    getSyncHook() {
        return new _Classes_SyncHook_js__WEBPACK_IMPORTED_MODULE_1__.SyncHook();
    },
};


/***/ }),

/***/ "../../DSLIBS/divineHooks/dist/index.js":
/*!**********************************************!*\
  !*** ../../DSLIBS/divineHooks/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hooks": () => (/* reexport safe */ _Hooks_js__WEBPACK_IMPORTED_MODULE_0__.Hooks)
/* harmony export */ });
/* harmony import */ var _Hooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hooks.js */ "../../DSLIBS/divineHooks/dist/Hooks.js");



/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/DataSync.js":
/*!********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Common/Threads/Contracts/DataSync.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSyncTypes": () => (/* binding */ DataSyncTypes)
/* harmony export */ });
const DataSyncTypes = {
    chunk: 0,
    column: 1,
    region: 2,
    regionHeader: 2,
    voxelPalette: 3,
    voxelTags: 4,
    materials: 4,
    colliders: 4,
    dimesnion: 5,
    chunkTags: 6,
    columnTags: 7,
    regionTags: 8,
    registerStringMap: 0,
};
let index = 0;
for (const key of Object.keys(DataSyncTypes)) {
    DataSyncTypes[key] = index;
    index++;
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/ChunkTagIds.js":
/*!******************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/ChunkTagIds.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChunkTagIDs": () => (/* binding */ ChunkTagIDs)
/* harmony export */ });
const ChunkTagIDs = {
    minHeight: "#dve_min_height",
    maxHeight: "#dve_max_height",
    heightMap: "#dve_height_map",
    voxelIDSegment: "#dve_voxel_id",
    voxelLightSegment: "#dve_voxel_light",
    voxelStateSegment: "#dve_voxel_state",
    voxelSecondaryIDSegment: "#dve_voxel_secondary_id",
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/VoxelTagIds.js":
/*!******************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/VoxelTagIds.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelTagIDs": () => (/* binding */ VoxelTagIDs)
/* harmony export */ });
const VoxelTagIDs = {
    substance: "#dve_substance",
    shapeID: "#dve_shape_id",
    material: "#dve_material",
    hardness: "#dve_hardness",
    colliderID: "#dve_collider_id",
    checkCollisions: "#dve_check_collisions",
    isLightSource: "#dve_is_light_source",
    lightValue: "#dve_light_value",
    isRich: "#dve_is_rich",
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/WorldDataTagIds.js":
/*!**********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/WorldDataTagIds.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldDataTagIDs": () => (/* binding */ WorldDataTagIDs)
/* harmony export */ });
const WorldDataTagIDs = {
    header: "#dve_header",
    dataType: "#dve_data_type",
    dimensionId: "#dve_dimension_id",
    positionX: "#dve_p_x",
    positionY: "#dve_p_y",
    positionZ: "#dve_p_z",
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js":
/*!************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$2dMooreNeighborhood": () => (/* binding */ $2dMooreNeighborhood),
/* harmony export */   "$3dCardinalNeighbors": () => (/* binding */ $3dCardinalNeighbors),
/* harmony export */   "$3dMooreNeighborhood": () => (/* binding */ $3dMooreNeighborhood)
/* harmony export */ });
const $3dMooreNeighborhood = [];
const $2dMooreNeighborhood = [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [1, -1],
    [-1, 1],
];
const $3dCardinalNeighbors = [
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0],
    [0, 0, -1],
    [0, 0, 1],
];
for (let y = -1; y < 2; y++) {
    for (const n of $2dMooreNeighborhood) {
        $3dMooreNeighborhood.push([n[0], y, n[1]]);
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/DataHooks.js":
/*!*************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/DataHooks.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataHooks": () => (/* binding */ DataHooks)
/* harmony export */ });
/* harmony import */ var divine_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-hooks */ "../../DSLIBS/divineHooks/dist/index.js");

const DataHooks = {
    dimension: {
        onRegisterDimension: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
    },
    chunk: {
        onGetAsync: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getAsyncHook(),
        onGetSync: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
        onNew: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getAsyncHook(),
        onRemove: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
    },
    column: {
        onGetAsync: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getAsyncHook(),
        onGetSync: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
        onNew: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getAsyncHook(),
        onRemove: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
    },
    region: {
        onGetAsync: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getAsyncHook(),
        onGetSync: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
        onNew: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getAsyncHook(),
        onRemove: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
    },
    paint: {
        onAddToRGBUpdate: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
        onRichVoxelPaint: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
    },
    settingsSynced: divine_hooks__WEBPACK_IMPORTED_MODULE_0__.Hooks.getSyncHook(),
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/DataManager.js":
/*!***************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/DataManager.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataManager": () => (/* binding */ DataManager)
/* harmony export */ });
/* harmony import */ var _World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World/Dimensions/DimensionsRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Dimensions/DimensionsRegister.js");
/* harmony import */ var _Register_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register/Register.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Register/Register.js");
/* harmony import */ var _Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Voxel/VoxelTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelTags.js");
/* harmony import */ var _World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./World/WorldBounds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldBounds.js");
/* harmony import */ var _World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./World/WorldPainter.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldPainter.js");
/* harmony import */ var _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./World/Chunk/ChunkTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Chunk/ChunkTags.js");
/* harmony import */ var _World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./World/Column/ColumnTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Column/ColumnTags.js");
/* harmony import */ var _World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./World/Region/RegionTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionTags.js");
/* harmony import */ var _World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./World/Region/RegionHeaderRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionHeaderRegister.js");











const DataManager = {
    dimensions: _World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_0__.DimensionsRegister,
    voxelTags: _Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags,
    world: _World_WorldPainter_js__WEBPACK_IMPORTED_MODULE_4__.WorldPainter,
    worldRegister: _World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_5__.WorldRegister,
    columnTags: _World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_7__.ColumnTags,
    worldBounds: _World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_3__.WorldBounds,
    spaces: _World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_9__.WorldSpaces,
    register: _Register_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register,
    chunkTags: _World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_6__.ChunkTags,
    regionTags: _World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_8__.RegionTags,
    regionHeaderReigster: _World_Region_RegionHeaderRegister_js__WEBPACK_IMPORTED_MODULE_10__.RegionHeaderRegister,
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js":
/*!*******************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LightData": () => (/* binding */ LightData)
/* harmony export */ });
/**# Light Byte
 * ---
 * Used to decode light color info.
 */
const LightData = {
    SRS: 2,
    _lightValues: [0, 0, 0, 0],
    getS(value) {
        return value & 0xf;
    },
    getR(value) {
        return (value & (0xf << 4)) >> 4;
    },
    getG(value) {
        return (value & (0xf << 8)) >> 8;
    },
    getB(value) {
        return (value & (0xf << 12)) >> 12;
    },
    setS(value, sl) {
        return (sl & ~0xf) | value;
    },
    setR(value, sl) {
        return (sl & ~(0xf << 4)) | (value << 4);
    },
    setG(value, sl) {
        return (sl & ~(0xf << 8)) | (value << 8);
    },
    setB(value, sl) {
        return (sl & ~(0xf << 12)) | (value << 12);
    },
    removeS(sl) {
        return this.setS(0, sl);
    },
    hasRGBLight(sl) {
        if (sl <= 0)
            return false;
        if (this.getR(sl) > 0)
            return true;
        if (this.getG(sl) > 0)
            return true;
        if (this.getB(sl) > 0)
            return true;
        return false;
    },
    hasSunLight(sl) {
        if (sl <= 0)
            return false;
        if (this.getS(sl) > 0)
            return true;
        return false;
    },
    mixLight(l1, l2) {
        const s1 = this.getS(l1);
        const s2 = this.getS(l2);
        const s = s1 < s2 ? s2 : s1;
        const r1 = this.getR(l1);
        const r2 = this.getR(l2);
        const r = r1 < r2 ? r2 : r1;
        const g1 = this.getG(l1);
        const g2 = this.getG(l2);
        const g = g1 < g2 ? g2 : g1;
        const b1 = this.getB(l1);
        const b2 = this.getB(l2);
        const b = b1 < b2 ? b2 : b1;
        let nl = this.setS(s, 0);
        nl = this.setR(r, nl);
        nl = this.setG(g, nl);
        nl = this.setB(b, nl);
        return nl;
    },
    getRGB(sl) {
        if (sl < 0)
            return 0;
        return (sl & 0xfff0) >> 4;
    },
    setRGB(value, sl) {
        if (sl < 0)
            return 0;
        return (sl & ~0xfff0) | (value << 4);
    },
    decodeLightFromVoxelData(voxelData) {
        return (voxelData & (0xffff << 0)) >> 0;
    },
    encodeLightIntoVoxelData(voxelData, encodedLight) {
        return (voxelData & ~(0xffff << 0)) | (encodedLight << 0);
    },
    /**# Set Light Values
     * ---
     * Give an array of light values it will return an encoded light number.
     * @param values
     */
    setLightValues(values) {
        let value = this.setS(values[0], 0);
        value = this.setR(values[1], value);
        value = this.setG(values[2], value);
        return this.setB(values[3], value);
    },
    /**# Get Light Values
     * ---
     * Given an encoded light number it will return an array of its values.
     * - 0: Sun Light
     * - 1: Red Light
     * - 2: Green Light
     * - 3: Blue Light
     * @param value
     */
    getLightValues(value) {
        this._lightValues[0] = this.getS(value);
        this._lightValues[1] = this.getR(value);
        this._lightValues[2] = this.getG(value);
        this._lightValues[3] = this.getB(value);
        return this._lightValues;
    },
    /**# Is Less Than For RGB Remove
     * ---
     * Compares values for the RGB encoded light values.
     * Used for RGB light remove.
     * @param n1
     * @param n2
     */
    isLessThanForRGBRemove(n1, n2) {
        let r1 = this.getR(n1);
        let g1 = this.getG(n1);
        let b1 = this.getB(n1);
        let r2 = this.getR(n2);
        let g2 = this.getG(n2);
        let b2 = this.getB(n2);
        return r1 < r2 || g1 < g2 || b1 < b2;
    },
    /**# Is Less Than For RGB Add
     * ---
     * Compares values for the RGB encoded light values.
     * Used for RGB light add.
     * @param n1
     * @param n2
     */
    isLessThanForRGBAdd(n1, n2) {
        let r1 = this.getR(n1) + 2;
        let g1 = this.getG(n1) + 2;
        let b1 = this.getB(n1) + 2;
        let r2 = this.getR(n2);
        let g2 = this.getG(n2);
        let b2 = this.getB(n2);
        return r1 <= r2 || g1 <= g2 || b1 <= b2;
    },
    /**# Is Greater Or Equal Than For RGB Remove
     * ---
     * Compares values for the RGB encoded light values.
     * Used for RGB light remove.
     * @param n1
     * @param n2
     */
    isGreaterOrEqualThanForRGBRemove(n1, n2) {
        let r1 = this.getR(n1);
        let g1 = this.getG(n1);
        let b1 = this.getB(n1);
        let r2 = this.getR(n2);
        let g2 = this.getG(n2);
        let b2 = this.getB(n2);
        return r1 >= r2 || g1 >= g2 || b1 >= b2;
    },
    /**# Get Minus One For RGB
     * ---
     * Returns the RGB light values minus one.
     * @param sl - source light value
     */
    getMinusOneForRGB(sl, nl) {
        let s = this.getS(nl);
        let r = this.getR(sl) - 1;
        if (r < 0)
            r = 0;
        let rn = this.getR(nl);
        if (r < rn) {
            r = rn;
        }
        let g = this.getG(sl) - 1;
        if (g < 0)
            g = 0;
        let gn = this.getG(nl);
        if (g < gn) {
            g = gn;
        }
        let b = this.getB(sl) - 1;
        if (b < 0)
            b = 0;
        let bn = this.getB(nl);
        if (b < bn) {
            b = bn;
        }
        let bv = 0;
        bv = this.setS(s, bv);
        bv = this.setR(r, bv);
        bv = this.setG(g, bv);
        bv = this.setB(b, bv);
        return bv;
    },
    /**# Remove RGB Light
     * ---
     * Removes all RGB light from an encoded light value.
     * @param sl - source light value
     */
    removeRGBLight(sl) {
        let s = this.getS(sl);
        let bv = 0;
        bv = this.setR(0, bv);
        bv = this.setG(0, bv);
        bv = this.setB(0, bv);
        bv = this.setS(s, bv);
        return bv;
    },
    /**# Get Full Sun Light
     * --
     * Alters the encoded light number passed to it to give it full sun light.
     * @param sl - source light value
     */
    getFullSunLight(sl) {
        return sl | 0b1111;
    },
    /**# Is Less Than For Sun Add
     * ---
     * Used to calculate sun light addition.
     * Used to check all neighbors expect down.
     * @param n1
     * @param n2
     */
    isLessThanForSunAdd(n1, n2) {
        let sl1 = this.getS(n1);
        let sl2 = this.getS(n2);
        return sl1 + this.SRS < sl2;
    },
    /**# Is Less Than For Sun Add Down
     *
     * Used to calculate sun light addition.
     * Used to check only the down neighbor.
     * @param n1
     * @param n2
     */
    isLessThanForSunAddDown(n1, n2) {
        let sl1 = this.getS(n1);
        let sl2 = this.getS(n2);
        if (sl2 == 0xf) {
            return sl1 < sl2;
        }
        return sl1 + this.SRS < sl2;
    },
    isLessThanForSunAddUp(n1, n2) {
        let sl1 = this.getS(n1);
        let sl2 = this.getS(n2);
        if (sl1 == sl2)
            return false;
        if (sl2 == 0xf || sl1 == 0xf)
            return false;
        return sl1 + this.SRS < sl2;
    },
    /**# Get Sun Light For Under Voxel
     * ---
     * Gets the sun light value for sun light addition when setting the
     * down neighbor.
     * @param currentVoxel
     */
    getSunLightForUnderVoxel(sl, nl) {
        let s = this.getS(sl);
        let sn = this.getS(nl);
        if (s == 15) {
            sn = s;
        }
        if (s < 15) {
            sn = s - this.SRS;
        }
        let r = this.getR(nl);
        let g = this.getG(nl);
        let b = this.getB(nl);
        let bv = 0;
        bv = this.setS(sn, bv);
        bv = this.setR(r, bv);
        bv = this.setG(g, bv);
        bv = this.setB(b, bv);
        return bv;
    },
    /**# Get Minus One For Sun
     * ---
     * Returns the sun light level passed to it minus one.
     * Used for sun light addition on all neighbors expect the down one.
     * @param sl - source light value
     */
    getMinusOneForSun(sl, nl) {
        let s = this.getS(sl) - this.SRS;
        if (s < 0)
            s = 0;
        let sn = this.getS(nl);
        if (s < sn) {
            s = sn;
        }
        let r = this.getR(nl);
        let g = this.getG(nl);
        let b = this.getB(nl);
        let bv = 0;
        bv = this.setS(s, bv);
        bv = this.setR(r, bv);
        bv = this.setG(g, bv);
        bv = this.setB(b, bv);
        return bv;
    },
    /**# Is Less Than For Sun Remove
     * ---
     * Compares two encoded light values sun light values.
     * Used for sun light removal.
     * @param n1
     * @param sl - source light value
     */
    isLessThanForSunRemove(n1, sl) {
        let s1 = this.getS(n1);
        let s2 = this.getS(sl);
        return s1 < s2;
    },
    /**# Is Greater Or Equal Than For Sun Remove
     * ---
     * Compares two encoded light values sun light values.
     * Used for sun light removal.
     * @param n1
     * @param sl - source light value
     */
    isGreaterOrEqualThanForSunRemove(n1, sl) {
        let s1 = this.getS(n1);
        let s2 = this.getS(sl);
        return s1 >= s2;
    },
    /**# Sun Light Compare For Down Sun Remove
     * ---
     * Compares two encoded light values sun light values.
     * Used for sun light removal in the downward direction only.
     * @param n1
     * @param sl - source light value
     */
    sunLightCompareForDownSunRemove(n1, sl) {
        let s2 = this.getS(sl);
        if (s2 == 0xf)
            return true;
        let s1 = this.getS(n1);
        return s1 < s2;
    },
    /**# Remove Sun Light
     * ---
     * Removes the sun light from a light encoded value.
     * @param sl - source light value
     */
    removeSunLight(sl) {
        return this.removeS(sl);
    },
    minusOneForAll(sl) {
        let s = this.getS(sl) - this.SRS;
        let r = this.getR(sl) - 1;
        let g = this.getG(sl) - 1;
        let b = this.getB(sl) - 1;
        if (s < 0)
            s = 0;
        if (r < 0)
            r = 0;
        if (g < 0)
            g = 0;
        if (b < 0)
            b = 0;
        let nl = this.setS(s, 0);
        nl = this.setR(r, nl);
        nl = this.setG(g, nl);
        nl = this.setB(b, nl);
        return nl;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Register/Register.js":
/*!*********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Register/Register.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register": () => (/* binding */ Register)
/* harmony export */ });
const Register = {
    stringMaps: {
        segments: new Map(),
        syncStringMap(data) {
            const [segment, id, value] = data;
            let segmentMap = this.segments.get(segment);
            if (!segmentMap) {
                segmentMap = new Map();
                this.segments.set(segment, segmentMap);
            }
            segmentMap.set(id, value);
            return;
        },
        getStringMapValue(segment, id, index) {
            const segmentMap = this.segments.get(segment);
            if (!segmentMap)
                return "";
            const map = segmentMap.get(id);
            if (!map) {
                // throw new Error(`${id} does not exists`);
                return "";
            }
            return map[index];
        },
    },
};
Register.stringMaps.segments.set("voxel", new Map());


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelPalette.js":
/*!**********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelPalette.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelPaletteReader": () => (/* binding */ VoxelPaletteReader)
/* harmony export */ });
const VoxelPaletteReader = {
    _palette: ["dve_air", "dve_barrier"],
    _map: new Map(),
    setVoxelPalette(voxelPalette, voxelPaletteMap) {
        this._palette = voxelPalette;
        this._map = new Map(Object.entries(voxelPaletteMap));
    },
    id: {
        stringFromNumber(id) {
            return VoxelPaletteReader._palette[id];
        },
        numberFromString(id) {
            return VoxelPaletteReader._map.get(id);
        },
        getPaletteId(voxelId, voxelState) {
            const numericID = VoxelPaletteReader._map.get(voxelId);
            if (numericID == undefined)
                return -1;
            const stateId = voxelState + numericID;
            if (VoxelPaletteReader._palette[stateId] != voxelId) {
                throw new Error(`${voxelState} is not a valid state for voxel with id : ${voxelId}`);
            }
            if (stateId) {
                return stateId;
            }
            return -1;
        },
        baseNumeric(id) {
            if (id < 2)
                return id;
            const vid = this.numberFromString(this.stringFromNumber(id));
            if (!vid)
                return -1;
            return vid;
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelReader.js":
/*!*********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelReader.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelReader": () => (/* binding */ VoxelReader)
/* harmony export */ });
const voxelStateMasks = {
    level: 0b00_1111,
    levelState: 0b11_0000,
    shapeState: 0b1111_1111_11_00_0000,
};
/**# Voxel Byte
 * ---
 * Used to decode voxel data.
 */
const VoxelReader = {
    getLevel(stateData) {
        return stateData & voxelStateMasks.level;
    },
    setLevel(stateData, level) {
        return (stateData & ~voxelStateMasks.level) | level;
    },
    getLevelState(stateData) {
        return (stateData & voxelStateMasks.levelState) >> 4;
    },
    setLevelState(stateData, levelState) {
        return (stateData & ~voxelStateMasks.levelState) | (levelState << 4);
    },
    getShapeState(voxelData) {
        return (voxelData & voxelStateMasks.shapeState) >> 6;
    },
    setShapeState(voxelData, shapeState) {
        return (voxelData & ~voxelStateMasks.shapeState) | (shapeState << 6);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelTags.js":
/*!*******************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelTags.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelTags": () => (/* binding */ VoxelTags)
/* harmony export */ });
/* harmony import */ var divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-binary-tags */ "../../DSLIBS/divineBinaryTags/dist/index.js");

class VDTags extends divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__.RemoteTagManager {
    id;
    voxelIndex = new Uint16Array();
    constructor(id) {
        super(id);
        this.id = id;
    }
    sync(voxelMap) {
        this.voxelIndex = voxelMap;
    }
    setVoxel(id) {
        const index = this.voxelIndex[id];
        this.setTagIndex(index);
    }
}
const VoxelTags = new VDTags("voxel-data");


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Chunk/ChunkTags.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/Chunk/ChunkTags.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChunkTags": () => (/* binding */ ChunkTags)
/* harmony export */ });
/* harmony import */ var divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-binary-tags */ "../../DSLIBS/divineBinaryTags/dist/index.js");

const ChunkTags = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__.RemoteTagManager("chunk-tags");


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Column/ColumnTags.js":
/*!***************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/Column/ColumnTags.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnTags": () => (/* binding */ ColumnTags)
/* harmony export */ });
/* harmony import */ var divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-binary-tags */ "../../DSLIBS/divineBinaryTags/dist/index.js");

const ColumnTags = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__.RemoteTagManager("column-tags");


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Dimensions/DimensionsRegister.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/Dimensions/DimensionsRegister.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimensionsRegister": () => (/* binding */ DimensionsRegister)
/* harmony export */ });
/* harmony import */ var _DataHooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataHooks.js");
/* harmony import */ var _WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");


const DimensionsRegister = {
    _count: 1,
    dimensionRecord: {
        main: 0,
    },
    dimensionMap: {
        0: "main",
    },
    __defaultDimensionOptions: {
        liquidFlowSpeed: 0.1,
        magmaFlowSpeed: 0.1,
        sunLight: true,
    },
    _dimensions: {},
    registerDimension(id, option) {
        if (!option) {
            option = this.__defaultDimensionOptions;
        }
        const dimensionData = {
            id: id,
            options: option,
        };
        this._dimensions[id] = dimensionData;
        this.dimensionRecord[id] = this._count;
        this.dimensionMap[this._count] = id;
        _DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.dimension.onRegisterDimension.run(dimensionData);
        _WorldRegister_js__WEBPACK_IMPORTED_MODULE_1__.WorldRegister.dimensions.add(id);
    },
    getDimension(id) {
        id = this.getDimensionStringId(id);
        return this._dimensions[id];
    },
    getDimensionStringId(id) {
        if (typeof id == "number") {
            return this.dimensionMap[id];
        }
        return id;
    },
    getDimensionNumericId(id) {
        if (typeof id == "string") {
            return this.dimensionRecord[id];
        }
        return id;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionHeaderRegister.js":
/*!*************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionHeaderRegister.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionHeaderRegister": () => (/* binding */ RegionHeaderRegister)
/* harmony export */ });
/* harmony import */ var _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _RegionTags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegionTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionTags.js");


const RegionHeaderRegister = {
    _headers: new Map(),
    remove(location) {
        const [dimensionId, x, y, z] = location;
        const dimension = this._headers.get(dimensionId);
        if (!dimension)
            return false;
        const regionKey = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.region.getKeyXYZ(x, y, z);
        return dimension.delete(regionKey);
    },
    add(location, buffer) {
        const [dimensionId, x, y, z] = location;
        let dimension = this._headers.get(dimensionId);
        if (!dimension) {
            dimension = new Map();
            this._headers.set(dimensionId, dimension);
        }
        const regionKey = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.region.getKeyXYZ(x, y, z);
        dimension.set(regionKey, {
            buffer: buffer,
            data: new DataView(buffer),
        });
    },
    get(location) {
        const [dimensionId, x, y, z] = location;
        let dimension = this._headers.get(dimensionId);
        if (!dimension)
            return false;
        return dimension.get(_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.region.getKeyXYZ(x, y, z));
    },
    /**# isStored
     * @param location
     * @returns
     *
     * Returns 1 if stored
     *
     * Returns 0 if not stored
     *
     * Returns -1 if region header is not loaded
     *
     */
    isStored(location) {
        const header = this.get(location);
        if (!header)
            return -1;
        _RegionTags_js__WEBPACK_IMPORTED_MODULE_1__.RegionHeaderTags.setBuffer(header.data);
        const columnIndex = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_0__.WorldSpaces.column.getIndexXYZ(location[1], location[2], location[3]);
        return _RegionTags_js__WEBPACK_IMPORTED_MODULE_1__.RegionHeaderTags.getArrayTagValue("#dved-column-save-timestamp", columnIndex) != 0
            ? 1
            : 0;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionTags.js":
/*!***************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionTags.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionHeaderTags": () => (/* binding */ RegionHeaderTags),
/* harmony export */   "RegionTags": () => (/* binding */ RegionTags)
/* harmony export */ });
/* harmony import */ var divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-binary-tags */ "../../DSLIBS/divineBinaryTags/dist/index.js");

const RegionTags = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__.RemoteTagManager("region-tags");
const RegionHeaderTags = new divine_binary_tags__WEBPACK_IMPORTED_MODULE_0__.RemoteTagManager("region-header-tags");


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldPainter.js":
/*!**********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldPainter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldPainter": () => (/* binding */ WorldPainter)
/* harmony export */ });
/* harmony import */ var _WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _DataHooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataHooks.js");
/* harmony import */ var _Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Voxel/VoxelPalette.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelPalette.js");
/* harmony import */ var _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tools/Data/DataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js");




const WP = {
    _currentionDimension: "main",
    paint: {
        _dt: new _Tools_Data_DataTool_js__WEBPACK_IMPORTED_MODULE_3__.DataTool(),
        voxel(location, data, update = true) {
            if (!location[0]) {
                location[0] = WP._currentionDimension;
            }
            let chunk = _WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.chunk.get(location);
            if (!chunk) {
                let buffer = _DataHooks_js__WEBPACK_IMPORTED_MODULE_1__.DataHooks.chunk.onGetSync.run(location);
                if (!buffer)
                    return;
                chunk = _WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.chunk.add(location, buffer);
            }
            this.__paint(location, data, update);
        },
        __paint(location, data, update = true) {
            this._dt.setLocation(location);
            if (!this._dt.setLocation(location).loadIn())
                return;
            const id = _Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_2__.VoxelPaletteReader.id.getPaletteId(data.id, data.state ? data.state : 0);
            if (id < 0)
                return false;
            this._dt.setId(id);
            this._dt.setShapeState(data.shapeState ? data.shapeState : 0);
            const substance = this._dt.getSubstance();
            if (substance == "#dve_liquid" || substance == "#dve_magma") {
                this._dt.setLevel(15);
            }
            if (data.secondaryVoxelId && data.secondaryVoxelId != "dve_air") {
                const vid = _Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_2__.VoxelPaletteReader.id.getPaletteId(data.secondaryVoxelId, data.secondaryState ? data.secondaryState : 0);
                if (vid > 0) {
                    this._dt.setSecondary(true);
                    this._dt.setId(vid);
                    this._dt.setSecondary(false);
                }
            }
            if (this._dt.isLightSource() && this._dt.getLightSourceValue()) {
                this._dt.setLight(this._dt.getLightSourceValue());
                if (update) {
                    _DataHooks_js__WEBPACK_IMPORTED_MODULE_1__.DataHooks.paint.onAddToRGBUpdate.run(location);
                }
            }
            if (this._dt.isRich()) {
                _DataHooks_js__WEBPACK_IMPORTED_MODULE_1__.DataHooks.paint.onRichVoxelPaint.run([this._dt.getStringId(), location]);
            }
            this._dt.commit(1);
        },
        erase(location) {
            this._dt.setLocation(location);
            if (!this._dt.loadIn())
                return;
            if (!this._dt.isRenderable())
                return;
            this._dt
                .setLight(0)
                .setLevel(0)
                .setLevelState(0)
                .setShapeState(0)
                .setAir()
                .commit(2);
        },
    },
};
const WorldPainter = WP;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js":
/*!***********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldRegister": () => (/* binding */ WorldRegister)
/* harmony export */ });
/* harmony import */ var _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Data/DataHooks.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/DataHooks.js");
/* harmony import */ var _WorldBounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorldBounds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldBounds.js");
/* harmony import */ var _Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants/Util/CardinalNeighbors.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Util/CardinalNeighbors.js");
/* harmony import */ var _Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dimensions/DimensionsRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Dimensions/DimensionsRegister.js");
/* harmony import */ var _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Tools/Data/WorldData/ColumnDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js");
/* harmony import */ var _Tools_Data_WorldData_RegionDataTool_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Tools/Data/WorldData/RegionDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/RegionDataTool.js");
/* harmony import */ var _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");








const chunkTool = new _Tools_Data_WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_4__.ChunkDataTool();
const columnTool = new _Tools_Data_WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_5__.ColumnDataTool();
const regionTool = new _Tools_Data_WorldData_RegionDataTool_js__WEBPACK_IMPORTED_MODULE_6__.RegionDataTool();
const WorldRegister = {
    _dimensions: new Map(),
    _cacheOn: false,
    _chunkCache: new Map(),
    _columnCache: new Map(),
    cache: {
        enable() {
            WorldRegister._cacheOn = true;
            WorldRegister._chunkCache.clear();
            WorldRegister._columnCache.clear();
        },
        disable() {
            WorldRegister._cacheOn = false;
            WorldRegister._chunkCache.clear();
            WorldRegister._columnCache.clear();
        },
        _addChunk(key, data) {
            WorldRegister._chunkCache.set(key, data);
        },
        _addColumn(key, data) {
            WorldRegister._columnCache.set(key, data);
        },
        _getChunk(key) {
            return WorldRegister._chunkCache.get(key);
        },
        _getColumn(key) {
            return WorldRegister._columnCache.get(key);
        },
    },
    dimensions: {
        add(id) {
            const dimesnion = new Map();
            id = _Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_3__.DimensionsRegister.getDimensionStringId(id);
            WorldRegister._dimensions.set(id, dimesnion);
            return dimesnion;
        },
        get(id) {
            id = _Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_3__.DimensionsRegister.getDimensionStringId(id);
            return WorldRegister._dimensions.get(id);
        },
    },
    region: {
        add(location, sab) {
            let dimension = WorldRegister.dimensions.get(location[0]);
            if (!dimension) {
                dimension = WorldRegister.dimensions.add(location[0]);
            }
            const region = this._getRegionData(sab);
            const regionPOS = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.region.getPositionLocation(location);
            regionTool.setRegion(region);
            regionTool.setPositionData(regionPOS.x, regionPOS.y, regionPOS.z);
            regionTool.setDimensionId(location[0]);
            dimension.set(_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.region.getKey(), region);
            return region;
        },
        _getRegionData(sab) {
            return {
                columns: new Map(),
                buffer: sab,
                data: new DataView(sab),
            };
        },
        get(location) {
            const dimension = WorldRegister.dimensions.get(location[0]);
            if (!dimension)
                return false;
            const region = dimension.get(_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.region.getKeyLocation(location));
            if (!region)
                return false;
            return region;
        },
        remove(location) {
            const dimension = WorldRegister.dimensions.get(location[0]);
            if (!dimension)
                return false;
            const key = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.region.getKeyLocation(location);
            const region = dimension.get(key);
            if (!region)
                return false;
            dimension.delete(key);
            return true;
        },
    },
    column: {
        add(location, sab) {
            let region = WorldRegister.region.get(location);
            if (!region) {
                let buffer = _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.region.onGetSync.run(location);
                if (!buffer)
                    return;
                region = WorldRegister.region.add(location, buffer);
                _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.region.onNew.run(location);
            }
            const column = this._getColumnData(sab);
            const columnPOS = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.column.getPositionLocation(location);
            columnTool.setColumn(column);
            columnTool.setPositionData(columnPOS.x, columnPOS.y, columnPOS.z);
            columnTool.setDimensionId(location[0]);
            region.columns.set(_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.column.getIndex(), column);
            return column;
        },
        _getColumnData(sab) {
            return {
                chunks: new Map(),
                buffer: sab,
                data: new DataView(sab),
            };
        },
        get(location) {
            const columnKey = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.column.getKeyLocation(location);
            let addColumn = false;
            if (WorldRegister._cacheOn) {
                const column = WorldRegister.cache._getColumn(columnKey);
                if (column)
                    return column;
                addColumn = true;
            }
            const region = WorldRegister.region.get(location);
            if (!region)
                return false;
            const column = region.columns.get(_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.column.getIndexLocation(location));
            if (!column)
                return false;
            if (addColumn) {
                WorldRegister.cache._addColumn(columnKey, column);
            }
            return column;
        },
        remove(location) {
            const region = WorldRegister.region.get(location);
            if (!region)
                return false;
            const index = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.column.getIndexLocation(location);
            const column = region.columns.get(index);
            if (!column)
                return false;
            region.columns.delete(index);
            return true;
        },
        fill(location) {
            for (let cy = _WorldBounds_js__WEBPACK_IMPORTED_MODULE_1__.WorldBounds.bounds.MinY; cy < _WorldBounds_js__WEBPACK_IMPORTED_MODULE_1__.WorldBounds.bounds.MaxY; cy += _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk._bounds.y) {
                location[2] = cy;
                if (!WorldRegister.chunk.get(location)) {
                    const chunk = _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.chunk.onGetSync.run(location);
                    if (!chunk)
                        continue;
                    WorldRegister.chunk.add(location, chunk);
                }
            }
        },
        height: {
            getRelative(location) {
                location = [...location];
                const chunkWidth = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk._bounds.x;
                const chunkDepth = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk._bounds.z;
                let maxHeight = -Infinity;
                const [dimension, x, y, z] = location;
                for (const check of _Constants_Util_CardinalNeighbors_js__WEBPACK_IMPORTED_MODULE_2__.$2dMooreNeighborhood) {
                    location[1] = check[0] * chunkWidth + x;
                    location[3] = check[1] * chunkDepth + z;
                    const height = this.getAbsolute(location);
                    if (height > maxHeight) {
                        maxHeight = height;
                    }
                }
                return maxHeight;
            },
            getAbsolute(location) {
                const column = WorldRegister.column.get(location);
                if (!column)
                    return _WorldBounds_js__WEBPACK_IMPORTED_MODULE_1__.WorldBounds.bounds.MinY;
                if (column.chunks.size == 0)
                    return _WorldBounds_js__WEBPACK_IMPORTED_MODULE_1__.WorldBounds.bounds.MinY;
                let maxHeight = _WorldBounds_js__WEBPACK_IMPORTED_MODULE_1__.WorldBounds.bounds.MinY;
                for (const [key, chunk] of column.chunks) {
                    if (!chunk)
                        continue;
                    chunkTool.setChunk(chunk);
                    const chunkPOS = chunkTool.getPositionData();
                    let chunkMax = chunkTool.getTagValue("#dve_max_height");
                    if (chunkMax == 0)
                        continue;
                    chunkMax += chunkPOS.y;
                    if (maxHeight < chunkMax) {
                        maxHeight = chunkMax;
                    }
                }
                return maxHeight + 1;
            },
        },
    },
    chunk: {
        add(location, sab) {
            let column = WorldRegister.column.get(location);
            if (!column) {
                let buffer = _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.column.onGetSync.run(location);
                if (!buffer)
                    return;
                column = WorldRegister.column.add(location, buffer);
                _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.column.onNew.run(location);
            }
            if (!column)
                return;
            const chunk = this._getChunkData(sab);
            chunkTool.setChunk(chunk);
            const chunkPOS = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk.getPositionLocation(location);
            chunkTool.setPositionData(chunkPOS.x, chunkPOS.y, chunkPOS.z);
            chunkTool.setDimensionId(location[0]);
            column.chunks.set(_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk.getIndex(), chunk);
            _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.chunk.onNew.run(location);
            return chunk;
        },
        _getChunkData(sab) {
            return {
                buffer: sab,
                data: new DataView(sab),
            };
        },
        addFromServer(chunkBuffer) {
            const sab = new SharedArrayBuffer(chunkBuffer.byteLength);
            const temp = new Uint8Array(chunkBuffer);
            const temp2 = new Uint8Array(sab);
            temp2.set(temp, 0);
            const chunk = this._getChunkData(sab);
            chunkTool.setChunk(chunk);
            const location = chunkTool.getLocationData();
            let column = WorldRegister.column.get(location);
            if (!column)
                return;
            column.chunks.set(_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk.getIndexLocation(location), chunk);
            _Data_DataHooks_js__WEBPACK_IMPORTED_MODULE_0__.DataHooks.chunk.onNew.run(location);
            return chunk;
        },
        get(location) {
            const chunkKey = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk.getKeyLocation(location);
            let addChunk = false;
            if (WorldRegister._cacheOn) {
                const chunk = WorldRegister.cache._getChunk(chunkKey);
                if (chunk)
                    return chunk;
                addChunk = true;
            }
            const column = WorldRegister.column.get(location);
            if (!column)
                return false;
            const chunk = column.chunks.get(_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk.getIndex());
            if (!chunk)
                return;
            if (addChunk) {
                WorldRegister.cache._addChunk(chunkKey, chunk);
            }
            return chunk;
        },
        remove(location) {
            const column = WorldRegister.column.get(location);
            if (!column)
                return false;
            const index = _WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.chunk.getIndexLocation(location);
            const chunk = column.chunks.get(index);
            if (!chunk)
                return false;
            column.chunks.delete(index);
            return true;
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/BoundingBox.js":
/*!***********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Classes/BoundingBox.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingBox": () => (/* binding */ BoundingBox)
/* harmony export */ });
class BoundingBox {
    topPlane;
    bottomPlane;
    northPlane;
    southPlane;
    eastPlane;
    westPlane;
    bounds = {
        minX: Infinity,
        maxX: -Infinity,
        minZ: Infinity,
        maxZ: -Infinity,
        minY: Infinity,
        maxY: -Infinity,
    };
    constructor(data) {
        this.topPlane = data.topPlane;
        this._doMinMaxCheck(this.topPlane);
        this.bottomPlane = data.bottomPlane;
        this._doMinMaxCheck(this.bottomPlane);
        this.northPlane = data.northPlane;
        this._doMinMaxCheck(this.northPlane);
        this.southPlane = data.southPlane;
        this._doMinMaxCheck(this.southPlane);
        this.eastPlane = data.eastPlane;
        this._doMinMaxCheck(this.eastPlane);
        this.westPlane = data.westPlane;
        this._doMinMaxCheck(this.westPlane);
    }
    _doMinMaxCheck(plane) {
        if (plane.minX <= this.bounds.minX)
            this.bounds.minX = plane.minX;
        if (plane.maxX >= this.bounds.maxX)
            this.bounds.maxX = plane.maxX;
        if (plane.minY <= this.bounds.minY)
            this.bounds.minY = plane.minY;
        if (plane.maxY >= this.bounds.maxY)
            this.bounds.maxY = plane.maxY;
        if (plane.minZ <= this.bounds.minZ)
            this.bounds.minZ = plane.minZ;
        if (plane.maxZ >= this.bounds.maxZ)
            this.bounds.maxZ = plane.maxZ;
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Plane.js":
/*!*****************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Plane.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plane": () => (/* binding */ Plane)
/* harmony export */ });
class Plane {
    v1;
    v2;
    v3;
    v4;
    minX = Infinity;
    maxX = -Infinity;
    minZ = Infinity;
    maxZ = -Infinity;
    minY = Infinity;
    maxY = -Infinity;
    constructor(data) {
        this.v1 = data.v1;
        this.v2 = data.v2;
        this.v3 = data.v3;
        this.v4 = data.v4;
        this._minMaxCompare(this.v1, this.v2);
        this._minMaxCompare(this.v1, this.v3);
        this._minMaxCompare(this.v1, this.v4);
        this._minMaxCompare(this.v2, this.v3);
        this._minMaxCompare(this.v2, this.v4);
        this._minMaxCompare(this.v3, this.v4);
    }
    _compareVales(v1, v2, axis, minProperty, maxProperty) {
        const c1 = v1;
        const c2 = v2;
        if (c1[axis] < this[minProperty]) {
            if (c1[axis] <= c2[axis]) {
                this[minProperty] = c1[axis];
            }
        }
        if (c2[axis] < this[minProperty]) {
            if (c2[axis] <= c1[axis]) {
                this[minProperty] = c2[axis];
            }
        }
        if (c1[axis] > this[maxProperty]) {
            if (c1[axis] >= c2[axis]) {
                this[maxProperty] = c1[axis];
            }
        }
        if (c2[axis] > this[maxProperty]) {
            if (c2[axis] >= c1[axis]) {
                this[maxProperty] = c2[axis];
            }
        }
    }
    _minMaxCompare(v1, v2) {
        this._compareVales(v1, v2, "x", "minX", "maxX");
        this._compareVales(v1, v2, "y", "minY", "maxY");
        this._compareVales(v1, v2, "z", "minZ", "maxZ");
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/SimpleBoundingBox.js":
/*!*****************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Classes/SimpleBoundingBox.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleBoundingBox": () => (/* binding */ SimpleBoundingBox)
/* harmony export */ });
/* harmony import */ var _Vector3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Vector3.js");

class SimpleBoundingBox {
    origin;
    dimensions;
    bounds = {
        minX: Infinity,
        maxX: -Infinity,
        minZ: Infinity,
        maxZ: -Infinity,
        minY: Infinity,
        maxY: -Infinity,
    };
    checkBounds = {
        minX: Infinity,
        maxX: -Infinity,
        minZ: Infinity,
        maxZ: -Infinity,
        minY: Infinity,
        maxY: -Infinity,
    };
    checkOrigin = new _Vector3_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0);
    _voxelCheckMap = {};
    _voxelCheckPoints = [];
    _voxelBottomCheckPoints = [];
    _voxelOriginPoints = [];
    constructor(origin, dimensions) {
        this.origin = origin;
        this.dimensions = dimensions;
        const ov = origin;
        this.checkOrigin.updateVector(ov.x, ov.y, ov.z);
        this._updateBounds();
        this._updateCheckBounds();
    }
    _updateBounds() {
        const ov = this.origin;
        this.bounds.minX = ov.x - this.dimensions.w / 2;
        this.bounds.maxX = ov.x + this.dimensions.w / 2;
        this.bounds.minZ = ov.z - this.dimensions.d / 2;
        this.bounds.maxZ = ov.z + this.dimensions.d / 2;
        this.bounds.minY = ov.y - this.dimensions.h / 2;
        this.bounds.maxY = ov.y + this.dimensions.h / 2;
    }
    _updateCheckBounds() {
        const cv = this.checkOrigin;
        this.checkBounds.minX = cv.x - this.dimensions.w / 2;
        this.checkBounds.maxX = cv.x + this.dimensions.w / 2;
        this.checkBounds.minZ = cv.z - this.dimensions.d / 2;
        this.checkBounds.maxZ = cv.z + this.dimensions.d / 2;
        this.checkBounds.minY = cv.y - this.dimensions.h / 2;
        this.checkBounds.maxY = cv.y + this.dimensions.h / 2;
    }
    updateOrigin(x, y, z) {
        this.origin.updateVector(x, y, z);
        this.origin.roundVector(2);
        this._updateBounds();
    }
    setOriginToCheckOrigin() {
        const cv = this.checkOrigin;
        this.origin.updateVector(cv.x, cv.y, cv.z);
        this.bounds.minX = this.checkBounds.minX;
        this.bounds.maxX = this.checkBounds.maxX;
        this.bounds.minZ = this.checkBounds.minZ;
        this.bounds.maxZ = this.checkBounds.maxZ;
        this.bounds.minY = this.checkBounds.minY;
        this.bounds.maxY = this.checkBounds.maxY;
    }
    setCheckOrigin(x, y, z) {
        this.checkOrigin.updateVector(x, y, z);
        this._updateCheckBounds();
    }
    getCurrentOriginPoints() {
        this._voxelOriginPoints = [];
        const mx = this.bounds.minX;
        const my = this.bounds.minY;
        const mz = this.bounds.minZ;
        for (let y = my; y <= this.bounds.maxY; y++) {
            for (let x = mx - 1; x <= this.bounds.maxX + 1; x++) {
                for (let z = mz - 1; z <= this.bounds.maxZ + 1; z++) {
                    const key = this._getPositionKey(x, y, z);
                    if (!this._voxelCheckMap[key]) {
                        this._voxelOriginPoints.push([x, y, z]);
                        this._voxelCheckMap[key] = true;
                    }
                }
            }
        }
        this._voxelCheckMap = {};
        return this._voxelOriginPoints;
    }
    getVoxelCheckPoints() {
        this._voxelCheckPoints = [];
        const mx = this.checkBounds.minX;
        const my = this.checkBounds.minY;
        const mz = this.checkBounds.minZ;
        for (let y = my; y <= this.checkBounds.maxY; y++) {
            for (let x = mx; x <= this.checkBounds.maxX + 1; x++) {
                for (let z = mz; z <= this.checkBounds.maxZ + 1; z++) {
                    const key = this._getPositionKey(x, y, z);
                    if (!this._voxelCheckMap[key]) {
                        this._voxelCheckPoints.push([
                            Math.floor(x),
                            Math.floor(y),
                            Math.floor(z),
                        ]);
                        this._voxelCheckMap[key] = true;
                    }
                }
            }
        }
        this._voxelCheckMap = {};
        return this._voxelCheckPoints;
    }
    getVoxelBottomCheckPoints() {
        this._voxelBottomCheckPoints = [];
        const mx = this.checkBounds.minX;
        const my = this.checkBounds.minY;
        const mz = this.checkBounds.minZ;
        for (let y = my - 1; y <= my; y++) {
            for (let x = mx; x <= this.checkBounds.maxX + 1; x++) {
                for (let z = mz; z <= this.checkBounds.maxZ + 1; z++) {
                    const key = this._getPositionKey(x, y, z);
                    if (!this._voxelCheckMap[key]) {
                        this._voxelBottomCheckPoints.push([
                            Math.floor(x),
                            Math.floor(y),
                            Math.floor(z),
                        ]);
                        this._voxelCheckMap[key] = true;
                    }
                }
            }
        }
        this._voxelCheckMap = {};
        return this._voxelBottomCheckPoints;
    }
    _getPositionKey(x, y, z) {
        return `${x}-${y}-${z}`;
    }
    isPointInsideBox(point) {
        const box = this.bounds;
        return (point.x >= box.minX &&
            point.x <= box.maxX &&
            point.y >= box.minY &&
            point.y <= box.maxY &&
            point.z >= box.minZ &&
            point.z <= box.maxZ);
    }
    doesBoxIntersect(testBox) {
        const box = this.bounds;
        return (box.minX <= testBox.maxX &&
            box.maxX >= testBox.minX &&
            box.minY <= testBox.maxY &&
            box.maxY >= testBox.minY &&
            box.minZ <= testBox.maxZ &&
            box.maxZ >= testBox.minZ);
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Vector3.js":
/*!*******************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Vector3.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector3": () => (/* binding */ Vector3)
/* harmony export */ });
class Vector3 {
    x = 0;
    y = 0;
    z = 0;
    _tv3 = {
        x: 0,
        y: 0,
        z: 0,
    };
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    updateFromArray(array, startIndex = 0) {
        this.x = array[startIndex];
        this.y = array[startIndex + 1];
        this.z = array[startIndex + 2];
    }
    updateVector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    updateFromVec3(vector) {
        this.x = vector.x;
        this.y = vector.y;
        this.z = vector.z;
    }
    roundVector(deciamlPoints = 2) {
        this.x = Number(this.x.toFixed(deciamlPoints));
        this.y = Number(this.y.toFixed(deciamlPoints));
        this.z = Number(this.z.toFixed(deciamlPoints));
    }
    translate(x, y, z) {
        this.x = this.x + x;
        this.y = this.y + y;
        this.z = this.z + z;
        return this;
    }
    getTranslated(x, y, z) {
        this._tv3.x = this.x + x;
        this._tv3.y = this.y + y;
        this._tv3.z = this.z + z;
        return this._tv3;
    }
    scaleXYZ(scaler) {
        this.x = this.x * scaler;
        this.y = this.y * scaler;
        this.z = this.z * scaler;
        return this;
    }
    scale(xScale, yScale, zScale) {
        this.x = this.x * xScale;
        this.y = this.y * yScale;
        this.z = this.z * zScale;
        return this;
    }
    getScaledXYZ(scaler) {
        this._tv3.x = this.x * scaler;
        this._tv3.y = this.y * scaler;
        this._tv3.z = this.z * scaler;
        return this._tv3;
    }
    getScaled(xScale, yScale, zScale) {
        this._tv3.x = this.x * xScale;
        this._tv3.y = this.y * yScale;
        this._tv3.z = this.z * zScale;
        return this._tv3;
    }
    addXYZ(add) {
        this.x = this.x + add;
        this.y = this.y + add;
        this.z = this.z + add;
        return this;
    }
    addFromVec3(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    isZero() {
        return !this.x && !this.y && !this.z;
    }
    subtractXYZ(subtract) {
        this.x = this.x - subtract;
        this.y = this.y - subtract;
        this.z = this.z - subtract;
        return this;
    }
    subtractFromObj(vector) {
        this.x = this.x - vector.x;
        this.y = this.y - vector.y;
        this.z = this.z - vector.z;
        return this;
    }
    getAddXYZ(add) {
        this._tv3.x = this.x + add;
        this._tv3.y = this.y + add;
        this._tv3.z = this.z + add;
        return this._tv3;
    }
    getSubtractXYZ(subtract) {
        this._tv3.x = this.x - subtract;
        this._tv3.y = this.y - subtract;
        this._tv3.z = this.z - subtract;
        return this._tv3;
    }
    addVector(vector3) {
        this.x = vector3.x + this.x;
        this.y = vector3.y + this.y;
        this.z = vector3.z + this.z;
        return this;
    }
    getAddedVector(vector3) {
        this._tv3.x = vector3.x + this.x;
        this._tv3.y = vector3.y + this.y;
        this._tv3.z = vector3.z + this.z;
        return this._tv3;
    }
    subtractVector(vector3) {
        this.x = this.x - vector3.x;
        this.y = this.y - vector3.y;
        this.z = this.z - vector3.z;
        return this;
    }
    getSubtractedVector(vector3) {
        this._tv3.x = this.x - vector3.x;
        this._tv3.y = this.y - vector3.y;
        this._tv3.z = this.z - vector3.z;
        return this._tv3;
    }
    scaleVector(vector3) {
        this.x = this.x * vector3.x;
        this.y = this.y * vector3.y;
        this.z = this.z * vector3.z;
        return this;
    }
    getScaledVector(vector3) {
        this._tv3.x = this.x * vector3.x;
        this._tv3.y = this.y * vector3.y;
        this._tv3.z = this.z * vector3.z;
        return this._tv3;
    }
    getLength() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
    divide(scalar) {
        this.x = this.x / scalar;
        this.y = this.y / scalar;
        this.z = this.z / scalar;
        return this;
    }
    getDivided(scalar) {
        this._tv3.x = this.x / scalar;
        this._tv3.y = this.y / scalar;
        this._tv3.z = this.z / scalar;
        return this._tv3;
    }
    normalize() {
        return this.divide(this.getLength());
    }
    isEqual(vector3) {
        if (this.x != vector3.x) {
            return false;
        }
        if (this.y != vector3.y) {
            return false;
        }
        if (this.z != vector3.z) {
            return false;
        }
        return true;
    }
    isNotEqual(vector3) {
        if (this.x != vector3.x) {
            return true;
        }
        if (this.y != vector3.y) {
            return true;
        }
        if (this.z != vector3.z) {
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance2d.js":
/*!************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance2d.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Distance2D": () => (/* binding */ Distance2D)
/* harmony export */ });
function Distance2D(x1, x2, y1, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
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

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/VisitAll.js":
/*!**********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Functions/VisitAll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitAll": () => (/* binding */ VisitAll)
/* harmony export */ });
/** # Visit All
 * ---
 * Given a starting point and an end point it will visit all voxels that are between them.
 * @param startPoint
 * @param endPoint
 * @param visitor
 * @returns an array of numbers with a stride of 3 for positions
 */
const VisitAll = (startPoint, endPoint, visitor = (x, y, z) => {
    return true;
}) => {
    const gx0 = startPoint.x;
    const gy0 = startPoint.y;
    const gz0 = startPoint.z;
    const gx1 = endPoint.x;
    const gy1 = endPoint.y;
    const gz1 = endPoint.z;
    const positons = [];
    const gx0idx = Math.floor(gx0);
    const gy0idx = Math.floor(gy0);
    const gz0idx = Math.floor(gz0);
    const gx1idx = Math.floor(gx1);
    const gy1idx = Math.floor(gy1);
    const gz1idx = Math.floor(gz1);
    const sx = gx1idx > gx0idx ? 1 : gx1idx < gx0idx ? -1 : 0;
    const sy = gy1idx > gy0idx ? 1 : gy1idx < gy0idx ? -1 : 0;
    const sz = gz1idx > gz0idx ? 1 : gz1idx < gz0idx ? -1 : 0;
    let gx = gx0idx;
    let gy = gy0idx;
    let gz = gz0idx;
    const gxp = gx0idx + (gx1idx > gx0idx ? 1 : 0);
    const gyp = gy0idx + (gy1idx > gy0idx ? 1 : 0);
    const gzp = gz0idx + (gz1idx > gz0idx ? 1 : 0);
    const vx = gx1 === gx0 ? 1 : gx1 - gx0;
    const vy = gy1 === gy0 ? 1 : gy1 - gy0;
    const vz = gz1 === gz0 ? 1 : gz1 - gz0;
    const vxvy = vx * vy;
    const vxvz = vx * vz;
    const vyvz = vy * vz;
    let errx = (gxp - gx0) * vyvz;
    let erry = (gyp - gy0) * vxvz;
    let errz = (gzp - gz0) * vxvy;
    const derrx = sx * vyvz;
    const derry = sy * vxvz;
    const derrz = sz * vxvy;
    do {
        if (!visitor(gx, gy, gz))
            break;
        positons.push(gx, gy, gz);
        if (gx === gx1idx && gy === gy1idx && gz === gz1idx)
            break;
        let xr = Math.abs(errx);
        let yr = Math.abs(erry);
        let zr = Math.abs(errz);
        if (sx !== 0 && (sy === 0 || xr < yr) && (sz === 0 || xr < zr)) {
            gx += sx;
            errx += derrx;
        }
        else if (sy !== 0 && (sz === 0 || yr < zr)) {
            gy += sy;
            erry += derry;
        }
        else if (sz !== 0) {
            gz += sz;
            errz += derrz;
        }
    } while (true);
    return positons;
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/Types/Math.types.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/Types/Math.types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/VoxelMath.js":
/*!*************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/VoxelMath.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoxelMath": () => (/* binding */ VoxelMath)
/* harmony export */ });
/* harmony import */ var _Classes_BoundingBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/BoundingBox.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/BoundingBox.js");
/* harmony import */ var _Classes_Plane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/Plane.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Plane.js");
/* harmony import */ var _Classes_SimpleBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/SimpleBoundingBox.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/SimpleBoundingBox.js");
/* harmony import */ var _Classes_Vector3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classes/Vector3.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Vector3.js");
/* harmony import */ var _Functions_VisitAll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Functions/VisitAll.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/VisitAll.js");





/**# Voxel Math
 * ---
 * Can be used in any thread that needs it.
 * Has functions for collision detection, finding voxels in a direction, and path finding.
 */
const VoxelMath = {
    visitAll: _Functions_VisitAll_js__WEBPACK_IMPORTED_MODULE_4__.VisitAll,
    getVector3(x, y, z) {
        return new _Classes_Vector3_js__WEBPACK_IMPORTED_MODULE_3__.Vector3(x, y, z);
    },
    getPlane(pv1, pv2, pv3, pv4) {
        return new _Classes_Plane_js__WEBPACK_IMPORTED_MODULE_1__.Plane({
            v1: pv1,
            v2: pv2,
            v3: pv3,
            v4: pv4,
        });
    },
    getSimpleBoundingBox(origin, dimensions) {
        return new _Classes_SimpleBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.SimpleBoundingBox(origin, dimensions);
    },
    getBoundingBox(data) {
        return new _Classes_BoundingBox_js__WEBPACK_IMPORTED_MODULE_0__.BoundingBox(data);
    },
    convertToOriginGridSpace(position) {
        position[0] = Math.round(position[0]) + 0.5;
        position[1] = Math.round(position[1]) + 0.5;
        position[2] = Math.round(position[2]) + 0.5;
        return position;
    },
    distance2D(x1, x2, y1, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    },
    distance3D(x1, y1, z1, x2, y2, z2) {
        const a = x2 - x1;
        const b = y2 - y1;
        const c = z2 - z1;
        return Math.sqrt(a * a + b * b + c * c);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Math/index.js":
/*!*********************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Math/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingBox": () => (/* reexport safe */ _Classes_BoundingBox_js__WEBPACK_IMPORTED_MODULE_1__.BoundingBox),
/* harmony export */   "Distance2D": () => (/* reexport safe */ _Functions_Distance2d_js__WEBPACK_IMPORTED_MODULE_5__.Distance2D),
/* harmony export */   "Distance3D": () => (/* reexport safe */ _Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_6__.Distance3D),
/* harmony export */   "LocationDataDistanceSort": () => (/* reexport safe */ _Functions_DistnaceSort_js__WEBPACK_IMPORTED_MODULE_7__.LocationDataDistanceSort),
/* harmony export */   "Plane": () => (/* reexport safe */ _Classes_Plane_js__WEBPACK_IMPORTED_MODULE_2__.Plane),
/* harmony export */   "SimpleBoundingBox": () => (/* reexport safe */ _Classes_SimpleBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__.SimpleBoundingBox),
/* harmony export */   "Vec3ArrayDistanceSort": () => (/* reexport safe */ _Functions_DistnaceSort_js__WEBPACK_IMPORTED_MODULE_7__.Vec3ArrayDistanceSort),
/* harmony export */   "Vector3": () => (/* reexport safe */ _Classes_Vector3_js__WEBPACK_IMPORTED_MODULE_4__.Vector3),
/* harmony export */   "VisitAll": () => (/* reexport safe */ _Functions_VisitAll_js__WEBPACK_IMPORTED_MODULE_8__.VisitAll),
/* harmony export */   "VoxelMath": () => (/* reexport safe */ _VoxelMath_js__WEBPACK_IMPORTED_MODULE_0__.VoxelMath)
/* harmony export */ });
/* harmony import */ var _VoxelMath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoxelMath.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/VoxelMath.js");
/* harmony import */ var _Classes_BoundingBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/BoundingBox.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/BoundingBox.js");
/* harmony import */ var _Classes_Plane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/Plane.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Plane.js");
/* harmony import */ var _Classes_SimpleBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classes/SimpleBoundingBox.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/SimpleBoundingBox.js");
/* harmony import */ var _Classes_Vector3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Classes/Vector3.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Classes/Vector3.js");
/* harmony import */ var _Functions_Distance2d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Functions/Distance2d.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance2d.js");
/* harmony import */ var _Functions_Distance3d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Functions/Distance3d.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/Distance3d.js");
/* harmony import */ var _Functions_DistnaceSort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Functions/DistnaceSort.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/DistnaceSort.js");
/* harmony import */ var _Functions_VisitAll_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Functions/VisitAll.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Functions/VisitAll.js");
/* harmony import */ var _Types_Math_types_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Types/Math.types.js */ "../../DSLIBS/divineVoxelEngine/dist/Math/Types/Math.types.js");













/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/DataToolBase.js":
/*!*************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/DataToolBase.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataToolBase": () => (/* binding */ DataToolBase),
/* harmony export */   "EncodedPositionDataTool": () => (/* binding */ EncodedPositionDataTool)
/* harmony export */ });
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Data_World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/World/Dimensions/DimensionsRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Dimensions/DimensionsRegister.js");
/* harmony import */ var _LocationBoundTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationBoundTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/LocationBoundTool.js");
/* harmony import */ var _Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/Constants/Tags/WorldDataTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/WorldDataTagIds.js");




class DataToolBase extends _LocationBoundTool_js__WEBPACK_IMPORTED_MODULE_2__.LocationBoundTool {
    tags;
    _c;
    constructor() {
        super();
    }
    getTagValue(id) {
        this.tags.setBuffer(this._c);
        return this.tags.getTag(id);
    }
    setTagValue(id, value) {
        this.tags.setBuffer(this._c);
        return this.tags.setTag(id, value);
    }
    getArrayTagValue(id, index) {
        this.tags.setBuffer(this._c);
        return this.tags.getArrayTagValue(id, index);
    }
    setArrayTagValue(id, index, value) {
        this.tags.setBuffer(this._c);
        return this.tags.setArrayTagValue(id, index, value);
    }
    setBuffer(buffer) {
        this._c = buffer;
        this.tags.setBuffer(this._c);
    }
    getBuffer() {
        if (this._c instanceof DataView)
            return this._c.buffer;
        return this._c;
    }
    getAsArrayBuffer() {
        return _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_0__.Util.converSABToBuffer(this.getBuffer());
    }
    getBufferSize() {
        return this.tags.tagSize;
    }
    loadInAt(x, y, z) {
        this.setXYZ(x, y, z);
        return this.loadIn();
    }
    loadInAtLocation(location) {
        this.setLocation(location);
        return this.loadIn();
    }
}
class EncodedPositionDataTool extends DataToolBase {
    position = { x: 0, y: 0, z: 0 };
    constructor() {
        super();
    }
    getPositionData() {
        this.position.x = this.getTagValue(_Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionX);
        this.position.y = this.getTagValue(_Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionY);
        this.position.z = this.getTagValue(_Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionZ);
        return this.position;
    }
    setPositionData(x, y, z) {
        this.setTagValue(_Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionX, x);
        this.setTagValue(_Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionY, y);
        this.setTagValue(_Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.positionZ, z);
        return this.position;
    }
    setDimensionId(dimensionId) {
        this.setTagValue(_Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.dimensionId, _Data_World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_1__.DimensionsRegister.getDimensionNumericId(dimensionId));
    }
    getDimensionId() {
        return _Data_World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_1__.DimensionsRegister.getDimensionStringId(this.getTagValue(_Data_Constants_Tags_WorldDataTagIds_js__WEBPACK_IMPORTED_MODULE_3__.WorldDataTagIDs.dimensionId));
    }
    getLocationData() {
        const pos = this.getPositionData();
        return [this.getDimensionId(), pos.x, pos.y, pos.z];
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/LocationBoundTool.js":
/*!******************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/LocationBoundTool.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationBoundTool": () => (/* binding */ LocationBoundTool)
/* harmony export */ });
class LocationBoundTool {
    location = ["main", 0, 0, 0];
    get dimension() {
        return this.location[0];
    }
    set dimension(dimension) {
        this.location[0] = dimension;
    }
    get x() {
        return this.location[1];
    }
    set x(value) {
        this.location[1] = value;
    }
    get y() {
        return this.location[2];
    }
    set y(value) {
        this.location[2] = value;
    }
    get z() {
        return this.location[3];
    }
    set z(value) {
        this.location[3] = value;
    }
    setDimension(dimensionId) {
        this.location[0] = dimensionId;
        return this;
    }
    getLocation() {
        return this.location;
    }
    setXYZ(x, y, z) {
        this.location[1] = x;
        this.location[2] = y;
        this.location[3] = z;
        return this;
    }
    setXZ(x, z) {
        this.setXYZ(x, this.location[2], z);
        return this;
    }
    setLocation(location) {
        this.location[0] = location[0];
        this.location[1] = location[1];
        this.location[2] = location[2];
        this.location[3] = location[3];
        return this;
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js":
/*!******************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Data/DataTool.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTool": () => (/* binding */ DataTool)
/* harmony export */ });
/* harmony import */ var _Data_World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Data/World/Dimensions/DimensionsRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Dimensions/DimensionsRegister.js");
/* harmony import */ var _Data_Voxel_VoxelReader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/Voxel/VoxelReader.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelReader.js");
/* harmony import */ var _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Data/Voxel/VoxelTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelTags.js");
/* harmony import */ var _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/Voxel/VoxelPalette.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Voxel/VoxelPalette.js");
/* harmony import */ var _WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorldData/ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _WorldData_HeightMapTool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorldData/HeightMapTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/HeightMapTool.js");
/* harmony import */ var _Classes_DataToolBase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes/DataToolBase.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/DataToolBase.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
/* harmony import */ var _WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WorldData/ColumnDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js");
/* harmony import */ var _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Data/Light/LightByte.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Light/LightByte.js");
/* harmony import */ var _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Data/Constants/Tags/VoxelTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/VoxelTagIds.js");
/* harmony import */ var _Data_Register_Register_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Data/Register/Register.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Register/Register.js");












class DataTool extends _Classes_DataToolBase_js__WEBPACK_IMPORTED_MODULE_6__.DataToolBase {
    static _dtutil = new DataTool();
    _chunkTool = new _WorldData_ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_4__.ChunkDataTool();
    static _heightMapTool = new _WorldData_HeightMapTool_js__WEBPACK_IMPORTED_MODULE_5__.HeightMapTool();
    static _columntool = new _WorldData_ColumnDataTool_js__WEBPACK_IMPORTED_MODULE_8__.ColumnDataTool();
    _locationKey = "";
    _loadedIn = false;
    _mode = "World";
    data = {
        raw: [0, 0, 0, 0],
        id: 0,
        baseId: 0,
        secondaryId: 0,
        secondaryBaseId: 0,
    };
    __secondary = false;
    tags = _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags;
    setDimension(dimensionId) {
        this.location[0] = _Data_World_Dimensions_DimensionsRegister_js__WEBPACK_IMPORTED_MODULE_0__.DimensionsRegister.getDimensionStringId(dimensionId);
        return this;
    }
    setSecondary(enable) {
        this.__secondary = enable;
        if (enable) {
            _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(this.data.secondaryBaseId);
        }
        else {
            _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(this.data.baseId);
        }
        return this;
    }
    _getBaseId(id) {
        return _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__.VoxelPaletteReader.id.baseNumeric(id);
    }
    loadInRaw(rawData) {
        this.data.raw = rawData;
        this.__process();
    }
    __process() {
        this.data.id = this.data.raw[0];
        this.data.secondaryId = this.data.raw[3];
        this.data.baseId = this._getBaseId(this.data.id);
        if (this.data.secondaryId > 1) {
            this.data.secondaryBaseId = this._getBaseId(this.data.secondaryId);
        }
        else {
            this.data.secondaryBaseId = 0;
        }
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(this.data.baseId);
    }
    loadIn() {
        this._c = this.tags.data;
        if (this._mode == "World") {
            if (!this._chunkTool.setLocation(this.location).loadIn())
                return false;
            const index = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.voxel.getIndexLocation(this.location);
            this.data.raw[0] = this._chunkTool.segments.id.get(index);
            this.data.raw[1] = this._chunkTool.segments.light.get(index);
            this.data.raw[2] = this._chunkTool.segments.state.get(index);
            this.data.raw[3] = this._chunkTool.segments.secondaryId.get(index);
            this.__process();
            this._loadedIn = true;
            return true;
        }
        if (this._mode == "Entity") {
            return false;
        }
        return false;
    }
    commit(heightMapUpdate = 0) {
        if (!this._loadedIn)
            return false;
        if (this._mode == "World") {
            const index = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_7__.WorldSpaces.voxel.getIndexLocation(this.location);
            this._chunkTool.segments.id.set(index, this.data.raw[0]);
            this._chunkTool.segments.light.set(index, this.data.raw[1]);
            this._chunkTool.segments.state.set(index, this.data.raw[2]);
            this._chunkTool.segments.secondaryId.set(index, this.data.raw[3]);
            if (heightMapUpdate) {
                DataTool._heightMapTool.chunk._c = this._chunkTool._c;
                const substance = this.getTemplateSubstance();
                //on add
                if (heightMapUpdate == 1) {
                    DataTool._heightMapTool.chunk.update("add", substance, this.location);
                }
                //on remove
                if (heightMapUpdate == 2) {
                    DataTool._heightMapTool.chunk.update("remove", substance, this.location);
                }
            }
            if (DataTool._columntool.setLocation(this.location).loadIn()) {
                DataTool._columntool.markAsNotStored();
            }
            this._loadedIn = false;
            return true;
        }
        if (this._mode == "Entity") {
        }
        return false;
    }
    hasRGBLight() {
        const light = this.getLight();
        if (light <= 0)
            false;
        return _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_9__.LightData.hasRGBLight(light);
    }
    hasSunLight() {
        const light = this.getLight();
        if (light <= 0)
            false;
        return _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_9__.LightData.hasSunLight(light);
    }
    getLight() {
        const vID = this.getId(true);
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        if (vID == 0)
            return this.data.raw[1];
        if (vID < 2)
            return -1;
        const lightValue = this.getTagValue(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.lightValue);
        if (this.isOpaque()) {
            if (this.getTagValue(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.isLightSource) && lightValue) {
                return lightValue;
            }
            else {
                return -1;
            }
        }
        if (this.getTagValue("#dve_is_light_source") && lightValue) {
            return _Data_Light_LightByte_js__WEBPACK_IMPORTED_MODULE_9__.LightData.mixLight(this.data.raw[1], lightValue);
        }
        return this.data.raw[1];
    }
    setLight(light) {
        this.data.raw[1] = light;
        return this;
    }
    isOpaque() {
        const substance = this.getSubstance();
        if (substance == "#dve_solid")
            return true;
    }
    getLevel() {
        return _Data_Voxel_VoxelReader_js__WEBPACK_IMPORTED_MODULE_1__.VoxelReader.getLevel(this.data.raw[2]);
    }
    setLevel(level) {
        this.data.raw[2] = _Data_Voxel_VoxelReader_js__WEBPACK_IMPORTED_MODULE_1__.VoxelReader.setLevel(this.data.raw[2], level);
        return this;
    }
    getLevelState() {
        return _Data_Voxel_VoxelReader_js__WEBPACK_IMPORTED_MODULE_1__.VoxelReader.getLevelState(this.data.raw[2]);
    }
    setLevelState(state) {
        this.data.raw[2] = _Data_Voxel_VoxelReader_js__WEBPACK_IMPORTED_MODULE_1__.VoxelReader.setLevelState(this.data.raw[2], state);
        return this;
    }
    getShapeState() {
        return _Data_Voxel_VoxelReader_js__WEBPACK_IMPORTED_MODULE_1__.VoxelReader.getShapeState(this.data.raw[2]);
    }
    setShapeState(state) {
        this.data.raw[2] = _Data_Voxel_VoxelReader_js__WEBPACK_IMPORTED_MODULE_1__.VoxelReader.setShapeState(this.data.raw[2], state);
        return this;
    }
    hasSecondaryVoxel() {
        return this.data.secondaryBaseId > 1;
    }
    //voxel data
    getShapeId() {
        const vID = this.getId(true);
        if (vID < 2)
            return "";
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        return _Data_Register_Register_js__WEBPACK_IMPORTED_MODULE_11__.Register.stringMaps.getStringMapValue("voxel", _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.shapeID, _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.getTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.shapeID));
    }
    isLightSource() {
        const vID = this.getId(true);
        if (vID < 2)
            return false;
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        return _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.getTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.isLightSource) == 1;
    }
    getLightSourceValue() {
        const vID = this.getId(true);
        if (vID < 2)
            return 0;
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        return _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.getTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.lightValue);
    }
    getSubstance() {
        const vID = this.getId(true);
        if (vID < 2)
            return "#dve_transparent";
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        const s = (_Data_Register_Register_js__WEBPACK_IMPORTED_MODULE_11__.Register.stringMaps.getStringMapValue("voxel", _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.substance, _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.getTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.substance)));
        return s;
    }
    getMaterial() {
        const vID = this.getId(true);
        if (vID < 2)
            return "none";
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        return _Data_Register_Register_js__WEBPACK_IMPORTED_MODULE_11__.Register.stringMaps.getStringMapValue("voxel", _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.material, _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.getTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.material));
    }
    getHardness() {
        const vID = this.getId(true);
        if (vID < 2)
            return 0;
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        return _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.getTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.hardness);
    }
    getCollider() {
        const vID = this.getId(true);
        if (vID < 2)
            return "none";
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        return _Data_Register_Register_js__WEBPACK_IMPORTED_MODULE_11__.Register.stringMaps.getStringMapValue("voxel", _Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.colliderID, _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.getTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.colliderID));
    }
    checkCollisions() {
        const vID = this.getId(true);
        if (vID == 0)
            return false;
        if (vID == 1)
            return true;
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        return this.getTagValue(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.checkCollisions) == 1;
    }
    getTemplateSubstance() {
        let substance = this.getSubstance();
        if (substance == "#dve_transparent") {
            substance = "#dve_solid";
        }
        return substance;
    }
    getState() {
        if (this.__secondary) {
            return this.data.secondaryId - this.data.secondaryBaseId;
        }
        return this.data.id - this.data.baseId;
    }
    isRich() {
        const vID = this.getId(true);
        if (vID < 2)
            return 0;
        _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.setVoxel(vID);
        return _Data_Voxel_VoxelTags_js__WEBPACK_IMPORTED_MODULE_2__.VoxelTags.getTag(_Data_Constants_Tags_VoxelTagIds_js__WEBPACK_IMPORTED_MODULE_10__.VoxelTagIDs.isLightSource);
    }
    //util
    setAir() {
        this.data.raw[0] = 0;
        this.__process();
        return this;
    }
    isAir() {
        return 0 == this.data.raw[0];
    }
    setBarrier() {
        this.data.raw[0] = 1;
        this.__process();
        return this;
    }
    isBarrier() {
        return 1 == this.data.raw[0];
    }
    //voxel id
    getId(base = false) {
        if (this.__secondary) {
            if (!base)
                return this.data.secondaryId;
            return this.data.secondaryBaseId;
        }
        if (!base)
            return this.data.id;
        return this.data.baseId;
    }
    setId(id) {
        if (this.__secondary) {
            this.data.raw[3] = id;
            this.data.secondaryId = id;
            this.data.secondaryBaseId = this._getBaseId(id);
            return this;
        }
        this.data.raw[0] = id;
        this.data.id = id;
        this.data.baseId = this._getBaseId(id);
        return this;
    }
    getStringId() {
        if (this.__secondary) {
            return _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__.VoxelPaletteReader.id.stringFromNumber(this.data.secondaryBaseId);
        }
        return _Data_Voxel_VoxelPalette_js__WEBPACK_IMPORTED_MODULE_3__.VoxelPaletteReader.id.stringFromNumber(this.data.baseId);
    }
    //util
    isRenderable() {
        if (this.data.id < 2 && this.data.secondaryId < 2)
            return false;
        return true;
    }
    isSameVoxel(cx, cy, cz) {
        DataTool._dtutil.loadInAt(cx, cy, cz);
        if (this.__secondary) {
            return this.data.secondaryBaseId == DataTool._dtutil.data.secondaryBaseId;
        }
        return this.data.baseId == DataTool._dtutil.data.baseId;
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js":
/*!*********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChunkDataTool": () => (/* binding */ ChunkDataTool)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Data_World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/World/Chunk/ChunkTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Chunk/ChunkTags.js");
/* harmony import */ var _Classes_DataToolBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Classes/DataToolBase.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/DataToolBase.js");
/* harmony import */ var _Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/Constants/Tags/ChunkTagIds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Constants/Tags/ChunkTagIds.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
//objects





class ChunkDataTool extends _Classes_DataToolBase_js__WEBPACK_IMPORTED_MODULE_2__.EncodedPositionDataTool {
    tags = _Data_World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_1__.ChunkTags;
    constructor() {
        super();
        this.segments.id._s = this;
        this.segments.light._s = this;
        this.segments.state._s = this;
        this.segments.secondaryId._s = this;
    }
    loadIn() {
        _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_4__.WorldSpaces.chunk.updateLoaction(this.location);
        const chunk = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.chunk.get(this.location);
        if (!chunk)
            return false;
        this.tags.setBuffer(chunk.data);
        this._c = chunk.data;
        return true;
    }
    setChunk(chunk) {
        this.tags.setBuffer(chunk.data);
        this._c = chunk.data;
        return this;
    }
    segments = {
        id: {
            _s: {},
            get(index) {
                return this._s.getArrayTagValue(_Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTagIDs.voxelIDSegment, index);
            },
            set(index, value) {
                return this._s.setArrayTagValue(_Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTagIDs.voxelIDSegment, index, value);
            },
        },
        light: {
            _s: {},
            get(index) {
                return this._s.getArrayTagValue(_Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTagIDs.voxelLightSegment, index);
            },
            set(index, value) {
                return this._s.setArrayTagValue(_Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTagIDs.voxelLightSegment, index, value);
            },
        },
        state: {
            _s: {},
            get(index) {
                return this._s.getArrayTagValue(_Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTagIDs.voxelStateSegment, index);
            },
            set(index, value) {
                return this._s.setArrayTagValue(_Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTagIDs.voxelStateSegment, index, value);
            },
        },
        secondaryId: {
            _s: {},
            get(index) {
                return this._s.getArrayTagValue(_Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTagIDs.voxelSecondaryIDSegment, index);
            },
            set(index, value) {
                return this._s.setArrayTagValue(_Data_Constants_Tags_ChunkTagIds_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTagIDs.voxelSecondaryIDSegment, index, value);
            },
        },
    };
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js":
/*!**********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ColumnDataTool.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnDataTool": () => (/* binding */ ColumnDataTool)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Classes_DataToolBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Classes/DataToolBase.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/DataToolBase.js");
/* harmony import */ var _Data_World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/World/Column/ColumnTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Column/ColumnTags.js");
/* harmony import */ var _Data_World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Data/World/Chunk/ChunkTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Chunk/ChunkTags.js");
//objects




class ColumnDataTool extends _Classes_DataToolBase_js__WEBPACK_IMPORTED_MODULE_1__.EncodedPositionDataTool {
    tags = _Data_World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_2__.ColumnTags;
    _column = {};
    loadIn() {
        const column = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.column.get(this.location);
        if (!column)
            return false;
        this.tags.setBuffer(column.data);
        this._c = column.data;
        this._column = column;
        return true;
    }
    setColumn(column) {
        this.tags.setBuffer(column.data);
        this._c = column.data;
        this._column = column;
        return this;
    }
    getColumn() {
        return this._column;
    }
    getNumChunks() {
        return this._column.chunks.size;
    }
    getBufferSizeForWholeColumn() {
        return _Data_World_Column_ColumnTags_js__WEBPACK_IMPORTED_MODULE_2__.ColumnTags.tagSize + _Data_World_Chunk_ChunkTags_js__WEBPACK_IMPORTED_MODULE_3__.ChunkTags.tagSize * this.getNumChunks();
    }
    isStored() {
        return this.getTagValue("#dve_is_stored") == 1;
    }
    markAsNotStored() {
        this.setTagValue("#dve_is_stored", 0);
        return this;
    }
    markAsStored() {
        this.setTagValue("#dve_is_stored", 1);
        return this;
    }
    isPersistent() {
        return this.getTagValue("#dve_persistent") == 1;
    }
    setPersistence(value) {
        this.setTagValue("#dve_persistent", value ? 1 : 0);
    }
    isDirty() {
        return this.getTagValue("#dve_is_dirty") == 1;
    }
    setDirty(value) {
        this.setTagValue("#dve_is_dirty", value ? 1 : 0);
    }
    getLastSaveTimestamp() {
        return this.getTagValue("#dve_last_save_timestamp");
    }
    setLastSaveTimestamp() {
        return this.setTagValue("#dve_last_save_timestamp", Date.now());
    }
    getLastAnalyzerUpdateTimestamp() {
        return this.getTagValue("#dve_last_analyzer_update_timestamp");
    }
    setLastAnalyzerUpdateTimestamp() {
        return this.setTagValue("#dve_last_analyzer_update_timestamp", Date.now());
    }
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/HeightMapTool.js":
/*!*********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/HeightMapTool.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeightMapTool": () => (/* binding */ HeightMapTool)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChunkDataTool.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/ChunkDataTool.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");
//Data



class HeightMapTool {
    static _chunkTool = new _ChunkDataTool_js__WEBPACK_IMPORTED_MODULE_1__.ChunkDataTool();
    _data = {
        dimension: "main",
    };
    constructor() {
        this.chunk._s = this;
        //  this.column._s = this;
    }
    setDimension(dimensionId) {
        this._data.dimension = dimensionId;
    }
    chunk = {
        _p: {
            x: 0,
            z: 0,
        },
        _c: new DataView(new ArrayBuffer(0)),
        _s: {},
        loadInAt(x, y, z) {
            const chunk = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.chunk.get([this._s._data.dimension, x, y, z]);
            if (!chunk)
                return false;
            HeightMapTool._chunkTool.setChunk(chunk);
            this._c = chunk.data;
        },
        loadInAtLocation(location) {
            const chunk = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.chunk.get(location);
            if (!chunk)
                return false;
            HeightMapTool._chunkTool.setChunk(chunk);
            this._c = chunk.data;
        },
        setChunk(chunk) {
            HeightMapTool._chunkTool.setChunk(chunk);
            this._c = chunk.data;
        },
        setXZ(x, z) {
            this._p.x = x;
            this._p.z = z;
            return this;
        },
        getMinMax() {
            HeightMapTool._chunkTool._c = this._c;
            return [
                HeightMapTool._chunkTool.getTagValue("#dve_min_height"),
                HeightMapTool._chunkTool.getTagValue("#dve_max_height"),
            ];
        },
        getMin(substance = "all") {
            HeightMapTool._chunkTool._c = this._c;
            if (substance == "all") {
                return HeightMapTool._chunkTool.getTagValue("#dve_min_height");
            }
            return 0;
        },
        getMax(substance = "all") {
            HeightMapTool._chunkTool._c = this._c;
            if (substance == "all") {
                return HeightMapTool._chunkTool.getTagValue("#dve_max_height");
            }
            return 0;
        },
        update(mode, substance = "all", location) {
            if (mode == "add") {
                HeightMapTool._chunkTool._c = this._c;
                const minY = HeightMapTool._chunkTool.getTagValue("#dve_min_height");
                const maxY = HeightMapTool._chunkTool.getTagValue("#dve_max_height");
                const voxelPOS = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_2__.WorldSpaces.voxel.getPositionLocation(location);
                if (minY > voxelPOS.y) {
                    HeightMapTool._chunkTool.setTagValue("#dve_min_height", voxelPOS.y);
                }
                if (maxY < voxelPOS.y) {
                    HeightMapTool._chunkTool.setTagValue("#dve_max_height", voxelPOS.y);
                }
            }
        },
    };
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/RegionDataTool.js":
/*!**********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/Tools/Data/WorldData/RegionDataTool.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionDataTool": () => (/* binding */ RegionDataTool)
/* harmony export */ });
/* harmony import */ var _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/World/WorldRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldRegister.js");
/* harmony import */ var _Classes_DataToolBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Classes/DataToolBase.js */ "../../DSLIBS/divineVoxelEngine/dist/Tools/Classes/DataToolBase.js");
/* harmony import */ var _Data_World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/World/Region/RegionTags.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/Region/RegionTags.js");
//objects



class RegionDataTool extends _Classes_DataToolBase_js__WEBPACK_IMPORTED_MODULE_1__.EncodedPositionDataTool {
    tags = _Data_World_Region_RegionTags_js__WEBPACK_IMPORTED_MODULE_2__.RegionTags;
    _region = {};
    loadIn() {
        const reigon = _Data_World_WorldRegister_js__WEBPACK_IMPORTED_MODULE_0__.WorldRegister.region.get(this.location);
        if (!reigon)
            return false;
        this.tags.setBuffer(reigon.data);
        this._region = reigon;
        this._c = reigon.data;
        return true;
    }
    setRegion(region) {
        this.tags.setBuffer(region.data);
        this._region = region;
        this._c = region.data;
        return this;
    }
    getRegion() {
        return this._region;
    }
    getRegionDataCount() {
        const region = this._region;
        let totalChunks = 0;
        region.columns.forEach((column) => {
            totalChunks += column.chunks.size;
        });
        return {
            chunks: totalChunks,
            columns: region.columns.size,
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=DSLIBS_divineVoxelEngine_dist_Common_Threads_Contracts_DataSync_js-DSLIBS_divineVoxelEngine_d-75c735.DVE.js.map