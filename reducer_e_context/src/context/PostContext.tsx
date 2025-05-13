import { postReducer } from "@/reducers/postReduces";
import { createContext, ReactNode, useReducer, useState } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    removePost: (id:number) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({children}:{children:ReactNode}) =>{
    const [posts, dispatch] = useReducer(postReducer, []);


    const addPost = (title: string, body: string) => {
        dispatch({
            type: 'add',
            payload: {title, body}
        })
    }

    const removePost = (id:number) => {
        dispatch({type: 'remove', payload:{id}});
    }

    return(
        <PostContext.Provider value={{posts, addPost, removePost}}>
            {children}
        </PostContext.Provider>
    )
}