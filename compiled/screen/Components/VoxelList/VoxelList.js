import { div, paragraph, Component, UseCascade, AddClass, element, AddEvents, AddAttributes, } from "elmtree";
import "./VoxelList.css";
export const VoxelList = (props = { claasses: [], activeItem: "" }) => {
    const cascade = UseCascade({ activeId: props.activeItem });
    return Component({
        addons: [AddClass([`voxel-list`, ...props.claasses])],
        generate: (items) => items.items.map((node) => {
            const className = ["voxel-list-item"];
            let imageElement = [];
            if (node.image) {
                className.push("voxel-list-with-image");
                imageElement = element("img", [
                    AddAttributes({
                        image: {
                            src: node.image,
                        },
                    }),
                    AddClass(["voxel-list-image"]),
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
                div("voxel-list-data", [
                    imageElement,
                    paragraph(node.id, "voxel-list-title"),
                ]),
            ]);
        }),
    });
};
