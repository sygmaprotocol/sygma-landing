import React from 'react';
import './index.scss';

export const Home: React.FC = () => {
  return (
    <article className="services">
      <div className="services--header">
        <div className="title-wrapper">
          <h1 className="title-text">Services</h1>
          <p>ChainSafe offers clients best-in-class engineering, consulting, and auditing services for Web3.</p>
        </div>
      </div>
    </article>
  );
};
