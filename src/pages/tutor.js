import React from "react"
import TutorSection from "../components/sections/TutorSection"
import SideBarContextProvider from "../context/SideBarContext"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import TutorHome from "../components/sections/TutorHome"

function Tutor() {
  return (
    <Hero>
      <SEO title="tutor-admin" />
      <TutorHome />
      <SideBarContextProvider>
        <TutorSection />
      </SideBarContextProvider>
    </Hero>
  )
}
export default Tutor

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 300px;
`
