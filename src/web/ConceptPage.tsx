import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Text,
  Code,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";

interface ConceptPageParams {
  concept: string;
  [key: string]: string | undefined;
}

const ConceptPage: React.FC = () => {
  const { concept } = useParams<ConceptPageParams>();
  const [compilerOutput, setCompilerOutput] = useState<string>("");
  const [exampleCode, setExampleCode] = useState<string>("");

  const runCode = (code: string) => {
    try {
      let output = "";
      const originalConsoleLog = console.log;
      console.log = (value: any) => {
        output += value + "\n";
      };

      // Use eval to execute the code
      eval(code);

      console.log = originalConsoleLog; // Restore the original console.log function
      setCompilerOutput(output);
    } catch (error) {
      setCompilerOutput(`Error: ${error}`);
    }
  };

  const handleRunCode = () => {
    runCode(exampleCode);
  };

  const renderExamples = () => {
    // Render examples based on the concept parameter
    if (concept === "Variables") {
      return (
        <VStack align="flex-start" spacing={4}>
          <Heading size="md">Variable Examples</Heading>
          <HStack spacing={4}>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example1.png" alt="Example 1" />
              <Button
                onClick={() => {
                  setExampleCode("let x = 5;\nconsole.log(x);");
                }}
              >
                Example 1
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example2.png" alt="Example 2" />
              <Button
                onClick={() => {
                  setExampleCode("const y = 10;\nconsole.log(y);");
                }}
              >
                Example 2
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example2.png" alt="Example 2" />
              <Button
                onClick={() => {
                  setExampleCode("const z = 5;\nconsole.log(y);");
                }}
              >
                Example 3
              </Button>
            </Box>
          </HStack>
        </VStack>
      );
    } else if (concept === "Conditionals") {
      return (
        <VStack align="flex-start" spacing={4}>
          <Heading size="md">Conditional Examples</Heading>
          <HStack spacing={4}>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example3.png" alt="Example 3" />
              <Button
                onClick={() => {
                  setExampleCode(
                    'const x = 6;\nif (x > 5) console.log("x is greater than 5");'
                  );
                }}
              >
                Example 1
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example4.png" alt="Example 4" />
              <Button
                onClick={() => {
                  setExampleCode(
                    'const y = 10;\nif (y === 10) console.log("y is equal to 10");'
                  );
                }}
              >
                Example 2
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example4.png" alt="Example 4" />
              <Button
                onClick={() => {
                  setExampleCode(
                    'const z = 1;\nif (z !== 10) console.log("z is not equal to 10");'
                  );
                }}
              >
                Example 3
              </Button>
            </Box>
          </HStack>
        </VStack>
      );
    } else if (concept === "Loops") {
      return (
        <VStack align="flex-start" spacing={4}>
          <Heading size="md">Loop Examples</Heading>
          <HStack spacing={4}>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example5.png" alt="Example 5" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "const numbers = [1, 2, 3, 4, 5];\nfor (let i = 0; i < numbers.length; i++) console.log(numbers[i]);"
                  );
                }}
              >
                Example 1
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example6.png" alt="Example 6" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "let i = 0;\nwhile (i < 5) { console.log(i); i++; }"
                  );
                }}
              >
                Example 2
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example6.png" alt="Example 6" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "let j = 0;\nwhile (j < 5) { console.log(i); i++; }"
                  );
                }}
              >
                Example 3
              </Button>
            </Box>
          </HStack>
        </VStack>
      );
    } else if (concept === "Array") {
      return (
        <VStack align="flex-start" spacing={4}>
          <Heading size="md">Array Examples</Heading>
          <HStack spacing={4}>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example5.png" alt="Example 5" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "const numbers = [1, 2, 3, 4, 5];\n console.log(numbers.length);"
                  );
                }}
              >
                Example 1
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example6.png" alt="Example 6" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "const numbers = [1, 2, 3, 4, 5];\n numbers.push(6) \n console.log(numbers.length);"
                  );
                }}
              >
                Example 2
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example6.png" alt="Example 6" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "const numbers = [1, 2, 3, 4, 5];\n numbers.pop(5) \n console.log(numbers.length);"
                  );
                }}
              >
                Example 3
              </Button>
            </Box>
          </HStack>
        </VStack>
      );
    } else if (concept === "Object") {
      return (
        <VStack align="flex-start" spacing={4}>
          <Heading size="md">Object Examples</Heading>
          <HStack spacing={4}>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example5.png" alt="Example 5" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "const numbers = {name:'ali',rollno:'550'}\n console.log(numbers);"
                  );
                }}
              >
                Example 1
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example6.png" alt="Example 6" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "const numbers = {name:'ali',rollno:'550'}\n console.log(numbers.name);"
                  );
                }}
              >
                Example 2
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Image src="example6.png" alt="Example 6" />
              <Button
                onClick={() => {
                  setExampleCode(
                    "const numbers = {name:'ali',rollno:'550'}\n console.log(numbers.rollno);"
                  );
                }}
              >
                Example 3
              </Button>
            </Box>
          </HStack>
        </VStack>
      );
    }

    // Add more concept cases here

    return null; // Render nothing if the concept is not found
  };

  return (
    <Box p={4}>
      {renderExamples()}
      <Box>
        <Heading size="sm">Example Code:</Heading>
        <Code
          p={2}
          m={3}
          bg="gray.100"
          borderRadius="md"
          fontFamily="Courier New"
        >
          {exampleCode}
        </Code>
      </Box>
      <Button onClick={handleRunCode}>Run</Button>
      <Box>
        <Heading size="sm">Compiler Output:</Heading>
        <Code
          p={2}
          m={3}
          bg="gray.100"
          borderRadius="md"
          fontFamily="Courier New"
        >
          {compilerOutput}
        </Code>
      </Box>
    </Box>
  );
};

export default ConceptPage;
