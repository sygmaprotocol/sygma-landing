import React from 'react'
import './index.scss';


export const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='links'>
        <div className='links--column'>
          <h4>Start Building</h4>
          <a href="https://github.com/ChainSafe/ChainBridge" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://chainbridge.chainsafe.io/" target="_blank" rel="noopener noreferrer">Docs</a>
        </div>
        <div className='links--column'>
          <h4>Community</h4>
          <a href="https://discord.com/invite/xSAwrnCWcg" target="_blank" rel="noopener noreferrer">Join Discord</a>
          <a href="https://blog.chainsafe.io/the-future-of-blockchain-bridges-3ae5cc9850b5" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="https://chainsafe.io/" target="_blank" rel="noopener noreferrer">About ChainSafe</a>
        </div>
      </div>
      <div className='copyright'>
        <p>&copy; {currentYear} A ChainSafe Product.</p>
      </div>
    </footer>
  )
}
