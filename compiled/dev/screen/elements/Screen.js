import { connectState, } from "../game/state/State.js";
export const Screen = (screenName, subScreenName, active, children) => {
    let className = "screen";
    if (active) {
        className += " active";
    }
    else {
        className += " inactive";
    }
    return [
        {
            type: "div",
            attrs: {
                className: className,
            },
            children: children,
            ...connectState(screenName, subScreenName),
        },
    ];
};
