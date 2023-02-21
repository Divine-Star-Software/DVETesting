import { AppDataBase } from "@databases/App/AppDataBase";
import { DivineVoxelEngineData } from "divine-voxel-engine/DataLoader/";
export function RegisterIOTasks(DVEDL: DivineVoxelEngineData) {
  console.log("register tasks like it should");
  DVEDL.TC.registerTasks<string>(
    "set-save",
    async (id, onDone) => {
      console.log("set save again", id);
      await AppDataBase.getWorldSave(id);
      if (onDone) onDone();
    },
    "deffered"
  );
}
