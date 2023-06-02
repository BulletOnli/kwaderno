import { nanoid } from "nanoid";
import { create } from "zustand";

const notebookStore = (set, get) => ({
    notebookList: [
        {
            notebookTitle: "Coding",
            notebookDescription: "coding book desc",
            notebookId: "Coding",
        },
        {
            notebookTitle: "Motivational",
            notebookDescription: "Motivational book sfsdlkfjljlwerjkl",
            notebookId: "Motivational",
        },
    ],
    createNotebook: (title, description) => {
        const newNotebook = {
            notebookTitle: title,
            notebookDescription: description,
            notebookId: nanoid(),
        };

        if (title === "") return;

        set((state) => ({
            ...state,
            notebookList: [newNotebook, ...state.notebookList],
        }));
    },
    deleteNotebook: (title) => {
        const updateNotebooks = get().notebookList.filter(
            (notebook) => notebook.notebookTitle !== title
        );

        set((state) => ({
            ...state,
            notebookList: updateNotebooks,
        }));
    },
});

export const useNotebookStore = create(notebookStore);
