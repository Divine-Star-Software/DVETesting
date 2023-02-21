import type { LocationData } from "voxelspaces";
import { CrystalCompressor } from "crystal-compressor";
import { WorldDataBase } from "dved/Broswer/";
import { WorldSpaces } from "divine-voxel-engine/Data/World/WorldSpaces";

export const DVEDDataBase = {
  async setPath(id: string) {
    return true;
  },

  async columnExists(location: LocationData) {
    return (await this.columnTimestamp(location)) > 0;
  },

  async columnTimestamp(location: LocationData) {
    const stamp = await WorldDataBase.columnTimestamp.get(
      WorldSpaces.column.getKeyLocation(location),
      "world-data"
    );
    if (!stamp) return 0;
    return stamp;
  },

  async loadRegionHeader(location: LocationData) {
    const buffer = await WorldDataBase.regionHeader.get(
      WorldSpaces.region.getKeyLocation(location),
      "world-data"
    );
    if (!buffer) return new ArrayBuffer(0);
    return buffer;
  },

  async loadColumn(location: LocationData) {
    const buffer = await WorldDataBase.column.get(
      WorldSpaces.column.getKeyLocation(location),
      "world-data"
    );
    if (!buffer) return new ArrayBuffer(0);
    const d = await (
      await CrystalCompressor.decompressArray(buffer, "Uint8")
    ).buffer;
    return d;
  },

  async saveColumn(location: LocationData, buffer: ArrayBuffer) {
    const compressed = await CrystalCompressor.compressArray(
      new Uint8Array(buffer)
    );
    await WorldDataBase.column.set(
      WorldSpaces.column.getKeyLocation(location),
      "world-data",
      compressed.buffer
    );
    await WorldDataBase.columnTimestamp.set(
      WorldSpaces.column.getKeyLocation(location),
      "world-data",
      Date.now()
    );
    return true;
  },

  async loadRegion(location: LocationData) {
    const uncompressed = await CrystalCompressor.decompressArray(
      new ArrayBuffer(0),
      "Uint8"
    );
    return [uncompressed.buffer];
  },

  async saveRegion(buffer: [location: LocationData, buffer: ArrayBuffer][]) {
    const proms: Promise<any>[] = [];
    for (const column of buffer) {
      proms.push(this.saveColumn(column[0], column[1]));
    }
    await Promise.all(proms);
    return true;
  },
};
