import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMePic from './AboutMePic'

const AboutMeMain = () => {
  return (
    <div className='pt-40 pb-16' id='about'>
        <div className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[-8px] justify-between items-center'>
            <AboutMeText />
            <AboutMePic />
        </div>
    </div>
  )
}

export default AboutMeMain