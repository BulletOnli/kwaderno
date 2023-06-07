"use client";
import { useRouter } from "next/navigation";

export default function notFoundPage() {
    const router = useRouter();

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Page not Found!</h2>
            <button
                className="p-4 border border-white"
                onClick={() => router.push("/")}
            >
                -- Go Back --
            </button>
        </div>
    );
}
