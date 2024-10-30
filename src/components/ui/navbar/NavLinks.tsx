'use client'

import { NavLink } from './NavLink';
import { LinkType } from '@/interfaces/interfaces';
import { usePathname } from 'next/navigation';

export const NavLinks = ({ links }: { links: LinkType[] }) => {
  const pathname = usePathname();
  return (
    <ul className='flex justify-end'>
      {links.map((link) => {
        const { path, name } = link;
        const isActive = pathname === path;
        return <NavLink path={path} name={name} active={isActive} key={path} />;
      })}
    </ul>
  );
};
