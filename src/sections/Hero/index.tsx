import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ExternalButton from '@/components/Button/ExternalButton';
import { useSpring } from 'framer-motion';
import Link from 'next/link';

const navigation = [
  { id: 1, name: 'Protocol history', href: '#history' },
  { id: 2, name: 'Product Overview', href: '#overview' },
  { id: 3, name: 'Integrations', href: '#integrations' },
  { id: 4, name: "Builder's Program", href: '#program' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const spring = useSpring(0, { damping: 300, stiffness: 200 });

  const handleClickScroll = (section: string) => {
    if (section !== null) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='bg-black'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <video className='w-[100px] h-auto' autoPlay loop muted>
              <source src='brand.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-100'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          {/* navbar  */}
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClickScroll(item.href)}
                className='transition-all text-sm font-semibold leading-6 text-gray-100 hover:text-primary-200'>
                {item.name}
              </button>
            ))}
          </div>{' '}
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-primary-100'>
              Contact <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Sygma</span>
                <img className='h-8 w-auto' src='orange-on-gray.png' alt='' />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-primary-200'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-100 hover:bg-gray-800'>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-3xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='transition-all relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-primary-100 hover:ring-primary-200 hover:text-gray-400'>
              Sygma is now live on mainnet.{' '}
              <a href='#' className='font-semibold text-primary-200'>
                <span className='absolute inset-0' aria-hidden='true' />
                Read more <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl'>
              Fast, secure, and reliable cross-chain communication
            </h1>
            <p className='mt-6 text-xl leading-8 text-gray-400'>
              Provide a network-agnostic user experience with seamless
              connectivity across EVM, Substrate, and beyond.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <ExternalButton href='#' type='primary'>
                Start Building
              </ExternalButton>
              <ExternalButton href='#' type='link'>
                Join incentive program <span aria-hidden='true'>&rarr;</span>
              </ExternalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
