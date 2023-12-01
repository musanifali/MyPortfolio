import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Stack, Heading, Image, Text, Box } from "@chakra-ui/react";
import webtech from "../assets/webtech.png";
import gamehub from "../assets/gamehub.png";
import ecommerce from "../assets/ecommerce.png";

interface Project {
  name: string;
  image: string;
  description: string;
  route: string;
  repositoryURL?: string;
}

const projects: Project[] = [
  {
    name: "GameHub",
    image: gamehub,
    description: "React, TypeScript, Chakra UI ",
    route: "/gamehub",
    repositoryURL: "https://game-m60vmp11q-musanifali.vercel.app/",
  },
  {
    name: "E-commerce",
    image: ecommerce,
    description: "React, TypeScript, Node, AntDesign, React-Hook-Form",
    route: "/ecommerce",
    repositoryURL: "https://github.com/musanifali/ShopFusion-B",
  },
  {
    name: "Web Technology",
    image: webtech,
    description: "React, TypeScript, Node, AntDesign, React-Hook-Form",
    route: "/webtech",
  },
  {
    name: "Software Engineering",
    image: ecommerce,
    description: "React, TypeScript, Node, AntDesign, React-Hook-Form",
    route: "/softwareeng",
    repositoryURL: "https://github.com/musanifali/ShopFusion-F",
  },
];

const ProjectCard: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: string) => {
    if (route === "/webtech") {
      navigate(route); // Navigate to the Web Technology route
    } else {
      const project = projects.find((project) => project.route === route);
      if (project && project.repositoryURL) {
        window.open(project.repositoryURL, "_blank"); // Open the GitHub repository URL in a new tab
      } else {
        console.error(`Repository URL not found for project: ${project?.name}`);
      }
    }
  };

  return (
    <>
      {projects.map((project: Project) => (
        <Card
          _hover={{
            transform: "scale(1.01)",
            boxShadow: "md",
          }}
          transition="transform 0.2s ease-in-out"
          key={project.name}
          onClick={() => handleCardClick(project.route)}
          style={{ cursor: "pointer" }}
        >
          <Image src={project.image} alt={project.name} borderRadius="lg" />
          <Box>
            <Stack ml={3} mt={3} mb={3} spacing={3}>
              <Heading size="md">{project.name}</Heading>
              <Text color={"gray"} fontSize={12}>
                {project.description}
              </Text>
            </Stack>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default ProjectCard;
