import React from 'react'
import { Link } from 'react-scroll';

const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Project", section: "project" },
  { link: "Experiences", section: "experience" },
  { link: "Contact", section: "footer" },
];

const NavbarLinks = () => {
  return (
    <ul className='flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg-text-md sm:text-xl  w-full py-4'>
      {
        links.map((link, index) => {
          return (
            <li key = {index} className='group'>
              <Link 
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              activeClass="text-cyan"
              offset={-130} className='cursor-pointer hover:text-cyan transition-all duration-500'>
                {link.link}
              </Link>
             <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>   
            </li>
          )
        })
      }

    </ul>
  )
}

export default NavbarLinks