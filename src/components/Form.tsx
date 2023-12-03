import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser"; // Updated import statement
import { motion } from "framer-motion";

const Form = () => {
  const Ref = useRef<HTMLFormElement>(null!);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => setSuccess(""), 3000); // Set timeout to match animation
      return () => clearTimeout(timeout);
    }
  }, [success]);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_f0x93ob",
        "template_teaf399",
        Ref.current!,
        "lkI43q7UST73kHTpd"
      )
      .then(
        (result) => {
          setSuccess("Sent Successfully!");
          setIsLoading(false);
          console.log(result.text);
        },
        (error: any) => {
          console.log(error);
          setError(error);
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <Box>
        <Center>
          <Heading mt={20} as="h1" size="xl" mb={6}>
            Say Hello
          </Heading>
        </Center>
        <Card margin="10px 10%">
          <CardHeader>
            {error && (
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Alert borderRadius={7} p={5} status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              </motion.div>
            )}
            {success && (
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Alert borderRadius={7} p={5} status="success">
                  <AlertIcon />
                  {success}
                </Alert>
              </motion.div>
            )}
          </CardHeader>
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
              {isLoading ? (
                <Button
                  isLoading
                  loadingText="Sending"
                  variant="outline"
                  type="submit"
                  mt={4}
                >
                  Send
                </Button>
              ) : (
                <Button type="submit" mt={4}>
                  Send
                </Button>
              )}
            </form>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default Form;
