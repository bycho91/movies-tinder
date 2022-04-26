import { HStack, Button, Text, ButtonGroup, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ToggleColorMode from "./ToggleColorMode";

const Navbar = () => {
  return (
    <HStack h="70px" px="3em" justify="space-between" width="100vw" mx="auto">
      <Text fontSize="3xl" fontWeight="extrabold">
        SupaMovies
      </Text>
      <Box display="flex" alignItems="center">
        <ButtonGroup mr="1em">
          <Link to="/login">
            <Button colorScheme="cyan">Log In</Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="red">Register</Button>
          </Link>
        </ButtonGroup>
        <ToggleColorMode />
      </Box>
    </HStack>
  );
};

export default Navbar;
