import Pill from '@/components/Pill';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { stylesWithCssVar } from '@/utils/useCssVar';

type Props = {};

const words = [
  {
    title: 'Governance',
    useCase: 'treasury adminstration',
  },
  {
    title: 'DEXs',
    useCase: 'swaps',
  },
  {
    title: 'Algorithmic stablecoins',
    useCase: 'liquidity management',
  },
  {
    title: 'NFT marketplaces',
    useCase: 'NFT utility',
  },
  {
    title: 'Money markets',
    useCase: 'debt positions',
  },
  {
    title: 'New primitives',
    useCase: 'experimental applications',
  },
];
const SlidingWords = (props: Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const fadeOut = useTransform(scrollYProgress, [1, 0.2, 0], [1, 1, 0]);

  // set the title based on the word selected
  const [text, setText] = useState('your app');

  const animateCurrentWord = (index: number) => {
    setText(words[index].useCase);
  };

  const resetWord = () => {
    setText('your app');
  };

  return (
    <motion.div
      ref={targetRef}
      className="relative flex flex-col content-center justify-center bg-gradient-to-r from-gray-100 from-0% via-gray-200 via-50% to-[#f1a981] to-100% py-24 sm:py-24"
    >
      <motion.h1
        style={{ opacity: fadeOut }}
        className="pb-10 text-center text-4xl font-medium text-black z-40"
      >
        Take <span className="text-primary-100">{text}</span> cross-chain.
      </motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center">
        {words.map((word, index) => (
          <Pill
            onMouseEnter={() => animateCurrentWord(index)}
            onMouseLeave={() => resetWord()}
            key={index}
          >
            {word.title}
          </Pill>
        ))}
      </div>

    </motion.div>
  );
};

export default SlidingWords;
