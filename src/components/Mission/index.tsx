import React from 'react'
import './index.scss';

export const Mission: React.FC = () => {
  return (
    <section className='mission'>
      <div className='double-column'>
        <h1>Grow multi-dimensionally. </h1>
        <div className='text-wrapper'>
          <p>Expand into untapped markets. Reduce complexity. Achieve deeper liquidity. Let Sygma take care of the underlying infrastructure and leverage the power of multiple blockchains.</p>
        </div>
      </div>
      <div className='double-column'>
        <h1>More interoperability, more consistency</h1>
        <div className='text-wrapper'>
          <p>Inconsistent cross-platform experiences and liquidity fragmentation hinders dApp growth. Sygma’s SDK makes cross-chain expansion easy for developers and seamless for end-users.</p>
        </div>
      </div>
    </section>
  )
}
