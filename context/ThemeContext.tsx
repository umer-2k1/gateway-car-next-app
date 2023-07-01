"use client"
import React, {useState, createContext, useEffect} from 'react'
import {theLightTheme, theDarkTheme } from '@/theme/theme'

  type ContextType = {
    toggleTheme: () => void;
    mode: string;
    theme: typeof theLightTheme | typeof theDarkTheme

  };

export const themeContext = createContext<ContextType>({
  toggleTheme: () => {},
  mode: 'light',
  theme: theLightTheme
});

const ThemeContext:React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState(theLightTheme)
    const [mode, setMode] = useState('light')
    const toggleTheme = ()=>{
        const newTheme = mode==='light' ? theDarkTheme : theLightTheme
        const newMode = mode==='light' ? 'dark' : 'light'
        setTheme(newTheme)
        setMode(newMode)
    }
  return (
    <>
      <themeContext.Provider value={{toggleTheme, theme, mode}}>
        <div className={`theme ${mode}`}>
        {children}
        </div>
      </themeContext.Provider>
    </>
  )
}

export default ThemeContext
