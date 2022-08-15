import create from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set) => ({
            user: null,
            currentUser: (value) => set(() => ({ user: value })),
            removeUser: () => set({ user: null }),
        }),
        {
            name: "user",
        }
    )
);

export default useUserStore;
