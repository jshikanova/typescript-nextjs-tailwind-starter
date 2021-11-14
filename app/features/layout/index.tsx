import React, { ReactNode } from 'react';

import { navigationLinks } from '@utils';

import { Footer, Header } from '@ui';

export const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <Header links={navigationLinks} />
    <div className="content">{children}</div>
    <Footer />
  </>
);
