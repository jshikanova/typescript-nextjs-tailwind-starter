import React from 'react';
import Link from 'next/link';

type ListItemProps = {
  data: User;
};

export const ListItem = ({ data }: ListItemProps) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);
