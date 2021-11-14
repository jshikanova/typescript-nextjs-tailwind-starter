import { Zap } from 'react-feather';
import Link from 'next/link';

import { NavigationLink } from '@utils';

export const Header = ({ links }: { links: NavigationLink[] }) => {
  return (
    <header className="sticky py-1 bg-cultured">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <a>
              <Zap />
            </a>
          </Link>
        </div>
        <nav>
          {links.map(({ path, title, isOuter = false }) => {
            return isOuter ? (
              <a key={path} href={path} className="pl-2">
                {title}
              </a>
            ) : (
              <Link key={path} href={path}>
                <a className="pl-2">{title}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
