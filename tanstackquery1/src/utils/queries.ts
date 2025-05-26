import { useQuery } from "@tanstack/react-query"
import { getPost, getPosts } from "./api"

export const usePosts = (enabled?: boolean) => {
    const query = useQuery({
        queryKey: ['posts'], 
        queryFn: getPosts,
        enabled: enabled
    });
    return query
}

//staleTime = configurar o tempo que cada requisição será considerada  STALE, ou seja, que é um dado que precisa ser atualizado
//staleTime: Infinity

/* 
    enable: true
*/

export const usePost = (id:number) => {
    const query = useQuery({
        queryKey:['posts', id],
        queryFn: () => getPost(id)
    })
    return query
}