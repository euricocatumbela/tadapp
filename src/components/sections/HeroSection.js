import React from "react"
import styled from "styled-components"
import PricingButton from "../buttons/PricingButton"

const SearchBarField = () => {
  return (
    <HeroSearchBar>
      <HerouGroup>
        <Input placeholder="What subject do you need help with?(e.g. 'Calculs') "></Input>
        <img alt="" src="images/icons/searchbar.svg" />
      </HerouGroup>
    </HeroSearchBar>
  )
}

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            It's time
            <br /> for better <br />
            IQ & grades
          </Title>

          <Description>
            Instant Online tutoring and in-person tutoring with the best tutors
            around the world.
          </Description>
          <PricingButton />

          <Descript>
            Get in-person class for R100 +R10, Purchase includes access to any
            subject, more than 1000+ premium content, 24 hours of tutoring,
            source files and memos.
          </Descript>
        </TextWrapper>
      </ContentWrapper>
      <SearchBarField />
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* background: url("/images/waves/hero-wave1.svg"); */
  background: url("/images/waves/wave-focus.svg");
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;

  @media (max-width: 640px) {
    margin: 0 auto;
    padding: 120px 0 10px 0;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  grid-gap: 30px;
`
const Title = styled.h1`
  margin-left: 20px;
  font-weight: bold;
  font-size: 60px;
  color: white;
  /* overflow: hidden;
  white-space: nowrap;
  animation: typing 14s steps(37) forwards, blink-caret 0.8s step-end infinite;
  animation-iteration-count: infinite; */

  /* @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #fff;
    }
  }
  @keyframes typing {
    0% {
      width: 0%;
    }
    30% {
      width: 100%;
    }
    80% {
      width: 100%;
    }
    90% {
      width: 0%;
    }
    100% {
      width: 0%;
    }
    0% {
      height: 100%;
    }
  } */
`
const Description = styled.p`
  margin-left: 20px;
  font-size: 17px;
  line-height: 130%;
`

const Descript = styled.p`
  font-size: 15px;
  line-height: 130%;
  color: white;
  margin-left: 20px;
`

const HeroSearchBar = styled.div`
  margin-right: 200px;
  padding: 200px 30px;

  @media (max-width: 640px) {
    margin: 0 0px 0 0;
    padding: 0 auto;
  }
`

const Input = styled.input`
  margin-left: 60px;
  width: 504px;
  height: 44px;
  font-size: 16px;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: text;
  @media (max-width: 640px) {
    width: 260px;
    height: 44px;
    font-size: 10px;
  }
`

const HerouGroup = styled.div`
  width: 504px;
  height: 46px;
  background: rgb(255, 255, 255);
  border-radius: 30px;

  @media (max-width: 640px) {
    width: 260px;
    height: 46px;
  }
  img {
    position: absolute;
    left: 720px;
    top: 210px;
    width: 30px;
    height: 30px;

    @media (max-width: 640px) {
      position: absolute;
      left: 50px;
      top: 810px;
      width: 30px;
      height: 30px;
    }
  }
`
