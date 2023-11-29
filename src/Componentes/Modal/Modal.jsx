import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import TaskForm from '../TaskForm/TaskForm';
import "../Modal/Modal.css"

export default function ModalComponent({ addTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddTask = (newTask) => {
    addTask(newTask);
    console.log(newTask);
    onClose();
  };

  return (
    <div>
      <IconButton className='btnModal'
        aria-label="Open modal to add new task"
        icon={<AddIcon />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TaskForm addTask={handleAddTask} closeModal={onClose} />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}