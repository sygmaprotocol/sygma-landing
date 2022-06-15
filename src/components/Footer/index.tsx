import React from 'react'
import './index.scss';


export const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='links'>
        <div className='links--column'>
          <h4>Start Building</h4>
          <a href="/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Docs</a>
        </div>
        <div className='links--column'>
          <h4>Community</h4>
          <a href="/" target="_blank" rel="noopener noreferrer">Join Discord</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
      </div>
      <div className='copyright'>
        <p>&copy; {currentYear} A ChainSafe Product.</p>
      </div>
    </footer>
  )
}
