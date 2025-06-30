"use client"

import { useRouter } from "next/navigation"

export const ButtonHooks = () =>{
    const router = useRouter();

    const handleClick = () =>{
        router.push('/tela1')
    }

    return (
        <div>
            <button onClick={handleClick}>Ir para tela com push</button>
        </div>
    )
}