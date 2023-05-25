import { nanoid } from "nanoid";
import { create } from "zustand";

const notebookStore = (set, get) => ({
    notebookList: [
        {
            notebookTitle: "Coding Book",
            notebookId: "Sample book 1 ID",
        },
        {
            notebookTitle: "Motivational Book",
            notebookId: "Sample book 2 ID",
        },
    ],
    createNotebook: (title) => {
        const newNotebook = {
            notebookTitle: title,
            notebookId: nanoid(),
        };
        set((state) => ({
            ...state,
            notebookList: [newNotebook, ...state.notebookList],
        }));
    },
});

export const useNotebookStore = create(notebookStore);
