import ExternalButton from '@/components/Button/ExternalButton';
import InternalButton from '@/components/Button/InternalButton';

export default function CTA() {
  return (
    <div
      className='relative isolate overflow-hidden bg-gray-900'
      id='#integrations'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Integrate with peace of mind.
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
            Our world-class engineering team provides integration support and
            consulting services for developers building on Sygma.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <ExternalButton type='primary' href='#'>
              Reach out
            </ExternalButton>
            <InternalButton type='secondary'>
              Start Building <span aria-hidden='true'>→</span>
            </InternalButton>
          </div>
        </div>
      </div>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
        aria-hidden='true'>
        <circle
          cx={512}
          cy={512}
          r={512}
          fill='url(#8d958450-c69f-4251-94bc-4e091a323369)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='8d958450-c69f-4251-94bc-4e091a323369'>
            <stop stopColor='#EE6732' />
            <stop offset={1} stopColor='#F37441' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
