import { div, button, Component, AddClass } from "elmtree";
import "./ItemList.css";
export const ItemList = (props) => Component({
    addons: [AddClass([`item-list`, ...props.claasses])],
    generate: (items) => items.map((node) => div("item-list-item", [
        ...props.format(node),
        div("item-list-buttons", [
            props
                .getButtons(node)
                .map((b) => button(b.text, b.onClick, [AddClass(["item-list-button"])])),
        ]),
    ])),
});
