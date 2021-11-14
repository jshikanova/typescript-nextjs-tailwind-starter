import React from 'react';

type ListDetailProps = {
  item: User;
};

export const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1 className="title600 mb-3">Detail for {user.name}</h1>
    <p className="text200">
      <span className="font-bold">ID:</span>
      {user.id}
    </p>
  </div>
);
