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
          <Link to="/signin">
            <img alt="" src="images/icons/user.svg" />
            {firstColumn.signin}
          </Link>
          <Link to="/signup">
            <img alt="" src="images/icons/user.svg" />
            {firstColumn.signup}
          </Link>

          <Link to="/pricing">
            <img alt="" src="images/icons/pricing.svg" />
            {firstColumn.pricing}
          </Link>
          <Link to="/tutors">
            <img alt="" src="images/icons/more.svg" />
            {firstColumn.tutor}
          </Link>
        </FirstRowGroup>

        <SecondRowGroup>
          <Link to="tutors">
            <img alt="" src="images/icons/account.svg" />
            {secondColumn.account}
          </Link>
          <Link to="tutors">
            <img alt="" src="images/icons/courses.svg" />
            {secondColumn.subjects}
          </Link>
          <Link to="/tutoring">
            <img alt="" src="images/icons/help.svg" />
            {secondColumn.help}
          </Link>
          <Link to="/apply">
            <img alt="" src="images/icons/team.svg" />
            {secondColumn.community}
          </Link>
          <Link to="tutors">
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
  background: url("/images/waves/footer-wave3.svg");

  a {
    width: 150px;
    height: 50px;
    font-size: 15px;
    font-weight: 400;
    color: rgb(255, 255, 255);
    /* text-align: center; */
    margin: auto auto auto 80px;
    padding-bottom: 20px;
    cursor: pointer;
    @media (max-width: 640px) {
      margin: auto auto auto 30px;
      font-size: 12px;
    }
  }

  a:hover {
    color: rgba(255, 255, 255, 0.6);
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
  padding: 105px 30px;

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
