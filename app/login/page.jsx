"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SignInForm from "@app/components/SignInForm";
import SignUpForm from "@app/components/SignUpForm";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-config";
import { useAuthStore } from "@store/auth/authStore";
import { useToast } from "@chakra-ui/react";

const loginPage = () => {
    const router = useRouter();
    const [showSignup, setShowSignup] = useState(false);

    const [user] = useAuthState(auth);
    const googleProvider = new GoogleAuthProvider();
    const checkAuthChanges = useAuthStore((store) => store.checkAuthChanges);

    const googleLogin = () => {
        const toast = useToast();
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast({
                    title: "Login successful",
                    description:
                        "Welcome back! You have successfully logged in.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                });
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
