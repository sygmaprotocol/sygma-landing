import { stylesWithCssVar } from '@/utils/useCssVar';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const MotionThrough = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });
  const textX = useTransform(scrollYProgress, [0, 0.7], ['0%', '-100%']);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );

  return (
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        '--scale': scale,
        '--opacity-border': opacityBorder,
      })}
      ref={targetRef}
      className='hidden mt-[10vh] lg:flex h-[500vh] items-start justify-start'>
      <div className='sticky left-1/2 top-1/2 min-h-[50rem] xl:min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-primary-100 before:opacity-[var(--opacity-border)]'>
        <motion.p
          aria-hidden
          style={{ x: textX, y: '-50%' }}
          className='whitespace-nowrap min-w-screen text-heading absolute left-[calc(-50vw+25rem)] top-1/2 text-[16rem]'>
          Send data. Send tokens.
        </motion.p>
        {/* 
        <span className='bg-background absolute left-[calc(50%*var(--scale)r+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] opacity-[var(--opacity-border)]' /> */}
        <span className='absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-primary-100 opacity-[var(--opacity-border)]' />
      </div>
    </motion.section>
  );
};
