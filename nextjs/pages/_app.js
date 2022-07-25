import '../styles/globals.css'
import Header from '../components/Header.js';
import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles';

const theme = createTheme({
    palette: {
	primary: {main: '#DDAACC'},
	secondary: {main: '#6AA84F'},
	warning: {main: '#0CF3B9'},
	error: {main: '#F3560C'}
    }
});

function MyApp({ Component, pageProps }) {
    return(
	<ThemeProvider theme={theme}>
	    <div className='MyApp'>
		<Header />
		
		<Component {...pageProps} />
	    </div>
	</ThemeProvider>
    );
}

export default MyApp
