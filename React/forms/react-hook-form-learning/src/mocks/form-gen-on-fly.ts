import * as uuid from 'uuid'
import { FormField, FormGeneratorOnFlyProps } from '../components/form-gen-on-user-interactions/types'

const initialConfig: Array<FormField> = [
    {
        component: {
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
    }
]




export const MockFormGeneratorOnFly: FormGeneratorOnFlyProps = {
    initialConfig,
    flows: []
}