import { Component, ElmTreeData, div, AddClass, paragraph } from "elmtree";
import "./DataLog.css";
export const DataLog = (props: {
  claasses: string[];
}) =>
  Component({
    addons: [AddClass([`data-log`, ...props.claasses])],
    generate: (items: Record<string, any>) =>
      Object.keys(items).map((key) =>
        div("data-log-item", [
          div("data-log-key", paragraph(key)),
          div("data-log-value", paragraph(String(items[key]))),
        ])
      ),
  });
