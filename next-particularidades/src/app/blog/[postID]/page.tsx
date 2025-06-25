import { Post } from "@/type/post";
import { Metadata } from "next";

type Props = {
    params: {
        postID: string;
    };
};

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`);

    const post: Post = await response.json();

    return {
        title: post.title
    }
}

const Page = async ({ params }: Props) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`);

    if (!response.ok) {
        throw new Error("Erro ao buscar o post");
    }

    const post: Post = await response.json();

    return (
        <div className="h-screen max-w-2xl mx-auto my-10 text-center">
            <p>Id do post: {params.postID}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Page;


export const generateStaticParams = async () => {
    const postReq = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await postReq.json();

    return posts.map(post => ({
        postId: post.id.toString()
    }))
}

