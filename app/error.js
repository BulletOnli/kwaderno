"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Something went wrong!</h2>
            <button
                className="p-4 border border-white"
                onClick={() => router.push("/")}
            >
                Try again
            </button>
        </div>
    );
}
