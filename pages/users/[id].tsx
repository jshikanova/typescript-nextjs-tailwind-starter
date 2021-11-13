import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { sampleUserData } from '@utils';

import { ListDetail } from '@ui';

type UserPageProps = {
  item?: User;
  errors?: string;
};

const UserPage = ({ item, errors }: UserPageProps) => {
  if (errors) {
    return (
      <div className="px-2 py-1">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </div>
    );
  }

  return <div className="px-2 py-1">{item && <ListDetail item={item} />}</div>;
};

export default UserPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleUserData.map(user => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleUserData.find(data => data.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
