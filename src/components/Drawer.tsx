import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import SideBar from "./SideBar";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <Icon as={LiaBarsSolid} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent padding={4} height="100%" overflowY="auto">
          <DrawerCloseButton />
          <SideBar />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
