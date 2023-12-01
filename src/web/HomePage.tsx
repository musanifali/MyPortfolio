import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Grid templateAreas={`"header" "main"`} gap={2} padding={5}>
      <GridItem area={"header"}>
        <Card>
          <CardBody>
            <Heading>Basic concepts of JavaScript</Heading>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem area={"main"}>
        <SimpleGrid columns={3} spacing={6}>
          <Card>
            <CardBody>
              <Link to="/Variables">How to declare a variable</Link>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Link to="/Conditionals">Conditional statements</Link>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Link to="/Loops">Loops</Link>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Link to="/Functions">Functions</Link>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Link to="/Array">Array</Link>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Link to="/Object">Object</Link>
            </CardBody>
          </Card>
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
