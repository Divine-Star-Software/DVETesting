import { DataBase } from "zeneithdb";
export declare const AppDataBase: {
    db: DataBase;
    $INIT(): Promise<void>;
    inSaveRecord(id: string): Promise<boolean>;
    addToSaveRecord(id: string): Promise<void>;
    removeFromSaveRecord(id: string): Promise<false | undefined>;
    getWorldSave(id: string): Promise<void>;
    removeWorldSave(id: string): Promise<void>;
};
