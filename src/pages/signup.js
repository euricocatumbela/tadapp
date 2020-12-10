import React from "react"
import AuthForm from "../components/forms/AuthForm"
import SEO from "../components/layout/seo"
import styled from "styled-components"
const SignUp = () => {
  var userIsRegistered = false
  return (
    <Wrapper>
      <ContentWrapper>
        <SEO title="signup" />

        <AuthForm isRegistered={userIsRegistered} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default SignUp

const Wrapper = styled.div`
  margin: 0 auto;
  background: url("/images/waves/certificate-wave2.svg");
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
