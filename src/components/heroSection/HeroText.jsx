import React from 'react'
import TypeIt from 'typeit-react'
import { useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { FaLinkedin } from "react-icons/fa";

const HeroText = () => {
    const [instance, setInstance] = useState (null)
  return (
    <div className='flex flex-col gap-4 justify-center md:text-left sm:text-center sm:mt-[200px] md:mt-[-20px]'>
      <div className="lg:text-2xl sm:text-xl flex sm:justify-center md:justify-start">
        <TypeIt
            className="text-white md:text-3xl text-xl font-[Josefin_Sans]"
            options={{ loop: true }}
            style={{ "--ti-cursor-color": "cyan" }}
            getAfterInit={(instance) => {
              setInstance(instance);
              return instance;
            }}
          >
            I am a{" "}
            <span className="bg-gradient-purple bg-clip-text text-gradient">
              Front End Developer
            </span>
          </TypeIt>
      </div>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special bg-clip-text text-gradient bg-gradient-to-r from-cyan to-orange ">
        Hasna Tsaniya Hidayat
      </h1>
      <p className='text-lg mt-4 text-white'>
          I am a student majoring in software engineering 
          <br />
          at SMKN 4 Bandung
      </p>

      <div className='flex text-white  gap-6 lg:text-4xl sm:text-2xl md:justify-normal sm:justify-center '>
        <a href='https://www.instagram.com/hsntsani?igsh=MWF2dTM4am93eHRtYg==' target="_blank" rel="noopener noreferrer"  className="hover:text-[#E1306C] hover:scale-125 transition-all duration-300 ease-in-out">
        <FaInstagram  />
        </a>
        <a href='https://wa.me/6283822605885' target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] hover:scale-125 transition-all duration-300 ease-in-out">
        <FaWhatsapp/>
        </a>
        <a href='mailto:hsntsaniyah@gmail.com' target="_blank" rel="noopener noreferrer" className="hover:text-[#D44638] hover:scale-125 transition-all duration-300 ease-in-out">
        <MdOutlineMarkEmailUnread />
        </a>
        <a href='https://www.linkedin.com/in/hasna-tsaniya-hidayat-ba6444363/' target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5] hover:scale-125 transition-all duration-300 ease-in-out">
        <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default HeroText