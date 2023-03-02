import * as fs from "fs";
import { DVED } from "dved/Node/";
DVED.$INIT({
    fs: fs,
    dataDirecotry: "DreamSpaceInfinite",
    sectorSize: 4096,
    spaceBounds: {
        regions: { x: 9, y: 8, z: 9 },
        columns: { x: 4, y: 8, z: 4 },
        chunks: { x: 4, y: 4, z: 4 },
    },
});
DVED.system.updateFolder("one");
const regionTool = DVED.getRegionTool();
regionTool.setLocation(["main", 0, 0, 0]);
export const DVEDServer = {
    parseDVEDMessasge(message) {
        let jsonString = "";
        let pipeCount = 0;
        let finalCount = 0;
        for (let i = 0; i < message.length; i++) {
            let char = message[i];
            finalCount++;
            if (char == "|") {
                pipeCount++;
                if (pipeCount == 2)
                    break;
                continue;
            }
            jsonString += char;
        }
        return {
            message: JSON.parse(jsonString),
            data: message.substring(finalCount),
        };
    },
    hanldeMessage(body) {
        const { message, data } = this.parseDVEDMessasge(body);
        if (message.type == "set-path") {
            DVED.system.updateFolder(message.id);
        }
        if (message.type == "save-column") {
            regionTool.setLocation(message.location);
            regionTool.saveColumn(data);
            return new Uint8Array([1]);
        }
        if (message.type == "load-region-header") {
            const exists = regionTool.setLocation(message.location).regionExists();
            if (!exists) {
                regionTool.createRegion();
            }
            const header = regionTool.getHeader();
            if (!header)
                return new Uint8Array([0]);
            return new Uint8Array(header);
        }
        if (message.type == "load-column") {
            const column = regionTool.setLocation(message.location).loadColumn();
            return column ? new Uint8Array(column) : new Uint8Array([0]);
        }
        if (message.type == "column-exists") {
            const exists = regionTool.setLocation(message.location).regionHasColumn();
            return new Uint8Array([Number(exists ? 1 : 0)]);
        }
        if (message.type == "column-timestamp") {
            const timeStamp = regionTool
                .setLocation(message.location)
                .getColumnTimestamp();
            return new Uint8Array(new Uint32Array([timeStamp ? timeStamp : 0]).buffer);
        }
        return new Uint8Array([1]);
    },
};
