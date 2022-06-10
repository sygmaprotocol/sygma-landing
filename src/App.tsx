import React from 'react';
import { Router } from './pages/Router';
import "./index.scss";
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
