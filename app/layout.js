

import Head from 'next/head'
import Navbar from './components/navbar/Navbar'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import styles from './styles/layout.module.css'
import Provider from './provider'





const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Vini Dyoxes | Frontend UX Developer',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <Head>
      <link href="/dist/output.css" rel="stylesheet"/>
      <link rel="icon" href="/public/logoBranco.png"/>
      </Head>
        <body className={  styles.main}>
     
          <Provider>

                <Navbar></Navbar>
                {children}
          </Provider>

        </body>
    </html>
  )
}
 