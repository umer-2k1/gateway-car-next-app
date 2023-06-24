import React, {useState, createContext} from 'react'
import {theLightTheme, theDarkTheme } from '@/theme/theme'

interface ThemeContextValue {
  theme: typeof theLightTheme | typeof theDarkTheme;
    toggleTheme: () => void;
  }

export const themeContext = createContext<ThemeContextValue | null>(null);

const ThemeContext:React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState<typeof theLightTheme | typeof theDarkTheme>(theLightTheme)
    const [mode, setMode] = useState<String>('light')
    const toggleTheme = ()=>{
        const newTheme = mode==='light' ? theDarkTheme : theLightTheme
        const newMode = mode==='light' ? 'dark' : 'light'
        setTheme(newTheme)
        setMode(newMode)
    }
  return (
    <>
      <themeContext.Provider value={{toggleTheme, theme}}>
        {children}
      </themeContext.Provider>
    </>
  )
}

export default ThemeContext
