import {z} from 'zod'
const Page = () =>{
    const pattern = z.object({
        email: z.string().email('Email inválido'),
        age: z.number({
            required_error: 'Idade é obrigatória',
            invalid_type_error: 'Idade precisa ser um número'
        }).gte(18, 'Precisa ser maior de idade')
    })

    const result = pattern.parse({
        age: 15
    })

    console.log(result)

    return (
        <>
            <div>oi</div>
        </>
    )
}