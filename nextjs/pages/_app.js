import '../styles/globals.css'
import {GoogleAnalytics} from 'nextjs-google-analytics';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return(
      <>
	  <GoogleAnalytics />
	  <Header />
	  <Component {...pageProps} />
      </>
  );
}

export default MyApp
