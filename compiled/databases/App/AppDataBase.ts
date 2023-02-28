import { DVEDBrowser } from "dved/Broswer";
import { DataBase, ZeneithDB } from "zeneithdb";
import { DVEENV } from "@core/data/ENV/DVEENV";
import type { WorldSaveData } from "@core/types/Saves/SaveData.types";
import { StringToNumber } from "divine-rng/util";
export const AppDataBase = {
  db: <DataBase>{},

  async $INIT() {
    await ZeneithDB.$INIT();
    const dbName = "ECD_APP";
    let db: DataBase;
    const existanceCheck = await ZeneithDB.databaseExists(dbName);
    if (!existanceCheck) {
      db = await ZeneithDB.createDatabase({
        databaseName: dbName,
        collections: [
          {
            name: "meta-data",
            schema: [],
          },
        ],
      });
      this.db = db;
    } else {
      db = await ZeneithDB.getDatabase(dbName);
      this.db = db;
    }
    await this.db.open();
  },

  async inSaveRecord(id: string) {
    const saveRecord = await this.db.getData<Record<string, any>>(
      "meta-data",
      "save-record"
    );
    if (!saveRecord) {
      this.db.setData<Record<string, any>>("meta-data", "save-record", {});
      return false;
    }
    const save = saveRecord[id];
    return save !== undefined;
  },
  async addToSaveRecord(id: string) {
    let saveRecord = await this.db.getData<Record<string, any>>(
      "meta-data",
      "save-record"
    );
    if (!saveRecord) {
      saveRecord = {};
    }
    saveRecord[id] = DVEENV.data.version;
    this.db.setData<Record<string, any>>(
      "meta-data",
      "save-record",
      saveRecord
    );
  },
  async removeFromSaveRecord(id: string) {
    let saveRecord = await this.db.getData<Record<string, any>>(
      "meta-data",
      "save-record"
    );
    if (!saveRecord) return false;
    delete saveRecord[id];
    this.db.setData<Record<string, any>>(
      "meta-data",
      "save-record",
      saveRecord
    );
  },

  async getWorldSave(id: string) {
    const worldDB = await DVEDBrowser.getWorldDataBase(id);
    const inWorldSave = await this.inSaveRecord(id);
    if (!inWorldSave) {
      await this.addToSaveRecord(id);
      worldDB.database.setData("world-meta", "version", DVEENV.data.version);
    }
  },

  async getAllSaves(): Promise<Record<string, string>> {
    const saveRecord = await this.db.getData<Record<string, any>>(
      "meta-data",
      "save-record"
    );
    if (!saveRecord) return {};
    return saveRecord;
  },

  async removeWorldSave(id: string) {
    await ZeneithDB.deleteDatabase(id);
    await this.removeFromSaveRecord(id);
  },
  async getSavedata(id: string) {
    const worldDB = await DVEDBrowser.getWorldDataBase(id);
    await this.addToSaveRecord(id);
    const data = await worldDB.database.getData("world-meta", "save-data");
    if (!data) return false;
    return data;
  },

  async createNewSave(title: string, seed: string) {
    const saveData: WorldSaveData = {
      title: title,
      seed: StringToNumber(seed),
      created: Date.now(),
      lastPlayed: Date.now(),
      version: DVEENV.data.version,
    };
    const worldDB = await DVEDBrowser.getWorldDataBase(title);
    await this.addToSaveRecord(title);
    worldDB.database.setData("world-meta", "save-data", saveData);
  },


};
