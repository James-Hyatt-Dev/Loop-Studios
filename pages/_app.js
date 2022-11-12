import { Fragment } from 'react'
import '../styles/globals.css';
import Header from '../components/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Loop Studios Project2</title>
      </Head>
      
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
