import React from "react"
import styled from "styled-components"
import PurchaseButton from "../buttons/PurchaseButton"
// import PricingButton from "../buttons/PricingButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import SearchBar from "./SearchBar"

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
          <PurchaseButton
            title="Start Learning"
            subtitle="120 + hours of video"
          />

          <Descript>
            Get in-person class for R100 +R10, Purchase includes access to any
            subject, more than 1000+ premium content, 24 hours of tutoring,
            source files and memos.
          </Descript>
        </TextWrapper>
      </ContentWrapper>
      <SearchBar />
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: url("/images/waves/wave-focus.svg");
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
const Title = styled(H1)`
  margin-left: 20px;
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)`
  margin-left: 20px;
`

const Descript = styled.p`
  font-size: 15px;
  line-height: 130%;
  color: white;
  margin-left: 20px;
`
