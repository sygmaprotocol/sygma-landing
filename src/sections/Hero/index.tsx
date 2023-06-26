
import ExternalButton from '@/components/Button/ExternalButton';
import InternalButton from '@/components/Button/InternalButton';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText('npm install @buildwithsygma/sygma-sdk-core')
    setIsCopied(true);
    setTimeout(() => {setIsCopied(false)}, 1500);
  }

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
              Seamlessly enabling users to harness the power of multiple blockchains through the ultimate SDK.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <ExternalButton href="https://docs.buildwithsygma.com/sdk/introduction" type="primary">
                Start Building
              </ExternalButton>
              <InternalButton onClick={() => onCopy()} type="frosted">
              {isCopied ? 'Copied!' : 'npm install @buildwithsygma/sygma-sdk-core'} 
            </InternalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
