"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () =>{
    return (
        <header className="container mx-auto flex my-4 p-5 justify-between items-center bg-secondary rounded-md">
            <Link href="/" className="text-2xl font-bold">
                Sistema Delivery
            </Link>
            <div className="flex gap-2">
                <Button>Login / Cadastro</Button>
                <Button>Carrinho</Button>
            </div>
        </header>
    )
}