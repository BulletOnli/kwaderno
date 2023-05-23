"use client";

import Link from "next/link";
import React from "react";
import { useStore } from "@/store";
import NewNoteModal from "@/components/NewNoteModal";
import { useDisclosure } from "@chakra-ui/react";

const NotebookPage = ({ params }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const notes = useStore((store) => store.notes);

    //todo Remove the %20 on the url params
    const notebookName = params.notebook.replace(/%20/g, " ");
    //* Filtered notes - Notes based on the Notebook name (notes inside the notebook)
    const filteredNotes = notes.filter(
        (note) => note.category === notebookName
    );

    return (
        <div className="w-full flex flex-col items-center gap-8 p-8">
            <div className="w-full flex border-[1px] border-[#6D6D6D] rounded-lg py-6 px-12">
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
                    <button className="w-[12rem] bg-[#9E3138] p-2 rounded-md font-semibold border-[1px] border-[#6D6D6D]">
                        Delete Notebook
                    </button>
                </div>
            </div>

            <div className="w-full h-full flex flex-wrap gap-6 ">
                {filteredNotes.map((note) => (
                    <Link
                        href={`/${params.notebook}/${note.noteId}`}
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

            <NewNoteModal isOpen={isOpen} onClose={onClose} />
        </div>
    );

    // return (
    //     <div className="p-6">
    //         <h2>{notebookName}</h2>
    //         {filteredNotes.map((note) => (
    //             <Link href={`/${params.notebook}/${note.noteId}`}>
    //                 {note.noteTitle}
    //             </Link>
    //         ))}
    //     </div>
    // );
};

export default NotebookPage;
