import styled from "styled-components"
import React from "react"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import HeaderSeaction from "../components/sections/HeaderSection"
import TutorCard from "../components/sections/TutorCard"
import TutorContextProvider from "../context/TutorContext"
const Tutors = () => {
  return (
    <Wrapper>
      <SEO title="tutors" />

      <Layout>
        <HeaderSeaction />
        <WrapText>
          <Title>Online Tutors</Title>
          <Description>Connect with an online tutor instantly</Description>
          <Paragraph>
            Special Offer: 30 minutes of free tutoring for all new students!
          </Paragraph>
        </WrapText>
        <GroupCard>
          <TutorContextProvider>
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
          </TutorContextProvider>
        </GroupCard>
      </Layout>
    </Wrapper>
  )
}

export default Tutors

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`
const GroupCard = styled.div`
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`
const WrapText = styled.div`
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-gap: 30px;
`
const Title = styled.h3`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  mix-blend-mode: normal;
`
const Description = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 130%;
  /* or 22px */
  color: rgba(255, 255, 255, 0.7);

  /* or 19px */
`
const Paragraph = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 130%;
  /* or 22px */
  color: rgba(255, 255, 255, 0.7);
`
