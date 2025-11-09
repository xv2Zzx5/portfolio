import { create,  } from 'zustand'
import {persist} from "zustand/middleware"

interface AuthState{
    token:string|null,
    username: string|null,
    login:(username:string, token:string) => void,
    logout:() => void 
}
const useAuth = create<AuthState>()(
    persist(
        (set) => ({
            token:null,
            username:null,
            login:(username,token) => set({username,token}),
            logout: () => set({username:null,token:null})
        }),
        {name:"auth",partialize:(state) => ({username:state.username,token:state.token})}
    )
)


export default useAuth