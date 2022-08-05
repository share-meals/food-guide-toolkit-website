import '../styles/globals.css'
import {GoogleAnalytics} from 'nextjs-google-analytics';
import Header from '../components/Header';
import {SessionProvider} from 'next-auth/react';
import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles';

const theme = createTheme({
    palette: {
	// todo: consider repurposing one of the grey values instead
	tertiary: {
	    main: '#686868'
	}
    }
});

function MyApp({
    Component,
    pageProps
}){
  return(
      <>
	  <GoogleAnalytics />
	  <SessionProvider session={pageProps.session}>
	      <ThemeProvider theme={theme}>
		  <Header />
		  <Component {...pageProps} />
	      </ThemeProvider>
 	  </SessionProvider>
      </>
  );
}

export default MyApp
