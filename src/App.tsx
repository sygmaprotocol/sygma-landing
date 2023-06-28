import React from 'react';
import { Router } from './pages/Router';
import "./index.scss";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollToTop';

export const App: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Router />
  </BrowserRouter>
);
