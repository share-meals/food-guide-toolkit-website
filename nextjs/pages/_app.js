import '../styles/globals.css'
import Header from '../components/Header.js';

function MyApp({ Component, pageProps }) {
  return(
    <div className='MyApp'>
      <Header />
      
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
