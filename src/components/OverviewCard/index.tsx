import React from 'react';

interface Paragraph {
  header: string;
  desc: string;
}

type CardData = {
  text: Paragraph[];
  img: string;
  category: string;
};

const OverviewCard = ({ img, text, category }: CardData) => {
  return (
    <div className='lg:my-1 mx-auto max-w-7xl px-6 lg:px-8 bg-gray-900 py-5 rounded-3xl'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-3 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='relative overflow-hidden px-2 pb-9 pt-80 shadow-2xl sm:px-12 lg:max-w-xl lg:px-2 lg:pb-8 xl:px-10 xl:pb-10'>
            <img
              className='absolute bottom-0 inset-0 h-full w-full object-contain object-top brightness-120'
              src={img}
              alt={category}
            />
          </div>
          <div>
            <p className='text-base font-medium leading-7 text-primary-100'>
              {category}
            </p>
            {text.map((t) => (
              <div className='lg:max-w-lg' key={t.header}>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
                  {t.header}
                </h1>
                <div className='max-w-xl my-4'>
                  <p className='leading-6 text-gray-400'>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
