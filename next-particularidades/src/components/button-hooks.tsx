"use client"

import { useRouter } from "next/navigation"

export const ButtonHooks = () =>{
    const router = useRouter();

    const handleClick = () =>{
        router.push('/tela1')
    }

    /* FUNÇÕES DO ROUTER
    BACK - VOLTA PARA TELA ANTERIOR
    FORWARD - AVANÇA PARA A TELA ADIANTE
    REPLACE - VAI PARA A TELA E LIMPA O HISTORICO (USADO PARA LOGIN)
    PREFETCH - PRE CARREGA A TELA 2, E DEPOIS A PAGINA CARREGA MAIS RAPIDO 
    REFRESH - RECARREGAR A PAGINA
    */

    return (
        <div>
            <button onClick={handleClick}>Ir para tela com push</button>
        </div>
    )
}