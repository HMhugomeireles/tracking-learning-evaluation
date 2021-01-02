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
                { tag: "option", atrValue: "right", label: "Right"},
                { tag: "option", atrValue: "left", label: "Left"}
            ]
        },
        type: undefined,
        id: uuid.v4(),
        label: "What you want to do?",
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
            value: "right",
            condition: "equal"
        },
        componentsToShow: {
            component: {
                id: "person-like",
                name: "person-like",
                type: "select",
                styles: "",
                atr: undefined,
                subComponent: [
                    { tag: "option", atrValue: "design", label: "Design"},
                    { tag: "option", atrValue: "programing", label: "Programing"}
                ]
            },
            type: undefined,
            id: uuid.v4(),
            label: "What do you like?",
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