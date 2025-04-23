import { useEffect } from "react"

export const Square = () =>{

    useEffect( () =>{
        console.log('Apertou')
        return () =>{
            console.log('Desapertou')
        }
    });

    return (
        <div className="w-40 h-40 bg-red-500"></div>
    );
}