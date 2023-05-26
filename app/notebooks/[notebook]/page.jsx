"use client";
import Link from "next/link";
import { Suspense } from "react";
import NewNoteModal from "@app/components/modals/NewNoteModal";
import { useDisclosure } from "@chakra-ui/react";
import { useNoteStore } from "@store/note/noteStore";
import { useNotebookStore } from "@store/notebook/notebookStore";
import { useRouter } from "next/navigation";

const NotebookPage = ({ params }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const notebookName = params.notebook.replace(/%20/g, " ");

    const notes = useNoteStore((store) => store.notes);
    const filteredNotes = notes.filter(
        (note) => note.category === notebookName
    );

    const deleteNotebook = useNotebookStore((store) => store.deleteNotebook);

    return (
        <div className="w-full flex flex-col items-center gap-8 p-8">
            <header className="w-full flex border-[1px] border-[#6D6D6D] rounded-lg py-6 px-12">
                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-4xl font-bold">{notebookName}</h1>
                    <small className="mt-3 ml-8">
                        A short description dfsfsdkfshkheqwoeisfkljs
                    </small>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        className="w-[12rem] bg-[#3E3D72] p-2 rounded-md font-semibold border-[1px] border-[#6D6D6D]"
                        onClick={onOpen}
                    >
                        New Note
                    </button>
                    <button
                        className="w-[12rem] bg-[#9E3138] p-2 rounded-md font-semibold border-[1px] border-[#6D6D6D]"
                        onClick={() => {
                            deleteNotebook(notebookName);
                            router.push("/");
                        }}
                    >
                        Delete Notebook
                    </button>
                </div>
            </header>
            <Suspense fallback={<div>Loading notes...</div>}>
                <div className="w-full h-full flex flex-wrap gap-6">
                    {filteredNotes.map((note) => (
                        <Link
                            href={`/notebooks/${params.notebook}/${note.noteId}`}
                            key={note.noteId}
                        >
                            <div className="w-[10rem] h-[10rem] flex justify-center items-center bg-[#202123] border-[1px] border-[#9F9F9F] rounded-lg">
                                <h1 className="font-semibold text-xl text-center">
                                    {note.noteTitle}
                                </h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </Suspense>

            <NewNoteModal
                isOpen={isOpen}
                onClose={onClose}
                params={params.notebook}
            />
        </div>
    );
};

export default NotebookPage;
