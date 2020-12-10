import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { H2, H3 } from "./styles/TextStyles"

export default function ApplySection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          Do you enjoy teaching and want a flexible way to make extra cash?
        </Title>
        <SubTitle>Join our community of tutors!</SubTitle>

        <Link to="/tutor-application">
          <ApplyButton>Apply Now</ApplyButton>
        </Link>
      </ContentWrapper>

      {/* <TextWrapper>
        <Icon>Make Extra Money</Icon>
        <TitleText>
          Earn $16/hour to share your knowledge with others.
        </TitleText>
      </TextWrapper> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  background: url("/images/waves/round-wave1.svg");
  display: grid;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 100px auto;
  padding: 100px 30px;
  display: grid;
  gap: 30px;
`
const Title = styled(H2)`
  color: white;
`
const SubTitle = styled(H3)`
  text-align: center;
  color: white;
`
const ApplyButton = styled.button`
  margin: 0 400px;
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  font-size: 28px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: 1s;

  :hover {
    transform: translateY(-4px);
  }
`
