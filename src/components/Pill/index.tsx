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
      className="content-middle mx-1 my-2 flex justify-center rounded-full border-2 border-gray-100 px-4 py-3 transition-all hover:border-primary-100 lg:m-0 "
    >
      <h2 className="flex text-center text-xl text-black">{children}</h2>
    </div>
  );
};

export default Pill;
