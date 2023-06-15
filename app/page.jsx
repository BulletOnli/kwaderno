"use client";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsGithub, BsTiktok } from "react-icons/bs";

const Homepage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center p-8 ">
            <div className="w-full h-full flex items-center">
                <div className="w-full h-full p-8 flex justify-center items-center">
                    <div className="w-full flex flex-col items-center text-center">
                        <h1 className="text-6xl font-bold mb-7">Kwadernote</h1>
                        <p className="text-[#BEC1C3]">
                            Kwadernote is a powerful web app designed to
                            revolutionize the way you capture and organize your
                            notes. With Kwadernote, your notes are seamlessly
                            stored in a virtual notebook, making it easy to keep
                            track of your thoughts, ideas, and important
                            information.
                        </p>

                        {/* <div className="w-full flex flex-col items-center justify-center mt-6">
                            <p className="font-medium mb-3">Follow me:</p>
                            <div className="w-full flex items-center justify-center gap-4">
                                <Link
                                    href="https://www.facebook.com/Solidbullet"
                                    target="_blank"
                                >
                                    <BsFacebook />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/gem.muel/"
                                    target="_blank"
                                >
                                    <BsInstagram />
                                </Link>
                                <Link
                                    href="https://github.com/BulletOnli"
                                    target="_blank"
                                >
                                    <BsGithub />
                                </Link>
                                <Link
                                    href="https://www.tiktok.com/@bulletonli"
                                    target="_blank"
                                >
                                    <BsTiktok />
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="w-full p-8 flex justify-center items-center">
                    <img className="w-full" src="/images/typing.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
