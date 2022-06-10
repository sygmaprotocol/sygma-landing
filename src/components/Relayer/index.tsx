import React from 'react'
import './index.scss';

export const Dev: React.FC = () => {
  return (
    <article className="dev">
      <div className="dev--header">
        <div className='double-column'>
          <h4>Yes, we're audited.</h4>
          <div className='text-wrapper'>
            <p>No single blockchain can suit everyone’s unique needs. A composability-oriented workflow happens when we build with adaptation top of mind. ChainBridge provides builders with exactly that.
            </p>
            </div>
        </div>
      </div>
    </article>
  )
}
