"use client"
import axios from "axios";

const Page = () =>{

    const handleGetPost  = async () =>{
        const response  = await axios.get('https://jsonplaceholder.typicode.com/posts')

        console.log(response.data)
    }

    return (
        <div className="container mx-auto">
            <button onClick={handleGetPost} className="bg-sky-300 p-3  m-3">Pegar posts</button>
        </div>
    );
}

export default Page;