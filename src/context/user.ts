import type { IconType } from "react-icons";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserInfo } from "../types";

interface UserState {
    userInfo: UserInfo;
    setUser: (user: UserInfo) => void;
}
const useUser = create<UserState>()(
    persist(
        (set) => ({
            userInfo: {
                name: "",
                position: "",
                email: "",
                location: "",
                workingStyle: "",
                stack: [],
                cv: "",
                description: "",
                about: "",
            },
            setUser: (userInfo) => set({ userInfo }),
        }),
        { name: "user", partialize: (state) => ({ userInfo: state.userInfo }) }
    )
);

export default useUser;
