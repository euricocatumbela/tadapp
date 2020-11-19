import React from "react"
// import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo"
import styled from "styled-components"
import PricingSection from "../components/sections/PricingSection"
import Layout from "../components/layout/layout"
import HeaderSection from "../components/sections/HeaderSection"

function Pricing() {
  return (
    <HeroSection>
      <SEO title="pricing" />
      <Layout>
        <HeaderSection />
        <HeroGroup>
          <Title>Pricing Plans</Title>
          <Content>
            Get access to your plan courses, in person classes, tutorials,
            downloads, and priority support.
          </Content>
        </HeroGroup>

        <PricingSection />
      </Layout>
    </HeroSection>

    // </Layout>
  )
}
export default Pricing

const HeroSection = styled.div`
  background: linear-gradient(180deg, #191a43 0%, #442d85 100%);
`

const HeroGroup = styled.div`
  margin: 0 0 0 0;
  padding: 150px 30px;
`
const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #ffffff;
`
const Content = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  /* or 22px */
  text-align: center;
  max-width: 460px;
  text-align: center;
  margin: 0px auto;
  padding: 20px 20px 80px;
  display: grid;
  gap: 20px;
  z-index: 1;
  color: white;
  mix-blend-mode: normal;
`
