import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Header from "../components/sections/Header"
import { H3 } from "../components/styles/TextStyles"
import { engineeringData, scienceData } from "../data/SubjectData"
const Subject = () => {
  return (
    <Wrapper>
      <Header />

      <TextWrapper>
        <Title>All TakeAnyDoubt Subjects</Title>

        <Subtitle>Engineering</Subtitle>
        <List>
          {engineeringData.map((item, index) => (
            <Link to={item.link} key={index}>
              {item.title}
            </Link>
          ))}
        </List>
        <Subtitle>Science</Subtitle>
        <List>
          {scienceData.map((item, index) => (
            <Link to={item.link} key={index}>
              {item.title}
            </Link>
          ))}
        </List>
      </TextWrapper>
      <Layout />
    </Wrapper>
  )
}

export default Subject

const Wrapper = styled.div``
const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 150px 0;
`
const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  color: rgb(255, 255, 255, 0.6);
`
const Subtitle = styled(H3)`
  margin: 60px 0 30px 280px;
  color: rgb(0, 0, 0, 0.5);
`
const List = styled.p`
  display: grid;
  grid-template-columns: 350px 350px auto;
  justify-content: center;
  gap: 10px;
  font-size: 15px;

  a {
    color: rgb(255, 255, 255, 0.6);
    font-weight: 400;
  }
`
