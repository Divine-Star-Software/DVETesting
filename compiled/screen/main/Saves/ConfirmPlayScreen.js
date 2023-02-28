import { ScreenManager, SCREEN_STATE } from "../../index";
import { GetForm, div } from "elmtree";
import { SaveScreenState } from "./SaveScreenState";
import { APP_STATE } from "../../../client/State/AppState";
export function ConfirmPlayScreen() {
    ScreenManager.screens.add([
        {
            id: "confirm-play-save",
            mode: "main-menu",
            getElements() {
                return div("confirm-screen", [
                    GetForm({
                        inputBind: {},
                        elements: [
                            {
                                type: "title",
                                text: `Play ${SaveScreenState.saveId}?`,
                            },
                            {
                                type: "button-group",
                                buttons: [
                                    {
                                        type: "button",
                                        text: "Play",
                                        onClick: async () => {
                                            APP_STATE.save = SaveScreenState.saveId;
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
