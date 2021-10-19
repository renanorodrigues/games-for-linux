import React from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => { 
  return <h1> Hello World </h1>
 }

export default MyApp
