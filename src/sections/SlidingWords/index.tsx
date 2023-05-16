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
  //instead of this one scroll based, let's just have a plain marquee.

  const fadeOut = useTransform(scrollYProgress, [1, 0.2, 0], [1, 1, 0]);

  // record the index of the word selected
  const [currentIndex, setCurrentIndex] = useState(0);
  // set the title based on the word selected
  const [text, setText] = useState('swaps');

  const animateCurrentWord = (word: any) => {
    setCurrentIndex(word);
    setText(words[currentIndex].useCase);
  };

  return (
    <div
      ref={targetRef}
      className='bg-gray-900 flex py-24 sm:py-32 flex-col justify-center content-center relative'>
      <motion.h1
        style={{ opacity: fadeOut }}
        className='text-center text-4xl pb-10 font-medium text-warm-white'>
        Take <span className='text-primary-100'>{text}</span> cross-chain.
      </motion.h1>
      <motion.div
        style={{ opacity: fadeOut }}
        className='grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center'>
        {words.map((word, index) => (
          <Pill onMouseEnter={() => animateCurrentWord(index)} key={index}>
            {word.title}
          </Pill>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingWords;
