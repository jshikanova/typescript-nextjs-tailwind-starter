import { Codepen, GitHub, Icon, Twitter } from 'react-feather';

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

export type SocialLink = {
  title: string;
  href: string;
  Icon: Icon;
};

export const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/jshikanova/typescript-nextjs-tailwind-starter',
    Icon: GitHub,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/jshikanova',
    Icon: Twitter,
  },
  {
    title: 'Codepen',
    href: 'https://codepen.io/jshikanova',
    Icon: Codepen,
  },
];

// * Dummy user datax
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];
