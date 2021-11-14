import React from 'react';
import Link from 'next/link';

type ListItemProps = {
  data: User;
};

export const ListItem = ({ data }: ListItemProps) => (
  <li className="mb-1">
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      <a>
        <span className="text-morning-blue">{data.id}:</span> {data.name}
      </a>
    </Link>
  </li>
);
