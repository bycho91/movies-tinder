import {
  Box,
  HStack,
  Divider,
  Text,
  FormLabel,
  Input,
  FormControl,
  VStack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <Layout>
      <Box w="100vw" mx="auto" px="3em" mt="2em">
        <HStack justify="space-around" h="80vh">
          <Box
            display="flex"
            justify="center"
            flexDirection="column"
            textAlign="center"
            w="100%"
          >
            <Text fontSize="6xl" fontWeight="bold">
              Sign In
            </Text>
            <Text fontSize="xl">to your account.</Text>
          </Box>
          <Box h="300px">
            <Divider orientation="vertical" />
          </Box>
          <Box display="flex" justify="center" w="100%" textAlign="center">
            <VStack
              as={FormControl}
              spacing={2}
              align="normal"
              w="70%"
              mx="auto"
            >
              <Text fontSize="5xl" fontWeight="bold" textAlign="left">
                Log In
              </Text>
              <Box>
                <FormLabel>Username</FormLabel>
                <Input type="text" placeholder="username" />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="password" />
              </Box>
              <Box
                as={ButtonGroup}
                w="100%"
                display="flex"
                justifyContent="flex-end"
              >
                <Button colorScheme="orange">Sign In</Button>
                <Button colorScheme="green">Sign Up</Button>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </Layout>
  );
};

export default Login;
