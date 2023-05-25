import { nanoid } from "nanoid";
import { create } from "zustand";

const noteStore = (set, get) => ({
    notes: [],
    createNote: (title, category) => {
        const fixedCategory = category.replace(/%20/g, " ");

        const newNote = {
            noteTitle: title,
            noteBody: "",
            noteId: nanoid(),
            category: fixedCategory,
        };
        set((state) => ({
            ...state,
            notes: [...state.notes, newNote],
        }));
    },
    updateNoteBody: (inputValue, prevNote) => {
        const deletePreviousNote = get().notes.filter(
            (note) => note.noteId !== prevNote.noteId
        );
        const updatedNote = {
            noteTitle: prevNote.noteTitle,
            noteBody: inputValue,
            noteId: prevNote.noteId,
            category: prevNote.category,
        };

        set((state) => ({
            ...state,
            notes: [updatedNote, ...deletePreviousNote],
        }));
    },
});

export const useNoteStore = create(noteStore);
