"use client"
import { Input } from "@/components/Input";
import { SignUpForm } from "@/types/SignUpForm"
import { SubmitHandler, useForm } from "react-hook-form"

const Page = () => {
  const {
    control,
    handleSubmit
  } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data)
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          control={control}
          name="name"
          rules={{ required: true, minLength: 2, maxLength: 20 }}
        />

        <Input
          control={control}
          name="lastname"
          rules={{ required: true }}
        />

        <Input
          control={control}
          name="age"
          rules={{ required: 'Campo idade obrigátorio', min: 18, max: 120 }}
        />

        <input type="submit" value='enviar' />
      </form>
    </div>
  )
}

export default Page;