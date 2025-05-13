'use client'
import { PostProvider } from "@/context/PostContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostList } from "@/components/PostList";

const Page = () =>{
    return (
        <PostProvider>
            <div className="container mx-auto">
                <Header/>
                <PostList/>
                <Footer/>
            </div>
        </PostProvider>
    )
}

export default Page;