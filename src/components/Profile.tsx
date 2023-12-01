import {
  Card,
  CardBody,
  Text,
  Image,
  HStack,
  Heading,
  VStack,
  Button,
  Icon,
  Show,
  Hide,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <Card bgGradient="linear(to-r, green.200, pink.500)">
      <CardBody>
        <HStack
          justifyContent={{
            lg: "space-between",
            md: "space-between",
            sm: "center",
          }}
        >
          <HStack>
            <Image
              borderRadius="full"
              boxSize="100px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <VStack marginLeft={5}>
              <Heading fontSize={30}>Musanif Ali</Heading>
              <HStack>
                <Text>@musa_nif_ali </Text>
                <Show below="md">
                  <a href="https://instagram.com/musa_nif_ali?igshid=MzMyNGUyNmU2YQ==">
                    <Icon boxSize={10} as={FaInstagram} />
                  </a>
                </Show>
              </HStack>
            </VStack>
          </HStack>
          <Hide below="md">
            <a href="https://instagram.com/musa_nif_ali?igshid=MzMyNGUyNmU2YQ==">
              <Button
                marginRight={7}
                colorScheme="grey"
                fontSize={"large"}
                leftIcon={<Icon boxSize={10} as={FaInstagram} />}
              >
                Follow on Instagram
              </Button>
            </a>
          </Hide>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Profile;
