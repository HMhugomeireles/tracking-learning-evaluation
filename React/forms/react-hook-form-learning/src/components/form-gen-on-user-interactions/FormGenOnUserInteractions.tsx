import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormGeneratorOnFlyProps, FormField, FormResult } from './types'


// Need check the types of register of react-hook-form
function getElementConfig(initialConfig: FormField, eleRegister: any): JSX.Element {
    // TODO need refactoring this
    if (initialConfig.component.type === "input") {
        return (
            <>
                <label htmlFor={initialConfig.component.name.toString()}>{initialConfig.label}</label>
                <input 
                    //{...initialConfig.component.atr?.map((atrProp) => [atrProp.atr: atrProp.value )} 
                    id={initialConfig.component.id.toString()}
                    name={initialConfig.component.name.toString()} 
                    type={initialConfig.type}  
                    ref={eleRegister({...initialConfig.rules})}
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
                    ref={eleRegister({...initialConfig.rules})}
                    defaultValue=" -- select an option -- "
                >
                    <option key={initialConfig.component.id.toString() + "default"} value=" -- select an option -- "> -- select an option -- </option>
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
    const [userData, setUserData] = useState<FormResult[] | []>([])
    const { register, handleSubmit, watch } = useForm()
    const fieldToWatch = Array.from(new Set(flows.map(field => field.fieldWatch.name.toString())))
    const fieldsWatch = watch(fieldToWatch)

    function onUserSubmit(data: any, event: any) {
        event.target.reset()
        setUserData([...userData, data])
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onUserSubmit)}>
                {initialConfig.map((elementConfig: FormField) => (
                    <div className="form-g" key={elementConfig.id.toString()}>
                        {getElementConfig(elementConfig, register)}
                    </div>
                ))}
                <div>
                    {flows.map(flow => {
                        if (fieldsWatch[flow.fieldWatch.name.toString()] === flow.fieldWatch.value) {
                            return (
                                <div className="form-g" key={flow.componentsToShow.id.toString()}>
                                    {getElementConfig(flow.componentsToShow, register)}
                                </div>
                            )
                        }
                        return <></>
                    })}
                </div>
                <button className="btn-form" type="submit">Send</button>
            </form>
            <div className="results">
                <h3>Submit information</h3>
                <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
        </div>
    )
}

export default FormGenOnUserInteractions