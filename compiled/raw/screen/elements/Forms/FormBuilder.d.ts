import { ElementTreeData } from "ds-element-tree";
import type { StaticFormData, FormBuilderElements, DynamicFormData } from "./FormBuilder.types";
export declare const FormBuilder: {
    _buildForm(inputBind: any, elements: FormBuilderElements<any>[]): ElementTreeData;
    createStaticForm<T>(data: StaticFormData<T>): ElementTreeData;
    createDynamicForm<T_1>(data: DynamicFormData<T_1>): {
        element: ElementTreeData;
        buildForm: () => Promise<void>;
    };
};
