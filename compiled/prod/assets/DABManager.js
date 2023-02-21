import { CrystalCompressor } from "crystal-compressor";
import { DBO } from "divine-binary-object";
export const DABManager = {
    DABS: {
        textures: [],
        sfx: [],
    },
    async _fetchAndParse(path) {
        const rawDataResponse = await fetch(path);
        const rawData = await rawDataResponse.arrayBuffer();
        const uncompressed = (await CrystalCompressor.decompressArray(rawData, "Uint8"));
        return DBO.metaMarkedParser.toMMD(uncompressed.buffer);
    },
    async $LOAD() {
        const manifestData = await this._fetchAndParse("./assets/DAB/DAB");
        for (const include of manifestData.value.includes.value) {
            const MMD = await this._fetchAndParse(`./assets/DAB/${include}`);
            const type = MMD.value.type.value;
            if (type == "textures") {
                for (const texture of MMD.value.textures.value) {
                    const textureData = texture.value.data.value;
                    const textureBuffers = texture.value.texturBuffers.value;
                    textureData.rawData = textureBuffers["default"].value;
                    for (const varId in textureData.variations) {
                        const varation = textureData.variations[varId];
                        varation.rawData = textureBuffers[varId].value;
                    }
                    this.DABS.textures.push(textureData);
                }
            }
            if (type == "sfx") {
                for (const sfx of MMD.value.sfx.value) {
                    const sfxData = sfx.value.data.value;
                    const buffer = sfx.value.buffer.value;
                    sfxData.rawData = buffer;
                    this.DABS.sfx.push(sfxData);
                }
            }
        }
    },
};
