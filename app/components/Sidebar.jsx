"use client";
import "../../app/globals.css";
import Link from "next/link";
import NotebooksTab from "./NotebooksTab";
import { Spacer, useDisclosure } from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import {
    BsFillBookmarkStarFill,
    BsFillTrash2Fill,
    BsFillPersonFill,
} from "react-icons/bs";
import { AiFillHome, AiFillBook } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import SidebarTab from "./SidebarTab";
import { useUserStore } from "@store/user/userStore";

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const username = useUserStore((store) => store.username);

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
                            <NotebooksTab />
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
                    <Avatar size="sm" name={username} />
                    <Text fontWeight="semibold">{username}</Text>
                </HStack>
                <Link href="/login">
                    <Button colorScheme="red" size="md" w="100%">
                        Log out
                        <Icon as={FiLogOut} ml="8px" />
                    </Button>
                </Link>
            </Flex>

            <NewNotebookModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default Sidebar;
