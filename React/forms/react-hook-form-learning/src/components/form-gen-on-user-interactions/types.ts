interface RuleType {
    value: Number | RegExp,
    message: String
}

export interface FormField {
    component: {
        type: "input" | "select" | "textarea",
        atr: { atr: String, value: String | undefined }[],
        styles: String
    }
    type: "text" | "number" | "password" | "email" | "checkbox" | "date" | "radio",
    id: String,
    label: String,
    placeHolder: String | undefined,
    rules: {
        require: Boolean | undefined,
        maxLength: RuleType
        minLength: RuleType,
        pattern: RuleType
    }
}

export interface FormGeneratorOnFlyProps {
    initialConfig: FormField[]
    flows: any[]
} 