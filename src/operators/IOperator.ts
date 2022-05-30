export enum InputType {
    TextArea,
    TextBox,
    Dropdown,
    Checkbox,
    Number
}

export interface IInput {
    readonly name: string;
    readonly type: InputType;
    value: string;
}

export interface IOperator {
    inputs: IInput[];
}