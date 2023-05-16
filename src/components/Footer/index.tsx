const navigation = {
  developers: [
    { name: 'Docs', href: 'https://docs.buildwithsygma.com/' },
    { name: "Builder's program", href: '#' },
    {
      name: 'Github',
      href: 'https://docs.buildwithsygma.com/github-repositoriess',
    },
  ],
  community: [
    { name: 'Blog', href: '#' },
    { name: 'Discord', href: 'https://discord.gg/Qdf6GyNB5J' },
    { name: 'Twitter', href: 'https://twitter.com/buildwithsygma' },
  ],
  resources: [
    { name: 'Press Kit', href: '' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  const linkStyle = `text-md leading-6 text-gray-200 transition-all hover:text-primary-100`;
  return (
    <footer className='bg-gray-900' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='flex space-x-2 content-center justify-flex-start'>
            <img className='h-12' src='/orange-on-gray.png' alt='Sygma' />
            <h2 className='text-lg text-primary-100 font-semibold leading-6'>
              The interoperability protocol for cross-chain builders.
            </h2>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-md font-semibold leading-6 text-white'>
                  Developers
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.developers.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={linkStyle}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-md font-semibold leading-6 text-white'>
                  Community
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.community.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={linkStyle}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-md font-semibold leading-6 text-white'>
                  Resources
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={linkStyle}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
