import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import FlyoutMenuItem from '@/components/FlyoutMenuItem';
import {
  navbarProductOptions,
  navbarDeveloperOptions,
  navbarDiscoverOptions,
  navbarProductCTA,
  navbarDeveloperCTA,
} from "@/data/navbar";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="flex lg:flex-1">
          <video className="h-auto w-[90px]" autoPlay loop muted>
            <source src="brand.mp4" type="video/mp4" />
          </video>
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* navbar  */}
        <div className="hidden lg:flex lg:gap-x-12">
          <FlyoutMenuItem
            name="Developers"
            options={navbarDeveloperOptions}
            callsToAction={navbarDeveloperCTA}
          />
          <FlyoutMenuItem
            name="Product"
            options={navbarProductOptions}
            callsToAction={navbarProductCTA}
          />
          <FlyoutMenuItem name="Discover" options={navbarDiscoverOptions} />
        </div>{" "}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sygma</span>
              <img className="h-8 w-auto" src="orange-on-gray.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-500/10">
              <div className="space-y-8 py-6 lg:space-y-2">
                <FlyoutMenuItem
                  name="Product"
                  options={navbarProductOptions}
                  callsToAction={navbarProductCTA}
                />
                <FlyoutMenuItem
                  name="Developers"
                  options={navbarDeveloperOptions}
                  callsToAction={navbarDeveloperCTA}
                />
                <FlyoutMenuItem
                  name="Discover"
                  options={navbarDiscoverOptions}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
