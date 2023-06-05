import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@firebase-config";

const authStore = (set, get) => ({
    userDetails: [],
    checkAuthChanges: () => {
        console.log("auth changes");
        onAuthStateChanged(auth, (user) => {
            if (user) {
                set({ userDetails: user });
            } else {
                set({ userDetails: [] });
            }
        });
    },
});

export const useAuthStore = create(authStore);
