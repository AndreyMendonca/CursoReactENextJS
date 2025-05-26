"use client"
import { usePost, usePosts } from "@/utils/queries";
import { useState } from "react";

const Page = () =>{
  const [canLoadPosts, setCanLoadPosts] = useState(false);
  const posts = usePosts(canLoadPosts);
  const postItem = usePost(10);
  
  const handleLoadPostsButton = () =>{
    setCanLoadPosts(true);
  }

  return (
    <div className="container mx-auto">
      <button onClick={handleLoadPostsButton} className="border p-3 rounded-md m-3">Carregar posts</button>
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