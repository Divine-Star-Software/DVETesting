import { ElementTree } from "ds-element-tree";
import { div } from "../elements/BaseElements";
import { DSLogo } from "../elements/DSLogo/DSLogo";
import "./intro.css";
const cascaeProps = {
    done: false,
};
const [cascade] = ElementTree.cascade(cascaeProps);
export const IntroScreen = () => {
    return [
        {
            type: "div",
            attrs: {
                className: "intro-container",
            },
            cascade: {
                origin: cascaeProps,
                receiver(elm) {
                    if (cascaeProps.done) {
                        elm.classList.add("intro-out");
                        setTimeout(() => {
                            elm.remove();
                        }, 1_000);
                        return;
                    }
                    for (const child of elm.children) {
                        if (child.classList.contains("intro-in")) {
                            child.classList.remove("intro-in");
                            child.classList.add("intro-out");
                            setTimeout(() => {
                                child.remove();
                            }, 2_000);
                        }
                    }
                },
            },
            children: [
                div("intro-screen-child  intro-in", [
                    DSLogo("intro-logo", 500, 500),
                    //  title("h1", "DIVINE STAR GAMES", "dsg-intro-title"),
                ]),
            ],
        },
    ];
};
setTimeout(() => {
    cascade();
    setTimeout(() => {
        cascaeProps.done = true;
        cascade();
    }, 3_000);
}, 3_000);
