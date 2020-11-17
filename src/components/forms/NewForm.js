import React, { useState } from "react"
import styled from "styled-components"
import SEO from "../layout/seo"

const NewForm = props => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  function HandleChange(event) {
    const { name, value } = event.target

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note)
    event.preventDefault()
  }

  return (
    <Hero>
      <SEO title="create-new-content" />
      <HeroGroup>
        <Title>Create new content type</Title>
        <Label>Title (required)</Label>
        <Input
          name="title"
          onChange={HandleChange}
          value={note.title}
          placeholder="For example Product, Blog Post, Author"
        ></Input>
        <Label>Description (required)</Label>
        <Content
          name="content"
          onChange={HandleChange}
          value={note.content}
          placeholder="Body"
        ></Content>
        <ButtonGroup>
          <AddButton onClick={submitNote}>Create</AddButton>
          <ExitButton>Cancel</ExitButton>
        </ButtonGroup>
      </HeroGroup>
    </Hero>
  )
}

export default NewForm

const Hero = styled.div`
  margin: 40px 0 0 400px;
  width: 628px;
  height: 500px;
  left: 70px;
  top: 112px;

  background: linear-gradient(
    184.82deg,
    rgba(0, 0, 0, 0.6) 3.89%,
    rgba(0, 0, 0, 0.91) 96.11%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`

const HeroGroup = styled.div`
  margin: 0px;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 30px;
`
const Title = styled.h1`
  margin-top: 15px;
  margin-right: 1px;
  margin-left: 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  color: #ffffff;
  border-bottom: 2px solid grey;
  padding-left: 60px;
  padding-bottom: 20px;
`

const Input = styled.input`
  width: 520px;
  height: 44px;
  margin-left: 60px;
  background: white;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  color: #536171; ;
`
const Content = styled.textarea`
  width: 520px;
  height: 100px;
  margin-left: 60px;
  color: white;
  background: white;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  color: #536171;
  /* Note: backdrop-filter has minimal browser support */
`
const AddButton = styled.button`
  margin-bottom: 10px;
  /* margin-left: 180px; */
  width: 100px;
  height: 50px;
  border-color: #16875d;
  background-color: #16875d;
  background-size: 100% 200%;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  font-weight: 600;
  line-height: 130%;
  cursor: pointer;
  margin-left: 60px;
  color: white;
`

const ExitButton = styled.div`
  margin-bottom: 10px;
  /* margin-left: 180px; */
  width: 100px;
  height: 50px;
  border-color: #16875d;
  background: gray;
  background-size: 100% 200%;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  font-weight: 600;
  line-height: 130%;
  cursor: pointer;
  margin-right: 320px;
  color: white;
  padding-top: 14px;
  padding-left: 10px;
`
const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Label = styled.text`
  color: white;
  margin-left: 60px;
`
