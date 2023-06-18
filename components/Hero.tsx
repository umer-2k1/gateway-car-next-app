"use client"
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <>
      <h1 className='text-blue-400'>Hero components</h1>

      <CustomButton
      title='Explore cars'
      containerStyles='bg-primary-blue mx-auto mt-10 rounded-full text-white'
      
      />
    </>
  )
}

export default Hero
