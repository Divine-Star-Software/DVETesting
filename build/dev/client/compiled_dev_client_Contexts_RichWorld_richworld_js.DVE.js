/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compiled/dev/client/Contexts/RichWorld/richworld.js":
/*!*************************************************************!*\
  !*** ./compiled/dev/client/Contexts/RichWorld/richworld.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var divine_voxel_engine_RichWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-voxel-engine/RichWorld */ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/index.js");

await divine_voxel_engine_RichWorld__WEBPACK_IMPORTED_MODULE_0__.DVERW.$INIT();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/Classes/TypedNode.js":
/*!*****************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/Classes/TypedNode.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypedNode": () => (/* binding */ TypedNode)
/* harmony export */ });
/* harmony import */ var _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/MetaValues.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/MetaValues.js");

class TypedNode {
    data;
    get length() {
        return this.data[2];
    }
    get type() {
        return this.data[0];
    }
    get typeName() {
        return _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaMapValues[this.type];
    }
    get primiteName() {
        return _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaMapValues[this.type];
    }
    get listType() {
        return this.data[1];
    }
    get listTypeName() {
        return _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaMapValues[this.listType];
    }
    get value() {
        return this.data[3];
    }
    set value(data) {
        this.data[3] = data;
    }
    constructor(type, value, listType = 0, length = 0) {
        this.data = [type, listType, length, value];
    }
}


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/Constants/ByteData.js":
/*!******************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/Constants/ByteData.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByteCounts": () => (/* binding */ ByteCounts),
/* harmony export */   "ByteDataGet": () => (/* binding */ ByteDataGet),
/* harmony export */   "ByteDataSet": () => (/* binding */ ByteDataSet),
/* harmony export */   "ByteParser": () => (/* binding */ ByteParser),
/* harmony export */   "TypedArrayCrete": () => (/* binding */ TypedArrayCrete),
/* harmony export */   "TypedArrayMap": () => (/* binding */ TypedArrayMap)
/* harmony export */ });
const ByteCounts = {
    "8i": 1,
    "8ui": 1,
    "8uic": 1,
    "16i": 2,
    "16ui": 2,
    "32i": 4,
    "32ui": 4,
    "32f": 4,
    "64f": 8,
    bigi: 8,
    bigui: 8,
};
const ByteDataGet = {
    "8i": (dv, index) => dv.getInt8(index),
    "8ui": (dv, index) => dv.getUint8(index),
    "8uic": (dv, index) => dv.getUint8(index),
    "16i": (dv, index) => dv.getInt16(index),
    "16ui": (dv, index) => dv.getUint16(index),
    "32i": (dv, index) => dv.getInt32(index),
    "32ui": (dv, index) => dv.getUint32(index),
    "32f": (dv, index) => dv.getFloat32(index),
    "64f": (dv, index) => dv.getFloat64(index),
    //@ts-ignore
    bigi: (dv, index) => dv.getBigInt64(index),
    //@ts-ignore
    bigui: (dv, index) => dv.getBigUint64(index),
};
const ByteDataSet = {
    "8i": (dv, index, value) => dv.setInt8(index, value),
    "8ui": (dv, index, value) => dv.setUint8(index, value),
    "8uic": (dv, index, value) => dv.setUint8(index, value),
    "16i": (dv, index, value) => dv.setInt16(index, value),
    "16ui": (dv, index, value) => dv.setUint16(index, value),
    "32i": (dv, index, value) => dv.setInt32(index, value),
    "32ui": (dv, index, value) => dv.setUint32(index, value),
    "32f": (dv, index, value) => dv.setFloat32(index, value),
    "64f": (dv, index, value) => dv.setFloat64(index, value),
    bigi: (dv, index, value) => dv.setBigInt64(index, BigInt(value)),
    bigui: (dv, index, value) => dv.setBigUint64(index, BigInt(value)),
};
const TypedArrayCrete = {
    "8i": (length) => new Int8Array(length),
    "8ui": (length) => new Uint8Array(length),
    "8uic": (length) => new Uint8ClampedArray(length),
    "16i": (length) => new Int16Array(length),
    "16ui": (length) => new Uint16Array(length),
    "32i": (length) => new Int32Array(length),
    "32ui": (length) => new Uint32Array(length),
    "32f": (length) => new Float32Array(length),
    "64f": (length) => new Float64Array(length),
    bigi: (length) => new BigInt64Array(length),
    bigui: (length) => new BigUint64Array(length),
};
const TypedArrayMap = {
    "8i": Int8Array,
    "8ui": Uint8Array,
    "8uic": Uint8ClampedArray,
    "16i": Int16Array,
    "16ui": Uint16Array,
    "32i": Int32Array,
    "32ui": Uint32Array,
    "32f": Float32Array,
    "64f": Float64Array,
    bigi: BigInt64Array,
    bigui: BigUint64Array,
};
const ByteParser = {
    view: new DataView(new ArrayBuffer(8)),
    count: 0,
    value: 0,
    setValue(type, value) {
        this.value = value;
        ByteDataSet[type](this.view, 0, value);
        this.count = ByteCounts[type];
        return this;
    },
    addBytes(data) {
        for (let i = 0; i < this.count; i++) {
            data.push(this.view.getUint8(i));
        }
    }
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/Constants/MetaValues.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/Constants/MetaValues.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaMapValues": () => (/* binding */ MetaMapValues),
/* harmony export */   "MetaValues": () => (/* binding */ MetaValues)
/* harmony export */ });
const markers = [
    "start",
    "end",
    "object",
    "object-start",
    "object-end",
    "array",
    "array-start",
    "array-end",
    "name",
    "8i",
    "8ui",
    "8uic",
    "16i",
    "16ui",
    "32f",
    "32i",
    "32ui",
    "64f",
    "bigi",
    "bigui",
    "fixed-typed-array",
    "fixed-string",
    "string",
    "fixed-string-array",
    "string-array",
    "typed-array",
    "json",
    "mmd",
];
const metaValues = {};
for (let i = 0; i < markers.length; i++) {
    metaValues[markers[i]] = i;
}
const MetaValues = metaValues;
const MetaMapValues = {};
for (const key of Object.keys(MetaValues)) {
    //@ts-ignore
    MetaMapValues[Number(MetaValues[key])] = key;
}


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/DBO/DivineBinaryObjectParser.js":
/*!****************************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/DBO/DivineBinaryObjectParser.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBOP": () => (/* binding */ DBOP)
/* harmony export */ });
/* harmony import */ var _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/ByteData.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/ByteData.js");
/* harmony import */ var _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Classes/TypedNode.js */ "../../DSLIBS/divineBinaryObject/dist/Classes/TypedNode.js");
/* harmony import */ var _MetaMarkedData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MetaMarkedData.js */ "../../DSLIBS/divineBinaryObject/dist/MetaMarkedData.js");
/* harmony import */ var _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants/MetaValues.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/MetaValues.js");




