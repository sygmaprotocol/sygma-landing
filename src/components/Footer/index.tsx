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
            <a href="https://discord.com/channels/593655374469660673/994352333653803008" target="_blank" rel="noopener noreferrer"><DiscordLogo size={32} /></a>
            <a href="https://twitter.com/buildwithsygma" target="_blank" rel="noopener noreferrer"><TwitterLogo size={32} /></a>
            <a href="hhttps://docs.buildwithsygma.com/github-repositories" target="_blank" rel="noopener noreferrer"><GithubLogo size={32} /></a>
          </div>
          <button><a href="https://chainsafe.typeform.com/to/lYjEEAoJ" className="newsletter-link" target="_blank" rel="noopener noreferrer" >Sign up for updates</a></button>
        </div>
      </div>
    </footer>
  )
}
