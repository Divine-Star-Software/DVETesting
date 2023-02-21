import { ElementTree } from "ds-element-tree";
import { div, image, paragraph } from "../BaseElements.js";
import "./PickList.css";
export const PickList = (props = { activeItem: "", items: [] }) => {
    const stateObj = { items: [], activeItem: "" };
    stateObj.items = props.items;
    const [state, setState, stateProps] = ElementTree.stateful(props, stateObj);
    const cascadeProps = { activeId: state.activeItem };
    const [cascade] = ElementTree.cascade(cascadeProps);
    const elements = [];
    for (const node of state.items) {
        let className = "pick-list-item";
        let imageElement = [];
        if (node.image) {
            className += "pick-list-with-image";
            imageElement = image(node.image, "pick-list-image");
        }
        if (node.id == state.activeItem) {
            className += " active";
        }
        elements.push([
            {
                type: "div",
                attrs: {
                    className: className,
                },
                children: [
                    div("pick-list-data", [
                        imageElement,
                        paragraph(node.name, "pick-list-title"),
                    ]),
                    div("pick-list-buttons", [
                        paragraph(node.desc, "pick-list-description "),
                    ]),
                ],
                events: {
                    onClick() {
                        cascadeProps.activeId = node.id;
                        node.onClick(cascadeProps.activeId);
                        cascade();
                    },
                },
                cascade: {
                    origin: cascadeProps,
                    receiver(elm, cascadeProps) {
                        if (cascadeProps.activeId == node.id) {
                            elm.classList.add("active");
                        }
                        else {
                            elm.classList.remove("active");
                        }
                    },
                },
            },
        ]);
    }
    const component = [
        {
            type: "component",
            component: {
                //@ts-ignore
                func: PickList,
                stateProps: stateProps,
                stateObject: state,
                element: "div",
            },
            children: div("pick-list", elements),
        },
    ];
    //@ts-ignore
    return [component, setState];
};
