import React from 'react'

const HeroGradient = () => {
  return (
    <div>
        <div className="  shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
        <div className="  shadow-cyanMediumShadow absolute top-[300px] left-0 -z-10 opacity-50"></div>
        <div className="  shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
        <div className="  shadow-orangeMediumShadow absolute top-[500px] left-0 -z-10 opacity-50 "></div>
        <div>
          <div className="shadow-purpleGlow absolute top-[100px] left-[100px] w-[200px] h-[200px] rounded-full -z-10 animate-pulse opacity-60"></div>
          <div className="shadow-fuchsiaGlow absolute top-[50px] right-[150px] w-[150px] h-[150px] rounded-full -z-10 opacity-50"></div>
          <div className="shadow-pinkGlow absolute bottom-[100px] left-[50px] w-[180px] h-[180px] rounded-full -z-10 animate-pulse opacity-40"></div>
          <div className="shadow-mixedGlow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full -z-10 opacity-30"></div>
        </div>
    </div>
    
  )
}

export default HeroGradient