import React from 'react'
import './index.scss';
import { DiscordLogo, TwitterLogo,  } from 'phosphor-react';


export const Footer: React.FC = () => {


  return (
    <footer className='footer'>
      <div className='links'>
        <div className='links--column'>
          <div className='icons'>
            <DiscordLogo size={32} to="https://discord.com/invite/xSAwrnCWcg" />
            <TwitterLogo size={32} to="https://twitter.com/buildwithsygma" />
          </div>
          <button><a href="https://chainsafe.typeform.com/to/lYjEEAoJ" className="newsletter-link" target="_blank" rel="noopener noreferrer" >Sign up for updates</a></button>
        </div>
      </div>
    </footer>
  )
}
