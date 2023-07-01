"use client"
import React, {useState, useContext, useEffect, useRef} from 'react'
import { themeContext } from '@/context/ThemeContext';
import Image from 'next/image'
import Link from 'next/link';
import {NavbarLinks} from '@/types'
import { MdFavorite, MdHelp,MdNotifications} from 'react-icons/md';
import Logo from '@/public/speedy car rental logo.svg'
import Avatar from '@/public/avatar.svg'
import ThemeIcons from './ThemeIcons';
import styles from '@/app/Styles/navbar.module.css'

/*
if user logged in
(help, saved, notif, image)
else 
(help, login , signup)
*/ 



const Navbar:React.FC = () => {
    const windowsWidth = window.innerWidth 
    const {theme,mode} =  useContext(themeContext)
    const activeToggle =  React.useRef<HTMLDivElement>(null);
    const sideBarToggle =  React.useRef<HTMLDivElement>(null);
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [isMenu, setMenu] = useState(false)

    const hamburgerHandler = ()=>{
        activeToggle.current?.classList.toggle('active')
        if(sideBarToggle.current?.classList.contains('-translate-x-full')){
            sideBarToggle.current?.classList.remove('-translate-x-full') 
            sideBarToggle.current?.classList.add('translate-x-0')            
        }
        else if(!(sideBarToggle.current?.classList.contains('-translate-x-full')) || windowsWidth>768){
            sideBarToggle.current?.classList.remove('translate-x-0')     
            sideBarToggle.current?.classList.add('-translate-x-full')            

        }

    }
    useEffect(()=>{

    },[theme, activeToggle, sideBarToggle,windowsWidth ])
    const links: NavbarLinks[] = [
  
        {
            id: 1,
            icon: <MdHelp style={{ color: theme.iconColor }} className="text-3xl"/>,
            title: 'Help',
            url: '/help'
        },
    
        {
            id: 2,
            icon: <MdFavorite style={{ color: theme.iconColor }} className="text-3xl"/>,
            title: 'Saved',
            url: '/saved'
        },
    
        {
            id: 3,
            icon: <MdNotifications style={{ color: theme.iconColor }} className="text-3xl"/>,
            title: 'Notifications',
            url: '/notifications'
        },
    
        {
            id: 4,
            icon: <Image src={Avatar} alt='avatar'/>,
            title: 'User',
            url: '/user'
        },
        
    ]

  return (
    // #F6F7F9
    <>
   

    <nav>

    

<div style={{ backgroundColor: theme.secondaryBackgroundColor }} className='relative md:flex md:flex-row items-center justify-between py-4 w-screen flex-col '>


<div className='flex items-center'>


<div className='md:hidden block z-20 ml-4' onClick={hamburgerHandler} ref={activeToggle} id='hamburger'  >
          <span id='line'></span>
          <span id='line'></span>
          <span id='line'></span>
        </div>


        <Link href={'/'} className='flex items-center w-[150px] h-[50px] z-20'>
            <Image
            src={Logo}
            alt="Speedy Car Rental Logo"
            className='object-cover'
            // fill={true}

            width={100}
            // height={100}
            
            />
            <span className='text-primary-blue'>SpeedyCarRental</span>
        </Link>

            </div>
 
        {/* <div className="relative top-0 flex md:flex-row md:items-center md:gap-10 md:my-0 flex-col gap-[20px] my-8 border-2 "> */}
        <div className=" top-0 flex md:flex-row md:items-center md:gap-10 flex-col gap-[20px]  border-2 ">

        <div ref={sideBarToggle} className="absolute menu top-0 left-0 w-[60vw] h-full bg-slate-100 border-2 border-red-400 transform transition-transform -translate-x-full ">

            
{
    links.map((link)=> (
        <div style={{backgroundColor: mode === 'light' ? '#fff' : undefined}} className='w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center'>
        <Link href={link.url} key={link.id} >{link.icon}</Link>
        </div>
    ))
}

<ThemeIcons/>

{/* <button data-tooltip-target="tooltip-dark" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dark tooltip</button>
<div id="tooltip-dark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div className="tooltip-arrow" data-popper-arrow></div>
</div> */}


    </div>
    </div>
    </div>


    </nav>

 

    </>
  )
}

export default Navbar