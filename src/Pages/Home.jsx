import React from 'react'
import HeroSection from '../Component/HeroSection'
import FeaturesSection from '../Component/FeaturesSection'
import HowItWorks from '../Component/HowItWorks'
import ShowcaseSection from '../Component/ShowcaseSection'
import TechnicalShowcase from '../Component/TechnicalShowcase'
import PotentialAndFooter from '../Component/PotentialAndFooter'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <FeaturesSection/>
        <HowItWorks/>
        <ShowcaseSection/>
        <TechnicalShowcase/>
        <PotentialAndFooter/>
    </div>
  )
}

export default Home