const DBOP = {
    mmdTokens: [],
    jsonStrings: [],
    schemas: {},
    advancedElementSetFunctions: {
        string: (dv, byteCount, element) => {
            if (typeof element.value != "string") {
                throw new Error("Value must a string for 'fixed-length-string'");
            }
            const length = element.value.length;
            const string = element.value;
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["16ui"];
            _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["32ui"](dv, byteCount, length);
            byteCount += 4;
            for (let i = 0; i < length; i++) {
                func(dv, byteCount, string.charCodeAt(i));
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
            }
            return byteCount;
        },
        "fixed-string": (dv, byteCount, element) => {
            if (typeof element.value != "string") {
                throw new Error("Value must a string for 'fixed-length-string'");
            }
            if (!element.length) {
                throw new Error("Length must be set for 'fixed-length-string'");
            }
            const string = element.value;
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["16ui"];
            for (let i = 0; i < element.length; i++) {
                func(dv, byteCount, string.charCodeAt(i));
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
            }
            return byteCount;
        },
        "string-array": (dv, byteCount, element) => {
            if (!Array.isArray(element.value)) {
                throw new Error("String array must be an array.");
            }
            let value = element.value;
            const arrayLength = element.value.length;
            const byteLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["16ui"];
            _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["32ui"](dv, byteCount, arrayLength);
            byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
            for (let i = 0; i < arrayLength; i++) {
                let string = value[i];
                _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["32ui"](dv, byteCount, string.length);
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
                for (let k = 0; k < string.length; k++) {
                    func(dv, byteCount, string.charCodeAt(k));
                    byteCount += byteLength;
                }
            }
            return byteCount;
        },
        "typed-array": (dv, byteCount, element) => {
            if (!element.listType || !Array.isArray(element.value)) {
                throw new Error("Fixed length type list must have list type set");
            }
            const value = element.value;
            const arrayLength = element.value.length;
            const arrayType = _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_3__.MetaMapValues[element.listType];
            const byteLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[arrayType];
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet[arrayType];
            dv.setUint32(byteCount, arrayLength);
            byteCount += 4;
            for (let i = 0; i < arrayLength; i++) {
                func(dv, byteCount, value[i]);
                byteCount += byteLength;
            }
            return byteCount;
        },
        "fixed-typed-array": (dv, byteCount, element) => {
            if (!element.listType ||
                !Array.isArray(element.value) ||
                !element.length) {
                throw new Error("Fixed length type list must have list type set");
            }
            const value = element.value;
            const arrayLength = element.length;
            const arrayType = _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_3__.MetaMapValues[element.listType];
            const byteLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[arrayType];
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet[arrayType];
            for (let i = 0; i < arrayLength; i++) {
                func(dv, byteCount, value[i]);
                byteCount += byteLength;
            }
            return byteCount;
        },
        json: (dv, byteCount, element) => {
            const jsonString = DBOP.jsonStrings.shift();
            if (!jsonString)
                return;
            const length = jsonString.length;
            _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["32ui"](dv, byteCount, length);
            byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
            for (let i = 0; i < length; i++) {
                _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["16ui"](dv, byteCount, jsonString.charCodeAt(i));
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
            }
            return byteCount;
        },
        mmd: (dv, byteCount, element) => {
            const mmdData = DBOP.mmdTokens.shift();
            if (!mmdData)
                return;
            const length = mmdData.byteLength;
            _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["32ui"](dv, byteCount, length);
            byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
            const array = new Uint8Array(mmdData);
            for (let i = byteCount; i < byteCount + length; i++) {
                _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet["16ui"](dv, byteCount, array[i]);
            }
            byteCount += length;
            return byteCount;
        },
    },
    advancedElementGetFunctions: {
        string: (dv, byteCount, element, targetObject, name) => {
            let string = "";
            const length = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["32ui"](dv, byteCount);
            byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
            for (let i = 0; i < length; i++) {
                string += String.fromCharCode(_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["16ui"](dv, byteCount));
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
            }
            targetObject[name] = string;
            return byteCount;
        },
        json: (dv, byteCount, element, targetObject, name) => {
            let string = "";
            const length = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["32ui"](dv, byteCount);
            byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
            for (let i = 0; i < length; i++) {
                string += String.fromCharCode(_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["16ui"](dv, byteCount));
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
            }
            const json = JSON.parse(string);
            targetObject[name] = json;
            return byteCount;
        },
        "fixed-string": (dv, byteCount, element, targetObject, name) => {
            if (typeof element.value != "string") {
                throw new Error("Value must a string for 'fixed-length-string'");
            }
            if (!element.length) {
                throw new Error("Length must be set for 'fixed-length-string'");
            }
            let string = "";
            for (let i = 0; i < element.length; i++) {
                string += String.fromCharCode(_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["16ui"](dv, byteCount));
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
            }
            targetObject[name] = string;
            return byteCount;
        },
        "typed-array": (dv, byteCount, element, targetObject, name) => {
            if (!element.listType || !Array.isArray(element.value)) {
                throw new Error("Fixed length type list must have list type set");
            }
            const payloadArray = [];
            const arrayType = element.listTypeName;
            const byteLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[arrayType];
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet[arrayType];
            const arrayLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["32ui"](dv, byteCount);
            byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
            for (let i = 0; i < arrayLength; i++) {
                payloadArray[i] = func(dv, byteCount);
                byteCount += byteLength;
            }
            targetObject[name] = payloadArray;
            return byteCount;
        },
        "string-array": (dv, byteCount, element, targetObject, name) => {
            if (!Array.isArray(element.value)) {
                throw new Error("Fixed length type list must have list type set");
            }
            const payloadArray = [];
            const byteLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["16ui"];
            const arrayLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["32ui"](dv, byteCount);
            byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
            for (let i = 0; i < arrayLength; i++) {
                const stringLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["32ui"](dv, byteCount);
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
                let string = "";
                for (let k = 0; k < stringLength; k++) {
                    string += String.fromCharCode(func(dv, byteCount));
                    byteCount += byteLength;
                }
                payloadArray.push(string);
            }
            targetObject[name] = payloadArray;
            return byteCount;
        },
        "fixed-typed-array": (dv, byteCount, element, targetObject, name) => {
            if (!element.listType ||
                !Array.isArray(element.value) ||
                !element.length) {
                throw new Error("Fixed length type list must have list type set");
            }
            const payloadArray = [];
            const arrayLength = element.length;
            const arrayType = element.listTypeName;
            const byteLength = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[arrayType];
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet[arrayType];
            for (let i = 0; i < arrayLength; i++) {
                payloadArray[i] = func(dv, byteCount);
                byteCount += byteLength;
            }
            targetObject[name] = payloadArray;
            return byteCount;
        },
        mmd: (dv, byteCount, element, targetObject, name) => {
            const length = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet["32ui"](dv, byteCount);
            byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
            targetObject[name] = new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_1__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_3__.MetaValues.mmd, _MetaMarkedData_js__WEBPACK_IMPORTED_MODULE_2__.MMD.parser.toMMD(dv.buffer, byteCount, byteCount + length));
            return byteCount + length;
        },
    },
    getBuffer(length, SAB) {
        if (SAB) {
            return new SharedArrayBuffer(length);
        }
        return new ArrayBuffer(length);
    },
    syncSABWtihBuffer(sab, buffer) {
        const temp1 = new Uint8Array(sab);
        const temp2 = new Uint8Array(buffer);
        temp1.set(temp2, 0);
    },
    sharedBufferToBuffer(sab) {
        const temp1 = new Uint8Array(sab);
        const temp2 = new Uint8Array(sab.byteLength);
        temp2.set(temp1, 0);
        return temp2.buffer;
    },
    registerSchema(id, schema) {
        const legnth = this._calculateSchemaLength(schema);
        this.schemas[id] = {
            length: legnth,
            schema: schema,
        };
    },
    _calculateSchemaLength(schema) {
        let length = 0;
        for (const key of Object.keys(schema)) {
            const element = schema[key];
            if (element.typeName == "mmd") {
                length = -1;
                break;
            }
            if (element.typeName == "typed-array") {
                length = -1;
                break;
            }
            if (element.typeName == "string") {
                length = -1;
                break;
            }
            if (element.typeName == "string-array") {
                length = -1;
                break;
            }
            if (element.typeName == "json") {
                length = -1;
                break;
            }
            if (element.typeName == "fixed-string" && element.length) {
                length += element.length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
                continue;
            }
            if (element.typeName == "fixed-typed-array" &&
                element.length &&
                element.listType) {
                length +=
                    element.length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[element.listTypeName];
                continue;
            }
            length += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[element.typeName];
        }
        return length;
    },
    _calculateVariableSizeBuffer(schema) {
        let length = 0;
        for (const key of Object.keys(schema)) {
            const element = schema[key];
            if (element.typeName == "mmd") {
                const mmdData = _MetaMarkedData_js__WEBPACK_IMPORTED_MODULE_2__.MMD.parser.toBuffer(element.value);
                this.mmdTokens.push(mmdData);
                length += mmdData.byteLength + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
                continue;
            }
            if (element.typeName == "json") {
                let jsonString;
                if (typeof element.value == "string") {
                    jsonString = element.value;
                }
                else {
                    jsonString = JSON.stringify(element.value);
                }
                this.jsonStrings.push(jsonString);
                length += jsonString.length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
                continue;
            }
            if (element.typeName == "fixed-string" && element.length) {
                length += element.length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"];
                continue;
            }
            if (element.typeName == "string" && typeof element.value == "string") {
                length +=
                    element.value.length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
                continue;
            }
            if (element.typeName == "string-array") {
                length += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
                for (const string of element.value) {
                    length += string.length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["16ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts["32ui"];
                }
                continue;
            }
            if (element.typeName == "fixed-typed-array" &&
                element.length &&
                element.listType) {
                length +=
                    element.length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[element.listTypeName];
                continue;
            }
            if (element.typeName == "typed-array" &&
                Array.isArray(element.value) &&
                element.listType) {
                length +=
                    element.value.length *
                        _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[element.listTypeName] +
                        4;
                continue;
            }
            length += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[element.typeName];
        }
        return length;
    },
    getSchema(id) {
        return this.schemas[id];
    },
    createObject(schemaId, buffer) {
        let dv;
        //@ts-ignore
        if (Buffer && !(buffer instanceof DataView)) {
            //@ts-ignore
            dv = new DataView(new Uint8Array(buffer).buffer);
        }
        else {
            if (buffer instanceof DataView) {
                dv = buffer;
            }
            else {
                dv = new DataView(buffer);
            }
        }
        const schemaData = this.getSchema(schemaId);
        const object = new Object();
        const schema = schemaData.schema;
        let byteCount = 0;
        for (const name of Object.keys(schema)) {
            const element = schema[name];
            if (this.advancedElementGetFunctions[element.typeName]) {
                byteCount = this.advancedElementGetFunctions[element.typeName](dv, byteCount, element, object, name);
                continue;
            }
            if (_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet[element.typeName]) {
                object[name] = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataGet[element.typeName](dv, byteCount);
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[element.typeName];
            }
        }
        return object;
    },
    createBuffer(schemaId, updatedValues = {}) {
        const schemaData = this.getSchema(schemaId);
        const schema = schemaData.schema;
        for (const key of Object.keys(updatedValues)) {
            const val = updatedValues[key];
            if (schema[key]) {
                schema[key].value = val;
            }
        }
        let length = schemaData.length;
        if (length < 0) {
            length = this._calculateVariableSizeBuffer(schema);
        }
        const buffer = new ArrayBuffer(length);
        const dv = new DataView(buffer);
        let byteCount = 0;
        for (const key of Object.keys(schema)) {
            const element = schema[key];
            if (this.advancedElementSetFunctions[element.typeName]) {
                byteCount = this.advancedElementSetFunctions[element.typeName](dv, byteCount, element);
                continue;
            }
            if (_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet[element.typeName]) {
                _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteDataSet[element.typeName](dv, byteCount, Number(element.value));
                byteCount += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_0__.ByteCounts[element.typeName];
            }
        }
        return buffer;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/DivineBinaryObject.js":
/*!******************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/DivineBinaryObject.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBO": () => (/* binding */ DBO)
/* harmony export */ });
/* harmony import */ var _MMD_MetaMarkedParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MMD/MetaMarkedParser.js */ "../../DSLIBS/divineBinaryObject/dist/MMD/MetaMarkedParser.js");
/* harmony import */ var _DBO_DivineBinaryObjectParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DBO/DivineBinaryObjectParser.js */ "../../DSLIBS/divineBinaryObject/dist/DBO/DivineBinaryObjectParser.js");
/* harmony import */ var _NodeMaker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeMaker.js */ "../../DSLIBS/divineBinaryObject/dist/NodeMaker.js");



