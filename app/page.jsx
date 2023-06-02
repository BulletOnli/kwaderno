import Link from "next/link";
import { BsFacebook, BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";

const Homepage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center p-8 ">
            <div className="w-full h-full flex items-center">
                <div className="w-[50%] h-full p-8 flex justify-center items-center">
                    <div className="w-full flex flex-col items-center text-center">
                        <h1 className="text-7xl font-bold">Kwaderno</h1>
                        <p className="text-lg w-[80%] text-[#BEC1C3] my-6">
                            Kwaderno is a powerful web app designed to
                            revolutionize the way you capture and organize your
                            notes. With Kwaderno, your notes are seamlessly
                            stored in a virtual notebook, making it easy to keep
                            track of your thoughts, ideas, and important
                            information.
                        </p>

                        <div className="w-full flex flex-col items-center justify-center">
                            <p className="font-medium mb-3">Follow us:</p>
                            <div className="w-full text-xl flex items-center justify-center gap-4">
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
                                <BsTwitter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-full flex justify-center">
                    <img
                        className="w-[45rem]"
                        src="/images/typing.svg"
                        alt=""
                    />
                </div>
            </div>

            <div className="w-full flex items-center justify-center gap-14 mt-2 rounded-lg">
                <div className="w-[17rem] h-[9rem] p-3 flex justify-center items-center bg-[#343541] rounded-xl shadow-custom2">
                    <div className="w-full h-full flex flex-col items-center text-center p-2 rounded-lg border border-white">
                        <h2 className="text-2xl font-bold my-2">Notebooks</h2>
                        <small className="px-2 text-sm text-[#BEC1C3]">
                            Organize notes into notebooks for easy management.
                        </small>
                    </div>
                </div>

                <div className="w-[17rem] h-[9rem] p-3 flex justify-center items-center bg-[#343541] rounded-xl shadow-custom2">
                    <div className="w-full h-full flex flex-col items-center text-center p-2 rounded-lg border border-white">
                        <h2 className="text-2xl font-bold my-2">Notes</h2>
                        <small className="px-2 text-sm text-[#BEC1C3]">
                            Capture thoughts and important information
                            effortlessly.
                        </small>
                    </div>
                </div>

                <div className="w-[17rem] h-[9rem] p-3 flex justify-center items-center bg-[#343541] rounded-xl shadow-custom2">
                    <div className="w-full h-full flex flex-col items-center text-center p-2 rounded-lg border border-white">
                        <h2 className="text-2xl font-bold my-2">Bookmark</h2>
                        <small className="px-2 text-sm text-[#BEC1C3]">
                            Quickly save and access important entries.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
