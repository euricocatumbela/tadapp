import React from "react"
import styled from "styled-components"
import TutorCard from "./TutorCard"
const HeroProfile = () => {
  return (
    <Hero>
      <HeadingSmall>who’s behind</HeadingSmall>
      <Heading>Meet the Tutors</Heading>
      <HeadingDescription>
        We all try to be consistent with our way of teaching step-by-step,
        providing source files and great content in our subjects.
      </HeadingDescription>
      <GroupCard>
        <TutorCard
          title="Eurico"
          position="Software Engineer"
          headingContent="University of Cape Town"
          paragraphContent="graduated 2018, 10 years experience in programming"
          headingContent1="Programming Tutor"
          paragraphContent1="I teach programming since 2015, I always loved this subject and
        I would like to help people with my knowledge and experinence."
          headingContent2="Angolan"
          paragraphContent2=" I'm from Angola, I am currently based in Cape Town, South
        Africa."
        />

        <TutorCard
          title="Eurico"
          position="Software Engineer"
          headingContent="University of Cape Town"
          paragraphContent="graduated 2018, 10 years experience in programming"
          headingContent1="Programming Tutor"
          paragraphContent1="I teach programming since 2015, I always loved this subject and
        I would like to help people with my knowledge and experinence."
          headingContent2="Angolan"
          paragraphContent2=" I'm from Angola, I am currently based in Cape Town, South
        Africa."
        />
      </GroupCard>
    </Hero>
  )
}

export default HeroProfile

const Hero = styled.div`
  padding: 200px 30px;
  display: grid;
  grid-gap: 30px;
`
const GroupCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Heading = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height */
  text-align: center;
  /* Text (dark) */
  color: #ffffff;
  mix-blend-mode: normal;
`
const HeadingSmall = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  text-align: center;
  /* or 19px */
  text-transform: uppercase;
  /* Text 2 */
  color: rgba(0, 0, 0, 0.7);
`
const HeadingDescription = styled.p`
  margin: 0 auto;
  width: 460px;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  /* or 22px */
  color: rgba(255, 255, 255, 0.7);
`
