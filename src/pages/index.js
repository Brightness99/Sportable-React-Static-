import React, { useState, useEffect } from 'react'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import HeroSection from 'containers/HeroSection'
import SolutionSection from 'containers/SolutionSection'
import TechnologySection from 'containers/TechnologySection'
import AnalysisSection from 'containers/AnalysisSection'
import TeamSection from 'containers/TeamSection'
import ContactSection from 'containers/ContactSection'
import ModalSection from 'containers/ModalSection'
import Menu from 'components/Menu'
import SolutionItem from 'components/SolutionItem'
import { solutionData, technologyData, teamData } from 'assets/demo/data'

import './styles.scss'

function Landing() {
  const [openHeaderMenu, setOpenHeaderMenu] = useState(false)
  const [solutionItem, setSolutionItem] = useState(null);
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 992)
    }

    handleResize();
    window.addEventListener('resize', handleResize)
    
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <div>
      <Header onMenuClick={() => setOpenHeaderMenu(true)} />
      <div className="content">
        <HeroSection />
        <SolutionSection
          data={solutionData}
          onSelect={(item) => {mobile && setSolutionItem(item)}}
        />
        <TechnologySection data={technologyData} />
        <AnalysisSection />
        <TeamSection data={teamData} />
        <ContactSection />
      </div>
      <Footer />
      {openHeaderMenu && (
        <ModalSection onClose={() => setOpenHeaderMenu(false)} >
          <Menu />
        </ModalSection>
      )}
      {solutionItem && (
        <ModalSection onClose={() => setSolutionItem(null)} >
          <SolutionItem data={solutionItem} />
        </ModalSection>
      )}
    </div>
  )
}

export default Landing
