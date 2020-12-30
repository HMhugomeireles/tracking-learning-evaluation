import { useForm } from 'react-hook-form'

interface FormGeneratorProps {
    formConfigs: any[]
} 

function FormGenerator({ formConfigs }: FormGeneratorProps) {
    const { register, handleSubmit } = useForm()

    function onUserSubmit(data: any, event: any) {
        console.log(data)
    }

    return (
        <div className="container">
            {Boolean(formConfigs.length < 1) 
                ? <div>Error on render Form</div> 
                : (
                    <form onSubmit={handleSubmit(onUserSubmit)}>
                        {formConfigs.map((namespaces) => (
                            <div key={"sp"+namespaces.name} className="form-namespace">
                                <h2>{namespaces.name}</h2>
                                {namespaces.formFields.map((field: any) => (
                                    <div key={"grp"+field.name} className="form-group">
                                        <label>{field.label}</label>
                                        <input
                                            key={"inp"+field.id} 
                                            id={field.id} 
                                            name={field.name} 
                                            type={field.type}
                                            ref={register} />
                                    </div>
                                ))}
                            </div>
                        ))}
                        <button type="submit">Submit</button>
                    </form>
                )
            }
        </div>
    )
}

export default FormGenerator