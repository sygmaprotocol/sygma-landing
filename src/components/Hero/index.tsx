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
            <button><a href="/" rel="noopener noreferrer" target="_blank">Start Building</a></button>
            <button><a href="/" rel="noopener noreferrer" target="_blank">Read Lightpaper</a></button>
          </div>
        </div>
      </div>
    </article>
  )
}
