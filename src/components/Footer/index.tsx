import React from 'react'
import './index.scss';
import { DiscordLogo, GithubLogo, TwitterLogo,  } from 'phosphor-react';


export const Footer: React.FC = () => {


  return (
    <footer className='footer'>
      <div className='links'>
        <div className='links--column'>
          <a href="https://docs.buildwithsygma.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Docs</a>
          <a href="https://medium.com/buildwithsygma/sygma-next-generation-interoperability-1b89bfc671a4" target="_blank" rel="noopener noreferrer" className="footer-link">About Us</a>
          <div className='icons'>
            <DiscordLogo size={32} to="https://discord.com/invite/xSAwrnCWcg" />
            <TwitterLogo size={32} to="https://twitter.com/buildwithsygma" />
            <GithubLogo size={32} to="https://docs.buildwithsygma.com/github-repositories" />
          </div>
          <button><a href="https://chainsafe.typeform.com/to/lYjEEAoJ" className="newsletter-link" target="_blank" rel="noopener noreferrer" >Sign up for updates</a></button>
        </div>
      </div>
    </footer>
  )
}
