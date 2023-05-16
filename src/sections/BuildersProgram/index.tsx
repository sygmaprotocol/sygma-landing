import ExternalButton from '@/components/Button/ExternalButton';

export default function BuildersProgram() {
  return (
    <div className='bg-white py-24 sm:py-32' id='#program'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col'>
            <p className='mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>
              The builder's program
            </p>
            <p className='my-6 text-lg leading-6 text-gray-600'>
              Our SDK is an abstraction layer on top of the Sygma protocol to
              enable you to easily manage the flow of data and value across
              networks.
            </p>
            <div>
              <ExternalButton className='w-auto' type='secondary' href='#'>
                Apply
              </ExternalButton>
            </div>
          </div>
          <div className='col-span-1 grid grid-cols-1'>
            <img className='object-cover' src='/test.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
