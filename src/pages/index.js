import React, { useState, useEffect } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import HeaderSection from "../components/sections/HeaderSection"
import SemiHeroSection from "../components/sections/SemiHeroSection"
import PricingSection from "../components/sections/PricingSection"
import EdgeHero from "../components/sections/EdgeHero"
import PricingHeading from "../components/sections/PricingHeading"
import HeroProfile from "../components/sections/HeroProfile"

const MainLayout = () => {
  return (
    <Layout>
      <HeaderSection />
      <SEO title="home" />
      <HeroSection />
      <SemiHeroSection />
      <EdgeHero />

      <PricingHeading />
      <PricingSection />
    </Layout>
  )
}

const MainLayout2 = () => {
  return (
    <Layout>
      <HeaderSection />
      <SEO title="home" />
      <HeroSection />
      <SemiHeroSection />
      <EdgeHero />
      <HeroProfile />
      <PricingHeading />
      <PricingSection />
    </Layout>
  )
}

function IndexPage() {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:640px)").matches
  )

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:640px)").matches)
    })
  })

  return <>{isMobile ? <MainLayout /> : <MainLayout2 />}</>
}

export default IndexPage
