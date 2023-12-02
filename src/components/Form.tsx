import { FormEvent, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser"; // Updated import statement

const Form = () => {
  const Ref = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f0x93ob",
        "template_teaf399",
        Ref.current!,
        "lkI43q7UST73kHTpd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box>
      <Center>
        <Heading mt={5} as="h1" size="xl" mb={6}>
          Say Hello
        </Heading>
      </Center>
      <Card margin="10px 10%">
        <CardBody>
          <form ref={Ref} onSubmit={sendEmail}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="user_name" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="user_email" />
            </FormControl>

            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" />
            </FormControl>

            <Button type="submit" mt={4}>
              Send
            </Button>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Form;
