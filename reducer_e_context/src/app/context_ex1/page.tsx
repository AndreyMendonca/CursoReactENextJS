'use client'
import { LoggedUserProvider } from "@/context/LoggedUser";
import { Header } from "./Header";

const Page = () =>{
    return (
        <div className="container mx-auto">
            <LoggedUserProvider>
                <Header/>
            </LoggedUserProvider> 
        </div>

    )
}

export default Page;