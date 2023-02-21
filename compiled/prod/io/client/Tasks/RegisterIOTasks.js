import { AppDataBase } from "../../../databases/App/AppDataBase";
export function RegisterIOTasks(DVEDL) {
    console.log("register tasks like it should");
    DVEDL.TC.registerTasks("set-save", async (id, onDone) => {
        console.log("set save again", id);
        await AppDataBase.getWorldSave(id);
        if (onDone)
            onDone();
    }, "deffered");
}
