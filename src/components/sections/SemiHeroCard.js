import React from "react"

import styled from "styled-components"

const SemiHeroCard = props => {
  return (
    <Card>
      <img alt="" src={props.image} />
    </Card>
  )
}

export default SemiHeroCard

const Card = styled.div`
  width: 320px;
  height: 330px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: rotateY(-20deg) rotateX(30deg);

  perspective: 5000;

  * {
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    transform: rotateY(0deg) rotateY(0);
    filter: brightness(130%) saturate(100%);
  }

  @media (max-width: 640px) {
    width: 300px;
    height: 225px;
  }

  img {
    position: absolute;
    top: 0;
    height: 100%;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`
