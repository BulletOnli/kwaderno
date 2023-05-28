"use client";
import { useNoteStore } from "@store/note/noteStore";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const NotePage = ({ params }) => {
    const noteId = params.note.replace(/%20/g, " ");
    const router = useRouter();

    const notes = useNoteStore((store) => store.notes);
    const updateNoteTitle = useNoteStore((store) => store.updateNoteTitle);
    const updateNoteBody = useNoteStore((store) => store.updateNoteBody);

    const filteredNote = notes.find((note) => note.noteId === noteId);
    return (
        <div className="relative w-full flex flex-col gap-6 m-12 p-10 border-[2px] border-[#9F9F9F]">
            <AiOutlineArrowLeft
                className="absolute top-5 left-5 text-3xl hover:cursor-pointer active:scale-90"
                onClick={() => router.back()}
            />
            <div className="w-full flex justify-between p-6 border-b-[1px] border-[#9F9F9F]">
                <input
                    className="text-3xl font-bold bg-transparent outline-none"
                    type="text"
                    placeholder="Title"
                    value={filteredNote.noteTitle}
                    onChange={(e) =>
                        updateNoteTitle(e.target.value, filteredNote)
                    }
                />
                <div className="flex gap-6">
                    <button className="text-2xl">
                        <BsBookmark />
                    </button>
                    <button className="text-2xl">
                        <FaTrash />
                    </button>
                </div>
            </div>
            <textarea
                className="w-full h-full p-6 text-lg outline-none bg-transparent resize-none border-[1px] border-[#9F9F9F]"
                value={filteredNote.noteBody}
                onChange={(e) => {
                    updateNoteBody(e.target.value, filteredNote);
                }}
                placeholder="Body"
            />
        </div>
    );
};

export default NotePage;
