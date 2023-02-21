import { DVEDBrowser } from "dved/Broswer";
import { DataBase, ZeneithDB } from "zeneithdb";
import { DVEDENV } from "@core/data/ENV/DVEENV";
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
    saveRecord[id] = DVEDENV.data.version;
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
      worldDB.database.setData("world-meta", "version", DVEDENV.data.version);
    }
  },

  async removeWorldSave(id: string) {
    await ZeneithDB.deleteDatabase(id);
    await this.removeFromSaveRecord(id);
  },
};
