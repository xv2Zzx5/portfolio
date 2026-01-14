import axios from "axios"
import type { AxiosInstance } from "axios"
import type { UserInfo } from "../types"
class API {
    private client:AxiosInstance
    constructor(){
        this.client = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
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
        
        return response.data
    }
    async getUser(){
                const response = await this.client.request({
            url:"/user/1",
            method:"GET"
        })
        return response.data
    }
    async putUser(user:UserInfo,token:string){
        const response = await this.client.request({
            url:"/user/1",
            method:"PUT",
            data: user,
            headers:{Authorization:"Bearer " + token}
        })
        console.log(response)
        return response.data
    }
}
const api = new API()
export default api