import {
  Box,
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import MainLayout from '../../components/Layouts/MainLayout';

const HomeIndex = () => {
  return (
    <MainLayout>
      {/* Tweet Form */}
      <Stack spacing="3">
        <Box borderWidth="1px" borderRadius="lg" padding="3">
          <Box display="flex" alignItems="center">
            <Icon as={MdAccountCircle} w="7" h="7" mr="4" />
            <Textarea border="none" placeholder="Tweet about something..." />
          </Box>
          <Box textAlign="right" mt="3">
            <Button colorScheme="blue">Tweet</Button>
          </Box>
        </Box>

        <Box borderWidth="1px" borderRadius="lg" padding="3">
          <Box display="flex" alignItems="start">
            <Icon as={MdAccountCircle} w="7" h="7" mr="4" />
            <Box>
              <Flex mb="2">
                <Text fontWeight="bold" mr="1">
                  Jeffrey
                </Text>
                <Text color="blackAlpha.400">@jefray</Text>
              </Flex>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                laborum quos explicabo natus quam nam vel labore perferendis
                neque rerum repudiandae quia nesciunt dolore, accusamus
                voluptates quas commodi qui molestiae dignissimos odit soluta
                aspernatur obcaecati quidem nihil? Reprehenderit, autem! Maiores
                pariatur nesciunt autem non rerum, nobis molestiae cum quisquam
                fuga.
              </Text>
            </Box>
          </Box>
        </Box>
      </Stack>
    </MainLayout>
  );
};

export default HomeIndex;
