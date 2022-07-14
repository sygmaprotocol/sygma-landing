import React from 'react'
import './index.scss';


export const Values: React.FC = () => (
  <article className='values'>
    <div className='column'>
      <div className='column--content-wrapper'>
        <span className='pill'>Unwalled garden.</span>
        <h2 className='content'>
          Open source and no network lock-in.
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