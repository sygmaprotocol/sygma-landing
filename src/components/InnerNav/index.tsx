import { motion, useTransform, useScroll } from 'framer-motion';
import { stylesWithCssVar } from '@/utils/useCssVar';
import { useRef } from 'react';
import { stickToTop } from '@/styles/animations';

const stats = [
  { id: 1, name: 'Protocol history' },
  { id: 2, name: 'Networks supported' },
  { id: 3, name: 'Features' },
  { id: 4, name: 'Bridge design' },
  { id: 5, name: 'Use cases' },
  { id: 6, name: 'Integrations' },
];

// make it sticky after scrolling past

//highlight current section
export default function InnerNav() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  const opacitySection = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // const scale = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.7]);

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}>
      <motion.div
        // ref={targetRef}
        variants={stickToTop}
        className='hidden lg:block bg-white py-2 sm:py-2'>
        <div className='mx-auto w-full px-6 lg:px-0 top-0'>
          <div className='mx-auto'>
            <dl className='mt-2 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-6'>
              {stats.map((stat) => (
                <div key={stat.id} className='flex flex-col bg-gray-400/5 p-8'>
                  <dt className='text-md font-semibold leading-6 text-gray-600'>
                    {stat.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
