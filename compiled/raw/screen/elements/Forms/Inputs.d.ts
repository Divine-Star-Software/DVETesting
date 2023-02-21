import { ElementTreeData, HTMLInputTypes, InputValueTypes } from "ds-element-tree";
import "./Forms.css";
export declare const form: (children: ElementTreeData) => ElementTreeData;
export declare const fileInput: (label: string, inputBind: any, bindToName: string, onLoad?: ((file: string) => void) | undefined) => ElementTreeData;
export declare const input: (inputType: HTMLInputTypes, label: string, valueType: InputValueTypes, inputBind: any, bindToName: string) => ElementTreeData;
export declare const textArea: (className: string, inputBind: any, bindToName: string, cascadeOrigin?: any) => ElementTreeData;
export declare const dataOutput: (inputBind: any, bindToName: string, cascadeOrigin?: any) => ElementTreeData;
export declare const dataInput: (inputBind: any, bindToName: string) => ElementTreeData;
export type RadioInputData = {
    text: string;
    value: string;
    active?: boolean;
}[];
export declare const radioInput: (options: RadioInputData, onChange: (value: string) => void) => ElementTreeData;
export declare const horizontalRadioInput: (options: RadioInputData, onChange: (value: string) => void) => ElementTreeData;
export declare const formButton: (text: string, onClick: Function) => ElementTreeData;
export declare const formText: (text: string) => ElementTreeData;
export declare const formTitle: (text: string) => ElementTreeData;
