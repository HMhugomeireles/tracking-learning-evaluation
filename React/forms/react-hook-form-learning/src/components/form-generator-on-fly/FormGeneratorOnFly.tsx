import { useForm } from 'react-hook-form'

interface FormGeneratorOnFlyProps {
    initialConfig: any[]
    flows: any[]
} 

function FormGeneratorOnFly({ initialConfig, flows }: FormGeneratorOnFlyProps) {
    const { register, handleSubmit } = useForm()

    function onUserSubmit(data: any, event: any) {
        console.log(data)
    }

    return (
        <div className="container">
            
        </div>
    )
}

export default FormGeneratorOnFly