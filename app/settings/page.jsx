"use client";
import { Avatar, Button, Icon } from "@chakra-ui/react";
import { BsFillShieldLockFill, BsFillBellFill } from "react-icons/bs";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { MdOutlineHelp } from "react-icons/md";
import { useState } from "react";
import SettingsTab from "@app/components/SettingsTab";
import { useUserStore } from "@store/user/userStore";

const SettingsPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { username, changeUsername } = useUserStore();

    return (
        <div className="relative w-full flex justify-center items-center">
            <Button
                position="absolute"
                top={10}
                right={20}
                colorScheme=""
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
            >
                {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>

            <div className="w-[35rem] h-[80%] flex flex-col items-center p-8">
                <Avatar size="2xl" name={username} src="" />
                <input
                    className={`text-center text-3xl font-bold my-4 bg-transparent outline-none ${
                        isEditing ? "border-white border-[1px]" : ""
                    }`}
                    type="text"
                    value={username}
                    onChange={(e) => {
                        changeUsername(e.target.value);
                    }}
                    disabled={!isEditing}
                />
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
