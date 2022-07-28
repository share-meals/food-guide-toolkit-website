import '../styles/globals.css'
import {GoogleAnalytics} from 'nextjs-google-analytics';
import Header from '../components/Header';
import {SessionProvider} from 'next-auth/react';

function MyApp({
    Component,
    pageProps
}){
  return(
      <>
	  
	  <GoogleAnalytics />
	  <SessionProvider session={pageProps.session}>
	      <Header />
	      <Component {...pageProps} />
	  </SessionProvider>
      </>
  );
}

export default MyApp
