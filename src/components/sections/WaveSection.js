import React from "react"
import styled from "styled-components"
import Wave from "../../components/sections/Wave"

function WaveSection(props) {
  return (
    <SectionGroup image={props.image}>
      <WaveTop>
        <Wave />
      </WaveTop>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <SectionLogo src={props.logo} />
      <SectionTitleGroup>
        <SectionTitle> {props.title}</SectionTitle>
        <SectionText> {props.text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  )
}

export default WaveSection

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 640px) {
    height: 820px;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 78px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 40px;
  grid-gap: 20px;
  grid-auto-rows: auto 100%;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  @media (max-width: 720px) {
    font-size: 40px;
  }
`
const SectionText = styled.p`
  color: white;
  line-height: 1.2;
`
const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`
const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`
