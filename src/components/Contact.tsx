import { Button, Icon } from "@chakra-ui/react";
import { MdPhone } from "react-icons/md";

export const Contact = () => {
  return <Button rightIcon={<Icon as={MdPhone} />}>Say Hello</Button>;
};
