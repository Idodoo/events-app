import MainLayout from '../src/components/layout/main-layout';
import '../styles/global.css';
import '../styles/general.sass';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;