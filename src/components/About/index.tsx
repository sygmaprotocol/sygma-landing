import React from 'react'
import './index.scss';

export const About: React.FC = () => {
  return (
    <article className="services">
      <div className="services--header">
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
