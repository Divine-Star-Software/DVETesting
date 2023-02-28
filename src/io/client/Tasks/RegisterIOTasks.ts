import { AppDataBase } from "@databases/App/AppDataBase";
import { DivineVoxelEngineData } from "divine-voxel-engine/DataLoader/";
export async function RegisterIOTasks(DVEDL: DivineVoxelEngineData) {
  await AppDataBase.$INIT();
  DVEDL.TC.registerTasks<string>(
    "set-save",
    async (id, onDone) => {
      await AppDataBase.getWorldSave(id);
      if (onDone) onDone();
    },
    "deffered"
  );
}
