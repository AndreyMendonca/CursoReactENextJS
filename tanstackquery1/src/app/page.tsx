"use client"
import { addPost } from "@/utils/api";
import { invalidadePosts, usePost, usePosts, useUsersPrefetch } from "@/utils/queries";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const Page = () => {
  useUsersPrefetch();
  const [canLoadPosts, setCanLoadPosts] = useState(false);
  const posts = usePosts(canLoadPosts);
  const postItem = usePost(10);

  const handleLoadPostsButton = () => {
    setCanLoadPosts(true);
  }

  const handleInvalidadePostButton = () => {
    invalidadePosts();
  }

  const addMutation = useMutation({
    mutationFn: addPost,
    onMutate: (data) =>{
      console.log('dados da mutation', data)
    },
    onError: (error, data, context) => {
      console.log('pode adicionar a logica de quando der erro')
    },
    onSuccess: (retorno, data, context) => {
      console.log('logica de sucesso')
    },
    onSettled: (retorno, erro, context) =>{
      console.log('Independente se dar erro ou nao, ele sempre executará essa código')
    }
  })

  const handleAddButton = () => {
    addMutation.mutate({
      title: 'Teste',
      body: 'Corpo de teste',
      userId: 7
    })
  }

  return (
    <div className="container mx-auto">
      <button onClick={handleLoadPostsButton} className="border p-3 rounded-md m-3">Carregar posts</button>
      <button onClick={handleInvalidadePostButton} className="border p-3 rounded-md m-3">Invalidar posts</button>
      <button onClick={handleAddButton} className="border p-3 rounded-md m-3">Adicionar posts</button>
      <p onClick={() => addMutation.reset()}>Status Mutation: {addMutation.status}</p>
      {posts.isLoading && 'Carregando...'}
      {posts.isFetched && 'RECarregando...'}
      {posts.data &&
        <ul>
          {posts.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Page;