import { link } from 'fs';
import { NavLinks } from './ui/navbar/NavLinks';
import { LinkType } from '@/interfaces/interfaces';

const links: LinkType[] = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Найти питомца',
    path: '/search',
  },
];

export const NavBar = () => {
  return (
    <header>
      <nav className="bg-lime-300">
        <NavLinks links={links} />
      </nav>
    </header>
  );
};
