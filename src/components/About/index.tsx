import React from 'react'
import './index.scss';

export const About: React.FC = () => {
  return (
    <article className='about'>
      <div className='img-wrapper'>
      </div>
      <div className='double-column'>
        <h4>Toolkit and protocol in one.</h4>
        <div className='text-wrapper'>
          <p>ChainBridge is a layer that faciliates inter-blockchain communication, complete with an SDK to adapt to unique needs.</p>
            </div>
      </div>
      <div className='double-column'>
        <h4>Batteries are included.</h4>
        <div className='text-wrapper'>
          <p>Builders of all levels can benefit from ChainBridge. Fork the token bridge UI, paste the swap widget, or start building your cross-chain app with the SDK.</p>
            </div>
      </div>
    </article>
  )
}
