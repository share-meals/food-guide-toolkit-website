import '../styles/globals.css';
import Header from '../components/Header.js';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Footer from "../components/Footer";

const theme = createTheme({
    palette: {
	primary: {main: '#126435'},
	tertiary: {
	    main: '#686868'
	}
    }
});

function MyApp({ Component, pageProps }) {
  return(
      <>
	  <ThemeProvider theme={theme}>
	      <Header />
	      <Component {...pageProps} />
	      <Footer />
	  </ThemeProvider>
      </>
  );
}

export default MyApp
