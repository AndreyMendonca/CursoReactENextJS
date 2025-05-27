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
    mutationFn: addPost
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