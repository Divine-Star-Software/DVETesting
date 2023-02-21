import type { RadioInputData } from "./Inputs";

type InputBase<T> = {
  label: string;
  bindTo: keyof T;
};

type NumberInput<T> = {
  type: "number-input";
  range?: [min: number, max: number];
  mode?: "int" | "float" | "decimal";
} & InputBase<T>;

type TextInput<T> = {
  type: "text-input";
  max?: number;
} & InputBase<T>;

type TextArea<T> = {
  type: "text-area-input";
  rows?: number;
} & InputBase<T>;

type Radio<T> = {
  type: "radio-input";
  mode?: "vertical" | "horizontal";
  data: RadioInputData;
  bindTo: keyof T;
} & InputBase<T>;

type Toggle<T> = {
  type: "toggle";
  bindTo: keyof T;
} & InputBase<T>;

type Text = {
  type: "text";
  text: string;
};

type Title = {
  type: "title";
  text: string;
};

type Button<T> = {
  type: "button";
  text: string;
  onClick: (data: T) => Promise<void>;
};

export type FormBuilderElements<T> =
  | NumberInput<T>
  | TextInput<T>
  | TextArea<T>
  | Radio<T>
  | Toggle<T>
  | Button<T>
  | Text
  | Title;

export type StaticFormData<T> = {
  inputBind: T;
  elements: FormBuilderElements<T>[];
};

export type DynamicFormData<T> = {
  inputBind: T;
  getElements: () => FormBuilderElements<T>[];
};
