import React from 'react';
import './index.scss';

export const AboutUs: React.FC = () => {
  return (
    <article className='about-us'>
      <div className='single-column'>
        <div className='intro-wrap'>
          <img src='/about-header.png' alt='' />
          <h1 className='title'>Sygma: Next-generation Interoperability</h1>
        </div>
        <div className='text-wrapper'>
          <p>
            The multi-chain future is here. Yet, in the current environment,
            it’s difficult for users to operate between ecosystems. This is
            because most dApps don’t support cross-chain activity natively.
            Applications are deployed to different ecosystems, but development
            is siloed, and the same app on different chains is a separate
            entity.
          </p>
          <p>
            In addition, the current bridging environment often requires trust
            in one centralized party or wait times in the case of a trustless
            solution. This is why we’re building Sygma — an interoperability
            layer that enables fast, secure, and reliable cross-chain
            communication.
          </p>
          <h2>Next-gen interoperability — ChainBridge ➡️ Sygma</h2>
          <p>
            Three years ago, there were few trustworthy cross-chain bridging
            protocols. Since then, the open-source ChainBridge cross-chain repo
            emerged as one of the first comprehensive multi-directional bridges
            for EVM and Substrate-based chains. ChainBridge has been adopted and
            relied upon by a number of leading blockchains, transferring over
            $600 million in bridged assets since inception.
          </p>
          <p>
            Building on our experience with ChainBridge, we’ve poured all our
            learnings into Sygma. Like the Greek letter sigma (Σ), Sygma alludes
            to summation. We chose this name because Sygma will allow developers
            to interweave blockchain protocols in a way that gives users
            something greater than the sum of the parts.
          </p>
          <p>
            Sygma takes the notion of bridging one step further. Sygma is more
            modular than ChainBridge, allowing easy configuration and greater
            compatibility with other networks. Instead of simple point-to-point
            money transfers, we’ve created an extensible, any-to-any
            communication protocol.
          </p>
          <p>
            Sygma allows new and current dApps to expand, creating the first
            truly cross-chain applications.{' '}
            <a
              target='__blank'
              rel='noopener noreferrer'
              href='/sygma-lightpaper.pdf'
              className='link'>
              Read the Sygma Litepaper.
            </a>
          </p>
          <p>
            From the start, Sygma supports <strong>ERC20</strong> and{' '}
            <strong>ERC721</strong> contract interfaces, allowing dApp builders
            who rely on these standards to fast-track their development cycle.
            Beyond those predefined interfaces, Sygma allows you to easily
            implement any type of application-specific messaging — the
            possibilities are infinite.
          </p>
          <p>
            And critically, Sygma supports general message passing, enabling
            people building on one chain to call any function on any other
            connected chain. This dramatically increases the number of options
            at a developer's disposal.
          </p>
          <p>For instance, Sygma can enable users to:</p>
          <ul>
            <li>Bridge directly from their wallet or portfolio manager.</li>
            <li>Borrow on one chain with collateral from another chain.</li>
            <li>Vote on DAO governance proposals from any chain.</li>
            <li>
              Use a yield aggregator to farm on any chain without moving funds.
            </li>
            <li>Market NFTs seamlessly on any chain.</li>
          </ul>
          <h2>Sygma Architecture</h2>
          <p>
            Sygma will employ a{' '}
            <strong>multi-party computation (MPC) model</strong> that includes a
            number of trusted relayer nodes. In practice, this means off-chain
            signature aggregation and voting based on the{' '}
            <a
              href='https://www.unboundsecurity.com/blog/threshold-signature-schemes/#:~:text=In%20a%20nutshell%2C%20a%20threshold,secret%20sharing%20of%20the%20key.'
              rel='noopener noreferrer'
              target='_blank'
              className='link'>
              Threshold Signature Cryptographic Algorithm.
            </a>
          </p>
          <h3 className='callout'>
            Using this approach has many benefits, primarily: better security,
            low latency, and a flexible fee structure that keeps user costs low.
          </h3>
          <p>
            Under this model, relayer nodes will be run by reputable companies
            and projects from across the web3 space. The distribution of power
            allows us to spread responsibility and mitigate the chance that any
            relayer misbehaves.
          </p>
          <h2>The way forward: invisible bridges</h2>
          <p>
            Ultimately, to attract more mainstream users, cross-chain UX needs
            to improve. A key part of this is removing complexity from the
            equation.
          </p>
          <p>
            In this sense, Sygma will empower builders to create streamlined
            experiences where users are not confined to one ecosystem. By
            enabling elaborate cross-chain functionality and putting most of the
            steps under the hood, Sygma will enable smooth, web2-like user
            experiences.
          </p>
          <p>
            The bottom line: Sygma makes it easy for developers to add
            interoperability to their dApp or protocol with minimal overhead.
            Rather than taking the time and energy to host your own bridge,
            Sygma will develop and maintain the infrastructure while providing
            application-specific SDKs, support, documentation, and a dedicated
            pilot program.
          </p>
          <h2>Sygma Pilot Program</h2>
          <p>
            The pilot program aims to work directly with teams on cross-chain
            use cases and provide support as you implement your vision.
          </p>
          <p>
            If you’re interested in joining, please fill out{' '}
            <a
              href='https://forms.gle/sKwvA8QQGfeDvhkj9'
              target='_blank'
              rel='noopener noreferrer'
              className='link'>
              this short form.
            </a>
          </p>
          <h2>Sygma Launch</h2>
          <h3>Closed Beta</h3>
          <p>
            Initially, Sygma will be deployed on selected networks and will be
            available to dApps participating in our pilot program.
          </p>
          <h3>Public Launch</h3>
          <p>
            After initial feedback and fine-tuning, we will open Sygma and its
            accompanying SDK to all dApp developers. The relayer set will be
            expanded to include new partners.
          </p>
          <p>If you have any questions, please drop by our Discord.</p>
        </div>
      </div>
    </article>
  );
};
