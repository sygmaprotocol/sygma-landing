import React from 'react';
import { Router } from './pages/Router';
import "./index.scss";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import { ChakraProvider } from '@chakra-ui/react';

export const App: React.FC = () => (
  <ChakraProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  </ChakraProvider>
);
