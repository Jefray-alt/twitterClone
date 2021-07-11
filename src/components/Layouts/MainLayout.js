import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import MainLeftNavbar from '../Navigation/MainLeftNavbar';
import MainRightNavbar from '../Navigation/MainRightNavbar';

const MainLayout = ({ children }) => {
  return (
    <Grid gap="4" minH="full" templateColumns="repeat(5, 1fr)">
      <GridItem colSpan={1} p="4">
        <MainLeftNavbar />
      </GridItem>
      <GridItem colSpan={3} p="4">
        {children}
      </GridItem>
      <GridItem colSpan={1} p="4">
        <MainRightNavbar />
      </GridItem>
    </Grid>
  );
};

export default MainLayout;