const DBO = {
    metaMarkedParser: _MMD_MetaMarkedParser_js__WEBPACK_IMPORTED_MODULE_0__.MMDP,
    parser: _DBO_DivineBinaryObjectParser_js__WEBPACK_IMPORTED_MODULE_1__.DBOP,
    nodeMaker: _NodeMaker_js__WEBPACK_IMPORTED_MODULE_2__.TNM,
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/MMD/BufferToMMD.js":
/*!***************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/MMD/BufferToMMD.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BToMMD": () => (/* binding */ BToMMD)
/* harmony export */ });
/* harmony import */ var _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/MetaValues.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/MetaValues.js");
/* harmony import */ var _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/ByteData.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/ByteData.js");
/* harmony import */ var _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Classes/TypedNode.js */ "../../DSLIBS/divineBinaryObject/dist/Classes/TypedNode.js");

//import { MMDNode } from "../Classes/MMDNode.js";



const BToMMD = {
    _mode: "object",
    _cobj: {},
    _parents: [],
    _objArray: [],
    _name: "",
    _length: 0,
    _objCount: 0,
    _inOject: false,
    _newMMDNode(type, value, listType = "start") {
        //@ts-ignore
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_2__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaValues[type], value, _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaValues[listType]);
    },
    _assign(value) {
        if (BToMMD._mode == "object" || BToMMD._mode == "json") {
            if (Array.isArray(this._cobj)) {
                this._cobj.push(value);
            }
            else {
                this._cobj[this._name] = value;
            }
        }
        else {
            if (Array.isArray(this._cobj.value)) {
                this._cobj.value.push(value);
            }
            else {
                this._cobj.value[this._name] = value;
            }
        }
    },
    markFunctions: {
        start: (dv, index) => {
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + index;
        },
        end: (dv, index) => {
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + index;
        },
        name: (dv, index) => {
            BToMMD._name = "";
            const length = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["8ui"](dv, index + 1);
            index += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] * 2;
            for (let i = index; i < index + length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16ui"]; i += 2) {
                BToMMD._name += String.fromCharCode(_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["16ui"](dv, i));
            }
            return index + length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16ui"];
        },
        object: (dv, index) => { },
        "object-start": (dv, index) => {
            let newObj;
            if (BToMMD._mode == "object") {
                newObj = {};
            }
            else {
                newObj = BToMMD._newMMDNode("object", {});
            }
            if (BToMMD._objCount != 0) {
                BToMMD._assign(newObj);
                BToMMD._parents.push(BToMMD._cobj);
            }
            BToMMD._objCount++;
            BToMMD._cobj = newObj;
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + index;
        },
        "object-end": (dv, index) => {
            if (BToMMD._parents.length > 0) {
                BToMMD._cobj = BToMMD._parents.pop();
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + index;
        },
        array: (dv, index) => {
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + index;
        },
        "array-start": (dv, index) => {
            let newObj;
            if (BToMMD._mode == "object") {
                newObj = [];
            }
            else {
                newObj = BToMMD._newMMDNode("array", []);
            }
            if (BToMMD._objCount != 0) {
                BToMMD._assign(newObj);
                BToMMD._parents.push(BToMMD._cobj);
            }
            BToMMD._objCount++;
            BToMMD._cobj = newObj;
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + index;
        },
        "array-end": (dv, index) => {
            if (BToMMD._parents.length > 0) {
                BToMMD._cobj = BToMMD._parents.pop();
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + index;
        },
        "8i": (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["8i"](dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("8i", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8i"] + index;
        },
        "8ui": (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["8ui"](dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("8ui", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + index;
        },
        "16i": (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["16i"](dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("16i", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16i"] + index;
        },
        "16ui": (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["16ui"](dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("16ui", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16ui"] + index;
        },
        "32f": (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["32f"](dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("32f", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["32f"] + index;
        },
        "32i": (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["32i"](dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("32i", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["32i"] + index;
        },
        "32ui": (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["32ui"](dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("32ui", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["32ui"] + index + 1;
        },
        "64f": (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["64f"](dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("64f", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["64f"] + index;
        },
        bigi: (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet.bigi(dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("bigi", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts.bigi + index;
        },
        bigui: (dv, index) => {
            const value = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet.bigui(dv, index + 1);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(value);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("bigui", value));
            }
            return _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts.bigui + index;
        },
        "fixed-typed-array": (dv, index) => { },
        "fixed-string": (dv, index) => { },
        "string-array": (dv, index) => {
            const size = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["32ui"](dv, index + 1);
            index += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["32ui"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"];
            const array = [];
            for (let i = 0; i < size; i++) {
                let string = "";
                const stringSize = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["32ui"](dv, index);
                index += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["32ui"];
                for (let k = 0; k < stringSize; k++) {
                    string += String.fromCharCode(_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["16ui"](dv, index));
                    index += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16ui"];
                }
                array.push(string);
            }
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(array);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("string-array", array));
            }
            return index;
        },
        string: (dv, index) => {
            const length = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["32ui"](dv, index + 1);
            index += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["32f"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"];
            let string = "";
            for (let i = index; i < index + length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16ui"]; i += 2) {
                string += String.fromCharCode(_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["16ui"](dv, i));
            }
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(string);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("string", string));
            }
            return index + length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16ui"];
        },
        "typed-array": (dv, index) => {
            const type = _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaMapValues[_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["8ui"](dv, index + 1)];
            const length = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["32ui"](dv, index + 2);
            index += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"] * 2 + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["32ui"];
            let array;
            if (BToMMD._mode == "json") {
                array = [];
            }
            else {
                array = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.TypedArrayCrete[type](length);
            }
            const func = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet[type];
            for (let i = 0; i < length; i++) {
                array[i] = func(dv, index);
                index += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts[type];
            }
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(array);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("typed-array", array, type));
            }
            return index;
        },
        json: (dv, index) => {
            const length = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["32ui"](dv, index + 1);
            index += _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["32f"] + _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["8ui"];
            let jsonString = "";
            for (let i = index; i < index + length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16ui"]; i += 2) {
                jsonString += String.fromCharCode(_Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["16ui"](dv, i));
            }
            const result = JSON.parse(jsonString);
            if (BToMMD._mode != "mmd") {
                BToMMD._assign(result);
            }
            else {
                BToMMD._assign(BToMMD._newMMDNode("string", result));
            }
            return index + length * _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteCounts["16ui"];
        },
        mmd: (dv, index) => { },
    },
    toObject(buffer, byteOffSet = 0) {
        this._mode = "object";
        let legnth = buffer.byteLength;
        const dv = new DataView(buffer);
        this._objCount = 0;
        let index = byteOffSet;
        let mark = "16i";
        let markType = 0;
        while (index < legnth) {
            markType = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["8ui"](dv, index);
            mark = _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaMapValues[markType];
            index = this.markFunctions[mark](dv, index);
        }
        return this._cobj;
    },
    toJSON(buffer, byteOffSet = 0) {
        this._mode = "json";
        let legnth = buffer.byteLength;
        const dv = new DataView(buffer);
        this._objCount = 0;
        let index = byteOffSet;
        let mark = "16i";
        let markType = 0;
        while (index < legnth) {
            markType = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["8ui"](dv, index);
            mark = _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaMapValues[markType];
            index = this.markFunctions[mark](dv, index);
        }
        return this._cobj;
    },
    toMMD(buffer, byteOffSet = 0, byteOffSetEnd = 0) {
        this._mode = "mmd";
        let legnth;
        if (byteOffSetEnd == 0) {
            legnth = buffer.byteLength;
        }
        else {
            legnth = byteOffSetEnd;
        }
        const dv = new DataView(buffer);
        this._objCount = 0;
        let index = byteOffSet;
        let mark = "16i";
        let markType = 0;
        while (index < legnth) {
            markType = _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteDataGet["8ui"](dv, index);
            mark = _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaMapValues[markType];
            index = this.markFunctions[mark](dv, index);
        }
        this._parents = [];
        return this._cobj;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/MMD/MMDToBufferN.js":
/*!****************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/MMD/MMDToBufferN.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MMDToBuffer": () => (/* binding */ MMDToBuffer)
/* harmony export */ });
/* harmony import */ var _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/MetaValues.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/MetaValues.js");
/* harmony import */ var _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/ByteData.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/ByteData.js");


const MMDToBuffer = {
    _proto: [],
    _tokenizeString(string) {
        for (let i = 0; i < string.length; i++) {
            this._addToken("16ui", string.charCodeAt(i));
        }
    },
    _traverseObj(data) {
        this._addMarker("object-start");
        //for the object start and end marks
        for (const key of Object.keys(data.value)) {
            let length = key.length;
            if (length > 255) {
                throw new Error("An object key cannot be longer then 255 chars.");
            }
            this._addMarker("name");
            this._addToken("8ui", key.length);
            this._tokenizeString(key);
            const node = data.value[key];
            if (node.typeName == "object") {
                this._traverseObj(node);
                continue;
            }
            if (node.typeName == "array") {
                this._traverseArray(node);
                continue;
            }
            this._tokenizePrimiives(node);
        }
        this._addMarker("object-end");
    },
    _traverseArray(data) {
        this._addMarker("array-start");
        //for object array start and end marks
        const array = data.value;
        for (const node of array) {
            if (typeof node.value == "object" && !Array.isArray(node.value)) {
                this._traverseObj(node);
                continue;
            }
            if (typeof node.value == "object" && Array.isArray(node.value)) {
                this._traverseArray(node);
                continue;
            }
            this._tokenizePrimiives(node);
        }
        this._addMarker("array-end");
    },
    _tokenizePrimiives(node) {
        if (node.typeName == "string") {
            this._addMarker("string");
            this._addToken("32ui", node.value.length);
            for (let i = 0; i < node.value.length; i++) {
                this._addToken("16ui", node.value.charCodeAt(i));
            }
            return;
        }
        if (typeof node.value == "number") {
            this._addMarker(node.typeName);
            this._addToken(node.primiteName, node.value);
            return;
        }
        if (node.typeName == "typed-array") {
            this._addMarker("typed-array");
            this._addToken("8ui", node.listType);
            this._addToken("32ui", node.value.length);
            let array = node.value;
            for (let i = 0; i < array.length; i++) {
                this._addToken(node.listTypeName, node.value[i]);
            }
        }
        if (node.typeName == "string-array") {
            this._addMarker("string-array");
            this._addToken("32ui", node.value.length);
            let array = node.value;
            for (let i = 0; i < array.length; i++) {
                const value = array[i];
                this._addToken("32ui", value.length);
                for (let k = 0; k < value.length; k++) {
                    this._addToken("16ui", value.charCodeAt(k));
                }
            }
            return;
        }
        if (node.typeName == "json") {
            let json = "";
            if (typeof node.value == "object") {
                json = JSON.stringify(node.value);
            }
            else {
                json = node.value;
            }
            this._addMarker("json");
            this._addToken("32ui", json.length);
            for (let i = 0; i < json.length; i++) {
                this._addToken("16ui", json.charCodeAt(i));
            }
            return;
        }
    },
    _tokenize(node) {
        //start as two bytes for the stand and end tags
        if (node.typeName == "object" && !Array.isArray(node.value)) {
            this._traverseObj(node);
        }
        if (node.typeName == "array" && Array.isArray(node.value)) {
            this._traverseArray(node);
        }
    },
    toBuffer(data, byteOffSet = 0) {
        this._addMarker("start");
        this._tokenize(data);
        this._addMarker("end");
        const array = Uint8Array.from(this._proto);
        return array.buffer;
    },
    _addMarker(marker) {
        _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteParser.setValue("8ui", _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_0__.MetaValues[marker]).addBytes(this._proto);
    },
    _addToken(type, value) {
        _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_1__.ByteParser.setValue(type, value).addBytes(this._proto);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/MMD/MetaMarkedParser.js":
/*!********************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/MMD/MetaMarkedParser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MMDP": () => (/* binding */ MMDP)
/* harmony export */ });
/* harmony import */ var _BufferToMMD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BufferToMMD.js */ "../../DSLIBS/divineBinaryObject/dist/MMD/BufferToMMD.js");
/* harmony import */ var _MMDToBufferN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MMDToBufferN.js */ "../../DSLIBS/divineBinaryObject/dist/MMD/MMDToBufferN.js");


const MMDP = {
    toBuffer(data) {
        return _MMDToBufferN_js__WEBPACK_IMPORTED_MODULE_1__.MMDToBuffer.toBuffer(data);
    },
    toObject(buffer, byteOffSet = 0) {
        return _BufferToMMD_js__WEBPACK_IMPORTED_MODULE_0__.BToMMD.toObject(buffer);
    },
    toMMD(buffer, byteOffSet = 0, byteOffSetEnd = 0) {
        return _BufferToMMD_js__WEBPACK_IMPORTED_MODULE_0__.BToMMD.toMMD(buffer, byteOffSet, byteOffSetEnd);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/MetaMarkedData.js":
/*!**************************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/MetaMarkedData.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MMD": () => (/* binding */ MMD)
/* harmony export */ });
/* harmony import */ var _MMD_MetaMarkedParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MMD/MetaMarkedParser.js */ "../../DSLIBS/divineBinaryObject/dist/MMD/MetaMarkedParser.js");

const MMD = {
    parser: _MMD_MetaMarkedParser_js__WEBPACK_IMPORTED_MODULE_0__.MMDP,
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/NodeMaker.js":
/*!*********************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/NodeMaker.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TNM": () => (/* binding */ TNM)
/* harmony export */ });
/* harmony import */ var _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/TypedNode.js */ "../../DSLIBS/divineBinaryObject/dist/Classes/TypedNode.js");
/* harmony import */ var _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants/MetaValues.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/MetaValues.js");
/* harmony import */ var _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants/ByteData.js */ "../../DSLIBS/divineBinaryObject/dist/Constants/ByteData.js");



const TNM = {
    json(data) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues.json, data);
    },
    mmd(data) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues.mmd, data);
    },
    object(data) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues.object, data);
    },
    array(data) {
        if (!Array.isArray(data))
            throw new Error("Data for array must be an array.");
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues.array, data);
    },
    _8i(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["8i"], value);
    },
    _8ui(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["8ui"], value);
    },
    _16i(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["16i"], value);
    },
    _16ui(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["16ui"], value);
    },
    _32ui(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["32ui"], value);
    },
    _32i(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["32i"], value);
    },
    _32f(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["32f"], value);
    },
    _64f(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["64f"], value);
    },
    bigi(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues.bigi, value);
    },
    bigui(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues.bigui, value);
    },
    typedArray(type, value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["typed-array"], 
        //@ts-ignore
        _Constants_ByteData_js__WEBPACK_IMPORTED_MODULE_2__.TypedArrayMap[type].from(value), _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues[type]);
    },
    stringArray(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["string-array"], value);
    },
    string(value) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues.string, value);
    },
    fixedString(value, length) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["fixed-string"], value, 0, length);
    },
    fixedTypedArray(type, value, length) {
        return new _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_0__.TypedNode(_Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues["fixed-typed-array"], value, _Constants_MetaValues_js__WEBPACK_IMPORTED_MODULE_1__.MetaValues[type], length);
    },
    toJSONString(json) {
        if (typeof json === "string") {
            json = JSON.parse(json);
        }
        let output = JSON.stringify(json, function (k, v) {
            if (v instanceof Array)
                return JSON.stringify(v);
            return v;
        }, 2)
            .replace(/\\/g, "")
            .replace(/\"\[/g, "[")
            .replace(/\]\"/g, "]")
            .replace(/\"\{/g, "{")
            .replace(/\}\"/g, "}");
        return output;
    },
};


/***/ }),

