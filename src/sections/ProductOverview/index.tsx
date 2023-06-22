import OverviewCard from '@/components/OverviewCard';
import { stylesWithCssVar } from '@/utils/useCssVar';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { stickyVariant } from '@/styles/animations';

export default function ProductOverview() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });
  const slideOver1 = useTransform(scrollYProgress, [0, 0.3], ["-1%", "-2%"]);
  const slideOver2 = useTransform(scrollYProgress, [0.3, 0.8], ["-2%", "-8%"]);

  return (
    <div
      className="bg-white py-32 sm:py-32 lg:py-24"
      id="#overview"
      ref={targetRef}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        className="px-8"
        variants={stickyVariant}
      >
        <OverviewCard
          bgColor="bg-transparent"
          category="Sygma Protocol"
          text={[
            {
              header: "Secure any-to-any connection",
              desc: "Constantly extending, Sygma supports communication between 60+ EVM and Substrate-based blockchains.",
            },
          ]}
          img="/scroll/Rings/1.png"
        />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={stickyVariant}
        style={stylesWithCssVar({
          "--translateY": slideOver1,
          // need to be able to pass in top as a prop to sticky variant?
        })}
        className="-translate-y-[var(--translateY)]"
      >
        <OverviewCard
          // bgColor="bg-transparent"
          category="SDK"
          text={[
            {
              header: "Typescript SDK",
              desc: "Exposed methods so you can easily write cross-chain calls.",
            },
            {
              header: "Sygma UI + SygmaScan",
              desc: "Demo the cross-network flow and watch your cross-chain transactions.",
            },
          ]}
          img="/scroll/Circles/1.png"
        />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={stickyVariant}
        style={stylesWithCssVar({
          "--translateY": slideOver2,
        })}
        className="-translate-y-[var(--translateY)]"
      >
        <OverviewCard
          bgColor="bg-gray-900"
          isDarkMode
          category="Engineering services"
          text={[
            {
              header: "Get help integrating.",
              desc: "Our world-class engineering team provides integration support and consulting services for developers building on Sygma.",
            },
            {
              header: "More text",
              desc: "Our world-class engineering team provides integration support and consulting services for developers building on Sygma.",
            },
          ]}
          img="/overview/3.png"
        />
      </motion.div>
    </div>
  );
}
