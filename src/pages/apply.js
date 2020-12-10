import React from "react"
import ApplySection from "../components/ApplySection"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import HeaderSection from "../components/sections/HeaderSection"
import styled from "styled-components"
const Apply = () => {
  return (
    <Wrapper>
      <HeaderSection />
      <SEO title="apply" />
      <ApplySection />
      <Layout />
    </Wrapper>
  )
}

export default Apply

const Wrapper = styled.div``
