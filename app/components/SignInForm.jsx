"use client";
import Link from "next/link";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SignInForm = ({ setShowSignup }) => {
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
                <Input type="email" mb={3} />

                <FormLabel>Password</FormLabel>
                <Input type="password" mb={3} />
                <Button colorScheme="messenger" w="full">
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
