"use client"
import React, {useContext} from 'react'
import { themeContext } from '@/context/ThemeContext';

const Footer = () => {
  
  const {theme} =  useContext(themeContext)
  return (
    // <div className={`text-${theme.paraColor}`}>Footer</div>
    <div style={{ color: theme.paraColor }}>Footer</div>
  )
}

export default Footer