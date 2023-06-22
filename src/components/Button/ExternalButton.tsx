import React from 'react';

type Props = {
  type: 'primary' | 'secondary' | 'link';
  children: any;
  href?: string;
  className?: string;
};

export default function ExternalButton({
  type,
  children,
  href,
  className,
}: Props) {
  let styles;
  if (type === 'primary') {
    styles = `transition-all rounded-xl bg-primary-100 px-3.5 py-2.5 text-md font-medium text-black shadow-sm hover:brightness-[90%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200`;
  } else if (type === 'secondary') {
    styles = `transition-all rounded-xl bg-gray-100 px-3.5 py-2.5 text-md font-medium text-black shadow-sm hover:bg-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200`;
  } else {
    styles = `transition-all text-md font-medium leading-6 hover:text-primary-100 `;
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`${className} ${styles}`}>
      {children}
    </a>
  );
}
