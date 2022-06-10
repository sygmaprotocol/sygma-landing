import React from 'react';
import { Mission } from '../../components/Mission';
import { Hero } from '../../components/Hero';
import './index.scss';
import { About } from '../../components/About';

export const Home: React.FC = () => {
  return (
    <div className='container'>
      <Hero />
      < Mission />
      <About />
    </div>
  );
};
