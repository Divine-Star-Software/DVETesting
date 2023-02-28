import { ScreenManager, SCREEN_STATE } from "../../index";
import { GetForm, div } from "elmtree";
import { AppDataBase } from "../../../databases/App/AppDataBase";
import { SaveScreenState } from "./SaveScreenState";
const bind = {
    title: "",
    seed: "",
};
export function ConfirmDeleteSaveSCreen() {
    ScreenManager.screens.add([
        {
            id: "confirm-delete-save",
            mode: "main-menu",
            getElements() {
                return div("confirm-screen", [
                    GetForm({
                        inputBind: bind,
                        elements: [
                            {
                                type: "title",
                                text: `Delete ${SaveScreenState.saveId}?`,
                            },
                            {
                                type: "button-group",
                                buttons: [
                                    {
                                        type: "button",
                                        text: "Delete",
                                        onClick: async () => {
                                            await AppDataBase.removeWorldSave(SaveScreenState.saveId);
                                            SCREEN_STATE.screen = "saves";
                                        },
                                    },
                                    {
                                        type: "button",
                                        text: "Cancel",
                                        onClick: async () => {
                                            SCREEN_STATE.screen = "saves";
                                        },
                                    },
                                ],
                            },
                        ],
                    }),
                ]);
            },
        },
    ]);
}
