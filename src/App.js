// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/css/index.css'

// Chakra
import { ChakraProvider, theme } from '@chakra-ui/react';

// Components
import HomeIndex from './pages/Home/HomeIndex';
// Plugins

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <HomeIndex></HomeIndex>
        </Route>
        <Route path="/check">
          <span>Hello check</span>
        </Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
