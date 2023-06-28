import React from 'react'
import './index.scss';

export const Relayer: React.FC = () => {
  return (
    <article className="relayer">
      <div className="relayer--header">
        <div className='double-column'>
          <h4>Become a relayer partner and secure the future.</h4>
          <button><a href="/">Apply Now</a></button>
        </div>
      </div>
      <div className='relayer--partners'>
        <div className='double-column'>
          <h4>Thankful to those who make multichain possible.</h4>
          <div className='showcase'>
            <a href="/" className='showcase--item'> <div></div>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
