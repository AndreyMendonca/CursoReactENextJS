import { ButtonHooks } from "@/components/button-hooks";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Página inicial'
}

const Page = () =>{
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Particularidades Next</h1>
      <Link href={'/tela1'} className="block">Ir para tela 1</Link>
      <ButtonHooks/>
      <Image
        src="/assets/imagem.jpg" 
        width={400}
        height={400}
        quality={50}
        alt="Imagem teste"
      />
    </div>
  )
}

export default Page;