/***/ "../../DSLIBS/divineBinaryObject/dist/index.js":
/*!*****************************************************!*\
  !*** ../../DSLIBS/divineBinaryObject/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBO": () => (/* reexport safe */ _DivineBinaryObject_js__WEBPACK_IMPORTED_MODULE_2__.DBO),
/* harmony export */   "MMD": () => (/* reexport safe */ _MetaMarkedData_js__WEBPACK_IMPORTED_MODULE_3__.MMD),
/* harmony export */   "TNM": () => (/* reexport safe */ _NodeMaker_js__WEBPACK_IMPORTED_MODULE_0__.TNM),
/* harmony export */   "TypedNode": () => (/* reexport safe */ _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_1__.TypedNode)
/* harmony export */ });
/* harmony import */ var _NodeMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeMaker.js */ "../../DSLIBS/divineBinaryObject/dist/NodeMaker.js");
/* harmony import */ var _Classes_TypedNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/TypedNode.js */ "../../DSLIBS/divineBinaryObject/dist/Classes/TypedNode.js");
/* harmony import */ var _DivineBinaryObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DivineBinaryObject.js */ "../../DSLIBS/divineBinaryObject/dist/DivineBinaryObject.js");
/* harmony import */ var _MetaMarkedData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetaMarkedData.js */ "../../DSLIBS/divineBinaryObject/dist/MetaMarkedData.js");






