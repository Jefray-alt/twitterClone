// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/css/index.css';

// Chakra
import { ChakraProvider, theme } from '@chakra-ui/react';

// Components
import HomeIndex from './pages/Home/HomeIndex';
import LoginIndex from './pages/Login/LoginIndex';
import RegisterIndex from './pages/Register/RegisterIndex';
// Plugins

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <HomeIndex />
        </Route>
        <Route path="/login">
          <LoginIndex />
        </Route>
        <Route path="/register">
          <RegisterIndex />
        </Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
