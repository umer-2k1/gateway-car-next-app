"use client"
import React, {useContext} from 'react'
import { BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';

const ThemeIcons = () => {
    const theme =  useContext()
  return (
    <>
    <div className='w-[44px] h-[44px] rounded-full border flex items-center justify-center'>
        <BsFillMoonStarsFill className='text-[#596880] text-3xl'/>
    </div>

    <div className='w-[44px] h-[44px] rounded-full border flex items-center justify-center'>
        <BsFillSunFill className='text-[#596880] text-3xl'/>
    </div>
    
    </>
  )
}

export default ThemeIcons