import { Badge, Card, CardBody, Heading } from "@chakra-ui/react";

const SkillsCard = () => {
  const skills = [
    {
      name: "Frontend",
      skills: ["Html", "CSS", "Javascript", "Typescript", "React", "Jest"],
      color: "teal",
    },
    {
      name: "Backend",
      skills: ["Node Js", "Express Js", "Auth", "JWT"],
      color: "blue",
    },
    { name: "Database", skills: ["My Sql", "MongoDB"], color: "green" },
    { name: "Devops", skills: ["Git", "GitHub", "BitBucket"], color: "pink" },
  ];
  return (
    <>
      {skills.map((skill, index) => (
        <Card key={index}>
          <Heading marginTop={4} marginLeft={5} fontSize="large">
            {skill.name}
          </Heading>
          <CardBody>
            {skill.skills.map((s) => (
              <Badge
                padding={2}
                key={s}
                borderRadius={4}
                marginRight={3}
                marginBottom={2}
                variant="outline"
                colorScheme={skill.color}
              >
                {s}
              </Badge>
            ))}
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default SkillsCard;
