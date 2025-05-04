import { useState } from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import HeroGradient from './components/heroSection/HeroGradient'
import AboutMeMain from './components/aboutme/AboutMeMain'
import ProjectMain from './components/Project/ProjectMain'
import Footer from './components/footer/footer'
import Experiences from './components/experience/Experiences'
import SkillControl from './components/skill/SkillControl'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillControl />
      <ProjectMain />
      <Experiences />
      <Footer />
    </main>
  )
}

export default App
