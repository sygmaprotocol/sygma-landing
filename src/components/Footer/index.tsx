import React from 'react'
import './index.scss';
import { DiscordLogo, GithubLogo, TwitterLogo,  } from 'phosphor-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='links'>
        <div className='links--column'>
          <a
            href='https://docs.buildwithsygma.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'>
            Docs
          </a>
          <Link to='/about' className='footer-link'>
            About Us
          </Link>
          <div className='icons'>
            <a
              href='https://discord.gg/Qdf6GyNB5J'
              target='_blank'
              rel='noopener noreferrer'>
              <DiscordLogo size={32} />
            </a>
            <a
              href='https://twitter.com/buildwithsygma'
              target='_blank'
              rel='noopener noreferrer'>
              <TwitterLogo size={32} />
            </a>
            <a
              href='https://docs.buildwithsygma.com/github-repositories'
              target='_blank'
              rel='noopener noreferrer'>
              <GithubLogo size={32} />
            </a>
          </div>
          <button>
            <a
              href='https://share.hsforms.com/19jA2jY8yRf6DKe1LtK5qJQ4kcdm'
              className='newsletter-link'
              target='_blank'
              rel='noopener noreferrer'>
              Sign up for updates
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
};
