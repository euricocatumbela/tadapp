import React, { useContext } from "react"
import styled from "styled-components"
import { FooterContext } from "../../context/FooterContext"
import { Link } from "gatsby"

function FooterSection(props) {
  const { firstColumn, secondColumn } = useContext(FooterContext)

  return (
    <FooterHero>
      <FooterGroup>
        <FirstRowGroup>
          <Link to="/">
            <img alt="" src="images/icons/home.svg" />
            {firstColumn.home}
          </Link>
          <Link to="/content">
            <img alt="" src="images/icons/pen.svg" />
            {firstColumn.content}
          </Link>
          <Link to="/pricing">
            <img alt="" src="images/icons/pricing.svg" />
            {firstColumn.pricing}
          </Link>

          <Link to="/subjects">
            <img alt="" src="images/icons/courses.svg" />
            {firstColumn.courses}
          </Link>
          <Link to="/tutors">
            <img alt="" src="images/icons/more.svg" />
            {firstColumn.tutors}
          </Link>
        </FirstRowGroup>

        <SecondRowGroup>
          <Link to="/accout">
            <img alt="" src="images/icons/account.svg" />
            {secondColumn.account}
          </Link>
          <Link to="/help">
            <img alt="" src="images/icons/help.svg" />
            {secondColumn.help}
          </Link>
          <Link to="/tutoring">
            <img alt="" src="images/icons/tutorials.svg" />
            {secondColumn.tutoring}
          </Link>
          <Link to="/community">
            <img alt="" src="images/icons/team.svg" />
            {secondColumn.community}
          </Link>
          <Link to="/founders">
            <img alt="" src="images/icons/profile.svg" />
            {secondColumn.founders}
          </Link>
        </SecondRowGroup>

        <Wrapper>
          <TextWrapper>
            <Title>Site made with React, Gatsby, Amazon AWS</Title>
            <Content>takeanydoubt © 2020</Content>
            <Description>Terms of Service - Privacy Policy</Description>
          </TextWrapper>
        </Wrapper>
      </FooterGroup>
    </FooterHero>
  )
}

export default FooterSection

const FooterHero = styled.div`
  width: 100%;

  background: rgb(30, 19, 87);

  a {
    font-style: normal;
    font-size: 14px;
    font-weight: normal;
    line-height: 130%;
    color: rgb(255, 255, 255);
    text-align: center;
    margin: auto auto auto 80px;
    padding: 15px 18px 18px 22px;
    cursor: pointer;

    @media (max-width: 640px) {
      margin: auto auto auto 30px;
      font-size: 12px;
    }
  }

  a:hover {
    color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY (-2px);
    border-style: solid;
    border-radius: 10px;
    cursor: pointer;
    background: rgba(250, 250, 250, 0.25);
  }

  img {
    margin: 8px 12px -6px 0px;
  }
`

const FooterGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 232px;
  padding-top: 100px;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const FirstRowGroup = styled.div`
  margin-left: 240px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 20px;

  @media (max-width: 640px) {
    margin-left: 0px;
  }
`
const SecondRowGroup = styled.div`
  margin-left: 10px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 30px;

  @media (max-width: 640px) {
    margin-right: 0px;
  }
`

const Wrapper = styled.div`
  margin-top: 60px;
  margin-left: 10px;
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 640px) {
    position: absolute;
    left: 60px;
    text-align: center;
    font-size: 13px;
  }
`

const Title = styled.h2`
  color: rgba(255, 255, 255, 0.6);
`

const Content = styled.p`
  color: rgba(255, 255, 255, 0.6);
`
const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
`
