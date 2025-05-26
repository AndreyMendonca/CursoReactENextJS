"use client"
import {usePosts2 } from "@/utils/queries";
import { useState } from "react";

const Page = () => {
    const limit = 3;
    const [page, setPage] = useState(0);
    const posts = usePosts2(limit, page * limit);

    const handlePrevButton = () => {
        setPage(page === 0 ? 0 : page-1);
    }

    const handleNextButton = () =>{
        setPage(page+1);
    }

    return (
        <div className="container mx-auto">
            <div className="border p-3 m-3">
                <div>Itens por página: {limit}</div>
                <div>Número da pagina: {page}</div>
                <button onClick={handlePrevButton} className="border m-2 p-2">Página anterior</button>
                <button onClick={handleNextButton} className="border m-2 p-2">Proxima Página</button>
            </div>

            {posts.isInitialLoading && 'Carregando...'}
            {posts.isLoading && posts.isFetched && 'RECarregando...'}
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