import React from "react"
import styled from "styled-components"
import StudentContentPage from "../components/sections/StudentContent"
import StudentSection from "../components/sections/StudentSection"
import SideBarContextProvider from "../context/SideBarContext"

const StudentContent = () => {
  return (
    <Hero>
      <StudentContentPage />
      <SideBarContextProvider>
        <StudentSection />
      </SideBarContextProvider>
    </Hero>
  )
}

export default StudentContent

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 300px;
`
