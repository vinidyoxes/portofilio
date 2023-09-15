import React, { createContext, useContext } from 'react';
import { Inter, Montserrat, Roboto } from 'next/font/google';

const FontContext = createContext();

export const useFontContext = () => useContext(FontContext);

export const FontProvider = ({ children }) => {
    const interFont = Inter({ subsets: ['latin'] });
    const montserratFont = Montserrat({ subsets: ['latin'], weight: ['400', '300', '800'], fallback: ['inter'] });
    const robotoFont = Roboto({ subsets: ['latin'], weight: ['400'] });

  return (
    <FontContext.Provider value={{ interFont, montserratFont, robotoFont }}>
    {children}
  </FontContext.Provider>
  )
}

export default FontContext