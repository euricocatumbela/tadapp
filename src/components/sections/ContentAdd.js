import React from "react"
import styled from "styled-components"
import SEO from "../layout/seo"

const ContentAdd = props => {
  return (
    <Hero>
      <SEO title="content-page" />
      <Wrapper>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
      </Wrapper>
    </Hero>
  )
}

export default ContentAdd

const Hero = styled.div`
  margin: 0 auto;
`
const Wrapper = styled.div`
  width: 712px;
  height: 426px;
`
const Title = styled.h1`
  width: 712px;
  height: 60px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 60px;
  /* identical to box height */

  color: #000000;

  mix-blend-mode: normal;
`
const Content = styled.p`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  color: #000000;
  mix-blend-mode: normal;
`
