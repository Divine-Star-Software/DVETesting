import type { ElementTreeData } from "ds-element-tree";
export declare const div: (className: string, children: ElementTreeData) => ElementTreeData;
export declare const title: (titleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6", text: string, className?: string) => ElementTreeData;
export declare const paragraph: (children: string | ElementTreeData, className?: string) => ElementTreeData;
export declare const button: (text: string, className: string, onClick: Function) => ElementTreeData;
export declare const image: (src: string, className?: string) => ElementTreeData;
