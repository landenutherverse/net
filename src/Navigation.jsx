import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';
import logo from './assets/utherverse-digital-logo.svg';


const navigation = [
  {
    name: 'Company', children: [
      { name: 'About Us', href: '/about' },
      { name: 'Mission', href: '/mission' },
    ]
  },
  {
    name: 'Business', children: [
      { name: 'White Label Licenses', href: '/whitelabel' },
      { name: 'Virtual Business Licenses', href: '/virtual_business_licenses' },
      { name: 'Marketing and Advertising', href: '/marketing_and_advertisement' },
    ]
  },
  { name: 'Media', href: 'https://www.utherverse.io/press' },
  // { name: 'Investors', href: '/investors' },
  { name: 'Contact Us', href: 'mailto:business@utherverse.com' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-white drop-shadow-md font-nav mb-6 z-40 relative">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                    <img
                      className="h-10 w-auto"
                      src={logo}
                      alt="Utherverse Digital"
                    />
                  </a>
                </div>
                <div className="hidden md:block md:ml-auto">
                  { /* Desktop navigation list */}
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      if (item.children) {
                        { /* Render navigation item with children */ }
                        return (
                          <Menu as="div" className="ml-3 relative">
                            {({ open }) => (
                              <>
                                <div>
                                  <Menu.Button
                                    className={classNames(
                                      item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                                      'px-3 py-2 rounded-md text-sm font-medium flex items-center'
                                    )}
                                  >
                                    <span>{item.name}</span>
                                    <ChevronDownIcon
                                      className={classNames(
                                        open && 'rotate-180',
                                        'w-4 ml-2 text-blue-500'
                                      )}
                                    />
                                  </Menu.Button>
                                </div>
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {item.children.map((item) => {
                                    return (
                                      <Menu.Item>
                                        <a
                                          href={item.href}
                                          className={classNames('block px-4 py-2 text-sm text-gray-700')}
                                        >
                                          {item.name}
                                        </a>
                                      </Menu.Item>
                                    );
                                  })}
                                </Menu.Items>
                              </>
                            )}
                          </Menu>
                        );
                      } else {
                        { /* Render normal navigation item */ }
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        );
                      }
                    })}
                    { /* End desktop navigation items */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          { /* Mobile navigation */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                if (item.children) {
                  { /* Render navigation item with children */ }
                  return (
                    <>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-base font-medium flex items-center'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                              <ChevronDownIcon
                                className={classNames(
                                  open && 'rotate-180',
                                  'w-4 ml-2 text-blue-500'
                                )}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel>
                              {item.children.map((item) => {
                                return (
                                  <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                      item.current ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                                      'block pr-3 pl-8 py-2 rounded-md text-base font-medium'
                                    )}
                                  >
                                    {item.name}
                                  </Disclosure.Button>
                                );
                              })}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </>
                  );
                } else {
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )
                }
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}