"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () =>{
    const [item, setItem] = useState('');
    const [list, setList] = useState<TodoItem[]>([])

    const handleAddItem = () =>{
        if(item.trim() != ''){
            setList([
                ...list,
                {id: list.length+1, label: item, checked:false}
            ])
        }
        setItem('')
    }

    const deleteItem = (id:number) =>{
        const newList:TodoItem[] = list.filter(item => item.id !== id)
        setList(newList)
    }

    const toggleChecked = (id:number) =>{
        let newList = [...list];
        for(let i in newList){
            if(newList[i].id === id){
                newList[i].checked = !newList[i].checked;
            }
        }
        setList(newList);
    } 

    return (
        <div className="container mx-auto">
            <h1 className="text-6xl font-bold text-center m-2">ToDo app</h1>
            <div className="m-2 p-2 bg-gray-600 rounded-md w-full flex justify-center items-center">
                <input 
                    type="text" 
                    placeholder="O que voce deseja fazer:"
                    className="p-2 bg-white rounded-md mx-2 w-[80%]"
                    value={item}
                    onChange={ e => setItem(e.target.value)}
                />
                <button onClick={handleAddItem} className="text-white font-bold text-2xl cursor-pointer">Adicionar</button>
            </div>
            <div className="p-2">
                <p className="text-lg text-gray-500 text-center">{list.length} itens na lista</p>

                <ul className="w-full max-w-lg list-disc pl-5">
                    {
                        list.map((item) => (
                            <li 
                                key={item.id} 
                                className="text-xl">
                                <input onChange={() => toggleChecked(item.id)} type="checkbox" className="mr-2" checked={item.checked}  />
                                {item.label} - 
                                <button 
                                    className="hover:underline cursor-pointer" 
                                    onClick={ () => deleteItem(item.id)}>[ deletar ]
                                </button>    
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Page;