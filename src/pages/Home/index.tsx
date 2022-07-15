import React, { Fragment } from 'react';
import { Mission } from '../../components/Mission';
import { Hero } from '../../components/Hero';
import './index.scss';
import { About } from '../../components/About';
import { UseCases } from '../../components/UseCases';
import { Values } from '../../components/Values';
import { Dev } from '../../components/Dev';
import { Footer } from '../../components/Footer';
import { Cred } from '../../components/Cred';
import { Callout } from '../../components/Callout';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <div className='container'>
        <Hero />
        <Callout />
        <Cred />
        <Values />
        <Mission />
        <UseCases />
        <About />
        <Dev />
      </div>
      <Footer />
    </Fragment>
  );
};
