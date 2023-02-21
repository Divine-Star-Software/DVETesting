import { Component, ElementTree, ElementTreeData } from "ds-element-tree";
import { div } from "../BaseElements.js";
import "./DataLog.css";

type DataLogData = { nodes: Record<string, any> };

export const DataLog: Component<DataLogData> = (props: DataLogData) => {
  const [state, setState, stateProps] = ElementTree.stateful<
    DataLogData,
    DataLogData
  >(props, props);

  const elements: ElementTreeData = [];

  for (const key of Object.keys(state.nodes)) {
    const value = String(state.nodes[key]);
    let className = "data-log-item";

    elements.push(
      div(className, [
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
      ])
    );
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
