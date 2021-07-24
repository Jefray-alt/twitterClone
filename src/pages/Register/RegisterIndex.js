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
const RegisterIndex = () => {
  const history = useHistory();
  return (
    <Box
      backgroundColor="blue.50"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box px="4" py="5" backgroundColor="white" rounded="md" shadow="lg">
        <Box mb="7" textAlign="center">
          <Heading mb="2">Register to Twt Clone</Heading>
          <Text>Fill up the form below to create an account</Text>
        </Box>
        <form>
          <FormControl mb="4">
            <Input placeholder="First Name" />
          </FormControl>
          <FormControl mb="4">
            <Input placeholder="Last Name" />
          </FormControl>
          <FormControl mb="4">
            <Input placeholder="Username" />
          </FormControl>
          <FormControl mb="4">
            <Input placeholder="Email" />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" type="password" />
          </FormControl>
          <VStack mt="6">
            <Button colorScheme="blue" type="submit" variant="solid" w="full">
              Register
            </Button>
            <Button
              onClick={() => history.push('/login')}
              w="full"
              colorScheme="blue"
              variant="outline"
            >
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterIndex;
