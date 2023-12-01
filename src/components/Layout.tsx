import {
  Box,
  Card,
  CardBody,
  CSSReset,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import Header from "./Header";
import SideBar from "./SideBar";
import Profile from "./Profile";
import ProjectsGrid from "./ProjectsGrid";
import SkillGrid from "./SkillGrid";

const Layout = () => {
  return (
    <>
      <CSSReset />
      <Box height="100vh" overflow="hidden">
        <Grid
          templateAreas={{
            base: `"header"
                  "main"
          `,
            lg: `"header header"
               "sidebar main"
          `,
          }}
          gap={2}
          padding={2}
          templateColumns="repeat(5, 1fr)"
          height="100%"
          overflow="auto"
        >
          <GridItem
            colSpan={5}
            area={"header"}
            position="sticky"
            top={0}
            zIndex="sticky"
          >
            <Header />
          </GridItem>
          <Show above="lg">
            <GridItem colSpan={1} area={"sidebar"} overflowY="auto">
              <Card>
                <CardBody>
                  <SideBar />
                </CardBody>
              </Card>
            </GridItem>
          </Show>
          <GridItem colSpan={{ base: 5, lg: 4 }} area={"main"} overflowY="auto">
            <Profile />
            <ProjectsGrid />
            <SkillGrid />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
