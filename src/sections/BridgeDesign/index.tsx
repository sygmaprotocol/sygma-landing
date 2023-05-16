import { designFeatures } from '@/data/features';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

export default function BridgeDesign() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div>
            <h2 className='text-base font-medium leading-7 text-primary-100'>
              Bridge Design
            </h2>
            <p className='mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>
              Fast and always available.
            </p>
            <p className='mt-4 text-base leading-7 text-gray-600'>
              Sygma uses external verification of relayers to ensure uptime, low
              protocol fees, and fast transaction and settlement times. 
            </p>
          </div>
          <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
            {designFeatures.map((property) => (
              <Disclosure as='div' key={property.title} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-900'>
                        <span className='flex flex-col items-start'>
                          <h2 className='text-base leading-7'>
                            {property.title}
                          </h2>
                          <p className='text-base text-gray-500'>
                            {property.desc}
                          </p>
                        </span>
                        <span className='ml-6 flex h-7 items-center'>
                          <p className='px-3 py-1 bg-slate-100 rounded-full text-base leading-7 text-gray-600 mr-3'>
                            {property.badgeText}
                          </p>
                          {open ? (
                            <MinusSmallIcon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
                          ) : (
                            <PlusSmallIcon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      <p className='text-gray-900'>Extended answers go here</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
