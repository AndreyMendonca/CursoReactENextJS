"use client"

import { User } from "@/types/User";
import { title } from "process";
import { useEffect, useRef, useState } from "react";

const Page = () =>{

  const [listUser, setListUser] = useState<User[]>([]);  

  const getUsers = async () =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
    setListUser(json);
    }catch(err){
      console.log(err)
    }

  }

  const handleAddPost = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Post de teste',
        body: 'Corpo de teste',
        userId: 99
      })
    });
    const json =  await res.json();

    console.log(json);
  }

  useEffect(()=>{
    getUsers()
  },[])

  //upload de arquivos
  const[legendInput, setLegendInput] = useState('');
  const fileInputRef  = useRef<HTMLInputElement>(null);

  const handleFileSend = async () =>{
    if(fileInputRef.current?.files && fileInputRef.current.files.length){
      const  fileItem = fileInputRef.current.files[0];
      console.log(fileItem)
      const  allowed = ['image/jpg','image/jpeg','image/png']
      if(allowed.includes(fileItem.type)){

        const data = new FormData();
        data.append('image',fileItem);
        data.append('legend', legendInput);

        const res = await  fetch('https://jsonplaceholder.typicode.com/posts',{
          method:'POST',
          headers: {
            'Content-type':'multipart/form-data'
          },
          body: data
        });
      }else{
        alert('Arquivo  incopativel')
      }
    }else{
      alert('Selecione  um arquivo')
    }
  }

  return (
    <div className="container mx-auto">
      <div className="text-3xl">Lista de usuarios</div>
      <button onClick={handleAddPost}>Adicionar novo post</button>
      <ul>
        {listUser.map(user => (
          <li key={user.id}>{user.name} - {user.phone}</li>
        ))}
      </ul>
      <hr />
      <div className="maw-w-md flex flex-col gap-3 m-5 p-3 border border-dotted border-gray-400  bg-sky-300">
        <input 
          ref={fileInputRef}
          type="file" 
          className="border"
        />
        <input 
          type="text" 
          placeholder="Digite uma legenda"
          className="p-3 bg-black  rounded-md text-white"
          value={legendInput}
          onChange={(e) => setLegendInput(e.target.value)}
        />
        <button  onClick={handleFileSend}>Enviar imagem</button>
      </div>
    </div>
  );
}

export default Page;