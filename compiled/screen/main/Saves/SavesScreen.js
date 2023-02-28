import { ScreenManager, SCREEN_STATE } from "../../index";
import { AddClass, button, div, paragraph, title } from "elmtree";
import { ItemList } from "../../Components/ItemList/ItemList";
import { AppDataBase } from "../../../databases/App/AppDataBase.js";
import "./SavesScreen.css";
import { NewSaveScreen } from "./NewSaveScreen";
import { SaveScreenState } from "./SaveScreenState";
import { ConfirmDeleteSaveSCreen } from "./ConfirmDeleteScreen";
import { ConfirmPlayScreen } from "./ConfirmPlayScreen";
const [component, setItems] = ItemList({
    format(data) {
        return [
            title("h3", data.name, "item-list-title"),
            paragraph(`version: ${data.version}`, "item-list-description"),
        ];
    },
    getButtons(data) {
        return [
            {
                text: "Play",
                onClick() {
                    SaveScreenState.saveId = data.name;
                    SCREEN_STATE.screen = "confirm-play-save";
                },
            },
            {
                text: "Delete",
                onClick() {
                    SaveScreenState.saveId = data.name;
                    SCREEN_STATE.screen = "confirm-delete-save";
                },
            },
        ];
    },
    claasses: ["save-screen-list"],
});
export function SavesScreen() {
    NewSaveScreen();
    ConfirmDeleteSaveSCreen();
    ConfirmPlayScreen();
    ScreenManager.screens.add([
        {
            id: "saves",
            mode: "main-menu",
            getElements: () => div("", [
                div("", [
                    button("Add New Save", () => {
                        SCREEN_STATE.screen = "new-save";
                    }, [AddClass(["new-save-button"])]),
                ]),
                component,
            ]),
            async afterRender() {
                const saves = await AppDataBase.getAllSaves();
                setItems(Object.keys(saves).map((saveId) => {
                    return { name: saveId, version: saves[saveId] };
                }));
            },
        },
    ]);
}
