import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { sampleUserData } from '@utils';

import { List } from '@ui';

type UsersPageProps = {
  items: User[];
};

const UsersPage = ({ items }: UsersPageProps) => (
  <div className="container py-5">
    <h1 className="title600 mb-3">Users List</h1>
    <p className="text200 mb-2">
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p className="text200 mb-2">You are currently on: /users</p>
    <List items={items} />
    <p className="title100 mt-5">
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default UsersPage;
