import { Disclosure as DisclosureRaw, Menu as MenuRaw } from '@headlessui/react';
import { ExternalLinkIcon as ExternalLinkIconRaw, MenuIcon as MenuIconRaw, XIcon as XIconRaw } from '@heroicons/react/outline';
import ImageRaw from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

const Disclosure: any = DisclosureRaw;
const Menu: any = MenuRaw;
const ExternalLinkIcon: any = ExternalLinkIconRaw;
const MenuIcon: any = MenuIconRaw;
const XIcon: any = XIconRaw;
const Image: any = ImageRaw;

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const mainMenu = [
  {
    title: 'Downloads',
    path: '/downloads'
  }
];

function Nav() {
  const router = useRouter();

  return (
    <>
  <Disclosure as="nav" className="bg-black shadow-lg fixed top-0 left-0 w-full z-50 border-b border-neutral-900">
        {({ open }) => (
          <>
            <div className=" mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center gap-3 px-2 lg:px-0">
                  {/* Logo and Brand */}
                  <Link href="/">
                    <div className="flex items-center gap-2">
                      <Image alt="Dopelganga" src="/logo.svg" width={40} height={40} />
                      <span
                        className="ml-1 text-lg font-extrabold tracking-tight text-white select-none"
                        style={{ letterSpacing: '-0.02em', color: '#fff' }}
                      >
                        Dopelganga
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Navigation */}
                <div className="hidden justify-center gap-2 lg:flex">
                  {mainMenu.map((item, index) => {
                    // Only Downloads tab is present
                    return (
                      <Link key={index} href={item.path}>
                        <button
                          className={classNames(
                            'flex gap-1 px-6 py-2 text-sm font-semibold tracking-wide',
                            'text-gray-400 border border-white border-opacity-30 bg-white bg-opacity-10',
                            'rounded-full transition hover:bg-opacity-20',
                            router.pathname === item.path && 'ring-2 ring-white ring-opacity-40'
                          )}
                          style={{ boxShadow: '0 2px 12px 0 rgba(255,255,255,0.04)' }}
                        >
                          {item.title}
                        </button>
                      </Link>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex flex-row items-center gap-4 lg:hidden">
                  {/* Mobile menu button */}
                  <div className="flex">
                    <Disclosure.Button
                      className="inline-flex items-center
                justify-center rounded-md p-2 text-zinc-100 hover:bg-zinc-700
                hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {mainMenu.map((item, index) => (
                  <Link key={index} href={item.path}>
                    <button
                      className={classNames(
                        'flex gap-1 px-6 py-2 font-semibold tracking-wide',
                        'text-gray-400 border border-white border-opacity-30 bg-white bg-opacity-10',
                        'rounded-full transition hover:bg-opacity-20',
                        router.pathname === item.path && 'ring-2 ring-white ring-opacity-40'
                      )}
                      style={{ boxShadow: '0 2px 12px 0 rgba(255,255,255,0.04)' }}
                    >
                      {item.title}
                    </button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default memo(Nav);
