import { Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <>
      <Heading padding={5} fontSize={"large"}>
        Projects
      </Heading>
      <SimpleGrid
        paddingLeft={5}
        paddingRight={5}
        columns={{ lg: 4, md: 3, sm: 1 }}
        spacing={5}
      >
        <ProjectCard />
      </SimpleGrid>
    </>
  );
};

export default ProjectsGrid;
