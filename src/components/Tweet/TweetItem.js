import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

const TweetItem = ({ tweet }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" padding="3">
      <Box display="flex" w="full">
        <Avatar
          w="8"
          h="8"
          mr="4"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Box flexGrow="1">
          <Flex justifyContent="space-between" mb="2">
            <Flex>
              <Text fontWeight="bold" mr="1">
                Jeffrey
              </Text>
              <Text color="blackAlpha.400">@jefray</Text>
            </Flex>
            <Box>
              <Text fontSize="sm" color="blackAlpha.500">
                3 minutes ago
              </Text>
            </Box>
          </Flex>
          <Text>{tweet.tweet}</Text>
        </Box>
      </Box>
    </Box>
  );
};

TweetItem.propTypes = {
  tweet: PropTypes.object,
};

export default TweetItem;
