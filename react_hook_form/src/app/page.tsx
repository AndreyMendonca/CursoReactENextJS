"use client"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string,
  lastname: string
  age: number
}
const Page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('name', { required: true, minLength: 2, maxLength: 20 })}
          placeholder="Digite seu nome"
          className="border p-3"
        />
        {errors.name && <p>Esse item precisa ser preenchido corretamente</p>}

        <input {...register('lastname',{required: true})}
          placeholder="Digite seu sobrenome"
          className="block mt-4 border p-3"
        />
        {errors.name?.type === 'required' && <p>Campo Obrigatório</p>}

        <input {...register('age', { required: 'Campo idade obrigátorio', min: 18, max: 120 })}
          type="number"
          placeholder="Digite sua idade"
          className="block mt-4 border p-3"
        />
        {errors.age && <p>{errors.age.message}</p>}
        {errors.age && <p>Esse item precisa ser preenchido corretamente</p>}
        <input type="submit" value='enviar' />
      </form>
    </div>
  )
}

export default Page;