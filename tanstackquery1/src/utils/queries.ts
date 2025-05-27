import { useQuery } from "@tanstack/react-query"
import { getPost, getPosts, getPosts2, getUsers } from "./api"
import { queryClient } from "./queryClient";

export const usePosts = (enabled?: boolean) => {
    const query = useQuery({
        queryKey: ['posts'], 
        queryFn: getPosts,
        enabled: enabled
    });
    return query
}

export const usePosts2 = (limit: number, start: number) => {
    const query = useQuery({
        queryKey: ['posts',{limit, start}], 
        queryFn: () => getPosts2(limit, start),
        placeholderData: (previousData) => previousData
    });
    return query
}

//staleTime = configurar o tempo que cada requisição será considerada  STALE, ou seja, que é um dado que precisa ser atualizado
//staleTime: Infinity

/* 
    enable: true
    configuraçção do estado manual,, ou seja, tem que acionar para fazer uma nova busca
*/

/*
    placeholderData: (previousData) => previousData 
    trava o campo com os dados atuais e não muda para o estado de CARREGANDO. dessa forma enquanto não tiver novos dados, os mesmo serão mantidos
*/

/* 
    placeholderData e inicialData
    duas formas de colocar dados "fake" até que a requisião seja feita.
    A diferença se da que no inicialData eles salva os dados na lista e o placeholder nao
*/

export const usePost = (id:number) => {
    const query = useQuery({
        queryKey:['posts', id],
        queryFn: () => getPost(id)
    })
    return query
}

export const useUsers = () => {
    const query = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    });
    return query;
}

export const useUsersPrefetch = () =>{
    return queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: getUsers
    });
}

export const invalidadePosts = () =>{
    queryClient.invalidateQueries({
        queryKey: ['posts'],
        exact: true
    })
}
//invalidar query. Caso não use o exact, ele vai invalidar tudo que tem a query posts