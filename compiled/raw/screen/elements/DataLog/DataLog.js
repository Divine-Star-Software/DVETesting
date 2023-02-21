import { ElementTree } from "ds-element-tree";
import { div } from "../BaseElements.js";
import "./DataLog.css";
export const DataLog = (props) => {
    const [state, setState, stateProps] = ElementTree.stateful(props, props);
    const elements = [];
    for (const key of Object.keys(state.nodes)) {
        const value = String(state.nodes[key]);
        let className = "data-log-item";
        elements.push(div(className, [
            div("data-log-key", [
                {
                    type: "p",
                    text: key,
                },
            ]),
            div("data-log-value", [
                {
                    type: "p",
                    text: value,
                },
            ]),
        ]));
    }
    return [
        [
            {
                type: "component",
                component: {
                    func: DataLog,
                    stateProps: stateProps,
                    stateObject: state,
                    element: "div",
                },
                children: div("data-log", elements),
            },
        ],
        setState,
    ];
};
