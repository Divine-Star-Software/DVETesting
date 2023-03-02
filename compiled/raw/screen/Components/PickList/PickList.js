import { div, paragraph, Component, UseCascade, AddClass, element, AddEvents, AddAttributes, } from "elmtree";
import "./PickList.css";
export const PickList = (props = { claasses: [], activeItem: "" }) => {
    const cascade = UseCascade({ activeId: props.activeItem });
    return Component({
        addons: [AddClass([`pick-list`, ...props.claasses])],
        generate: (items) => items.items.map((node) => {
            const className = ["pick-list-item"];
            let imageElement = [];
            if (node.image) {
                className.push("pick-list-with-image");
                imageElement = element("img", [
                    AddAttributes({
                        "image": {
                            "src": node.image
                        }
                    }),
                    AddClass(["pick-list-image"])
                ]);
            }
            if (node.id == items.activeItem) {
                className.push("active");
            }
            return element("div", [
                AddClass(className),
                AddEvents({
                    click(event) {
                        event.stopPropagation();
                        event.preventDefault();
                        cascade.props.activeId = node.id;
                        node.onClick(cascade.props.activeId);
                        cascade.runCascade();
                    },
                }),
                cascade.addToElment((elm) => {
                    if (cascade.props.activeId == node.id) {
                        elm.classList.add("active");
                    }
                    else {
                        elm.classList.remove("active");
                    }
                }),
            ], [
                div("pick-list-data", [
                    imageElement,
                    paragraph(node.name, "pick-list-title"),
                ]),
                div("pick-list-buttons", [
                    paragraph(node.desc, "pick-list-description "),
                ]),
            ]);
        }),
    });
};
