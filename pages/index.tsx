import React from 'react';
import Link from 'next/link';

const IndexPage = () => (
  <div className="container py-5">
    <div className="text-center">
      <h1 className="title600 mb-3">
        Hello Next.js{' '}
        <span className="inline-block" style={{ transform: 'scaleX(-1)' }}>
          👋
        </span>
      </h1>
      <p className="title100">
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  </div>
);

export default IndexPage;
