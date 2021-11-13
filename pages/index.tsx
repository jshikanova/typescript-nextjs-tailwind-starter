import React from 'react';
import Link from 'next/link';

const IndexPage = () => (
  <div className="px-2 py-1">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
