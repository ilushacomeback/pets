import clsx from 'clsx';
import Link from 'next/link';

interface NavLinkProps {
  path: string;
  name: string;
  active: boolean;
}

export const NavLink = ({ path, name, active }: NavLinkProps) => {
  return (
    <li className={clsx('rounded hover:bg-lime-200 transition duration-500',{ 'bg-lime-400': active })}>
      <Link href={path} className='block px-8 py-5'>{name}</Link>
    </li>
  );
};
