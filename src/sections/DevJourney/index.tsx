import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  parentVariant,
  fadeInVariant,
  childVariants,
} from "@/styles/animations";
import InternalButton from "@/components/Button/InternalButton";
import ExternalButton from "@/components/Button/ExternalButton";

type Props = {};

const DevJourney = (props: Props) => {
  const cardStyles = `relative border-2 border-gray-100 min-h-[40vh] py-5 px-3 flex flex-col gap-x-2 rounded-xl bg-gray-100`;
  const cardHeadingStyles = `text-2xl text-gray-800 text-center`;

  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText('npm install @buildwithsygma/sygma-sdk-core')
    setIsCopied(true);
    setTimeout(() => {setIsCopied(false)}, 1500);
  }


  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="isolate bg-gray-900 px-6 py-6 sm:py-32 lg:px-8 shadow-2xl"
    >
      <motion.div
        variants={fadeInVariant}
        className="mx-auto max-w-2xl sm:text-center"
      >
        <h3 className="mx-auto max-w-[80%] text-4xl font-medium text-white ">
          How to start building with Sygma
        </h3>
          <div className="py-4 w-full flex content-center justify-center gap-x-2">
            <InternalButton onClick={() => onCopy()} type="primary">
              {isCopied ? 'Copied!' : 'yarn add @sygma-sdk'} 
            </InternalButton>
            <ExternalButton type="secondary">
              Github Repo
            </ExternalButton>
            </div>
      </motion.div>
      <motion.div
        variants={parentVariant}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto grid w-full grid-cols-1 justify-center  lg:grid-cols-3 lg:items-stretch lg:space-x-4"
      >
        <motion.div variants={childVariants} className={cardStyles}>
          <h3 className={cardHeadingStyles}>Step 1: Install SDK </h3>
          <img src="/Terminal.png" alt="" className="max-w-[100%] my-3 mx-auto" />
        </motion.div>
        <motion.div
          variants={childVariants}
          className={cardStyles}
        >
          <h3 className={cardHeadingStyles}>
            Step 2. Build on local or testnet
          </h3>
          <img src="/Terminal.png" alt="" className="max-w-[100%] my-3 mx-auto" />

        </motion.div>
        <motion.div
          variants={childVariants}
          className={cardStyles}
        >
          <h3 className={cardHeadingStyles}>
            Step 3. Send your first cross-chain call.
          </h3>
          <img src="/Terminal.png" alt="" className="max-w-[100%] my-3 mx-auto" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default DevJourney;
