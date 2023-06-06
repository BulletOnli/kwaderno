"use client";
import { Avatar, Button, Icon } from "@chakra-ui/react";
import { BsFillShieldLockFill, BsFillBellFill } from "react-icons/bs";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { MdOutlineHelp } from "react-icons/md";
import { useEffect, useState } from "react";
import SettingsTab from "@app/components/SettingsTab";

import { useAuthStore } from "@store/auth/authStore";

const SettingsPage = () => {
    const userDetails = useAuthStore((store) => store.userDetails);
    const { displayName, email, photoURL } = userDetails;

    return (
        <div className="relative w-full flex justify-center items-center">
            <div className="w-[35rem] h-[80%] flex flex-col items-center p-8">
                <Avatar size="2xl" name={displayName || email} src={photoURL} />
                <h1 className="text-center text-3xl font-bold my-4 bg-transparent outline-none">
                    {displayName || email}
                </h1>
                <div className="w-full flex flex-col items-center gap-3 mt-6">
                    <SettingsTab
                        name="Security and Privacy"
                        icon={<BsFillShieldLockFill />}
                    />
                    <SettingsTab
                        name="Notifications"
                        icon={<BsFillBellFill />}
                    />
                    <SettingsTab name="Help" icon={<MdOutlineHelp />} />
                    <Button
                        w="full"
                        colorScheme="teal"
                        size="lg"
                        boxShadow="sm"
                        leftIcon={<AiOutlineUserSwitch size={22} />}
                    >
                        Switch Account
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
