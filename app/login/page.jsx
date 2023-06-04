"use client";
import Link from "next/link";
import { useState } from "react";
import SignInForm from "@app/components/SignInForm";
import SignUpForm from "@app/components/SignUpForm";

const loginPage = () => {
    const [showSignup, setShowSignup] = useState(false);

    return (
        <div className="text-black w-full h-screen flex items-center justify-center p-10">
            <div className="w-[50%] flex flex-col items-center justify-center gap-4">
                <img className="w-[70%]" src="/images/typing.svg" alt="pic" />
                <h1 className="text-6xl text-white font-bold mt-[-2rem]">
                    Kwadernote
                </h1>
            </div>
            <div className="w-[50%] flex justify-center items-center">
                {!showSignup ? (
                    <SignInForm setShowSignup={setShowSignup} />
                ) : (
                    <SignUpForm setShowSignup={setShowSignup} />
                )}
            </div>
        </div>
    );
};

export default loginPage;
