import { useEffect, useState } from "react"
import postsApi from "../../api/Posts"

const BlogsPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postsApi.getPosts().then((data) => setPosts(data))
    },[])
  return (
    <div>BlogsPage</div>
  )
}

export default BlogsPage