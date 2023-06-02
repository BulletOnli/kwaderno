import { create } from "zustand";

const userStore = (set, get) => ({
    username: "Bullet",
    avatarUrl: "",
    changeUsername: (name) => {
        set({ username: name });
    },
});

export const useUserStore = create(userStore);
