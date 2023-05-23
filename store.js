import { create } from "zustand";

const store = () => ({
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
    notes: [
        {
            noteTitle: "Javascript notes",
            noteBody: "notes about javascript",
            noteId: "note id 1 ID",
            category: "Coding Book",
        },
        {
            noteTitle: "Self help books",
            noteBody: "notes about motivation",
            noteId: "note id 2 ID",
            category: "Motivational Book",
        },
        {
            noteTitle: "HTML notes",
            noteBody: "notes about html",
            noteId: "note id 3 ID",
            category: "Coding Book",
        },
    ],
});

export const useStore = create(store);
