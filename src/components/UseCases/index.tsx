import React, { useState } from 'react'
import classNames from 'classnames'
import './index.scss';


const tabContent = [
  {
    id: "0",
    title: "Enliven community presence on multiple chains.",
    imgUrl: "/place.png",
    caption: "Provisioning infrastructure for cross-chain voting is messy and high-maintenance. With ChainBridge, you can create a way for users to vote on proposals on their preferred networks."
  },
  {
    id: "1",
    imgUrl: "/place.png",
    title: "Low slippage while staying nimble.",
    caption: "Provisioning infrastructure for yield-aggregation is messy and high-maintenance. With ChainBridge, you can create a way for users to vote on proposals on their preferred networks."
  },
  {
    id: "2",
    imgUrl: "/place.png",
    title: "Scale DAO Operations",
    caption: "Provisioning infrastructure for yield-aggregation is messy and high-maintenance. With ChainBridge, you can create a way for users to vote on proposals on their preferred networks."
  },
]


const tabs = [
  {
    id: "0",
    name: 'Cross-Chain Governance',
  },
  {
    id: "1",
    name: 'Yield Aggregation',
  },
  {
    id: "2",
    name: 'Treasury Infrastructure',
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