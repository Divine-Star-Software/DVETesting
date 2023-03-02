import { Component, div, AddClass, paragraph } from "elmtree";
import "./DataLog.css";
export const DataLog = (props) => Component({
    addons: [AddClass([`data-log`, ...props.claasses])],
    generate: (items) => Object.keys(items).map((key) => div("data-log-item", [
        div("data-log-key", paragraph(key)),
        div("data-log-value", paragraph(String(items[key]))),
    ])),
});
