import React from 'react';
import './index.scss';

export const Home: React.FC = () => {
  return (
    <article className="services">
      <div className="services--header">
        <div className="headerTextWrapper">
          <h1 className="titleText">Services</h1>
          <h4>ChainSafe offers clients best-in-class engineering, consulting, and auditing services for Web3.</h4>
        </div>
      </div>
    </article>
  );
};
