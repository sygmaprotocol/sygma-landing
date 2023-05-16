import React from 'react';

type Props = {
  type: 'primary' | 'secondary' | 'link';
  children: any;
  onClick?: () => void;
  className?: string;
};

export default function InternalButton({
  type,
  children,
  onClick,
  className,
}: Props) {
  let styles;
  if (type === 'primary') {
    styles = `rounded-xl bg-primary-100 px-3.5 py-2.5 text-md font-medium text-black shadow-sm hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200`;
  } else if (type === 'secondary') {
    styles = `rounded-xl bg-gray-100 px-3.5 py-2.5 text-md font-medium text-black shadow-sm hover:bg-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200`;
  } else {
    styles = `text-md font-medium leading-6 hover:text-primary-100 `;
  }

  return (
    <button onClick={onClick} className={`${className} ${styles}`}>
      {children}
    </button>
  );
}
