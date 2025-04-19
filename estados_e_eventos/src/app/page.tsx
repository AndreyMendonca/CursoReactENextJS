"use client"

import { CustomButton } from "@/components/CustomButton";
import { FormEvent } from "react";

const Page = () =>{

  function handleClick(){
    alert("funcionou");
  }

  function handleClick2(msg: string){
    alert(msg)
  }

  function handleEventoViaParamento(){
    alert('Eventos via parametros')
  }

  const handleFormSubmit = (e : FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      alert('Submit com prevent default')
  }

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center items-center">
        <button onClick={handleClick} className="bg-blue-700 p-3 text-white rounded-md cursor-pointer">Clique aqui</button>
        <button onClick={() => handleClick2('Clique no botão 2')} className="ml-2 bg-amber-400 p-3 text-white rounded-md cursor-pointer">Clique aqui 2</button>
        <CustomButton label="Botão 3" onClick={handleEventoViaParamento}/>
      </div>
      <div className="border border-2 m-2 p-2">
        <h1>Formulario de login</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" className="border mr-2 p-2"/>
          <input type="submit" value="Enviar" className="p-2 border rounded-md"/>
        </form>
      </div>
    </div>
  )
}

export default Page;
