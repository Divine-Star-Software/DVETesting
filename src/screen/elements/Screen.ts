import {
  connectState,
} from "../game/state/State.js";
import type { ElementTreeData } from "ds-element-tree";

export const Screen = (
  screenName: string,
  subScreenName: string | "none",
  active: boolean,
  children: ElementTreeData
): ElementTreeData => {
  let className = "screen";
  if (active) {
    className += " active";
  } else {
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

