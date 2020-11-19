import React from "react"
import styled from "styled-components"
import PricingButton from "../buttons/PricingButton"
const EdgeHero = () => {
  return (
    <Hero>
      <Title>Why use TakeAnyDoubt?</Title>
      <HeroGroup>
        <WrapperText>
          <Heading>
            <img alt="" src="images/icons/chat.svg" />
            On-demand tutoring
          </Heading>

          <Paragraph>
            Connect with an online tutor in less than 30 seconds, 24/7. It
            doesn’t matter if you want help with a single problem or you need a
            3-hour lesson.
          </Paragraph>
        </WrapperText>

        <WrapperText>
          <Heading>
            <img alt="" src="images/icons/award.svg" />
            Learn from the best tutors
          </Heading>
          <Paragraph>
            Highly qualified tutors from the best universities across the globe
            ready to help. An acceptance rate of 4% means all our tutors are
            thoroughly screened.
          </Paragraph>
        </WrapperText>
        <WrapperText>
          <Heading>
            <img alt="" src="images/icons/livestreams.svg" />
            All the tools you need
          </Heading>
          <Paragraph>
            Our lesson space features a virtual whiteboard, text editor,
            audio/video chat, screensharing and so much more. All lessons are
            archived for your convenience.
          </Paragraph>
        </WrapperText>
        <WrapperText>
          <Heading>
            <img alt="" src="images/icons/comment.svg" />
            Get help in any subject
          </Heading>
          <Paragraph>
            We cover over 300 subjects across all grade levels. Whether it’s
            high school algebra or college-level Spanish, we have a tutor that
            can help.
          </Paragraph>
        </WrapperText>
      </HeroGroup>

      <PricingButton />
    </Hero>
  )
}

export default EdgeHero

const Hero = styled.div`
  margin: 0 auto 0 auto;
  padding: 100px 30px;
  display: grid;
  grid-gap: 30px;
`
const HeroGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`
const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  color: azure;
  font-size: 34px;
  text-align: center;
`
const WrapperText = styled.div`
  margin: 0 auto;

  img {
    height: 50px;
    width: 50px;
    margin: 0 20px -14px 0px;
  }
`
const Heading = styled.h3`
  font-size: 22px;
  line-height: 27px;
  font-weight: 600px;
  color: azure;
  margin-bottom: 8px;
`
const Paragraph = styled.p`
  font-size: 15px;
  color: white;
  line-height: 23px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 300px;
`
