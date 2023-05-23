"use client";

import Link from "next/link";
import NotebooksTab from "./NotebooksTab";
import { useDisclosure } from "@chakra-ui/react";
import NewNotebookModal from "./NewNotebookModal";

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="w-[20rem] text-white min-w-[20rem] h-screen bg-[#202123] flex flex-col items-center p-4">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6">
                    <Link href="/">Kwaderno</Link>
                </h1>
                <button
                    className="w-full bg-[#3E3D72] p-2 rounded-md font-semibold border-[1px] border-[#6D6D6D]"
                    onClick={onOpen}
                >
                    New Notebook
                </button>
            </div>
            <NotebooksTab />

            <NewNotebookModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default Sidebar;
