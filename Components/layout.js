import React, { useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>
          {title ? title + '-Valtemina Group-Costwell' : 'Cost Well'}
        </title>
        <meta name="description" content="Online Shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div>
          <header className="flex-auto flex-col justify-between">
            <nav className="flex h-12 items-center px-4 justify-between shadow-md">
              <Link href="/">
                <a className="text-lg font-bold">Costwell</a>
              </Link>
              <div>
                <Link href="/cart">
                  <a className="p-2">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </span>
                    )}
                  </a>
                </Link>
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              </div>
            </nav>
          </header>
          <main className="container m-auto mt-4 px-4 flex-auto min-h-screen flex-col justify-between">
            {children}
          </main>
          <footer className="shadow-inner flex h-10 justify-center items-center min-h-screen flex-col ">
            <p>Copyright @ 2022 Valtemina Group-CostWell</p>
          </footer>
        </div>
      </>
    </>
  );
}
