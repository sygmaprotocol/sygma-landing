import React from 'react';
import { Hero } from '../../components/Hero';
import './index.scss';

export const Home: React.FC = () => {
  return (
    <div className='container'>
      <Hero />
    </div>
  );
};
