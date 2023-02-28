import { ScreenManager, SCREEN_STATE } from "../../index";
import { GetForm } from "elmtree";
import { AppDataBase } from "../../../databases/App/AppDataBase";
export function NewSaveScreen() {
    ScreenManager.screens.add([
        {
            id: "new-save",
            mode: "main-menu",
            async getElements() {
                const bind = {
                    title: "",
                    seed: "",
                };
                return [
                    GetForm({
                        inputBind: bind,
                        elements: [
                            {
                                type: "text-input",
                                label: "Title",
                                bindTo: "title",
                            },
                            {
                                type: "text-input",
                                label: "Seed",
                                bindTo: "seed",
                            },
                            {
                                type: "button-group",
                                buttons: [
                                    {
                                        type: "button",
                                        text: "Create",
                                        onClick: async () => {
                                            if (bind.title && bind.seed) {
                                                await AppDataBase.createNewSave(bind.title, bind.seed);
                                                SCREEN_STATE.screen = "saves";
                                            }
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
                ];
            },
        },
    ]);
}
