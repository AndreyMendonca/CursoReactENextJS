import { Post } from "@/type/post";

type Props = {
    params: {
        postID: string;
    };
};

const Page = async ({ params }: Props) => {
    console.log(params.postID)
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
