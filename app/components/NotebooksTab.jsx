"use client";
import Link from "next/link";
import { useNotebookStore } from "@store/notebook/notebookStore";

const NotebooksTab = () => {
    const notebookList = useNotebookStore((store) => store.notebookList);

    return (
        <ul className="w-full flex flex-col">
            {notebookList.map((list) => (
                <Link
                    href={`/notebooks/${list.notebookTitle}`}
                    key={list.notebookTitle}
                >
                    <li className="w-full bg-[#343541] text-center text-lg p-2 my-1 rounded-md">
                        {list.notebookTitle}
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default NotebooksTab;
