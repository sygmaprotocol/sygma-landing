import React from 'react';

type Props = {
  children: string;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
};

const Pill = ({ children, onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className='my-2 lg:m-0 transition-all flex content-middle justify-center border-2 border-gray-100 px-4 py-3 rounded-full mx-1 hover:border-primary-100 '>
      <h2 className='flex text-xl text-black '>{children}</h2>
    </div>
  );
};

export default Pill;