/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/DivineStarVoxelEngineRichWorld.js":
/*!***************************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/RichWorld/DivineStarVoxelEngineRichWorld.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVERW": () => (/* binding */ DVERW)
/* harmony export */ });
/* harmony import */ var _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/Settings/EngineSettings.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/Settings/EngineSettings.js");
/* harmony import */ var _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global/Util.helper.js */ "../../DSLIBS/divineVoxelEngine/dist/Global/Util.helper.js");
/* harmony import */ var _Threads_World_WorldComm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Threads/World/WorldComm.js */ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/Threads/World/WorldComm.js");
/* harmony import */ var _Threads_Parent_ParentComm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Threads/Parent/ParentComm.js */ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/Threads/Parent/ParentComm.js");
/* harmony import */ var _Init_InitWorker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Init/InitWorker.js */ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/Init/InitWorker.js");
/* harmony import */ var _Register_RichDataRegister_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Register/RichDataRegister.js */ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/Register/RichDataRegister.js");
/* harmony import */ var _World_Data_Managers_VoxelManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../World/Data/Managers/VoxelManager.js */ "../../DSLIBS/divineVoxelEngine/dist/World/Data/Managers/VoxelManager.js");
/* harmony import */ var _Data_World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Data/World/WorldBounds.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldBounds.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");
//objects


