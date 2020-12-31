import { useForm } from 'react-hook-form'
import { FormGeneratorOnFlyProps } from './types'

function FormGenOnUserInteractions({ initialConfig, flows }: FormGeneratorOnFlyProps) {
    const { register, handleSubmit } = useForm()

    function onUserSubmit(data: any, event: any) {
        console.log(data)
    }

    return (
        <div className="container">
            <input type="date"  />
            <input type="weak" />
            <input type="datetime-local" />
        </div>
    )
}

export default FormGenOnUserInteractions