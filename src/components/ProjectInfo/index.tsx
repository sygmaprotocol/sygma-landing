import React from 'react';
import './index.scss';

export const ProjectInfo: React.FC = () => {
  return (
    <section className='project-info'>
      <div className='double-column'>
        <a
          className='link'
          href='https://audit.haechi.io/wp-content/uploads/2022/09/HAECHI-AUDIT-Sygma-Audit-Report-v1.1.pdf'
          target='_blank'
          rel='noopener noreferrer'>
          <h1>Download audit report</h1>
        </a>
        <div className='audit-logo'>
          <h1>Audited by</h1>{' '}
          <a
            href='https://audit.haechi.io/'
            target='_blank'
            rel='noopener noreferrer'>
            <img src='haechi.png' alt='' />
          </a>
        </div>
      </div>
    </section>
  );
};
