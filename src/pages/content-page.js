import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import ContentAdd from "../components/sections/ContentAdd"

import FooterSection from "../components/sections/FooterSection"
import FooterContextProvider from "../context/FooterContext"

const ContentPage = () => {
  return (
    <Hero>
      <SEO title="content-page" />
      <ContentAdd />
      <FooterContextProvider>
        <FooterSection />
      </FooterContextProvider>
    </Hero>
  )
}

export default ContentPage

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`
