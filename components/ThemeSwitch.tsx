import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, Fragment, useRef } from "react";
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import { useTheme } from "next-themes";

const themes = [
    {name: "dark"},
    //{name: "light"},
    {name: "dimmed"},
    //{name: "gold"},
    {name: "discord"},
    {name: "default"}
]

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="p-8 flex justify-between items-center font-bold text-xl text-th-primary-dark">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                 <FontAwesomeIcon icon={["fas", "palette"]} className="text-white" />
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-headercolor divide-y divide-secondary_two rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-def_sample text-white' : 'bg-def_sample3 text-white'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        onClick={() => setTheme('default') }
                      >
                        <FontAwesomeIcon icon={["fas", "circle"]} className="text-def_sample2" />
                        &nbsp;Default Theme
                      </button>
                    )}
                  </Menu.Item>
                  </div>
                  <div className="px-1 py-1 text-">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-dis_sample3 text-white' : ' bg-dis_sample text-white'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        onClick={() => setTheme('discord') }
                      >
                        <FontAwesomeIcon icon={["fas", "circle"]} className="text-dis_sample2" />
                        &nbsp;Discord Theme
                      </button>
                    )}
                  </Menu.Item> 
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-dim_sample text-white' : ' bg-dim_sample3 text-white'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        onClick={() => setTheme('dimmed') }
                      >
                        <FontAwesomeIcon icon={["fas", "circle"]} className="text-dim_sample2" />
                        &nbsp;Dimmed Theme
                      </button>
                    )}
                  </Menu.Item>
                  </div>
                  <div className="px-1 py-1 text-headercolor">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-drk_sample text-white' : ' bg-drk_sample3 text-white'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        onClick={() => setTheme('dark') }
                      >
                        <FontAwesomeIcon icon={["fas", "circle"]} className="text-drk_sample2" />
                        &nbsp;Dark Theme
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      )
  }

export default ThemeSwitch;
