import React, { useState } from "react"
import styled from "styled-components"
import SigninForm from "./SigninForm"
const SignUpForm = () => {
  const [active, setActive] = useState(false)
  return (
    <Hero>
      <HeroCard>
        <HeroGroup>
          <img alt="" src="images/galery/cover.svg" />
        </HeroGroup>
        <FormGroup>
          <Title>Sign up</Title>
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
          <SignUpButton>Sign Up</SignUpButton>
          <Description>
            By clicking on Sign up, you agree to our Terms of service and
            Privacy policy.
          </Description>

          <Description onClick={() => setActive(!active)}>
            Already have an account? Sign in
          </Description>
          {active && <SigninForm />}
        </FormGroup>
      </HeroCard>
    </Hero>
  )
}

export default SignUpForm

const Hero = styled.div`
  position: absolute;
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
  font-weight: normal;
  font-size: 12px;
`

const FormGroup = styled.form`
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
  /* text-align: center; */
  margin-left: 40px;
  color: white;
  font-weight: normal;
  font-size: 15px;
  width: 250px;
  height: 44px;
  background: transparent;
  border: none;
  /* border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px); */
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
    position: absolute;
    top: 5px;
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
    position: absolute;
    top: 5px;
    left: 10px;
    /* top: 210px; */
    height: 30px;
    width: 30px;
    border-radius: 100px;
  }
`
