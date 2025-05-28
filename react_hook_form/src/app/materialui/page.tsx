'use client'
import { SignUpForm } from "@/types/SignUpForm";
import { Input, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
    const {
        control,
        handleSubmit
    } = useForm<SignUpForm>();

    const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
        console.log(data);
    }

    return (
        <div className="contianer mx-auto">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: true, minLength: 2, maxLength: 20 }}
                    render={({ field, fieldState }) =>
                        <Input
                            type="text"
                            {...field}
                            error={fieldState.invalid}
                        />}
                />

                <Controller
                    control={control}
                    name="lastname"
                    rules={{ required: true }}
                    render={({ field, fieldState }) =>
                        <Input
                            type="text"
                            {...field}
                            error={fieldState.invalid}
                        />}
                />

                <Controller
                    control={control}
                    name="age"
                    rules={{ required: true, min: 18 }}
                    render={({ field, fieldState }) =>
                        <Input
                            type="text"
                            {...field}
                            error={fieldState.invalid}
                        />}
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Page;