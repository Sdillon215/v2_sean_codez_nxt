'use client';

import {
  Bars3Icon,
  WrenchIcon,
  UserIcon,
  PhoneIcon,
  XMarkIcon,
  HomeIcon,
  CodeBracketIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon
  },
  {
    name: 'About',
    href: '/about',
    icon: UserIcon,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: CodeBracketIcon,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  return (
    <>
      <div>
        <button
          onClick={toggleNav}
          className={clsx(
            'block',
            {
              'hidden': isOpen,
            },
          )}
        >
          {!isOpen ? <Bars3Icon className="w-10" /> : null}
        </button>

        {isOpen && (
          <div className="grid content-center place-items-center h-screen w-screen backdrop-blur gap-1 z-22">
            <button
              onClick={toggleNav}
            >
              <XMarkIcon className="isolate w-10 absolute top-0 right-0" />
            </button>
            {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleNav}
                  className={clsx(
                    'flex justify-between w-72 font-bold text-5xl rounded-lg opacity-50 hover:bg-sky-100 hover:text-black md:p-2 md:px-3',
                    {
                      'bg-sky-100 text-black': pathname === link.href,
                    },
                  )}
                >
                  <h4>{link.name}</h4>
                  <LinkIcon className="w-10" />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
