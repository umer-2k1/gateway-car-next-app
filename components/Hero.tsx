"use client";
import React, {useContext} from 'react'
import { themeContext } from '@/context/ThemeContext';
import CustomButton from "./CustomButton";
import Image from "next/image";


const Hero = () => {
  const {theme} =  useContext(themeContext)
  const  handleScroll = () =>{
    alert("Clicked")
  }
  return (
    <>


  {/* 
  
  
  

  
  */}



      {/* #55A6FF */}
      {/* w-[640px] h-[360px]  */}

      {/*  */}
      <div className="hero border-2 border-red-600">
        <div className="flex-1 pt-36 border-2 padding-x">
          <h1 className='hero__title'>Find, book, or rent a car- quickly and easily!</h1>

          <p className='hero__subtitle'>Streamline your car rental experience qith our effortless booking process.</p>
          <CustomButton
              title="Explore cars"
              containerStyles="bg-primary-blue mt-10 rounded-full text-white"
              handleClick={handleScroll}
            />
            
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image
            src={'/hero.png'}
            alt='hero'
            fill
            className='object-contain'

            />
            <div className="hero__image-overlay"/>

          

          </div>
        </div>
      </div>
      
            {/* <CustomButton
              title="Explore cars"
              containerStyles="bg-primary-blue mx-auto mt-10 rounded-full text-white"
            />

          <div className="bg-[#54A6FF] relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
            <Image
              src="/BG.png"
              alt="Picture of the author"
              fill
              className="object-contain w-full"
            />
          </div> */}
      </>

  );
};

export default Hero;
