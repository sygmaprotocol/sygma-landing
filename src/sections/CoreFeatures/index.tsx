import { CheckIcon } from '@heroicons/react/20/solid';
import { coreFeatures } from '@/data/features';
import { motion } from 'framer-motion';
import {
  fadeInVariant,
  parentVariant,
  childVariants,
} from '@/styles/animations';

export default function CoreFeatures() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        variants={fadeInVariant}
        className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div>
            <h2 className='text-base font-medium leading-7 text-primary-100'>
              Core Features
            </h2>
            <p className='mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>
              Flexible and extensible
            </p>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              Sygma allows developers to extend their applications across
              ecosystems and explore new use cases with a versatile, modular
              protocol.
            </p>
          </div>
          <motion.dl
            variants={parentVariant}
            initial='offscreen'
            whileInView='onscreen'
            className='col-span-1 grid grid-cols-1 gap-x-8 gap-y-7 text-base leading-7 text-gray-600 lg:mt-10 sm:grid-cols-2 lg:gap-y-10 lg:gap-x-0'>
            {coreFeatures.map((feature) => (
              <motion.div
                variants={childVariants}
                key={feature.title}
                className='relative pl-7'>
                <dt className='font-semibold text-gray-900'>
                  <CheckIcon
                    className='absolute left-0 top-1 h-5 w-5 text-green-500'
                    aria-hidden='true'
                  />
                  {feature.title}
                </dt>
                <dd className='w-[150px] mt-2 bg-slate-100 rounded-full py-2 px-4'>
                  {feature.status}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </motion.div>
    </div>
  );
}
