import { ElementTree } from "ds-element-tree";
export const ScreenSwitch = (data) => {
    const elements = [];
    const cascadeProps = {
        id: "",
    };
    const [cascade] = ElementTree.cascade(cascadeProps);
    const setScreen = (id) => {
        cascadeProps.id = id;
        cascade();
    };
    for (const node of data) {
        let className = "screen-switch-screen";
        if (node.active) {
            cascadeProps.id = node.id;
            className += " active";
        }
        else {
            className += " inactive";
        }
        console.log(className);
        elements.push({
            type: "div",
            children: node.screen,
            attrs: {
                className: className,
            },
            cascade: {
                origin: cascadeProps,
                receiver(elm, cascadeProps) {
                    if (cascadeProps.id == node.id) {
                        elm.classList.remove("inactive");
                        elm.classList.add("active");
                    }
                    else {
                        elm.classList.add("inactive");
                        elm.classList.remove("active");
                    }
                },
            },
        });
    }
    return [setScreen, elements];
};
