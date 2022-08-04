import React from 'react';
import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-Valtemina Group' : 'Cost Well'}</title>
        <meta name="description" content="Online Shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>header</header>
        <main>{children}</main>
        <footer>footer </footer>
      </div>
    </>
  );
}
