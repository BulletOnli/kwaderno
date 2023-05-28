import { FaTrash } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const BookmarksPage = () => {
    return (
        <div className="w-full flex flex-col items-center p-8">
            <header className="relative w-full flex justify-center items-center p-6 rounded-lg bg-[#4A4B57] shadow-custom">
                <div className="absolute left-5 flex">
                    <BsDot className="text-[5rem] mx-[-1rem]" />
                    <BsDot className="text-[5rem] mx-[-1rem]" />
                    <BsDot className="text-[5rem] mx-[-1rem]" />
                </div>
                <h1 className="text-4xl font-bold">Bookmarks</h1>
                <div className="absolute right-5 flex">
                    <BsDot className="text-[5rem] mx-[-1rem]" />
                    <BsDot className="text-[5rem] mx-[-1rem]" />
                    <BsDot className="text-[5rem] mx-[-1rem]" />
                </div>
            </header>
            <div className="w-full h-full flex flex-col items-center gap-4 mt-14">
                {/* bookmark */}
                <div className="w-[40rem] flex items-center py-4 px-8 rounded-md bg-[#4A4B57] shadow-custom">
                    <p className="text-xl font-semibold">1.</p>
                    <span className="w-full mx-8">
                        <h2 className="text-2xl font-bold">Note 1</h2>
                        <small className="ml-2">from notebook 1</small>
                    </span>
                    <FaTrash className="text-lg cursor-pointer" />
                </div>

                <div className="w-[40rem] flex items-center py-4 px-8 rounded-md bg-[#4A4B57] shadow-custom">
                    <p className="text-xl font-semibold">1.</p>
                    <span className="w-full mx-8">
                        <h2 className="text-2xl font-bold">Note 1</h2>
                        <small className="ml-2">from notebook 1</small>
                    </span>
                    <FaTrash className="text-lg cursor-pointer" />
                </div>

                <div className="w-[40rem] flex items-center py-4 px-8 rounded-md bg-[#4A4B57] shadow-custom">
                    <p className="text-xl font-semibold">1.</p>
                    <span className="w-full mx-8">
                        <h2 className="text-2xl font-bold">Note 1</h2>
                        <small className="ml-2">from notebook 1</small>
                    </span>
                    <FaTrash className="text-lg cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default BookmarksPage;
