"use client";
import { useNoteStore } from "@store/note/noteStore";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const NotePage = ({ params }) => {
    const noteId = params.note.replace(/%20/g, " ");

    const notes = useNoteStore((store) => store.notes);
    const updateNoteBody = useNoteStore((store) => store.updateNoteBody);

    const filteredNote = notes.find((note) => note.noteId === noteId);
    return (
        <div className="w-full flex flex-col gap-6 m-8 p-8 border-[1px] border-[#9F9F9F]">
            <div className="w-full flex justify-between p-6 border-b-[1px] border-[#9F9F9F]">
                <h1 className="text-3xl font-bold">{filteredNote.noteTitle}</h1>
                <div className="flex gap-4">
                    <button className="text-2xl">
                        <MdModeEditOutline />
                    </button>
                    <button className="text-2xl">
                        <MdDelete />
                    </button>
                </div>
            </div>
            <textarea
                className="w-full h-full p-6 text-lg outline-none bg-transparent resize-none border-[1px] border-[#9F9F9F]"
                value={filteredNote.noteBody}
                onChange={(e) => {
                    updateNoteBody(e.target.value, filteredNote);
                }}
            />
        </div>
    );
};

export default NotePage;
