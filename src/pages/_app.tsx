import { AppProps } from 'next/app';
import { Header } from '../components/Header';

import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
