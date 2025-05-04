import React from 'react'
import ProjectGradient from './ProjectGradient'

const ProjectMain = () => {
  return (
    <div className='text-center' id='project'>
        <ProjectGradient />
        <h2 className='text-6xl text-gradient bg-gradient-to-r from-[#62cdff] to-[#f042ff] mb-10 mt-28'>Project</h2>

        <div className="flex flex-wrap justify-center max-w-[900px] mx-auto">
            <div className=" group relative w-[350px] h-[220px] sm:w-[400px] sm:h-[250px] overflow-hidden rounded-2xl shadow-glow mx-5 mb-5">
                <img 
                    src="/images/jagoit.png" 
                    alt="Jago IT" 
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-purple opacity-80 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white text-center opacity-0 translate-y-[40%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 ease-in-out px-4">
                    <h3 className="text-xl font-bold mb-2">Jago IT</h3>
                    <p className="text-sm font-semibold">A platform to register to become a talent and assess your performance while working</p>
                    </div>
                </div>
            </div>

            <div className="group relative w-[350px] h-[220px] sm:w-[400px] sm:h-[250px] overflow-hidden rounded-2xl shadow-glow mx-5 mb-5">
                <img 
                    src="/images/sproutify.png" 
                    alt="Jago IT" 
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-purple opacity-80 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white text-center opacity-0 translate-y-[40%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 ease-in-out px-4">
                    <h3 className="text-xl font-bold mb-2">Sproutify</h3>
                    <p className="text-sm">Platform for analyzing soil and plant growth</p>
                    </div>
                </div>
            </div>

            <div className="group relative w-[350px] h-[220px] sm:w-[400px] sm:h-[250px] overflow-hidden rounded-2xl shadow-glow mx-5 mb-5">
                <img 
                    src="/images/zoozle.png" 
                    alt="Jago IT" 
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-purple opacity-80 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white text-center opacity-0 translate-y-[40%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 ease-in-out px-4">
                    <h3 className="text-xl font-bold mb-2">Zoozle</h3>
                    <p className="text-sm">Interactive puzzle game with a zoo theme that sharpens brain skills in solving problems</p>
                    </div>
                </div>
            </div>
            
            <div className="group relative w-[350px] h-[220px] sm:w-[400px] sm:h-[250px] overflow-hidden rounded-2xl shadow-glow mx-5 mb-5">
                <img 
                    src="/images/image.png" 
                    alt="Jago IT" 
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-purple opacity-80 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white text-center opacity-0 translate-y-[40%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 ease-in-out px-4">
                    <h3 className="text-xl font-bold mb-2">Cinema</h3>
                    <p className="text-sm">A platform that will display a list of films that are currently showing or will be showing from the TMDB database</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectMain