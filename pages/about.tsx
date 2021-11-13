import React from 'react';
import Link from 'next/link';

const AboutPage = () => (
  <div className="px-2 py-1">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);

export default AboutPage;