//import { RichWorldTasks } from "./Tasks/Tasks.js";
//threads


//functions





const DVERW = {
    environment: "browser",
    __settingsHaveBeenSynced: false,
    TC: threadcomm__WEBPACK_IMPORTED_MODULE_8__.ThreadComm,
    worldBounds: _Data_World_WorldBounds_js__WEBPACK_IMPORTED_MODULE_7__.WorldBounds,
    UTIL: _Global_Util_helper_js__WEBPACK_IMPORTED_MODULE_1__.Util,
    settings: _Data_Settings_EngineSettings_js__WEBPACK_IMPORTED_MODULE_0__.EngineSettings,
    worldComm: _Threads_World_WorldComm_js__WEBPACK_IMPORTED_MODULE_2__.WorldComm,
    parentComm: _Threads_Parent_ParentComm_js__WEBPACK_IMPORTED_MODULE_3__.ParentComm,
    richData: _Register_RichDataRegister_js__WEBPACK_IMPORTED_MODULE_5__.RichDataRegister,
    voxelManager: _World_Data_Managers_VoxelManager_js__WEBPACK_IMPORTED_MODULE_6__.VoxelManager,
    //takss: RichWorldTasks,
    syncSettings(data) {
        this.settings.syncSettings(data);
        this.settings.syncWithWorldBounds(this.worldBounds);
        this.__settingsHaveBeenSynced = true;
    },
    reStart() { },
    isReady() {
        return DVERW.worldComm.isReady() && DVERW.__settingsHaveBeenSynced;
    },
    async $INIT() {
        await (0,_Init_InitWorker_js__WEBPACK_IMPORTED_MODULE_4__.InitWorker)(this);
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/Init/InitWorker.js":
/*!************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/RichWorld/Init/InitWorker.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitWorker": () => (/* binding */ InitWorker)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");

async function InitWorker(DVERW) {
    let parent = "render";
    if (DVERW.environment == "node") {
        parent = "server";
    }
    await threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.$INIT("rich-world", parent);
    await DVERW.UTIL.createPromiseCheck({
        check: () => {
            return DVERW.isReady();
        },
        checkInterval: 1,
    });
}


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/Register/RichDataRegister.js":
/*!**********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/RichWorld/Register/RichDataRegister.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichDataRegister": () => (/* binding */ RichDataRegister)
/* harmony export */ });
/* harmony import */ var divine_binary_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! divine-binary-object */ "../../DSLIBS/divineBinaryObject/dist/index.js");
/* harmony import */ var _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/World/WorldSpaces.js */ "../../DSLIBS/divineVoxelEngine/dist/Data/World/WorldSpaces.js");


