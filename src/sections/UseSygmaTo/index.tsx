import React from 'react';
import Man from '@/assets/man.svg';
import { motion } from 'framer-motion';
import {
  parentVariant,
  fadeInVariant,
  childVariants,
} from '@/styles/animations';

type Props = {};

const UseSygmaTo = (props: Props) => {
  const cardStyles = `relative min-h-[250px] mt-4 py-5 px-5 flex flex-col gap-x-2 border-gray-200 border-2 rounded-md'`;
  const cardHeadingStyles = `tracking-tight text-2xl text-gray-600 max-w-[80%]`;
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false, amount: 0.5 }}
      className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <motion.div
        variants={fadeInVariant}
        className='mx-auto max-w-2xl sm:text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Use Sygma to...
        </h2>
      </motion.div>
      <motion.div
        variants={parentVariant}
        initial='offscreen'
        whileInView='onscreen'
        transition={{ duration: 0.8, delay: 0.1 }}
        className='flex flex-col lg:flex-row justify-center lg:items-center mx-auto mt-5 w-full lg:content-center lg:space-x-4'>
        <motion.div variants={childVariants} className={cardStyles}>
          <h3 className={cardHeadingStyles}>Reduce fees for your userbase.</h3>
          <Man className='absolute bottom-5 right-1 ' />
        </motion.div>
        <motion.div variants={childVariants} className={cardStyles}>
          <h3 className={cardHeadingStyles}>
            Transfer data and value cross-chain.
          </h3>
          <Man className='absolute bottom-5 right-1 ' />
        </motion.div>
        <motion.div variants={childVariants} className={cardStyles}>
          <h3 className={cardHeadingStyles}>
            Expand your community across new networks.
          </h3>
          <Man className='absolute bottom-5 right-1 ' />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default UseSygmaTo;
