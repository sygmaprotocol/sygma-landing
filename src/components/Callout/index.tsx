import React from 'react'
import './index.scss';

export const Callout: React.FC = () => {
  return (
    <article className='callout'>
      <div className='single-column'>
        <h1>Built on the technology that has transferred <a className="callout-link" href="https://github.com/ChainSafe/ChainBridge" target="_blank" rel="noopener noreferrer">over $600 million in assets across top blockchains.</a>
        </h1>
      </div>
    </article>
  )
}
