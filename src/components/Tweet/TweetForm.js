import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { postTweet } from '../../redux/reducers/tweetSlice';

const TweetForm = () => {
  const dispatch = useDispatch();

  const tweetForm = useFormik({
    initialValues: {
      tweet: '',
    },
    validate: value => {
      const errors = {};
      if (!value.tweet.trim()) {
        errors.tweet = 'Tweet is required';
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(postTweet(values));
      resetForm();
    },
  });

  return (
    <Box borderWidth="1px" borderRadius="lg" padding="3">
      <form onSubmit={tweetForm.handleSubmit}>
        <Box display="flex" alignItems="center">
          <Avatar
            w="8"
            h="8"
            mr="4"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <FormControl
            isInvalid={tweetForm.errors.tweet && tweetForm.touched.tweet}
          >
            <Textarea
              name="tweet"
              id="tweet"
              onChange={tweetForm.handleChange}
              value={tweetForm.values.tweet}
              border="none"
              placeholder="Tweet about something..."
            />
            <FormErrorMessage>{tweetForm.errors.tweet}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box textAlign="right" mt="3">
          <Button type="submit" colorScheme="blue">
            Tweet
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TweetForm;
