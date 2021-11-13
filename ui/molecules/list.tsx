import React from 'react';

import { ListItem } from '@ui/atoms';

type ListProps = {
  items: User[];
};

export const List = ({ items }: ListProps) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);
