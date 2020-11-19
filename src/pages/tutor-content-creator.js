import React from "react"
import styled from "styled-components"
import ContentFile from "../components/sections/ContentCreatorFile"
import TutorSection from "../components/sections/TutorSection"
import SideBarContextProvider from "../context/SideBarContext"
const TutorContentCreator = () => {
  return (
    <Hero>
      <SideBarContextProvider>
        <TutorSection />
        <ContentFile />
      </SideBarContextProvider>
    </Hero>
  )
}

export default TutorContentCreator

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 700px;
`
