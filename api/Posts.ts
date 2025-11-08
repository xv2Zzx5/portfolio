import axios from "axios"
import type { AxiosInstance } from "axios"
class PostsAPI {
    private client:AxiosInstance
    constructor(){
        this.client = axios.create({
            baseURL: "http://localhost:8000",
            headers:{
                "Content-Type":"application/json*"
            }
        })
    }
    async getPosts(){
        const response = await this.client.request({
            url:"/posts",
            method:"GET"
        })
        return response.data
        
    }
}
const postsAPI = new PostsAPI()
export default postsAPI