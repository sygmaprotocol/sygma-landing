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
    <>
      <div className="bg-white py-5">
        <p className="text-center text-gray-400">Trusted by the ecosystem</p>
        <div className="grid w-full grid-cols-2 gap-0.5 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              className="self-center justify-self-center px-3"
              key={logo.name}
            >
              <img
                className="max-w-[120px]"
                src={`/partners/${logo.imgUrl}.png`}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoCloud;
