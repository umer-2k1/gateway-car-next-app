import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {NavbarLinks} from '@/types'
import { MdFavorite, MdHelp,MdNotifications } from 'react-icons/md';
import Logo from '@/public/speedy car rental logo.svg'
import Avatar from '@/public/avatar.svg'

/*
if user logged in
(help, saved, notif, image)
else 
(help, login , signup)
*/ 

const links: NavbarLinks[] = [
    {
        id: 1,
        icon: <MdHelp className='text-[#596880] text-3xl  '/>,
        title: 'Help',
        url: '/help'
    },

    {
        id: 2,
        icon: <MdFavorite className='text-[#596880] text-3xl  '/>,
        title: 'Saved',
        url: '/saved'
    },

    {
        id: 3,
        icon: <MdNotifications className='text-[#596880] text-3xl  '/>,
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

const Navbar:React.FC = () => {
  return (
    // #F6F7F9
    <nav className='bg-[#F6F7F9] flex justify-between items-center py-4'>

        {/* <div className='w-[1000px] h-[500px]'> */}
        <Link href={'/'} className='flex items-center border-2 w-[150px] h-[50px]'>
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

        <div className="flex items-center gap-10">
{
    links.map((link)=> (
        <div className='w-[44px] h-[44px] rounded-full border flex items-center justify-center'>
        <Link href={link.url} key={link.id} >{link.icon}</Link>
        </div>
    ))
}
        </div>

    </nav>
  )
}

export default Navbar