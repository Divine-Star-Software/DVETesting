import { connectState } from "../state/State.js";
import { CSM } from "../state/Core/CoreStateMachine.js";
export const menuButton = (title, screen, subScreen) => {
    let className = "menu-button";
    if (screen == "project") {
        className += " active";
    }
    return [
        {
            type: "div",
            attrs: {
                tabindex: 0,
                className: className,
            },
            children: [
                {
                    type: "p",
                    text: title,
                },
            ],
            ...connectState(screen),
            events: {
                onClick: () => {
                    console.log(screen);
                    CSM.triggerEventOnState("IDLE", "ENTER_SCREEN", {
                        screen: screen,
                        subScrene: subScreen,
                    });
                },
                onKeyDown: (event) => {
                    if (event.key == " " || event.key == "Enter") {
                        CSM.triggerEventOnState("IDLE", "ENTER_SCREEN", {
                            screen: screen,
                            subScrene: subScreen,
                        });
                    }
                },
            },
        },
    ];
};
export const subMenuButton = (title, subScreen) => {
    let className = "sub-menu-button";
    return [
        {
            type: "div",
            attrs: {
                tabindex: 0,
                className: className,
            },
            children: [
                {
                    type: "p",
                    text: title,
                },
            ],
            ...connectState("current", subScreen),
            events: {
                onClick: () => {
                    CSM.triggerEventOnState("IDLE", "ENTER_SCREEN", {
                        screen: "current",
                        subScrene: subScreen,
                    });
                },
                onKeyDown: (event) => {
                    if (event.key == " " || event.key == "Enter") {
                        CSM.triggerEventOnState("IDLE", "ENTER_SCREEN", {
                            screen: "current",
                            subScrene: subScreen,
                        });
                    }
                },
            },
        },
    ];
};
export const mainScreenSection = (screen, children) => {
    let className = "sub-menu-section inactive";
    return [
        {
            type: "div",
            attrs: {
                className: className,
            },
            children: children,
            ...connectState(screen),
        },
    ];
};
export const subScreenSection = (subScreen, children) => {
    let className = "sub-menu-section inactive";
    return [
        {
            type: "div",
            attrs: {
                className: className,
            },
            children: children,
            ...connectState("current", subScreen),
        },
    ];
};
