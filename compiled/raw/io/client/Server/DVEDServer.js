import { CrystalCompressor } from "crystal-compressor";
export const DVEDServer = {
    url: `http://127.0.0.1:3000`,
    async _compressToString(buffer) {
        let dataString = "";
        const compressed = await CrystalCompressor.compressArray(new Uint8Array(buffer));
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
            const uncompressed = await CrystalCompressor.core.decompressArrayBuffer(buffer);
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
        const uncompressed = await CrystalCompressor.decompressArray(buffer, "Uint8");
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
