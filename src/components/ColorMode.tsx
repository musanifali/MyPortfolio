import { Button, useColorMode } from "@chakra-ui/react";

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}
export default ColorMode;
