import { createContext, ReactNode, useState } from "react";

type ContextType = {
    name: String;
    setName: (n:string) => void;
}

export const LoggedUserContext = createContext<ContextType | null>(null);

export const LoggedUserProvider = ({children}:{children:ReactNode}) =>{
    const [name, setName] = useState('João')
    return (
        <LoggedUserContext.Provider value={{name, setName}} >
            {children}
        </LoggedUserContext.Provider>
    )
}