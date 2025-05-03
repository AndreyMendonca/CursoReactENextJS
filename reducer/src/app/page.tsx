"use client"
import { listReducer } from "@/reducers/listReducer";
import { Item } from "@/types/Item";
import { useReducer, useState } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');
  
  const handleAddClick = () =>{
    if(addField.trim() === '') return false;
    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    })
    setAddField('');
  }

  const handleDoneCheckbox = (id: number) =>{
    dispatch({
      type: "toggleDone",
      payload: {  id }
    })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl">Lista de tarefas</h1>
      <div className="border border-gray-400 p-4 my-4 flex max-h-2xl">
        <input 
          type="text" 
          className="rounded-md border text-black border-black p-3 bg-transparent flex-1 outline-none"
          placeholder="Digite um item"
          value={addField}
          onChange={e=> setAddField(e.target.value)}
        />
        <button onClick={handleAddClick} className="p-4 cursor-pointer hover:text-gray-500">ADICIONAR</button>
      </div>
      <ul className="max-h-2xl mx-auto">
        {list.map(item =>(
          <li key={item.id}
            className="flex p-3 my-3 border-b border-gray-300 items-center"
          >
            <input 
              onChange={() => handleDoneCheckbox(item.id)}
              type="checkbox" 
              className="h-6 w-6 mr-4" 
              checked={item.done}
            />
            <p className="flex-1 text-lg">{item.text}</p>
            <button className="mx-4 cursor-pointer hover:text-gray-500">Editar</button>
            <button className="mx-4 cursor-pointer hover:text-gray-500">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page;