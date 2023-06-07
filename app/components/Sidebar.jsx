"use client";
import "../../app/globals.css";
import Link from "next/link";
import { useEffect } from "react";
import NotebooksTab from "./NotebooksTab";
import NewNotebookModal from "./modals/NewNotebookModal";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Avatar,
    Flex,
    HStack,
    Text,
    Button,
    Icon,
    Spacer,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import {
    BsFillBookmarkStarFill,
    BsFillTrash2Fill,
    BsFillPersonFill,
} from "react-icons/bs";
import { AiFillHome, AiFillBook } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import SidebarTab from "./SidebarTab";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@store/auth/authStore";

import { useNotebookStore } from "@store/notebook/notebookStore";

const Sidebar = () => {
    const toast = useToast();
    const router = useRouter();

    const [user] = useAuthState(auth);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { userDetails, checkAuthChanges } = useAuthStore();

    const { renderNotebooks } = useNotebookStore();

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                toast({
                    title: "Logout successful",
                    description: "You have been logged out.",
                    status: "warning",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                });
            })
            .catch((err) => console.log(err));
        router.push("/login");
    };

    useEffect(() => {
        renderNotebooks();
    }, []);

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
        checkAuthChanges();
    }, [user]);

    return (
        <div className="w-[20rem] text-white min-w-[20rem] h-screen bg-[#202123] flex flex-col items-center p-4">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6">
                    <Link href="/">Kwaderno</Link>
                </h1>
                <Button colorScheme="blue" w="full" size="md" onClick={onOpen}>
                    Create Notebook
                </Button>
            </div>

            <div className="w-full flex flex-col gap-1 mt-16 font-bold">
                <SidebarTab name="Home" path="/" icon={<AiFillHome />} />
                <Accordion defaultIndex={[0]} allowMultiple w="100%" my={0.5}>
                    <AccordionItem border="none">
                        <AccordionButton
                            bg="#343541"
                            _hover={{
                                bg: "#343541",
                            }}
                            rounded="6px"
                            position="relative"
                        >
                            <Box
                                as="span"
                                flex="1"
                                textAlign="center"
                                fontSize="1.17rem"
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                                gap={2}
                                pl={3}
                            >
                                <Icon as={AiFillBook} fontSize="1.2rem" />
                                Notebooks
                            </Box>
                            <AccordionIcon position="absolute" right="1rem" />
                        </AccordionButton>

                        <AccordionPanel pb={0}>
                            <NotebooksTab onOpen={onOpen} />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <SidebarTab
                    name="Bookmarks"
                    path="/bookmarks"
                    icon={<BsFillBookmarkStarFill />}
                />
                <SidebarTab
                    name="Account Settings"
                    path="/settings"
                    icon={<BsFillPersonFill />}
                />
                <SidebarTab
                    name="Trash"
                    path="/trash"
                    icon={<BsFillTrash2Fill />}
                />
            </div>
            <Spacer />

            <Flex w="full" flexDirection="column">
                <HStack mb="15px">
                    <Avatar
                        size="sm"
                        name={userDetails.displayName || userDetails.email}
                        src={userDetails.photoURL}
                    />
                    <Text fontWeight="semibold">
                        {userDetails.displayName || userDetails.email}
                    </Text>
                </HStack>
                <Button
                    colorScheme="red"
                    size="md"
                    w="100%"
                    onClick={userSignOut}
                >
                    Log out
                    <Icon as={FiLogOut} ml="8px" />
                </Button>
            </Flex>

            <NewNotebookModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default Sidebar;
