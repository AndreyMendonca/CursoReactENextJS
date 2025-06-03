import { z } from "zod"

const Page = () => {

    const pattern = z.string();
    const result = pattern.parse("Bonieky");
    console.log(result)
    /* 
        tipos:
        z.object({}) -> informa que é um objeto
        z.boolean()
        z.number()
        z.bigint()
        z.date()
        z.undefined() -> indefinido
        z.null() -> nulo
        z.any() -> aceita qualquer coisa
    */

    const objeto = z.object({
        name: z.string(),
        lastName: z.string(),
        age: z.number().optional()
    })
    // usamos ".optional()" para dados que não são obrigátorio

    // Para configurar dados que são especificos, usamos o .literal() passando como paramentos o dados que queremos que sempre seja ele

    const literal = z.literal("Andrey")
    //Nesse exemplo, caso não seja enviado "Andrey" ele vai dar erro

    /**
     * Transformation: - regras de transformações
     *  - .toUpperCase()
     *  - .toLowerCase()
     *  - .trim()
     */

    /**
     * Validations - regras de validações
     * - .min(2) 
     * - .max(20)
     * - .email()
     * - .url()
     * - .emoji()
     * - .uuid()
     * - .regex() 
     * - .includes('wp_') -> texto precisa incluir essa informação
     * - .startsWith('abc') -> inicia com o dado 
     * - .endsWith('xwz') -> termina com esse trecho 
     */

    //COMBINAÇÃO DE REGRAS

    /**
     *  Maior que = .gt()
     *  Menor que = .lt()
     *  Maior ou igual  = .gte()
     *  menor ou igual = .lte()
     *  numero inteiro = .int()
     *  numero positivo = .positivo()
     *  não é numero negativo = .nonnegative()
     */

    const regras = z.object({
        age: z.number().gte(18)
    })


    //TRABALHANDO COM ENUM
    const enumeracao = z.object({
        combustive: z.enum(['Gasolina, Etano, Diesel'])
    })

    //INTERSÃO DE DADOS

    const person = z.object({
        name: z.string(),
        age: z.number()
    })

    const employee = z.object({
        role: z.string()
    })

    const employedPerson = z.intersection(person, employee)
    //dessa forma vai precisar satisfazer tanto person quando employee

    //TRABALHANDO COM DADOS QUE PODEM SER DUAS COISAS
    const uniam = z.object({
        age: z.union([z.string(), z.number()])
    })


    return (
        <>
            <div>oi</div>
        </>
    )
}

export default Page;