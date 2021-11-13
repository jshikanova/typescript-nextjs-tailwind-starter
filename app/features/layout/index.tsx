import React, { ReactNode } from 'react';
import Link from 'next/link';

export const Layout = ({ children }: { children?: ReactNode }) => (
  <div>
    <header className="px-2 py-1 bg-powder-blue">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer className="px-2 py-1 bg-onyx text-cultured">
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);
