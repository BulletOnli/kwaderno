"use client";
import Link from "next/link";
import { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
} from "@chakra-ui/react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const SignUpForm = ({ setShowSignup, googleLogin }) => {
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setShowSignup(false);
                toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-[32rem] flex flex-col items-center justify-center bg-[#faf9f9] rounded-xl p-12">
            <h1 className="w-full text-3xl font-bold mb-2">
                Create an account
            </h1>
            <p className="w-full flex gap-1 font-semibold mb-6">
                Already have an account?
                <button
                    className="text-blue-600"
                    onClick={() => setShowSignup(false)}
                >
                    Sign in
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
                <Button colorScheme="messenger" w="full" onClick={signUp}>
                    Sign up
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
                Sign up with Google
            </Button>
            <Button
                isDisabled
                w="full"
                mb={4}
                p={4}
                rounded="md"
                colorScheme="facebook"
                leftIcon={<BsFacebook />}
            >
                Sign up with Facebook
            </Button>
            <Button
                isDisabled
                w="full"
                mb={4}
                p={4}
                rounded="md"
                leftIcon={<BsGithub />}
                bg="black"
                color="white"
            >
                Sign up with Github
            </Button>
        </div>
    );
};

export default SignUpForm;
