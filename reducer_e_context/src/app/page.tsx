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

  const handleEdit = (id: number) =>{
    const item = list.find(it => it.id === id);
    
    if(!item) return false;

    const newText = window.prompt('Editar Tarefa', item.text);
    if(!newText || newText.trim() === '') return false;

    dispatch({
      type: 'editText',
      payload: {id, newText}
    })
  }

  const handleDelete = (id: number)=>{
    if(!window.confirm('Tem certeza que deseja excluir')) return false
    dispatch({
      type:'remove',
      payload:{id}
    });
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
            <button onClick={() => handleEdit(item.id)} className="mx-4 cursor-pointer hover:text-gray-500">Editar</button>
            <button onClick={() => handleDelete(item.id)} className="mx-4 cursor-pointer hover:text-gray-500">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page;