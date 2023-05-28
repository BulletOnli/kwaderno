import { nanoid } from "nanoid";
import { create } from "zustand";

const noteStore = (set, get) => ({
    notes: [
        {
            noteTitle: "Sample note",
            noteBody: "qweqweq",
            noteId: "Coding Book",
            category: "Coding Book",
        },
    ],
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
    updateNoteTitle: (inputValue, prevNote) => {
        const deletePreviousNote = get().notes.filter(
            (note) => note.noteId !== prevNote.noteId
        );
        const updatedNote = {
            ...prevNote,
            noteTitle: inputValue,
        };

        set((state) => ({
            ...state,
            notes: [updatedNote, ...deletePreviousNote],
        }));
    },
    updateNoteBody: (inputValue, prevNote) => {
        const deletePreviousNote = get().notes.filter(
            (note) => note.noteId !== prevNote.noteId
        );
        const updatedNote = {
            ...prevNote,
            noteBody: inputValue,
        };

        set((state) => ({
            ...state,
            notes: [updatedNote, ...deletePreviousNote],
        }));
    },
});

export const useNoteStore = create(noteStore);
