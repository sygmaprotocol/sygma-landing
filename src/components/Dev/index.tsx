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
            <p>Sygma uses an external verification model with MPC between relayers to secure cross-chain message passing.
            </p>
            </div>
        </div>
      </div>
      <div className="dev--header">
        <div className='double-column'>
         <img src='/place.png' alt="" />
          <div className='text-wrapper'>
            <h4>How to use Sygma</h4>
            <p>Start building by....
            </p>
            </div>
        </div>
      </div>
    </article>
  )
}
