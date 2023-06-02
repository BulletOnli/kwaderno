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
        {
            noteTitle: "Sample note 2",
            noteBody: "qeqweq123123",
            noteId: "Coding Book 2",
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
            lastEdited: get().getLastEdited(),
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
            lastEdited: get().getLastEdited(),
        };

        set((state) => ({
            ...state,
            notes: [updatedNote, ...deletePreviousNote],
        }));
    },
    getLastEdited: () => {
        const currentDate = new Date().toDateString();
        const currentTime = new Date()
            .toLocaleTimeString()
            .split("")
            .slice(0, 5)
            .join()
            .replace(/,/g, "");
        const amPm = new Date().toLocaleTimeString().split("").slice(0, 5);

        return `${currentTime} ${amPm} | ${currentDate}`;
    },
});

export const useNoteStore = create(noteStore);
