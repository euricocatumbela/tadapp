import React from "react"
import styled from "styled-components"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import { Link } from "gatsby"

const ContentFile = () => {
  return (
    <Hero>
      {/* <h1 style={{ color: "red" }}>Hello</h1> */}
      <HeroGroup>
        <CreateContent>
          <Title> Create new content</Title>
          <Link to="/create-new-content">
            <Buttom>+</Buttom>
          </Link>
        </CreateContent>
        <UploadMemo>
          <Title>Upload a content</Title>
          <CloudUploadIcon />
        </UploadMemo>
        <CreateTask>
          <Title>Create a new task</Title>
          <Buttom to="/new-content-creator">+</Buttom>
        </CreateTask>
      </HeroGroup>
    </Hero>
  )
}

export default ContentFile

const Hero = styled.div`
  margin-top: 20px;
  margin-left: 400px;
`
const HeroGroup = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
`
const CreateContent = styled.div`
  width: 465px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid purple;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
`
const UploadMemo = styled.div`
  width: 465px;
  border-bottom: 1px solid purple;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid purple;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;

  svg {
    width: 60px;
    height: 60px;
    color: blue;
    cursor: pointer;
  }
`
const CreateTask = styled.div`
  width: 465px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid purple;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
`
const Title = styled.h1`
  font-family: "Kanit", sans-serif;
  margin: 20px 40px 0 0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`
const Buttom = styled.button`
  margin-bottom: 10px;
  /* margin-left: 180px; */
  width: 60px;
  height: 60px;
  background: radial-gradient(
    218.51% 281.09% at 100% 100%,
    rgba(253, 63, 51, 0.6) 0%,
    rgba(76, 0, 200, 0.6) 45.83%,
    rgba(76, 0, 200, 0.6) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 90px;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  font-weight: 600;
  line-height: 130%;
  cursor: pointer;
`
