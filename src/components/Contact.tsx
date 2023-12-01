import { Button, Icon } from "@chakra-ui/react";
import { MdPhone } from "react-icons/md";
export const Contact = () => {
  return (
    <a href="https://instagram.com/musa_nif_ali?igshid=MzMyNGUyNmU2YQ==">
      <Button rightIcon={<Icon as={MdPhone} />}>Contact Me</Button>
    </a>
  );
};
