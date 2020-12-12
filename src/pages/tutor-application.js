import React from "react"
import TutorForm from "../components/forms/TutorForm"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import Header from "../components/sections/Header"

const TutorApplication = () => {
  return (
    <Wrapper>
      <Header />
      <SEO title="tutor-application" />
      <TutorForm />
    </Wrapper>
  )
}

export default TutorApplication

const Wrapper = styled.div`
  /* margin-top: 80px; */
`
