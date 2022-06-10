import React from 'react'
import './index.scss';

export const Dev: React.FC = () => {
  return (
    <article className="dev">
      <div className="dev--header">
        <div className='double-column'>
         <img src='/place.png' alt="" />
          <div className='text-wrapper'>
            <h4>Architecture</h4>
            <p>No single blockchain can suit everyone’s unique needs. A composability-oriented workflow happens when we build with adaptation top of mind. ChainBridge provides builders with exactly that.
            </p>
            </div>
        </div>
      </div>
      <div className="dev--header">
        <div className='double-column'>
         <img src='/place.png' alt="" />
          <div className='text-wrapper'>
            <h4>Architecture</h4>
            <p>No single blockchain can suit everyone’s unique needs. A composability-oriented workflow happens when we build with adaptation top of mind. ChainBridge provides builders with exactly that.
            </p>
            </div>
        </div>
      </div>
    </article>
  )
}
