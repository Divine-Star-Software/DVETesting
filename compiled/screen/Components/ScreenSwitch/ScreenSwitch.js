import { UseCascade } from "elmtree";
export const ScreenSwitch = (data) => {
    const elements = [];
    const cascade = UseCascade({
        id: "",
    });
    const setScreen = (id) => {
        cascade.props.id = id;
        cascade.runCascade();
    };
    for (const node of data) {
        let className = "screen-switch-screen";
        if (node.active) {
            cascade.props.id = node.id;
            className += " active";
        }
        else {
            className += " inactive";
        }
        elements.push({
            type: "div",
            children: node.screen,
            attrs: {
                className: className,
            },
            ...cascade.addToElment((elm) => {
                if (cascade.props.id == node.id) {
                    elm.classList.remove("inactive");
                    elm.classList.add("active");
                }
                else {
                    elm.classList.add("inactive");
                    elm.classList.remove("active");
                }
            }),
        });
    }
    return [setScreen, elements];
};
