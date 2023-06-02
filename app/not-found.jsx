"use client";
import { useRouter } from "next/navigation";

export default function notFoundPage() {
    const router = useRouter();

    return (
        <div>
            <h2>Page not Found!</h2>
            <button onClick={() => router.push("/")}>-- Go Back --</button>
        </div>
    );
}
