"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SignUpFormSchema = z.object({
    name: z.string().min(2, "Minimo 2 letras").max(20, 'Maximo 20 letras'),
    lastName: z.string().optional(),
    age: z.number({ invalid_type_error: "Idade precisa ser um número" }).min(18, 'Minimo 18 anos')
})

const Page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(SignUpFormSchema) })

    const handleSignUpForm = () => {
        alert('Vai enviar');
    }

    return (
        <>
            <div className="container mx-auto">
                <form onSubmit={handleSubmit(handleSignUpForm)}>
                    <div>
                        <input
                            type="text"
                            {...register('name')}
                            className='border p-3 m-3'
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            {...register('lastName')}
                            className='border p-3 m-3'
                        />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            {...register('age',{valueAsNumber: true})}
                            className='border p-3 m-3'
                        />
                        {errors.age && <p>{errors.age.message}</p>}
                    </div>
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </>
    )
}

export default Page;