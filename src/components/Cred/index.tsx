import React from 'react'
import './index.scss';

export const Cred: React.FC = () => {
  return (
    <article className='cred'>
      <div className='single-column'>
        <h1>Previously ChainBridge</h1>
        <div className='text-wrapper'>
          <p>After years of working on bridging solutions, we’ve learned a lot of valuable lessons. Leveraging that experience, Sygma is built on top of the ChainBridge open-source repo, a successful bridging framework that has transferred over $600 million in assets. Sygma takes the notion of bridging one step further—from simple point-to-point money transfers to an extensible, any-to-any communication protocol.</p>
        </div>
      </div>
    </article>
  )
}
