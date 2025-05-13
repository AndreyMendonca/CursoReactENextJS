import { LoggedUserContext } from "@/context/LoggedUser"
import { useContext } from "react"

export const Header = () =>{
    
    const loggedUserCtz = useContext(LoggedUserContext)

    const handleLogout = () =>{
        loggedUserCtz?.setName('');
    }

    return (
        <header>
            <h1>Titulo da pagina ex1</h1>
            {
                loggedUserCtz?.name &&
                <>
                    <p>Usuario logado: {loggedUserCtz?.name}</p>
                    <button onClick={handleLogout}>Sair</button>
                </>
            }
            {
                (!loggedUserCtz || loggedUserCtz?.name === '')  &&
                <p>Usuario Deslogado</p>
            }

        </header>


    )
}
