import { DVEDDataBase } from "../../databases/World/DVEDDataBase.js";
import { DVEDServer } from "./Server/DVEDServer.js";
let mode = "indexdb";
export const DVEDDataHandler = {
    async getRegion(location) {
        if (mode == "server")
            return await DVEDServer.loadRegion(location);
        return await DVEDDataBase.loadRegion(location);
    },
    async saveRegion(buffers) {
        if (mode == "server")
            return await DVEDServer.saveRegion(buffers);
        return await DVEDDataBase.saveRegion(buffers);
    },
    async getRegionHeader(location) {
        if (mode == "server")
            return await DVEDServer.loadRegionHeader(location);
        return await DVEDDataBase.loadRegionHeader(location);
    },
    async getColumn(location) {
        if (mode == "server")
            return await DVEDServer.loadColumn(location);
        return await DVEDDataBase.loadColumn(location);
    },
    async saveColumn(location, buffer) {
        if (mode == "server")
            return await DVEDServer.saveColumn(location, buffer);
        return await DVEDDataBase.saveColumn(location, buffer);
    },
    async setPath(id) {
        if (mode == "server")
            return DVEDServer.setPath(id);
        return DVEDDataBase.setPath(id);
    },
    async columnExists(location) {
        if (mode == "server")
            return await DVEDServer.columnExists(location);
        return await DVEDDataBase.columnExists(location);
    },
    async columnTimestamp(location) {
        if (mode == "server")
            return await DVEDServer.columnTimestamp(location);
        return await DVEDDataBase.columnTimestamp(location);
    },
};
