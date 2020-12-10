import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// import { Link } from "gatsby"

export default function AuthForm(props) {
  const { isRegistered } = props

  return (
    <Wrapper isOpen={isRegistered}>
      <img alt="" src="images/galery/cover.svg" />
      <MyForm>
        <FormGroup>
          <Title>{isRegistered ? "Sign in" : "Sign Up"}</Title>
          <Subtitle> Access to your subjects, quiz and source files</Subtitle>

          {isRegistered ? null : (
            <FormElement>
              <Icon alt="" src="images/icons/user.svg" />
              <Input placeholder="First name"></Input>
            </FormElement>
          )}

          {isRegistered ? null : (
            <FormElement>
              <Icon alt="" src="images/icons/user.svg" />
              <Input placeholder="Last name"></Input>
            </FormElement>
          )}

          <FormElement>
            <Icon alt="" src="images/icons/email.svg" />
            <Input placeholder="Email address"></Input>
          </FormElement>

          <FormElement>
            <Icon alt="" src="images/icons/lock.svg" />
            <Input placeholder="Password"></Input>
          </FormElement>

          <SignUpButton>{isRegistered ? " Sign In" : "Sign Up"}</SignUpButton>
          <Description>
            {isRegistered
              ? "Don't have an account?"
              : "By clicking on Sign up, you agree to our Terms of service and Privacy policy."}
            <Link to={isRegistered ? "/signup" : "/signin"}>
              {isRegistered ? " Sign up" : null}
            </Link>
            {/* {register ? <Register /> : <Login />} */}
          </Description>
          <Description>
            {isRegistered ? "Forgot password? " : "Already have an account"}
            <Link to={isRegistered ? "/reset" : "/signin"}>
              {isRegistered ? " Reset password" : " Sign in"}
            </Link>
          </Description>
        </FormGroup>
      </MyForm>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 200px;

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
  opacity: ${props => (props.isOpen ? 8 : 1)};
  z-index: 1;
`

const MyForm = styled.div`
  margin-top: 20px;
`
const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;
`
const Subtitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: white;
`
const FormGroup = styled.div`
  width: 320px;
  height: 488.5px;
  display: grid;
  grid-gap: 1px;
  color: white;
  margin: 50px 0 0px 0;
`

const FormElement = styled.div`
  font-size: 15px;
  width: 320px;
  height: 46px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;
  position: relative;
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
const Icon = styled.img`
  position: absolute;
  top: 10px;
  left: 14px;
`
const SignUpButton = styled.button`
  width: 320px;
  height: 44px;
  left: 0px;
  top: 284px;
  font-style: normal;
  font-size: 17px;
  line-height: 130%;
  color: rgb(250, 250, 250);
  font-weight: 600;

  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border-radius: 30px;
`
const Description = styled.p`
  color: white;
  font-weight: normal;
  font-size: 12px;

  a {
    color: rgb(47, 184, 255);
    font-weight: bold;
    text-decoration: none;
    margin: 0px 0px 0px 5px;
    cursor: pointer;
  }
`
