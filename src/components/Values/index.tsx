import React from 'react'
import './index.scss';


export const Values: React.FC = () => (
  <article className='values'>
    <div className='column'>
      <div className='column--content-wrapper'>
        <span className='pill'>Unwalled garden.</span>
        <h2 className='content'>
          <a className='link' href="https://docs.buildwithsygma.com/github-repositories" target="_blank" rel="noopener noreferrer">Open-source</a> and no lock-in.
        </h2>
      </div>
    </div>
    <div className='column'>
      <div className='column--content-wrapper'>
        <span className='pill white'>Experiment freely.</span>
        <h2 className='content white'>
          Go beyond the EVM. Sygma will support Substrate-based blockchains soon.
        </h2>
      </div>
    </div>
  </article>
)