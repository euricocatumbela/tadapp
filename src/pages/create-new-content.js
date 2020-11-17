import React, { useState } from "react"
import styled from "styled-components"
import NewForm from "../components/forms/NewForm"
import SEO from "../components/layout/seo"
import ContentAdd from "../components/sections/ContentAdd"

const NewContent = () => {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  return (
    <Hero>
      <NewForm onAdd={addNote} />
      <SEO title="create-new-content" />
      {notes.map(noteItem => {
        return <ContentAdd title={noteItem.title} content={noteItem.content} />
      })}
    </Hero>
  )
}

export default NewContent

const Hero = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 100px;
`
