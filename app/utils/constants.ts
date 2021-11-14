export type NavigationLink = {
  title: string;
  path: string;
  isOuter?: boolean;
};

export const navigationLinks: NavigationLink[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Users List',
    path: '/users',
  },
  {
    title: 'Users API',
    path: '/api/users',
    isOuter: true,
  },
];

// * Dummy user datax
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];
