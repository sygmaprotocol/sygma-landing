import React, { Fragment } from 'react';
import './index.scss';
import { Footer } from '../../components/Footer';
import { AboutUs } from '../../components/AboutUs';

export const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <div className='container'>
        <AboutUs />
      </div>
      <Footer />
    </Fragment>
  );
};
