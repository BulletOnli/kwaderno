const Homepage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center p-8">
            <div className="w-full flex items-center">
                <div className="w-[50%] h-full p-8 flex justify-center items-center">
                    <div className="w-full ml-6 text-center">
                        <h1 className="text-7xl font-bold">Kwaderno</h1>
                        <p className="text-lg px-12 text-[#BEC1C3] my-6">
                            Kwaderno is a powerful web app designed to
                            revolutionize the way you capture and organize your
                            notes. With Kwaderno, your notes are seamlessly
                            stored in a virtual notebook, making it easy to keep
                            track of your thoughts, ideas, and important
                            information.
                        </p>
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
            <div className="w-[70rem] flex items-center justify-between p-6 bg-[#4A4B57] mt-2 rounded-lg shadow-md">
                <div className="w-[15rem] h-[8rem] bg-[#BEC1C3] rounded-md hover:shadow-custom"></div>
                <div className="w-[15rem] h-[8rem] bg-[#BEC1C3] rounded-md hover:shadow-custom"></div>
                <div className="w-[15rem] h-[8rem] bg-[#BEC1C3] rounded-md hover:shadow-custom"></div>
            </div>
        </div>
    );
};

export default Homepage;
