import React, { useState } from 'react'
import classNames from 'classnames'
import './index.scss';


const tabContent = [
  {
    id: "0",
    title: "Good-bye, silos. Hello, maximal interoperability.",
    imgUrl: "/place.png",
    caption: "If you've deployed an dApp or protocol to multiple networks, Sygma's cross-domain communication layer enables you to make them interoperable. 👈"
  },
  {
    id: "1",
    imgUrl: "/place.png",
    title: "Enliven community presence on multiple chains.",
    caption: "Provisioning infrastructure for cross-chain voting is messy and high-maintenance. With Sygma, you can create a way for users to vote on proposals on their preferred networks.👈"
  },
  {
    id: "2",
    imgUrl: "/place.png",
    title: "Take your NFTs cross-chain and cross-rollup.",
    caption: "Lower the barrier to access for your NFT projects. Sygma lets you leverage the benefits of other domains to make minting and moving NFTs breezier.👈"
  },
]


const tabs = [
  {
    id: "0",
    name: 'Generic Message Passing Primitive',
  },
  {
    id: "1",
    name: 'Cross-Chain Governance',
  },
  {
    id: "2",
    name: 'NFT Bridges',
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
          <h2>
            New opportunities everywhere.
          </h2>
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