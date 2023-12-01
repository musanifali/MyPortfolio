import {
  Box,
  Grid,
  Heading,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import SkillsCard from "./SkillsCard";
import MoreProject from "./MoreProject";

const GridWithSections: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Grid
        marginTop={20}
        templateColumns={{ lg: "3fr 1fr" }}
        gap="4"
        justifyItems={{ lg: "center" }}
        alignItems={{ lg: "center" }}
      >
        <Box
          marginLeft={{ lg: 20, md: 8, sm: 8 }}
          marginRight={{ lg: 0, md: 8, sm: 8 }}
          style={isLargeScreen ? { marginBottom: "150px" } : {}}
        >
          <Heading marginBottom={5} fontSize={"large"}>
            What I Know
          </Heading>
          <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} gap={2}>
            <SkillsCard />
          </SimpleGrid>
        </Box>
        <Box>
          <MoreProject />
        </Box>
      </Grid>
    </>
  );
};

export default GridWithSections;
