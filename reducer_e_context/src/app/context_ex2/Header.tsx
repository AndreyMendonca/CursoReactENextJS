import { PostContext } from "@/context/PostContext";
import { useContext, useState } from "react"

export const Header = () =>{
    const postCtx = useContext(PostContext);
    const[titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleAddButton = () =>{
        if(titleInput && bodyInput){
            postCtx?.addPost(titleInput, bodyInput)
            setBodyInput('');
            setTitleInput('');
        }
    }

    return(
        <header>
            <h1 className="text-3xl">Titulo da pagina</h1>
            <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
                <input 
                    type="text" 
                    placeholder="Digite um titulo"
                    className="border border-gray-300 p-2 text-black text-xl"
                    value={titleInput}
                    onChange={(e)=> setTitleInput(e.target.value)}
                />
                <textarea
                    placeholder="Digite um corpo"
                    className="h-24 border  border-gray-300 p-2 text-black text-xl"
                    value={bodyInput}
                    onChange={(e)=> setBodyInput(e.target.value)}
                >   
                </textarea>
                <button onClick={handleAddButton} className="bg-blue-500 p-3 rounded-md">Adicional</button>
            </div>
        </header>
    )
}