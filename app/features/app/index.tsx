import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import { Layout } from '@features/layout';

const additionalMetaTags = [
  {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no',
  },
];

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        />
      </Head>
      <DefaultSeo
        additionalMetaTags={additionalMetaTags}
        description=""
        title="TypeScript Next.js starter"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
