import React from 'react'
import Spline from '@splinetool/react-spline';


const HeroPic = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center md:mt-0 sm:mt-[-160px] sm:items-center md:scale-100 sm:scale-75">
      <div className="w-full h-full flex items-center justify-center mt-20 sm:transform">
        <Spline
          scene="https://prod.spline.design/zVCWE3GQfx1m2pXP/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  )
}

export default HeroPic