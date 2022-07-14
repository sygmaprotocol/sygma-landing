import React, { useState } from 'react'
import classNames from 'classnames'
import './index.scss';


const tabContent = [
  {
    id: "0",
    title: "Boost app experience across networks.",
    imgUrl: "/Seamless.png",
    caption: "Show users you mean business by meeting them where they are. Grow engagement by providing a consistent UX and utilizing features specific to their preferred networks."
  },
  {
    id: "1",
    imgUrl: "/NFT.png",
    title: "Unleash the non-fungibles.",
    caption: "Lower the barrier to access for your NFT projects. Sygma lets you leverage the benefits of other domains to make minting and moving NFTs easier."
  },
  {
    id: "2",
    imgUrl: "/gov.png",
    title: "Enliven community presence on multiple networks.",
    caption: "Provisioning infrastructure for cross-chain voting is high-maintenance. Sygma’s interoperability layer lets users engage in DAOs or vote on proposals from the network of their choosing."
  },
  {
    id: "3",
    imgUrl: "/Token.png",
    title: "Unlock the silos of value.",
    caption: "Cross-chain token transfers are nothing new but are essential. Let Sygma take your dApp beyond standard transfers to the multi-chain world in a single setup."
  },
]


const tabs = [
  {
    id: "0",
    name: 'Seamless multi-chain apps',
  },
  {
    id: "1",
    name: 'NFT Bridging',
  },
  {
    id: "2",
    name: 'Cross-chain Governance',
  },
  {
    id: "3",
    name: 'Token and Liquidity transfers',
  },
]

interface TabProps {
  name: string;
  isActive: boolean;
  id: string;
  onClick?: any;
}

const Tab: React.FC<TabProps> = ({name, isActive, id, onClick}) => (
  <p key={id} id={id} onClick={onClick} className={classNames('tab', {'active-tab': isActive})}>
    {name}
  </p>
)

export const UseCases: React.FC = () => {

  const [activeTab, setActiveTab] = useState(0)

  const handleClick = (e:any) => {
    const index = parseInt(e.target.id, 0);
    if (index !== activeTab) {
      setActiveTab(index);
    }
  } 

  return (
    <article className='use-cases'>
      <div className='column'>
        <div className='use-cases--title'>
          <h1>
            Do what couldn’t be done before.
          </h1>
        </div>
        <div className='use-cases--tab-menu'>
          {tabs.map(({ id, name }) => (
            <Tab
              key={id}
              isActive={activeTab === parseInt(id)}
              name={name}
              id={id}
              onClick={handleClick} 
            />
          ))}
        </div>
        <div className='tab-content-container'>
          {tabContent.map(({ id, imgUrl, title, caption }) => (
            <div key={id} className={classNames('tab-content',activeTab === parseInt(id) ? 'content-selected' : 'content-unselected')}>
              <img src={imgUrl} alt="" />
              <div className='content-text'>
                <h4 className='content-title'>{title}</h4>
                <p className='content-caption'>{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}