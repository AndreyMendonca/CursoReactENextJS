"use client"
import { usePost, usePosts } from "@/utils/queries";

const Page = () =>{
  const posts = usePosts();
  const postItem = usePost(10);
  
  return (
    <div className="container mx-auto">
      {posts.isLoading && 'Carregando...'}
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