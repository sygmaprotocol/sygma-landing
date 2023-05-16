import {
  BugAntIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { fadeInVariant } from '@/styles/animations';

export default function Contact() {
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
          Contact sales
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </motion.div>
      <div className='flex flex-col lg:flex-row space-y-2 justify-center lg:items-center mx-auto mt-20 w-full lg:space-y-0'>
        <div className='flex gap-x-6 mx-5'>
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100'>
            <ChatBubbleLeftRightIcon
              className='h-6 w-6 text-white'
              aria-hidden='true'
            />
          </div>
          <div>
            <h3 className='text-base font-semibold leading-7 text-gray-900'>
              Integration support
            </h3>
            <p className='mt-2 leading-7 text-gray-600'>
              Hire Sygma to help you go cross-chain.
            </p>
            <p className='mt-4'>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-primary-100'>
                Contact us <span aria-hidden='true'>&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className='flex gap-x-6 mx-5'>
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100'>
            <BugAntIcon className='h-6 w-6 text-white' aria-hidden='true' />
          </div>
          <div>
            <h3 className='text-base font-semibold leading-7 text-gray-900'>
              Bug reports
            </h3>
            <p className='mt-2 leading-7 text-gray-600'>
              Report a bug or ask an engineering question.
            </p>
            <p className='mt-4'>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-primary-100'>
                Report a bug <span aria-hidden='true'>&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
