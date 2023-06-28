import React from 'react'
import './index.scss';

export const About: React.FC = () => {
  return (
    <article className='about'>
      <div className='single-column'>
        <h1>Sygma's multi-chain vision</h1>
      </div>
      <section className='columns'>
        <div className='column'>
          <div className='column--content-wrapper'>
            <h1>UX so good that it goes unnoticed.</h1>
            <div className='text-wrapper'>
              <p>Sygma takes bridging blockchains to the next level by making bridges invisible to the user.</p>
              <p>Users experience unified and consistent interfaces regardless of the underlying protocol. </p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='column--content-wrapper'>
          <h1>Less manual effort over time.</h1>
            <div className='text-wrapper'>
              <p>Write your code once, use it in many places with Sygma’s portable business logic.</p>
              <p>A community of developers are continuously adding integrations and tooling to decrease technical debt.</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
