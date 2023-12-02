import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorMode from "./ColorMode";
import { Contact } from "./Contact";
import DrawerExample from "./Drawer";

const Header = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Show below="lg">
        <DrawerExample />
      </Show>
      <Show above="lg">
        <Image src={logo} boxSize={"60px"} />
      </Show>
      <HStack>
        <Contact />
        <ColorMode />
      </HStack>
    </HStack>
  );
};

export default Header;
