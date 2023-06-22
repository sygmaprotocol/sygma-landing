import ExternalButton from '@/components/Button/ExternalButton';
import Navbar from '@/components/Navbar';
import { useSpring } from 'framer-motion';

export default function Hero() {
  return (
    <div className="bg-black">
      <Navbar />
      {/* Hero Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-primary-100 transition-all hover:text-gray-400 hover:ring-primary-200">
              Sygma is now LIVE on mainnet.{" "}
            </div>
          </div>
          <div className="z-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              Fast, secure, and reliable cross-chain communication
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-400">
              Provide an any-to-any user experience with seamless connectivity
              across EVM, Substrate, and beyond.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ExternalButton href="/developers" type="primary">
                Start Building
              </ExternalButton>
              <ExternalButton href="/consulting" type="link">
                Solutions <span aria-hidden="true">→</span>
              </ExternalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
