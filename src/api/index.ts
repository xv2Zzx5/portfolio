import axios from "axios"
import type { AxiosInstance } from "axios"
class API {
    private client:AxiosInstance
    constructor(){
        this.client = axios.create({
            baseURL: "http://localhost:8000",
            headers:{
                "Content-Type":"application/json"
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
    async login(username:string,password:string) {
        const response = await this.client.request({url:"/admin/login",method:"POST",data:{
            username,
            password,
        }
    });
        localStorage.setItem("token",response.data.token)
        return response.data
    }
}
const api = new API()
export default api