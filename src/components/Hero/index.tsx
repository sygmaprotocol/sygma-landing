import React from 'react'
import './index.scss';
import logo from "../../assets/logo.svg";
import { Nav } from '../NavBar';

export const Hero: React.FC = () => {
  return (
    <article className="hero">
      <div className="hero--header">
        <div className='nav'>
          <img className='logo' src={logo} alt="" />
          <Nav />
        </div>
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
