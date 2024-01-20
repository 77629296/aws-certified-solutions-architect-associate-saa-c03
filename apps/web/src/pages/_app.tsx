import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from 'next/app';

import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from '@/components/Layout';
import { queryClient } from "@/libs/query-client";

import "@/styles/global.scss"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
