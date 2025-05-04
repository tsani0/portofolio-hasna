import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 px-4 max-w-[1200px] mx-auto justify-between items-center mt-[-10px]' id='home'>
        <HeroText className="order-1 sm:order-2 flex justify-center" />
        <HeroPic className="order-2 md:order-1"/>
    </div>
  )
}

export default HeroMain