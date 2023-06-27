import { WrenchIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import { currentFeatures, futureFeatures } from "@/data/features";
import { motion } from "framer-motion";
import {
  fadeInVariant,
  parentVariant,
  childVariants,
} from "@/styles/animations";

export default function CoreFeatures() {
  return (
    <div className="bg-white py-24 lg:py-32">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeInVariant}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-medium leading-7 text-primary-100">
              Core Features
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Flexible and extensible
            </p>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Sygma allows developers to extend their applications across
              ecosystems and explore new use cases with a versatile, modular
              protocol.
            </p>
          </div>
          <div className="justify-items-end">
            <motion.dl
              variants={parentVariant}
              initial="offscreen"
              whileInView="onscreen"
              className="col-span-1 grid grid-cols-1 gap-x-8 gap-y-7 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mt-10 lg:gap-x-0 lg:gap-y-10"
            >
              {currentFeatures.map((feature) => (
                <motion.div
                  variants={childVariants}
                  key={feature.title}
                  className="relative pl-7"
                >
                  <dt className="font-semibold text-gray-900">
                    {feature.status === "Live on mainnet" ? (
                      <CheckCircleIcon
                        className="absolute left-0 top-1 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <WrenchIcon
                        className="absolute left-0 top-1 h-5 w-5 text-gray-700"
                        aria-hidden="true"
                      />
                    )}
                    {feature.title}
                  </dt>
                  <dd className="mt-2 w-[150px] rounded-full bg-slate-100 px-4 py-1">
                    {feature.status}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
