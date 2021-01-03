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
        id: String,
        name: String,
        type: "input" | "select" | "textarea",
        atr: { atr: String, value: String | undefined }[] | undefined,
        styles: String,
        subComponent: SelectSubComponent[] | undefined
    }
    type: "text" | "number" | "password" | "email" | "checkbox" | "date" | "radio" | undefined,
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

export interface Flow {
    fieldWatch: {
        name: String,
        value: String,
        condition: any, // need to change this type
    },
    componentsToShow: FormField
}

export interface FormGeneratorOnFlyProps {
    initialConfig: FormField[]
    flows: Flow[]
} 

export interface FormResult {
    firstName: String,
    lastName: String,
    path: String,
    language: String
}