const RichDataRegister = {
    _dimensions: new Map(),
    dimensions: {
        get(dimensionId) {
            const dimension = RichDataRegister._dimensions.get(dimensionId);
            if (!dimension)
                return false;
            return dimension;
        },
        add(dimensionId) {
            const newdimension = new Map();
            RichDataRegister._dimensions.set(dimensionId, newdimension);
            return newdimension;
        },
    },
    region: {
        _getRegionData() {
            return {
                columns: new Map(),
            };
        },
        add(location) {
            let dimension = RichDataRegister.dimensions.get(location[0]);
            if (!dimension) {
                dimension = RichDataRegister.dimensions.add(location[0]);
            }
            const region = this._getRegionData();
            dimension.set(_Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.region.getKeyLocation(location), region);
            return region;
        },
        get(location) {
            const dimension = RichDataRegister.dimensions.get(location[0]);
            if (!dimension)
                return false;
            const region = dimension.get(_Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.region.getKeyLocation(location));
            if (!region)
                return false;
            return region;
        },
        remove(location) {
            const dimension = RichDataRegister.dimensions.get(location[0]);
            if (!dimension)
                return false;
            const key = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.region.getKeyLocation(location);
            const region = dimension.get(key);
            if (!region)
                return false;
            dimension.delete(key);
            return region;
        },
    },
    column: {
        _getColumnData() {
            return divine_binary_object__WEBPACK_IMPORTED_MODULE_0__.TNM.object({
                chunks: divine_binary_object__WEBPACK_IMPORTED_MODULE_0__.TNM.object({}),
                data: divine_binary_object__WEBPACK_IMPORTED_MODULE_0__.TNM.object({}),
            });
        },
        add(location) {
            let region = RichDataRegister.region.get(location);
            if (!region) {
                region = RichDataRegister.region.add(location);
            }
            const column = this._getColumnData();
            region.columns.set(_Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.column.getKeyLocation(location), column);
            return column;
        },
        get(location) {
            const region = RichDataRegister.region.get(location);
            if (!region)
                return false;
            const column = region.columns.get(_Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.column.getKeyLocation(location));
            if (!column)
                return false;
            return column;
        },
        remove(location) {
            const region = RichDataRegister.region.get(location);
            if (!region)
                return false;
            const key = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.column.getKeyLocation(location);
            const column = region.columns.get(key);
            if (!column)
                return false;
            region.columns.delete(key);
            return column;
        },
    },
    chunk: {
        _getChunkData() {
            return {};
        },
        add(location) {
            let column = RichDataRegister.column.get(location);
            if (!column) {
                column = RichDataRegister.column.add(location);
            }
            const chunk = divine_binary_object__WEBPACK_IMPORTED_MODULE_0__.TNM.object({});
            column.value.chunks[_Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.chunk.getIndexLocation(location)] =
                divine_binary_object__WEBPACK_IMPORTED_MODULE_0__.TNM.object({});
            return chunk;
        },
        get(location) {
            let column = RichDataRegister.column.get(location);
            if (!column)
                return false;
            const chunk = column.value.chunks[_Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.chunk.getIndexLocation(location)];
            if (!chunk)
                return false;
            return chunk;
        },
        remove(location) {
            let column = RichDataRegister.column.get(location);
            if (!column)
                return false;
            const index = _Data_World_WorldSpaces_js__WEBPACK_IMPORTED_MODULE_1__.WorldSpaces.chunk.getIndexLocation(location);
            const chunk = column.value.chunks[index];
            if (!chunk)
                return false;
            delete column.value.chunks[index];
            return chunk;
        },
    },
};


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/Threads/Parent/ParentComm.js":
/*!**********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/RichWorld/Threads/Parent/ParentComm.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentComm": () => (/* binding */ ParentComm)
/* harmony export */ });
/* harmony import */ var _DivineStarVoxelEngineRichWorld_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DivineStarVoxelEngineRichWorld.js */ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/DivineStarVoxelEngineRichWorld.js");
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");


