import { postReducer } from "@/reducers/postReduces";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

const STORAGE_KEY= 'postContextContent'

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    removePost: (id:number) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({children}:{children:ReactNode}) =>{
    const [posts, dispatch] = useReducer(
        postReducer, 
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );

    useEffect(() =>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    },[posts]);

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