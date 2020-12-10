import React, { useState } from "react"
import styled from "styled-components"
import SignUp from "../../pages/signup"

const SigninForm = () => {
  const [active, setActive] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <Hero>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Active" : "Not Uctive"}
        {isActive ? <SigninForm /> : null}
      </button>

      <HeroCard>
        <HeroGroup>
          <img alt="" src="images/galery/cover.svg" />
        </HeroGroup>
        <FormGroup>
          <Title>Sign in</Title>
          <TitleDescription>
            Access to 24h of subjects, quiz and source files
          </TitleDescription>

          <InputDiv1>
            <Input placeholder="Email address"></Input>
            <img alt="" src="images/icons/email.svg" />
          </InputDiv1>
          <InputDiv2>
            <Input placeholder="Password"></Input>
            <img alt="" src="images/icons/lock.svg" />
          </InputDiv2>
          <SignUpButton> Sign in</SignUpButton>

          <Description>
            Don't have an account?
            <Span onClick={() => setActive(!active)}> Sign in</Span>
          </Description>
          {active ? <SignUp /> : null}

          <Description>Forgot password? Reset password</Description>
          <Description>Don't have a password yet? Set password</Description>
        </FormGroup>
      </HeroCard>
    </Hero>
  )
}
export default SigninForm

const Hero = styled.div`
  position: absolute;
  top: 30px;
  left: 230px;
  right: 200px;
`

const HeroCard = styled.div`
  width: 960px;
  height: 610px;
  background: rgba(50, 61, 109, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const HeroGroup = styled.div`
  width: 360px;
  height: 570px;

  img {
    position: absolute;
    top: 0;
    right: 510px;
    height: 100%;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`
const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;
`
const Description = styled.p`
  color: white;
  font-weight: normal;
  font-size: 12px;
`

const FormGroup = styled.form`
  color: white;
  margin: 50px 0 0px 0;
  width: 320px;
  height: 488.5px;
  display: grid;
  grid-gap: 1px;

  a {
    color: blue;
  }
`
const Input = styled.input`
  margin-left: 60px;
  color: white;
  font-weight: normal;
  font-size: 15px;
  width: 250px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: 30px;
  outline: none;
`

const SignUpButton = styled.button`
  width: 320px;
  height: 44px;
  left: 0px;
  top: 284px;

  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border-radius: 30px;
`

const TitleDescription = styled.p`
  font-weight: normal;
  font-size: 15px;
`
const InputDiv1 = styled.div`
  font-size: 15px;
  width: 320px;
  height: 46px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;

  img {
    position: relative;
    bottom: 40px;
    left: 10px;
    /* top: 210px; */
    height: 30px;
    width: 30px;
    border-radius: 100px;
  }
`
const InputDiv2 = styled.div`
  width: 320px;
  height: 46px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;

  img {
    position: relative;
    bottom: 40px;
    left: 10px;
    /* top: 210px; */
    height: 30px;
    width: 30px;
    border-radius: 100px;
  }
`

const Span = styled.span`
  color: cyan;
`
