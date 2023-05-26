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
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useNoteStore } from "@store/note/noteStore";
import { useState } from "react";

const NewNoteModal = ({ isOpen, onClose, params }) => {
    const [title, setTitle] = useState("");

    const createNote = useNoteStore((store) => store.createNote);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="#202123" color="white" borderColor="#9F9F9F">
                    <ModalHeader>New Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <Input
                                placeholder="Input note title"
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
                                createNote(title, params);
                                setTitle("");
                                onClose();
                            }}
                            mx="auto"
                        >
                            Create Note
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewNoteModal;
