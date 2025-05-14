import { useUser } from "@/contexts/UserContext";
import { KeyboardEvent, useState } from "react"

export const NameInput = () =>{
    const usetCtx = useUser();
    const [nameInput, setNameInput] = useState('');
    

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) =>{
        if(event.code.toLowerCase() === 'enter'){
            if(nameInput.trim() !== '' && nameInput !== 'bot'){
                usetCtx?.setUser(nameInput.trim());
            }
        }
    }

    return (
        <div className="mt-14">
            <p className="text-xl mb-4">Qual o seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input 
                    type="text" 
                    className="flex-1 border border-black/30 rounded-md px-4 py-3 text-black bg-black/10 outline-none"
                    value={nameInput}
                    onChange={e=> setNameInput(e.target.value)}
                    onKeyUp={handleKeyUpAction}
                />
            </div>  
        </div>
    )
}