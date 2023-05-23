"use client";
import Link from "next/link";
import { useStore } from "@/store";

const NotebooksTab = () => {
    const notebookList = useStore((store) => store.notebookList);

    return (
        <ul className="mt-8 w-full flex flex-col">
            {notebookList.map((list) => (
                <Link href={`/${list.notebookTitle}`} key={list.notebookTitle}>
                    <li className="w-full bg-[#343541] text-center text-lg p-2 my-1 rounded-md">
                        {list.notebookTitle}
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default NotebooksTab;
