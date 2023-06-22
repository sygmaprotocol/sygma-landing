import React from "react";
import Man from "@/assets/men.svg";
import Flower from "@/assets/flower.svg";
import Astro from "@/assets/astro.svg";
import { motion } from "framer-motion";
import {
  parentVariant,
  fadeInVariant,
  childVariants,
} from "@/styles/animations";

type Props = {};

const DevJourney = (props: Props) => {
  const cardStyles = `relative border-2 border-gray-200 min-h-[250px] py-5 px-3 flex flex-col gap-x-2 rounded-xl`;
  const cardHeadingStyles = ` text-2xl text-gray-600 max-w-[80%]`;
  const cardHeadingStylesDarkMode = ` text-2xl text-gray-100 max-w-[80%]`;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="isolate bg-white px-6 py-6 sm:py-32 lg:px-8"
    >
      <motion.div
        variants={fadeInVariant}
        className="mx-auto max-w-2xl sm:text-center"
      >
        <h3 className="mx-auto max-w-[80%] text-3xl font-medium text-black ">
          How to start building cross-chain
        </h3>
      </motion.div>
      <motion.div
        variants={parentVariant}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto grid w-full grid-cols-1 justify-center lg:grid-cols-3 lg:items-center lg:space-x-4"
      >
        <motion.div variants={childVariants} className={cardStyles}>
          <h3 className={cardHeadingStyles}>1: Download and import the SDK</h3>
          <Man className="absolute bottom-3 right-0 w-[10rem]" />
        </motion.div>
        <motion.div
          variants={childVariants}
          className={`${cardStyles} bg-gray-900`}
        >
          <h3 className={cardHeadingStylesDarkMode}>
            2. Grab funds from a faucet to test cross-chain calls.
          </h3>
          <Astro className="absolute bottom-5 right-0 w-[8rem] " />
        </motion.div>
        <motion.div
          variants={childVariants}
          className={`${cardStyles} bg-primary-100`}
        >
          <h3 className={cardHeadingStylesDarkMode}>
            3. Start building for your use case
          </h3>
          <Flower className="absolute bottom-3 right-3 w-[6rem] " />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default DevJourney;
