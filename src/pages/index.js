import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import HeaderSection from "../components/sections/HeaderSection"
import SemiHeroSection from "../components/sections/SemiHeroSection"
import PricingSection from "../components/sections/PricingSection"
import EdgeHero from "../components/sections/EdgeHero"
import PricingHeading from "../components/sections/PricingHeading"
import HeroProfile from "../components/sections/HeroProfile"

// import PricingSection from "../components/sections/PricingSection"
function IndexPage() {
  return (
    <Layout>
      <HeaderSection />
      <SEO title="home" />
      <HeroSection />
      <SemiHeroSection />
      <EdgeHero />
      <PricingHeading />
      <HeroProfile />
      <PricingSection />
    </Layout>
  )
}

export default IndexPage
