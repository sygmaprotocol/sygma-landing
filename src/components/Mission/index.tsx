import React from 'react'
import './index.scss';

export const Mission: React.FC = () => {
  return (
    <>
    <div className='double-column'>
      <h1>Grow multi-dimensionally. </h1>
      <div className='text-wrapper'>
        <p>Achieve deeper liquidity. Expand into untapped markets. Reduce complexity. Meet your users where they are. Let Sygma take care of the underlying infrastructure and leverage the power of multiple blockchains.</p>
      </div>
    </div>
    <div className='double-column'>
      <h1>More interoperability, more consistency</h1>
      <div className='text-wrapper'>
        <p>Inconsistent cross-platform experiences and liquidity fragmentation can make it challenging to take your dApp or protocol multi-chain. Sygma’s SDK has the tools to make cross-chain expansion easy for developers and seamless for end-users.</p>
      </div>
    </div>
    </>
  )
}
