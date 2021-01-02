import { useForm } from 'react-hook-form'
import { FormGeneratorOnFlyProps, FormField } from './types'

// Need check the types of register of react-hook-form
function getElementConfig(initialConfig: FormField, eleRegister: any): JSX.Element {
    // TODO need refactoring this
    if (initialConfig.component.type === "input") {
        if (initialConfig.type === "checkbox" || initialConfig.type === "radio") {
            return (
                <label>
                    <input
                        id={initialConfig.component.id.toString()}
                        name={initialConfig.component.name.toString()} 
                        type={initialConfig.type} 
                        //{...initialConfig.component.atr?.map((atrProp) => [atrProp.atr: atrProp.value )} 
                        ref={eleRegister}
                    />    
                    {initialConfig.label}
                </label>
            )
        }
        return (
            <>
                <label>{initialConfig.label}</label>
                <input 
                    id={initialConfig.component.id.toString()}
                    name={initialConfig.component.name.toString()} 
                    type={initialConfig.type}  
                    ref={eleRegister}
                />
            </>
        )
    }

    if (initialConfig.component.type === "select") {
        return (
            <>
                <label>{initialConfig.label}</label>
                <select
                    id={initialConfig.component.id.toString()}
                    name={initialConfig.component.name.toString()}
                    ref={eleRegister}
                >
                    {initialConfig.component.subComponent?.map((option) => (
                            <option key={option.atrValue.toString()} value={option.atrValue.toString()}>{option.label}</option>
                    ))}
                </select>
            </>
        )
    }

    return <textarea></textarea>
}


function FormGenOnUserInteractions({ initialConfig, flows }: FormGeneratorOnFlyProps) {
    const { register, handleSubmit, watch } = useForm()
    const isRight = watch('path')

    function onUserSubmit(data: any, event: any) {
        console.log(data)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onUserSubmit)}>
                {initialConfig.map((elementConfig: FormField) => (
                    <div key={elementConfig.id.toString()}>
                        {getElementConfig(elementConfig, register)}
                    </div>
                ))}
                {isRight && console.log("#", isRight)}
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default FormGenOnUserInteractions