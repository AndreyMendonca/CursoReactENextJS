"use client"

import { CustomButton } from "@/components/CustomButton";
import { Person } from "@/types/Person";
import { FormEvent, useState } from "react";

const Page = () =>{

  const [count, setCount] = useState<number>(0);

  const [name, setName] = useState<string>("");

  const [fullName, setFullName] = useState<Person>({name:'', lastName:''});

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

  const handleAdd1 = () =>{
    setCount(count+1)
  }

  const handleLimparFullName = () =>{
    setFullName({name: '', lastName: ''})
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center m-2">
        <button onClick={handleClick} className="bg-blue-700 p-3 text-white rounded-md cursor-pointer">Clique aqui</button>
        <button onClick={() => handleClick2('Clique no botão 2')} className="ml-2 bg-amber-400 p-3 text-white rounded-md cursor-pointer">Clique aqui 2</button>
        <CustomButton label="Botão 3" onClick={handleEventoViaParamento}/>
      </div>
      <div className="border-2 m-2 p-2 inline-block">
        <h1>Formulario de login</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" className="border mr-2 p-2"/>
          <input type="submit" value="Enviar" className="p-2 border rounded-md"/>
        </form>
      </div>
      <div className="border-2 m-2 p-2 inline-block">
        <h1>UseState</h1>
        <p className="font-bold text-center">{count}</p>
        <button onClick={handleAdd1} className="p-2 bg-green-500 rounded-md text-white">Adicionar 1</button>
      </div>
      <div className="border-2 m-2 p-2 inline-block">
        <h1>UseState em campos </h1>
        <input 
          type="text" 
          placeholder="Escreva seu nome"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Nome: {name}</p>
      </div>
      <div className="border-2 p-2">
        <h1>UseState em objetos</h1>
        <input 
          type="text" 
          placeholder="Escreva o primeiro nome"
          className="border p-2"
          value={fullName.name}
          onChange={e=> setFullName({...fullName, name: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="Escreva o sobrenome"
          className="border p-2 ml-2"
          value={fullName.lastName}
          onChange={(e)=> setFullName({...fullName, lastName: e.target.value})}
        />
        <p>Nome: {fullName.name} - Sobrenome: {fullName.lastName}</p>
        <button onClick={handleLimparFullName} className="ml-2 bg-red-500 p-3 text-white rounded-md cursor-pointer">Limpar nome</button>
      </div>
    </div>
  )
}

export default Page;
