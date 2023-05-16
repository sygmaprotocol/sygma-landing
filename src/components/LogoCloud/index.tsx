import React from 'react';

type Props = {};

const logos = [
  {
    name: 'Phala',
    imgUrl: 'phala',
  },
  {
    name: 'Astar',
    imgUrl: 'astar',
  },
  {
    name: 'Bware Labs',
    imgUrl: 'bware',
  },
  {
    name: 'Kalos',
    imgUrl: 'kalos',
  },
  {
    name: 'Least Authority',
    imgUrl: 'leastauthority',
  },
];

const LogoCloud = (props: Props) => {
  return (
    <div className='grid grid-cols-2 gap-0.5 text-center sm:grid-cols-3 lg:grid-cols-5 py-5 bg-white w-full'>
      {logos.map((logo) => (
        <div className='self-center justify-self-center px-3' key={logo.name}>
          <img
            className='max-w-[120px]'
            src={`/partners/${logo.imgUrl}.png`}
            alt={logo.name}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoCloud;
