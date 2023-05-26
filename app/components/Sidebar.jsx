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
    AvatarBadge,
    AvatarGroup,
    Flex,
    HStack,
    Text,
    Button,
    Icon,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="w-[20rem] text-white min-w-[20rem] h-screen bg-[#202123] flex flex-col items-center p-4">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6">
                    <Link href="/">Kwaderno</Link>
                </h1>
                <button
                    className="w-full bg-[#3E3D72] p-2 rounded-md font-bold border-[1px] border-[#6D6D6D]"
                    onClick={onOpen}
                >
                    Create Notebook
                </button>
            </div>

            <div className="w-full flex flex-col gap-1 mt-12 font-bold">
                <Link href="/">
                    <div
                        className={`${
                            pathname === "/" ? "activeTab" : ""
                        } w-full bg-[#343541] text-center text-[1.2rem] p-2 my-1 rounded-md`}
                    >
                        Homepage
                    </div>
                </Link>
                <Accordion defaultIndex={[]} allowMultiple w="100%">
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
                            >
                                Notebooks
                            </Box>
                            <AccordionIcon position="absolute" right="1rem" />
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <NotebooksTab />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Link href="/bookmarks">
                    <div
                        className={`${
                            pathname === "/bookmarks" ? "activeTab" : ""
                        } w-full bg-[#343541] text-center text-[1.2rem] p-2 my-1 rounded-md`}
                    >
                        Bookmarks
                    </div>
                </Link>
            </div>

            <Spacer />
            <Flex w="full" flexDirection="column">
                <HStack mb="15px">
                    <Avatar size="sm" />
                    <Text fontWeight="semibold">User</Text>
                </HStack>
                <Button colorScheme="red" size="md" w="100%">
                    {/* <Icon as={WarningIcon} mr="5px" /> */}
                    Log out
                </Button>
            </Flex>

            <NewNotebookModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default Sidebar;
