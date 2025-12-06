import { useEffect, useState } from "react";
import postsApi from "../api";

const BlogsPage = () => {
    const [posts, setPosts] = useState<{ title: string }[]>([]);
    useEffect(() => {
        postsApi.getPosts().then((data) => setPosts(data));
    }, []);
    return (
        <div>
            {posts.map((post) => (
                <p>{post.title}</p>
            ))}
        </div>
    );
};

export default BlogsPage;
