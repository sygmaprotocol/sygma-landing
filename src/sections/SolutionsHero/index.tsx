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
              Integrate, Customize,{" "}
              <span className="text-primary-100">Interop.</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-400">
              Sygma offers solution support for protocols wanting to go
              cross-chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
