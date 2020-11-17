import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const StudentContentPage = () => {
  return (
    <Hero>
      <ContentTitle>
        <Title>Content</Title>
      </ContentTitle>
      <Content>
        <SubjectContent>
          <Link>Subject Contents</Link>
        </SubjectContent>
        <PastPapers>
          <Link>Memos/Past papers</Link>
        </PastPapers>
        <Tasks>
          <Link>Tasks</Link>
        </Tasks>
      </Content>
    </Hero>
  )
}

export default StudentContentPage

const Hero = styled.div`
  margin-top: 20px;
  margin-left: 350px;
  margin-right: 10px;
`
const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: black;
`
const ContentTitle = styled.div`
  margin-left: 5px;
  margin-bottom: 60px;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 971px;
  height: 584px;
  background: rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 20px;

  a {
    text-decoration: underline;
    line-height: 90px;
    font-size: 30px;
    margin-left: 40px;
    color: black;
    cursor: pointer;
  }
`
const SubjectContent = styled.div`
  width: 100%;
  height: 95px;
  background: rgba(255, 250, 250, 0.2);
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`
const PastPapers = styled.div`
  width: 100%;
  height: 95px;
  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`
const Tasks = styled.div`
  width: 100%;
  height: 95px;
  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`
