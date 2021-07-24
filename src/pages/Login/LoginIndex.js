import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginIndex = () => {
  const history = useHistory();
  return (
    <Box
      backgroundColor="blue.50"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        px="4"
        py="5"
        backgroundColor="white"
        w="sm"
        rounded="md"
        shadow="lg"
      >
        <Box mb="7" textAlign="center">
          <Heading>Twt Clone</Heading>
          <Text>Login to your account to start using Twt Clone!</Text>
        </Box>
        <form>
          <FormControl mb="4">
            <Input placeholder="Username" />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" type="password" />
          </FormControl>
          <VStack mt="6">
            <Button colorScheme="blue" variant="solid" w="full">
              Login
            </Button>
            <Button
              onClick={() => history.push('/register')}
              colorScheme="blue"
              variant="outline"
              w="full"
            >
              Register
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginIndex;
