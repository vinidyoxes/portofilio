

import Head from 'next/head'
import Navbar from './components/navbar/Navbar'
import './styles/globals.css'
import styles from './styles/layout.module.css'
import Provider from './provider'
import { Inter, Montserrat, Roboto } from 'next/font/google'





const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets:['latin'], weight:['400','300','800'], fallback:['inter']})
const roboto = Roboto({subsets:['latin'], weight:['400']})

  export const metadata = {
    title: 'Vini Dyoxes | Frontend UX Developer',
    description: 'Portfolio',
  }

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <Head>
      <meta name="description" content={metadata.description} />
      <link href="/dist/output.css" rel="stylesheet"/>
      <link rel="icon" type="image/x-icon" href="/app/favicon.ico"/>
      <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,900&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"rel="stylesheet" />
                
      </Head>
        <body className={`${styles.main} ${montserrat.className}`}>
     
          <Provider attribute="class">
              
                <Navbar></Navbar>
                {children}
          </Provider>
        </body>
    </html>
  )
}
 