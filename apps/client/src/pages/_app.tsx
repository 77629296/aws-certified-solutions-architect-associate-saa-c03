import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/Common/ErrorBoundary';
import Layout from '../components/Common/Layout';

import '../styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
