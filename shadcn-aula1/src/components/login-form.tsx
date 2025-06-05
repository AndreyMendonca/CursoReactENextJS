"use client"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


const formSchema = z.object({
    email: z.string().email('Email não valido'),
    password: z.string().min(2, 'Precisa ter no mínimo 2 caracteres')
})

export const LoginForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { email: '', password: '' }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Faça o login</CardTitle>
                <CardDescription>Digite seus dados de login.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Digite seu e-mail" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            type="password"
                                            placeholder="Digite sua senha" 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}