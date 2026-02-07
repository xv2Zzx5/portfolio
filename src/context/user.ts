import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserInfo } from "../types";

interface UserState {
    user: UserInfo | null;
    setUser: (user: UserInfo) => void;

}
const useUser = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
        }),
        { name: "user" }
    )
);

export default useUser;
