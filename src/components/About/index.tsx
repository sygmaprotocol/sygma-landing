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
          <p>Sygma is a layer that faciliates inter-blockchain communication.<strong>*insert differentiating factor, or sdk if ready.*</strong></p>
            </div>
      </div>
      <div className='double-column'>
        <h4>Batteries are included.</h4>
        <div className='text-wrapper'>
          <p>Builders of all levels can benefit from Sygma. <strong>*insert here how to start building w Sygma*</strong></p>
            </div>
      </div>
    </article>
  )
}
