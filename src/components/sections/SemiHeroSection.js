import React from "react"
import styled from "styled-components"
import SemiHeroCard from "./SemiHeroCard"

const SemiHeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>How does TakeAnyDoubt works?</Title>
        </TextWrapper>
        <CardGroup>
          <SemiHeroCard image="https://static.dribbble.com/users/1908682/screenshots/4817915/______-___-________3.jpg" />
          <SemiHeroCard image="https://static.dribbble.com/users/81451/screenshots/6463636/illustration---n2.png" />
          <SemiHeroCard image="https://static.dribbble.com/users/142973/screenshots/9875511/media/9fe204959d18d53462629c682ea89c14.png" />
          <Description>
            <Heading>1. Make a request</Heading>
            <Paragraph>
              Tell us what you need help with and our smart matching system will
              connect you with an online tutor. Sign up for a free trial using a
              debit/credit card.
            </Paragraph>
          </Description>
          <Description>
            <Heading>2. Learn</Heading>
            <Paragraph>
              After the lesson is completed, both the tutor and student have the
              opportunity to rate each other, maintaining the quality of our
              community.
            </Paragraph>
          </Description>
          <Description>
            <Heading> 3. Review</Heading>
            <Paragraph>
              After the lesson is completed, both the tutor and student have the
              opportunity to rate each other, maintaining the quality of our
              community.
            </Paragraph>
          </Description>
        </CardGroup>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SemiHeroSection

const Wrapper = styled.div`
  /* display: grid;
  grid-template-rows: repeat(1, 1fr); */
  background: url("/images/waves/hero-wave2.svg");
`

const ContentWrapper = styled.div`
  /* max-width: 1234px; */
  margin: 0 auto;
  padding: 300px 30px;

  @media (max-width: 640px) {
    margin: 0 auto;
    padding: 20px 0px;
  }
`

const CardGroup = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }
`
const TextWrapper = styled.div`
  margin: 0 auto;
`

const Title = styled.h1`
  font-weight: 700;
  color: azure;
  font-size: 34px;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 22px;
    margin-bottom: 40px;
  }
`
const Description = styled.div`
  display: grid;
  grid-gap: 40px;
`
const Heading = styled.h3`
  color: white;
  font-size: 30px;
  text-align: center;
`
const Paragraph = styled.p`
  width: 20rem;
  font-size: 15px;
  color: white;
  line-height: 23px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 300px;
`
