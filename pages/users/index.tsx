import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Layout } from '@features/layout';
import { sampleUserData } from '@utils';

import { List } from '@ui';

type UsersPageProps = {
  items: User[];
};

const UsersPage = ({ items }: UsersPageProps) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default UsersPage;
