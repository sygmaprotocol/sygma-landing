import React from 'react'
import './index.scss';

export const About: React.FC = () => {
  return (
    <article className='about'>
      {/* <div className='img-wrapper'>
      </div> */}
      <div className='single-column'>
        <h1>Sygma's multi-chain vision</h1>
        <div className='text-wrapper'>
        </div>
      </div>
      <div className='single-column'>
        <h2>UX so good that it goes unnoticed.</h2>
        <div className='text-wrapper'>
          <p>Sygma takes bridging blockchains to the next level by making bridges invisible to the user.</p>
          <p>Users experience unified and consistent interfaces regardless of the underlying protocol. </p>
        </div>
      </div>
      <div className='single-column'>
        <h2>Less manual effort over time.</h2>
        <div className='text-wrapper'>
          <p>Write your code once, use it in many places with Sygma’s portable business logic.</p>
          <p>A community of developers are continuously adding integrations and tooling to decrease technical debt.</p>
        </div>
      </div>
    </article>
  )
}
