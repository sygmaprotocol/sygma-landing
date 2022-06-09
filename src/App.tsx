import React from 'react';
import { Router } from './pages/Router';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
