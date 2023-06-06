import { create } from "zustand";
import { useNoteStore } from "@store/note/noteStore";

const bookmarkStore = (set, get) => ({
    bookmarks: [],
    addToBookmark: (note) => {
        const isExist = get().bookmarks.some(
            (bookmark) => bookmark.noteId === note.noteId
        );
        if (isExist) return;

        const updatedNote = {
            ...note,
            isBookmarked: true,
        };
        const oldNotes = useNoteStore
            .getState()
            .notes.filter((thisNote) => thisNote.noteId !== note.noteId);
        // update the note to make it bookmarked
        useNoteStore.setState({ notes: [updatedNote, ...oldNotes] });

        set((state) => ({
            ...state,
            bookmarks: [updatedNote, ...state.bookmarks],
        }));
    },
    removeBookmark: (note) => {
        const updatedNote = {
            ...note,
            isBookmarked: false,
        };
        const oldNotes = useNoteStore
            .getState()
            .notes.filter((thisNote) => thisNote.noteId !== note.noteId);
        // Update the note to remove the bookmarked
        useNoteStore.setState({ notes: [updatedNote, ...oldNotes] });

        const updatedBookmarks = get().bookmarks.filter(
            (bookmark) => bookmark.noteId !== note.noteId
        );
        set((state) => ({
            ...state,
            bookmarks: updatedBookmarks,
        }));
    },
});

export const useBookmarkStore = create(bookmarkStore);
