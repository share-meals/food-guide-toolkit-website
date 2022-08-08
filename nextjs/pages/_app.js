import '../styles/globals.css';
import Header from '../components/Header.js';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {main: '#126435'},
    
  }
});

function MyApp({ Component, pageProps }) {
  
  return(
    <ThemeProvider theme={theme}>
      <div className='MyApp'>
        <Header />

        <Component {...pageProps} />
        
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default MyApp