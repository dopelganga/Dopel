import type { AppProps } from 'next/app';
import Head from 'next/head';
import PlausibleProvider from 'next-plausible';

import CoralFooter from '../components/CoralFooter';
import Nav from '../components/Nav';

import '../styles/globals.css';

import React, { type ComponentType } from 'react';

function MyApp({ Component, pageProps }: AppProps & { Component: ComponentType<any> }) {
  return (
    <>
      {React.createElement(
        Head as any,
        null,
        <>
          <meta name="twitter:title" content="Dopelganga - A home for your xNFT apps" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://www.dopelganga.app/_next/image?url=%2Fbrands%2Fdopelganga-twitter.png&w=3840&q=75"
          />
          <meta name="apple-itunes-app" content="app-id=6445964121" />
          <title>Dopelganga</title>
        </>
      )}

      {React.createElement(
        PlausibleProvider as any,
        { domain: "dopelganga.app", trackOutboundLinks: true },
        <div className="bg-zinc-900">
          <div
            className="justify-betwee mx-auto flex min-h-screen
          max-w-7xl flex-col"
          >
            <div className="pb-10">
              <Nav />
            </div>

            <div className="mb-auto px-5 py-10 md:px-10">
              {Component && (Component as React.ComponentType<any>) && (
                React.createElement(Component as React.ComponentType<any>, pageProps)
              )}
            </div>

            <div className="items-end pb-8">
              <CoralFooter />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
