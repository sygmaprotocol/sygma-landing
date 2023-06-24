import ExternalButton from '@/components/Button/ExternalButton';
import Navbar from '@/components/Navbar';
import { useSpring } from 'framer-motion';

export default function SolutionsHero() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-32">
          <div className="z-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              Integrate, Customize, Interop.
            </h1>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center my-8">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-primary-100">
              Sygma offers solution support for protocols wanting to go cross-chain.
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
