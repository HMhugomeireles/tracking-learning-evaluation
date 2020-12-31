interface RuleType {
    value: Number | RegExp,
    message: String
}

interface SelectSubComponent {
    tag: "option",
    atrValue: String,
    label: String
}

export interface FormField {
    component: {
        type: "input" | "select" | "textarea",
        atr: { atr: String, value: String | undefined }[] | undefined,
        styles: String,
        subComponent: SelectSubComponent[] | undefined
    }
    type: "text" | "number" | "password" | "email" | "checkbox" | "date" | "radio",
    id: String,
    label: String,
    placeHolder: String | undefined,
    rules: {
        require: boolean | undefined,
        maxLength: RuleType | undefined,
        minLength: RuleType | undefined,
        pattern: RuleType | undefined
    }
}

export interface FormGeneratorOnFlyProps {
    initialConfig: FormField[]
    flows: any[]
} 