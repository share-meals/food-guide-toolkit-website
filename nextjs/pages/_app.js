import '../styles/globals.css'
import Header from '../components/Header';
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

function MyApp({ Component, pageProps }) {
  return(
      <>
	  <ThemeProvider theme={theme}>
	      <Header />
	      <Component {...pageProps} />
	  </ThemeProvider>
    </>
  );
}

export default MyApp
