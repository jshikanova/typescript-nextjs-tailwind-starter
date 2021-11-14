import React from 'react';

import { ListItem } from '@ui/atoms';

type ListProps = {
  items: User[];
};

export const List = ({ items }: ListProps) => (
  <ul>
    {items.map(item => (
      <ListItem key={item.id} data={item} />
    ))}
  </ul>
);
