import { DVEDL } from "divine-voxel-engine/DataLoader";
import { DVEDDataHandler } from "../../../io/client/DataHandler.js";
import { DVEENV } from "../../../core/data/ENV/DVEENV";
import { RegisterIOTasks } from "../../../io/client/Tasks/RegisterIOTasks";
import { AppDataBase } from "../../../databases/App/AppDataBase";
await DVEDL.$INIT(DVEDDataHandler);
await DVEENV.$INIT("../.DVE_ENV");
await AppDataBase.$INIT();
RegisterIOTasks(DVEDL);
