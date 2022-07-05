import React from 'react'
import './index.scss';
import { Header } from '../Header';

export const Hero: React.FC = () => {
  return (
    <article className="hero">
      <div className="hero--header">
        <Header />
        <div className="title-wrapper">
          <h1 className="title-text">Ground zero for building cross-chain applications.</h1>
          <div className='button-wrapper'>
            <a href="https://chainbridge.chainsafe.io/" rel="noopener noreferrer" target="_blank">Start Building</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSekXkenIvi4jCL1RdmxlNVg3_VkxI2nbFAK1EM4TIGE5b1hug/viewform" rel="noopener noreferrer" target="_blank">Join Pilot Program</a>
          </div>
        </div>
      </div>
    </article>
  )
}
