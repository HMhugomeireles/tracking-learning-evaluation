import * as uuid from 'uuid'
import { Flow, FormField, FormGeneratorOnFlyProps } from '../components/form-gen-on-user-interactions/types'

const initialConfig: Array<FormField> = [
    {
        component: {
            id: "firstName",
            name: "firstName",
            type: "input",
            styles: "",
            atr: undefined,
            subComponent: undefined
        },
        type: "text",
        id: uuid.v4(),
        label: "First name",
        placeHolder: undefined,
        rules: {
            require: true,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined
        }
    },
    {
        component: {
            id: "lastName",
            name: "lastName",
            type: "input",
            styles: "",
            atr: undefined,
            subComponent: undefined
        },
        type: "text",
        id: uuid.v4(),
        label: "Last name",
        placeHolder: undefined,
        rules: {
            require: true,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined
        }
    },
    {
        component: {
            id: "path",
            name: "path",
            type: "select",
            styles: "",
            atr: undefined,
            subComponent: [
                { tag: "option", atrValue: "frontend", label: "Frontend"},
                { tag: "option", atrValue: "backend", label: "Backend"}
            ]
        },
        type: undefined,
        id: uuid.v4(),
        label: "What do you want prefer?",
        placeHolder: undefined,
        rules: {
            require: true,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined
        }
    }
]

const flows: Array<Flow> = [
    {
        fieldWatch: {
            name: "path",
            value: "frontend",
            condition: "equal"
        },
        componentsToShow: {
            component: {
                id: "language",
                name: "language",
                type: "select",
                styles: "",
                atr: undefined,
                subComponent: [
                    { tag: "option", atrValue: "react", label: "React"},
                    { tag: "option", atrValue: "angular", label: "Angular"}
                ]
            },
            type: undefined,
            id: uuid.v4(),
            label: "What framework/library do you like use?",
            placeHolder: undefined,
            rules: {
                require: true,
                maxLength: undefined,
                minLength: undefined,
                pattern: undefined
            }
        }
    },
    {
        fieldWatch: {
            name: "path",
            value: "left",
            condition: "equal"
        },
        componentsToShow: {
            component: {
                id: "language",
                name: "language",
                type: "select",
                styles: "",
                atr: undefined,
                subComponent: [
                    { tag: "option", atrValue: "javascript", label: "Javascript"},
                    { tag: "option", atrValue: "python", label: "Python"}
                ]
            },
            type: undefined,
            id: uuid.v4(),
            label: "What language do you like use in backend?",
            placeHolder: undefined,
            rules: {
                require: true,
                maxLength: undefined,
                minLength: undefined,
                pattern: undefined
            }
        }
    }
]


export const MockFormGeneratorOnFly: FormGeneratorOnFlyProps = {
    initialConfig,
    flows
}