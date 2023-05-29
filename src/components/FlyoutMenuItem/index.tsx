import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { MenuOption, CTA } from "@/data/navbar";

type FlyoutMenuItemProps = {
  name: string;
  options: MenuOption[];
  callsToAction?: CTA[];
};

export default function FlyoutMenuItem({
  name,
  options,
  callsToAction,
}: FlyoutMenuItemProps) {
  return (
    <Popover className='relative'>
      <Popover.Button className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100'>
        <span>{name}</span>
        <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'>
        <Popover.Panel className='absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-2'>
          <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-gray-900 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5'>
            <div className='p-2'>
              {options.map((item) => (
                <div
                  key={item.name}
                  className='group relative flex gap-x-6 rounded-2xl p-4 hover:bg-gray-800'>
                  <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700'>
                    <item.icon
                      className='h-6 w-6 text-gray-400 group-hover:text-primary-100'
                      aria-hidden='true'
                    />
                  </div>
                  <div>
                    <a href={item.href} className='font-semibold text-gray-300'>
                      {item.name}
                      <span className='absolute inset-0' />
                    </a>
                    <p className='mt-0 text-gray-300'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='bg-gray-700'>
              {callsToAction &&
                callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='flex items-center justify-center gap-x-2.5 p-3  text-gray-200 hover:text-primary-100'>
                    <item.icon
                      className='h-5 w-5 flex-none text-primary-200 '
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
