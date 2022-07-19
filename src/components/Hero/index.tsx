import React from 'react'
import './index.scss';
import { Header } from '../Header';

export const Hero: React.FC = () => {
  return (
    <article className="hero">
      <div className="hero--header">
        <Header />
        <div className="title-wrapper">
          <h1 className="title-text">Going multi-chain is a growth multiplier.</h1>
          <p className="hero-description">Sygma is the interoperability layer for building cross-blockchain applications. </p>
          <div className='button-wrapper'>
            <a href="https://docs.buildwithsygma.com/" rel="noopener noreferrer" target="_blank">Start Building</a>
            <a href="/litepaper.pdf" rel="noopener noreferrer" target="_blank">Download Litepaper</a>
          </div>
        </div>
      </div>
    </article>
  )
}
