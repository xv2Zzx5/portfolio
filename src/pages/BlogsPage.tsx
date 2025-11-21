import { useEffect, useState } from "react";
import postsApi from "../api";

const BlogsPage = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    useEffect(() => {
        postsApi.getPosts().then((data) => setPosts(data));
    }, []);
    return <div>BlogsPage</div>;
};

export default BlogsPage;
