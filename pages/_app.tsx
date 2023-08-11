import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Analytics from '../lib/analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
