import Head from 'next/head'
import Navbar from './components/navbar/Navbar'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import styles from './styles/layout.module.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <Head>
      <link href="/dist/output.css" rel="stylesheet"/>
      </Head>
      <body className={  styles.main}>
        <Navbar></Navbar>
        {children}</body>
    </html>
  )
}
 