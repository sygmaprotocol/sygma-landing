import React from 'react';

type Props = {
  children: string;
  onMouseEnter?: () => any;
  onClick?: () => any;
};

const Pill = ({ children, onMouseEnter }: Props) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className='my-2 lg:m-0 transition-all flex content-middle justify-center border-2 border-gray-700 px-4 py-3 rounded-full mx-1 hover:scale-105 hover:border-primary-100 '>
      <h2 className='flex text-xl text-warm-white '>{children}</h2>
    </div>
  );
};

export default Pill;
