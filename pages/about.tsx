import React from 'react';
import Link from 'next/link';

const AboutPage = () => (
  <div className="container py-5">
    <h1 className="title600 mb-3">About</h1>
    <p className="text200 mb-4">This is the about page</p>
    <p className="title100">
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);

export default AboutPage;
