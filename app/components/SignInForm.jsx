"use client";
import Link from "next/link";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const SignInForm = ({ setShowSignup, googleLogin }) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                router.push("/");
            })
            .catch((error) => console.log("wrong email/password"));
    };

    return (
        <div className="w-[32rem] flex flex-col items-center justify-center bg-[#faf9f9] rounded-xl p-12">
            <h1 className="w-full text-3xl font-bold mb-2">Sign in</h1>
            <p className="w-full font-semibold mb-6">
                New user?{" "}
                <button
                    className="text-blue-600"
                    onClick={() => setShowSignup(true)}
                >
                    Create an account
                </button>
            </p>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    type="email"
                    mb={3}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    mb={3}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button colorScheme="messenger" w="full" onClick={signIn}>
                    Sign in
                </Button>
            </FormControl>

            <div className="my-6">---------- or ----------</div>
            <Button
                w="full"
                mb={4}
                p={4}
                rounded="md"
                variant="outline"
                leftIcon={<FcGoogle />}
                onClick={googleLogin}
            >
                Continue with Google
            </Button>
            <Button
                disabled
                w="full"
                mb={4}
                p={4}
                rounded="md"
                colorScheme="facebook"
                leftIcon={<BsFacebook />}
            >
                Continue with Facebook
            </Button>
            <Button
                w="full"
                mb={4}
                p={4}
                rounded="md"
                leftIcon={<BsGithub />}
                bg="black"
                color="white"
            >
                Continue with Github
            </Button>
        </div>
    );
};

export default SignInForm;
