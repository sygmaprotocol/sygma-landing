import React from 'react'
import './index.scss';


export const Values: React.FC = () => (
  <article className='values'>
    <div className='column'>
      <div className='column--content-wrapper'>
        <span className='pill'>Audit in progress.</span>
        <h2 className='content'>
          The repo will be made public after the audit is completed. In the meantime, check out <a className='link' href="/" target="_blank" rel="noopener noreferrer">ChainBridge V2.</a>
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