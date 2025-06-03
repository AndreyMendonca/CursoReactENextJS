"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {z} from 'zod';

  const SignUpFormSchema = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(),
    age: z.number().min(18)
  });

const Page = () =>{

  const {register, handleSubmit} = useForm({
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleSignUpForm = () =>{
    alert('Vai enviar')
  }

  return(
    <>
      <div className="contianer mx-auto">
        <form onSubmit={handleSubmit(handleSignUpForm)}>
          <input 
            type="text" 
            {...register('name')}
            className='border p-3 m-3'
          />
          <input 
            type="text" 
            {...register('lastName')}
            className='border p-3 m-3'
          />
          <input
            {...register('age', {valueAsNumber: true})}
            className='border p-3 m-3'
          />
          <input 
            type="submit" 
            value="Cadastrar"
          />
        </form>
      </div>
    </>
  )
}

export default Page;