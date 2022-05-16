import React from 'react';
import { Core } from '@keystone-ui-master/core';
import { DrawerProvider } from '@keystone-ui-master/modals';
import { ToastProvider } from '@keystone-ui-master/toast';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Core>
      <DrawerProvider>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </DrawerProvider>
    </Core>
  );
}
