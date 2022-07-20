import React from 'react'
import './index.scss';

export const Dev: React.FC = () => {
  return (
    <article className="dev">
      <div className="dev--header">
        <div className='double-column'>
         <img src='/architecture.png' alt="" />
          <div className='text-wrapper'>
            <h1>Architecture</h1>
            <p>Sygma uses an external verification model with MPC between relayers to secure cross-chain message passing.
            </p>
            <button><a href="https://docs.buildwithsygma.com/architecture" target="_blank" rel="noopener noreferrer">Read More</a></button>
            </div>
        </div>
      </div>
      <div className="dev--header">
        <div className='double-column'>
         <img src='/sdk.png' alt="" />
          <div className='text-wrapper'>
            <h1>How to use Sygma</h1>
            <p>Start building cross-chain dApps with the Sygma SDK.
            </p>
            <button><a href="https://docs.buildwithsygma.com/sygma-sdk" target="_blank" rel="noopener noreferrer">Get Started</a></button>
            </div>
        </div>
      </div>
    </article>
  )
}