const parentComm = threadcomm__WEBPACK_IMPORTED_MODULE_1__.ThreadComm.parent;
parentComm.listenForMessage("sync-settings", (data, event) => {
    const settings = data[1];
    _DivineStarVoxelEngineRichWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVERW.syncSettings(settings);
});
parentComm.listenForMessage("re-start", (data, event) => {
    _DivineStarVoxelEngineRichWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVERW.reStart();
});
const ParentComm = parentComm;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/Threads/World/WorldComm.js":
/*!********************************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/RichWorld/Threads/World/WorldComm.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldComm": () => (/* binding */ WorldComm)
/* harmony export */ });
/* harmony import */ var threadcomm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! threadcomm */ "../../DSLIBS/threadComm/dist/index.js");

const worldComm = threadcomm__WEBPACK_IMPORTED_MODULE_0__.ThreadComm.createComm("world");
const WorldComm = worldComm;


/***/ }),

/***/ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/index.js":
/*!**************************************************************!*\
  !*** ../../DSLIBS/divineVoxelEngine/dist/RichWorld/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DVERW": () => (/* reexport safe */ _DivineStarVoxelEngineRichWorld_js__WEBPACK_IMPORTED_MODULE_0__.DVERW)
/* harmony export */ });
/* harmony import */ var _DivineStarVoxelEngineRichWorld_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DivineStarVoxelEngineRichWorld.js */ "../../DSLIBS/divineVoxelEngine/dist/RichWorld/DivineStarVoxelEngineRichWorld.js");



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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["DSLIBS_divineVoxelEngine_dist_Data_Settings_EngineSettings_js-DSLIBS_threadComm_dist_index_js"], () => (__webpack_require__("./compiled/dev/client/Contexts/RichWorld/richworld.js")))
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
/******/ 			"compiled_dev_client_Contexts_RichWorld_richworld_js": 1
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
/******/ 			return __webpack_require__.e("DSLIBS_divineVoxelEngine_dist_Data_Settings_EngineSettings_js-DSLIBS_threadComm_dist_index_js").then(next);
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
//# sourceMappingURL=compiled_dev_client_Contexts_RichWorld_richworld_js.DVE.js.map