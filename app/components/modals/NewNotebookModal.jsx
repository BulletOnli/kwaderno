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
    const [description, setDescription] = useState("");

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
                                placeholder="Title"
                                autoComplete="off"
                                value={title}
                                mb={3}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Input
                                placeholder="Description"
                                autoComplete="off"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            onClick={() => {
                                createNotebook(title, description);
                                setTitle("");
                                setDescription("");
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
