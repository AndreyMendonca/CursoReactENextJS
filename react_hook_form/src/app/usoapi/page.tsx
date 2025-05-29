"use client"

import { Form, useForm } from "react-hook-form";

const Page = () => {
    const { register, control } = useForm();

    const handleSuccess = () => {
        alert('Deu tudo certo!');
    }
    const handleError = () => {
        alert('Deu tudo errado!');
    }
    return (
        <>
            <div className="container mx-auto">
                <Form
                    control={control}
                    action={'https://jsonplaceholder.typicode.com/posts'}
                    method="post"
                    onSuccess={handleSuccess}
                    onError={handleError}
                >
                    <input {...register('name', { required: true })} className="m-2 border p-3" />
                    <input {...register('lasName', { required: true })} className="m-2 border p-3" />
                    <input {...register('userId', { required: true })} className="m-2 border p-3" />
                    <button>Enviar</button>
                </Form>
            </div>
        </>

    );
}

export default Page;