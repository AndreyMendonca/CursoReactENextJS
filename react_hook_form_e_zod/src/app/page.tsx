"use client"

import {z} from 'zod';

const Page = () =>{
  type SignUpForm = {
    name: string;
    lastName: string;
    age: number;
  }

  const SignUpForm = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(),
    age: z.number().min(18)
  });

  return(
    <>
      <div className="contianer mx-auto">oi</div>
    </>
  )
}

export default Page;