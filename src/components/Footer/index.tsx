import React from 'react'
import './index.scss';
import { DiscordLogo, TwitterLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';


export const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='links'>
        <div className='links--column'>
          <a className='footer-link' href="https://chainbridge.chainsafe.io/" target="_blank" rel="noopener noreferrer">Docs</a>
          <a className='footer-link' href="https://github.com/ChainSafe/ChainBridge" target="_blank" rel="noopener noreferrer">Report a Bug</a>
          <a className='footer-link' href="https://chainsafe.io/" target="_blank" rel="noopener noreferrer">About</a>
          <a className='footer-link' href="https://blog.chainsafe.io/the-future-of-blockchain-bridges-3ae5cc9850b5" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
        <div className='links--column'>
          <div className='icons'>
            <DiscordLogo size={32} to="https://discord.com/invite/xSAwrnCWcg" />
            <GithubLogo size={32} to="https://github.com/ChainSafe/ChainBridge" />
            <TwitterLogo size={32} to="https://twitter.com/ChainSafeth" />
            <LinkedinLogo size={32} to="https://linkedin.com/company/chainsafe-systems" />
          </div>
          <button><a href="https://chainsafe.typeform.com/to/lYjEEAoJ" className="newsletter-link" target="_blank" rel="noopener noreferrer" >Sign up for updates</a></button>
        </div>
      </div>
      <div className='copyright'>
        <p>&copy; {currentYear} A ChainSafe Product.</p>
      </div>
    </footer>
  )
}
