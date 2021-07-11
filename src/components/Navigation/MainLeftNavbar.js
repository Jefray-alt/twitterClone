import {
  Button,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MdAccountCircle, MdExplore, MdHome } from 'react-icons/md';
import { GiBirdTwitter } from 'react-icons/gi';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainLeftNavbar = () => {
  const [navLinks, setNavLinks] = useState([
    { name: 'Home', to: '/home', active: true, icon: MdHome },
    { name: 'Explore', to: '/explore', active: false, icon: MdExplore },
    { name: 'Profile', to: '/profile', active: false, icon: MdAccountCircle },
  ]);

  return (
    <Stack spacing={6}>
      <Heading
        textAlign="center"
        as="h6"
        size="lg"
        borderBottom="1px"
        px="3"
        py="5"
        borderColor="blackAlpha.200"
      >
        <Flex alignItems="center">
          <Icon color="blue.400" as={GiBirdTwitter} mr="2"></Icon>
          <Text color="blackAlpha.700" fontSize="lg">
            Twitter
          </Text>
        </Flex>
      </Heading>
      <List fontWeight="bold" fontSize="16" w="full" spacing={3}>
        {navLinks.map((link, index) => (
          <ListItem key={index}>
            <Link to={link.to}>
              <Button
                isActive={link.active}
                leftIcon={<Icon color="blue.400" as={link.icon} w={6} h={6} />}
                justifyContent="flex-start"
                textAlign="left"
                variant="ghost"
                width="full"
              >
                {link.name}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default MainLeftNavbar;
