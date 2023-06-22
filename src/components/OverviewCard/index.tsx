import React from 'react';

interface Paragraph {
  header: string;
  desc: string;
}

type CardData = {
  text: Paragraph[];
  img: string;
  bgColor?: string;
  category: string;
  isDarkMode?: boolean;
};

const OverviewCard = ({
  img,
  text,
  category,
  bgColor = "bg-gray-200",
  isDarkMode = false,
}: CardData) => {
  const darkModeHeading = `mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl`;
  const darkModeText = `text-gray-400`;

  const lightModeHeading = `mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`;
  return (
    <div
      className={`w-fullbg-transparent mx-auto mt-[4rem] h-auto py-24 lg:my-3 lg:mt-0`}
    >
      <div className="mx-auto grid grid-cols-1 items-center sm:gap-y-24 md:gap-x-3  md:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="relative overflow-hidden bg-transparent px-2 pb-9 sm:px-12 lg:max-w-xl lg:pb-8 xl:px-10 xl:pb-10">
          <img
            className="brightness-120 absolute inset-0 bottom-0 h-full w-full bg-transparent object-contain object-center"
            src={img}
            alt={category}
          />
        </div>
        <div className={`${bgColor} rounded-3xl py-36 lg:px-8`}>
          <p className="text-base font-medium leading-7 text-primary-100">
            {category}
          </p>
          {text.map((t) => (
            <div className="lg:max-w-lg" key={t.header}>
              <h1
                className={
                  isDarkMode ? `${darkModeHeading}` : `${lightModeHeading}`
                }
              >
                {t.header}
              </h1>
              <div className="my-4 max-w-xl">
                <p className={isDarkMode ? `${darkModeText}` : `text-gray-700`}>
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
