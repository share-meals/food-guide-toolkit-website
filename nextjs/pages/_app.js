import '../styles/globals.css'
import Header from '../components/Header';
import "../styles/slug.css";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
