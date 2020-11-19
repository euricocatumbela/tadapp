import React from "react"
import StudentSection from "../components/sections/StudentSection"
import SideBarContextProvider from "../context/SideBarContext"
import StudentHome from "../components/sections/StudentHome"
import styled from "styled-components"
function Student() {
  return (
    <Hero>
      <SideBarContextProvider>
        <StudentHome />
        <StudentSection />
      </SideBarContextProvider>
    </Hero>
  )
}
export default Student

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 300px;
`
