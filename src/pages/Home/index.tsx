import React from 'react';
import { Mission } from '../../components/Mission';
import { Hero } from '../../components/Hero';
import './index.scss';
import { About } from '../../components/About';
import { UseCases } from '../../components/UseCases';
import { Values } from '../../components/Values';

export const Home: React.FC = () => {
  return (
    <div className='container'>
      <Hero />
      <Mission />
      <About />
      <UseCases />
      <Values />
    </div>
  );
};
