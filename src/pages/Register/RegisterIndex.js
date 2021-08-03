import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/reducers/authSlice';
const RegisterIndex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const registerForm = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validate: value => {
      const errors = {};

      return errors;
    },
    onSubmit: values => {
      dispatch(register(values));
    },
  });

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
        <form onSubmit={registerForm.handleSubmit}>
          <FormControl mb="4">
            <Input
              name="first_name"
              id="first_name"
              onChange={registerForm.handleChange}
              value={registerForm.values.first_name}
              placeholder="First Name"
            />
          </FormControl>
          <FormControl mb="4">
            <Input
              name="last_name"
              id="last_name"
              onChange={registerForm.handleChange}
              value={registerForm.values.last_name}
              placeholder="Last Name"
            />
          </FormControl>
          <FormControl mb="4">
            <Input
              name="username"
              id="username"
              onChange={registerForm.handleChange}
              value={registerForm.values.username}
              placeholder="Username"
            />
          </FormControl>
          <FormControl mb="4">
            <Input
              name="email"
              id="email"
              onChange={registerForm.handleChange}
              value={registerForm.values.email}
              placeholder="Email"
            />
          </FormControl>
          <FormControl mb="4">
            <Input
              name="password"
              id="password"
              onChange={registerForm.handleChange}
              value={registerForm.values.password}
              placeholder="Password"
              type="password"
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={registerForm.handleChange}
              name="confirm_password"
              value={registerForm.values.confirm_password}
              placeholder="Confirm Password"
              type="password"
            />
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
