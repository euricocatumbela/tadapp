import React from "react"
import styled from "styled-components"
import PricingButton from "../buttons/PricingButton"
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

          <Descript>Get in-person class for R100 +R10</Descript>
        </TextWrapper>
      </ContentWrapper>
      <HeroSearchBar>
        <HerouGroup>
          <img alt="" src="images/icons/search.svg" />
          <SearchBar placeholder="What subject do you need help with?(e.g. 'Calculs') "></SearchBar>
        </HerouGroup>
      </HeroSearchBar>
      {/* <img src="images/waves/hero-wave1.svg" />
      <img src="images/waves/hero-wave2.svg" /> */}
      {/* <img src="images/waves/hero-wave3.svg" /> */}
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
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
const SearchBar = styled.input`
  width: 462px;
  height: 44px;
  font-size: 16px;
  line-height: 130%;
  /* color: rgb(0, 0, 0); */
  margin-left: 40px;
  margin-top: 0px;
  outline: none;
  color: -internal-light-dark(black, white);
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  cursor: text;

  border: none;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  box-sizing: border-box;
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
`
const HeroSearchBar = styled.div`
  max-width: 1234px;
  margin: 0 380px 0 0;
  padding: 200px 30px;

  img {
    max-width: 100%;
    position: absolute;
    left: 5px;
    border-style: none;
    width: 40px;
    height: 40px;
  }
`

const HerouGroup = styled.div`
  width: 504px;
  height: 44px;
  /* background: rgb(255, 255, 255); */
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
`
