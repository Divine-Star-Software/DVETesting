import { DVEDBrowser } from "dved/Broswer";
import { ZeneithDB } from "zeneithdb";
import { DVEDENV } from "../../core/data/ENV/DVEENV";
export const AppDataBase = {
    db: {},
    async $INIT() {
        await ZeneithDB.$INIT();
        const dbName = "ECD_APP";
        let db;
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
        }
        else {
            db = await ZeneithDB.getDatabase(dbName);
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
        saveRecord[id] = DVEDENV.data.version;
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
        const worldDB = await DVEDBrowser.getWorldDataBase(id);
        const inWorldSave = await this.inSaveRecord(id);
        if (!inWorldSave) {
            await this.addToSaveRecord(id);
            worldDB.database.setData("world-meta", "version", DVEDENV.data.version);
        }
    },
    async removeWorldSave(id) {
        await ZeneithDB.deleteDatabase(id);
        await this.removeFromSaveRecord(id);
    },
};
