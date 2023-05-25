import ExternalButton from '@/components/Button/ExternalButton';

const stats = [
  { label: 'Founded', value: '2019' },
  { label: 'Peak (1M) volume', value: '$600M' },
  { label: '# of Audits', value: '3' },
];

export default function ProtocolHistory() {
  return (
    <div className='bg-gray-900 py-24 sm:py-32' id='#history'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-4'>
            <div className='relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-80 shadow-2xl sm:px-12 lg:max-w-xl lg:px-8 lg:pb-8 xl:px-10 xl:pb-10'>
              <img
                className='absolute bottom-0 inset-0 h-full w-full object-cover object-top brightness-105 contrast-125'
                src='/car.png'
                alt=''
              />
            </div>
          </div>
          <div>
            <div className='text-base leading-7 text-gray-700 lg:max-w-lg'>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
                Harness the power of multiple blockchains.
              </h1>
              <div className='max-w-xl'>
                <p className='mt-3 leading-6 text-gray-400'>
                  Built on pioneering bridge tech, Sygma is a community-focused
                  protocol that's decentralized, transparent, and pluralistic.
                  **PENDING**
                </p>
              </div>
            </div>
            <dl className='mt-6 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-6 sm:grid-cols-4'>
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className='text-sm font-medium leading-6 text-primary-100'>
                    {stat.label}
                  </dt>
                  <dd className='mt-2 text-3xl font-semibold leading-10 tracking-tight text-gray-200'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
