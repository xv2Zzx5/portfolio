import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserInfo } from "../types";

interface UserState {
    user: UserInfo | null;
    setUser: (user: UserInfo) => void;
    isLoading:boolean;
    isError:boolean;
    setLoading: (isLoading:boolean) => void,
    setError: (isError:boolean) => void,
}
const useUser = create<UserState>()(
    //persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            isLoading:true,
            isError:false,
            setLoading:(isLoading) => set({isLoading}),
            setError:(isError) => set({isError})
        }),
        //{ name: "user", partialize: (state) => ({ user: state.user }) }
    //)
);

export default useUser;
