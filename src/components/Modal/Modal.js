import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const ModalComponent = forwardRef((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);

  useImperativeHandle(ref, () => ({
    isOpenModal() {
      setOverlay(<OverlayOne />);
      onOpen();
    },
    isCloseModal() {
      setOverlay(<OverlayOne />);
      onClose();
    },
  }));

  const secondryButtonClick = () => {
    props.button1Click();
  };

  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader>{props.data.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            border="1px solid #dbdbdb"
            variant="ghost"
            onClick={secondryButtonClick}
          >
            {props.data.button1}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

export default ModalComponent;
