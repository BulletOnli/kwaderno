"use client";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNotebookStore } from "@store/notebook/notebookStore";

const NewNotebookModal = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState("");

    const createNotebook = useNotebookStore((store) => store.createNotebook);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="#202123" color="white" borderColor="#9F9F9F">
                    <ModalHeader>New Notebook</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <Input
                                placeholder="Input notebook title"
                                autoComplete="off"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="facebook"
                            onClick={() => {
                                createNotebook(title);
                                setTitle("");
                                onClose();
                            }}
                            mx="auto"
                        >
                            Create Notebook
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewNotebookModal;
