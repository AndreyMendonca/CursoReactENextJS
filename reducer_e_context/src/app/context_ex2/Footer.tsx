import { PostContext } from "@/context/PostContext"
import { useContext } from "react"

export const Footer = () =>{

    const postCtz =  useContext(PostContext);

    return (
        <>
            <p>Quantidade de posts: {postCtz?.posts.length}</p>
        </>
    )
}