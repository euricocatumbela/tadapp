import React, { useContext } from "react"
import styled from "styled-components"
import { TutorContext } from "../../context/TutorContext"

const TutorCard = () => {
  const { tutor } = useContext(TutorContext)
  return (
    <HeroCard>
      <HeroGroup>
        <ProfileCard>
          <ProfileDescription>
            <Content>
              <img alt="" src="/images/icons/eurico.jpeg" />
              <Title>{tutor.title}</Title>
              <Position>{tutor.position}</Position>
              <Description>
                <span role="img" aria-label="star">
                  ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
                </span>
              </Description>
            </Content>
          </ProfileDescription>
          <ProfileContent>
            <DescritionContent>
              <HeadingContent>{tutor.headingContent}</HeadingContent>
              <ParagraphContent>{tutor.paragraphContent}</ParagraphContent>
            </DescritionContent>
            <DescritionContent>
              <HeadingContent>{tutor.headingContent1}</HeadingContent>
              <ParagraphContent>{tutor.paragraphContent1}</ParagraphContent>
            </DescritionContent>
            <DescritionContent>
              <HeadingContent>{tutor.headingContent2}</HeadingContent>
              <ParagraphContent>{tutor.paragraphContent2}</ParagraphContent>
            </DescritionContent>
          </ProfileContent>
        </ProfileCard>
      </HeroGroup>
    </HeroCard>
  )
}

export default TutorCard

const HeroCard = styled.div`
  margin: 0 auto;
  width: 614px;
  height: 400px;
  background: rgba(15, 14, 71, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`
const HeroGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const ProfileCard = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  width: 574px;
  height: 360px;
  left: 20px;
  top: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  cursor: pointer;
`
const ProfileDescription = styled.div`
  width: 240px;
  height: 360px;
  background: linear-gradient(200.42deg, #844ffc 13.57%, #491eb8 98.35%);
  border-radius: 10px;
`

const Content = styled.div`
  img {
    margin-top: 100px;
    margin-left: 60px;
    margin-bottom: 10px;
    border-radius: 90px;
    width: 100px;
    height: 100px;
  }
`

const Title = styled.h3`
  color: white;
  padding-left: 80px;
  width: 100px;
  padding-bottom: 20px;
  font-size: 22px;
`
const Position = styled.p`
  font-size: 15px;
  padding-left: 10px;
  line-height: 180%;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
`
const Description = styled.p`
  font-size: 16px;
  padding-left: 10px;
  font-size: 13px;
  line-height: 180%;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`

const ProfileContent = styled.div`
  width: 334px;
  height: 354px;
`
const DescritionContent = styled.div`
  margin: 20px auto;
  width: 293px;
  height: 93px;
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const HeadingContent = styled.h3`
  text-align: center;
  padding-top: 10px;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
`
const ParagraphContent = styled.p`
  font-weight: normal;
  font-size: 13px;
  padding-top: 10px;
  line-height: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`
