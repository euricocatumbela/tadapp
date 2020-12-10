import React from "react"
import styled from "styled-components"
import { Caption2, Smalltext } from "../styles/TextStyles"
import { Link } from "gatsby"

const PurchaseButton = props => {
  const { title, subtitle } = props
  return (
    <Link to="/signin">
      <Wrapper>
        <IconWrapper>
          <RingIcon src="images/icons/icon-ring.svg" />
          <Icon src="images/icons/credit.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Purshace a Course"}</Title>
          <Subtitle>{subtitle || "Buy Your course today"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

export default PurchaseButton

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(250, 255, 255, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  margin-left: 20px;
  gap: 20px;

  *,
  & {
    transition: 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(250, 255, 255, 0.5);

    transform: translateY(-3px);
  }
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(Smalltext)`
  color: black;
  opacity: 0.7;
`
const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(30px);
  display: grid;
  justify-content: center;
  align-content: center;
  justify-content: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const RingIcon = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`
