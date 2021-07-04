import React from 'react';
import {
  ChakraProvider,
  Container,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <span>Hello World</span>
      </Container>
    </ChakraProvider>
  );
}

export default App;
