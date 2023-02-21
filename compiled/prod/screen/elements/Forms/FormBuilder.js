import { div } from "../BaseElements.js";
import { ElementTree } from "ds-element-tree";
import { input, formButton, formTitle, radioInput, dataInput, form, formText, horizontalRadioInput, } from "./Inputs.js";
export const FormBuilder = {
    _buildForm(inputBind, elements) {
        const tree = [];
        for (const element of elements) {
            switch (element.type) {
                case "text":
                    tree.push(formText(element.text));
                    break;
                case "title":
                    tree.push(formTitle(element.text));
                    break;
                case "number-input":
                    tree.push(input("number", element.label, "number", inputBind, element.bindTo));
                    break;
                case "text-input":
                    tree.push(input("text", element.label, "string", inputBind, element.bindTo));
                    break;
                case "text-area-input":
                    tree.push(dataInput(inputBind, element.bindTo));
                    break;
                case "radio-input":
                    tree.push(div("form-label", [
                        {
                            type: "label",
                            text: element.label,
                        },
                    ]), radioInput(element.data, (value) => {
                        inputBind[element.bindTo] = value;
                    }));
                    break;
                case "toggle":
                    tree.push(div("form-label", [
                        {
                            type: "label",
                            text: element.label,
                        },
                    ]), horizontalRadioInput([
                        { text: "Enabled", value: "1", active: true },
                        { text: "Disabled", value: "0" },
                    ], (value) => {
                        inputBind[element.bindTo] = Boolean(Number(value));
                    }));
                    break;
                case "button":
                    tree.push(formButton(element.text, () => {
                        element.onClick(inputBind);
                    }));
                    break;
                default:
                    break;
            }
        }
        return tree;
    },
    createStaticForm(data) {
        return form(this._buildForm(data.inputBind, data.elements));
    },
    createDynamicForm(data) {
        const ref = { elm: null };
        const formProps = {};
        const DynamicForm = (props) => {
            const stateObj = {
                elements: [],
            };
            const [state, setState, stateProps] = ElementTree.stateful(props, stateObj);
            const elements = form(this._buildForm(data.inputBind, state.elements));
            const component = [
                {
                    type: "component",
                    component: {
                        func: DynamicForm,
                        stateProps: stateProps,
                        stateObject: state,
                        element: "div",
                    },
                    children: elements,
                },
            ];
            return [component, setState];
        };
        const [component, setState] = DynamicForm({});
        return {
            element: component,
            buildForm: async () => {
                const elements = await data.getElements();
                setState({ elements: elements });
            },
        };
    },
};
const t = {
    one: 0,
};
FormBuilder.createStaticForm({
    inputBind: t,
    elements: [
        {
            type: "number-input",
            bindTo: "one",
            label: "test",
        },
    ],
});
