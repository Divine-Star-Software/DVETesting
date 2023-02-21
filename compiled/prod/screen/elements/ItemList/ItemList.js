import { ElementTree, } from "ds-element-tree";
import { div, button, image } from "../BaseElements.js";
import "./ItemList.css";
export const ItemList = (props = { items: [] }) => {
    const stateObj = { items: [] };
    stateObj.items = props.items;
    const [state, setState, stateProps] = ElementTree.stateful(props, stateObj);
    const elements = [];
    for (const node of state.items) {
        const elementButtons = [];
        for (const b of node.buttons) {
            elementButtons.push(button(b.text, "item-list-button", b.onClick));
        }
        let className = "item-list-item";
        let imageElement = [];
        if (node.image) {
            className += " item-list-with-image";
            imageElement = image(node.image, "item-list-image");
        }
        elements.push(div(className, [
            div("item-list-data", [imageElement, node.formatData(node.data)]),
            div("item-list-buttons", [elementButtons]),
        ]));
    }
    const component = [
        {
            type: "component",
            component: {
                //@ts-ignore
                func: ItemList,
                stateProps: stateProps,
                stateObject: state,
                element: "div",
            },
            children: div("item-list", elements),
        },
    ];
    //@ts-ignore
    return [component, setState];
};
