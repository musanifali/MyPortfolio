import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiSeedlingLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { GoIssueTracks, GoBriefcase } from "react-icons/go";

const ResizableCard = () => {
  const project = [
    {
      name: "Issue Tracker",
      description: "React, TypeScript, Node, AntDesign, React-Hook-Form",
      logo: GoIssueTracks,
      link: "https://github.com/musanifali/ShopFusion-B",
    },
    {
      name: "Soil Fertility Detection",
      description: "AntDesign, TypeScript, React, Node, React-Hook-Form",
      logo: RiSeedlingLine,
      link: "https://github.com/musanifali/ShopFusion-B",
    },
    {
      name: "Portfolio",
      description: "Auth, React, ChakraUI, TypeScript, Node, React-Hook-Form",
      logo: GoBriefcase,
      link: "https://www.musanif.shop/",
    },
    {
      name: "Issue Tracker",
      description: "React, Node, TypeScript, AntDesign, React-Hook-Form",
      logo: GoIssueTracks,
      link: "https://github.com/musanifali/ShopFusion-B",
    },
  ];

  return (
    <>
      <Card>
        <CardBody>
          <Heading
            marginLeft={2}
            marginRight={8}
            marginBottom={7}
            fontSize={"20px"}
          >
            More Projects
          </Heading>
          {project.map((element, index) => (
            <>
              <a href={element.link} style={{ cursor: "pointer" }}>
                <Flex alignItems="center" justifyContent="space-between">
                  <HStack key={index}>
                    <Icon boxSize={8} mr={5} as={element.logo} />
                    <Stack>
                      <Heading fontSize="14">{element.name}</Heading>
                      <Text color={"gray"} mb={5} fontSize={12}>
                        {element.description}
                      </Text>
                    </Stack>
                  </HStack>
                  <Icon boxSize={6} ml={8} as={IoIosArrowForward} />
                </Flex>
              </a>
            </>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

export default ResizableCard;
