import { AppDataBase } from "../../../databases/App/AppDataBase";
export async function RegisterIOTasks(DVEDL) {
    await AppDataBase.$INIT();
    DVEDL.TC.registerTasks("set-save", async (id, onDone) => {
        await AppDataBase.getWorldSave(id);
        if (onDone)
            onDone();
    }, "deffered");
}
