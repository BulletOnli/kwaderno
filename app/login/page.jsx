"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SignInForm from "@app/components/SignInForm";
import SignUpForm from "@app/components/SignUpForm";

import { useRouter } from "next/navigation";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-config";
import { useAuthStore } from "@store/auth/authStore";

const loginPage = () => {
    const router = useRouter();
    const [user] = useAuthState(auth);

    const [showSignup, setShowSignup] = useState(false);
    const googleProvider = new GoogleAuthProvider();

    const checkAuthChanges = useAuthStore((store) => store.checkAuthChanges);

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                router.push("/");
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (user) {
            router.push("/");
        }
        checkAuthChanges();
    }, [user]);

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
                    <SignInForm
                        setShowSignup={setShowSignup}
                        googleLogin={googleLogin}
                    />
                ) : (
                    <SignUpForm
                        setShowSignup={setShowSignup}
                        googleLogin={googleLogin}
                    />
                )}
            </div>
        </div>
    );
};

export default loginPage;
