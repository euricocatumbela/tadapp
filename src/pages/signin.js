import React from "react"
import styled from "styled-components"

import SEO from "../components/layout/seo"
import AuthForm from "./../components/forms/AuthForm"
function Signin() {
  var userIsRegistered = true

  return (
    <Wrapper>
      <ContentWrapper>
        <SEO title="signin" />
        <AuthForm isRegistered={userIsRegistered} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Signin

const Wrapper = styled.div`
  margin: 0 auto;
  background: url("/images/waves/hero-wave1.svg");
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
