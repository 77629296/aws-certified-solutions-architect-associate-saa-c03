import type { AppProps } from 'next/app';
import { QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from '@/components/Common/ErrorBoundary';
import Layout from '@/components/Common/Layout';
import { queryClient } from "@/libs/query-client";
import MuiThemeProvider from '@/components/Common/MuiThemeProvider';

import '../styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MuiThemeProvider>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ErrorBoundary>
    </MuiThemeProvider>
  );
};

export default App;
