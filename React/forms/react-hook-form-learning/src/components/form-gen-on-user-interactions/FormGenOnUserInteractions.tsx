//import { useForm } from 'react-hook-form'
import { FormGeneratorOnFlyProps, FormField } from './types'

const ElementStrategy = {
    input: <input />,
    select: <select></select>,
    textarea: <textarea></textarea>
}
interface GetElementConfigProps {
    element: JSX.Element,
    initialConfig: FormField
}

function getElement(initialConfig: FormField): GetElementConfigProps {
    const element = ElementStrategy[initialConfig.component.type]

    return {element, initialConfig}
}

function getElementConfig({element, initialConfig}: GetElementConfigProps): JSX.Element {
    if (element.type === "input") {
        return <input type={initialConfig.type}  />
    }

    if (element.type === "select") {
        return <select>
            {initialConfig.component.subComponent?.map((option) => (
                    <option value={option.atrValue.toString()}>{option.label}</option>
            ))}
        </select>
    }

    return <textarea></textarea>
}


function FormGenOnUserInteractions({ initialConfig, flows }: FormGeneratorOnFlyProps) {
    //const { register, handleSubmit } = useForm()

    // function onUserSubmit(data: any, event: any) {
    //     console.log(data)
    // }

    return (
        <div className="container">
            {initialConfig.map((elementConfig: FormField) => (
                <div key={elementConfig.id.toString()}>
                    <label>{elementConfig.label}</label>
                    {getElementConfig(getElement(elementConfig))}
                </div>
            ))}
        </div>
    )
}

export default FormGenOnUserInteractions