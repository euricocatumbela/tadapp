import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Sigin from "../../pages/signin"

const MobileList = () => {
  return (
    <MobileHero>
      <MobileGroup>
        <Link to="/content">
          <img alt="" src="images/icons/file.svg" />
          Content
        </Link>
        <Link to="/pricing">
          <img alt="" src="images/icons/pricing.svg" />
          Pricing
        </Link>
        <Link to="/tutoring">
          <img alt="" src="images/icons/tutorials.svg" />
          Tutoring
        </Link>
        <Link to="/tutoring">
          <img alt="" src="images/icons/courses.svg" />
          Subjects
        </Link>
        <Link to="/tutors">
          <img alt="" src="images/icons/team.svg" />
          Tutors
        </Link>
        <Link to="/tutoring">
          <img alt="" src="images/icons/signout.svg" />
          SignIn
        </Link>
      </MobileGroup>
    </MobileHero>
  )
}

const ToggleButton = () => {
  const [active, setActive] = useState(false)
  function handleClick() {
    setActive(!active)
  }
  return (
    <>
      <NewButton onClick={handleClick}>
        <img alt="" src="images/icons/account.svg" />
      </NewButton>
      {active ? <Sigin /> : null}
    </>
  )
}

const List = () => {
  return (
    <HeaderGroup>
      <Link to="/">TakeAnyDoubt</Link>
      <Link to="/content">
        <img alt="" src="images/icons/file.svg" />
        Content
      </Link>
      <Link to="/pricing">
        <img alt="" src="images/icons/pricing.svg" />
        Pricing
      </Link>
      <Link to="/tutoring">
        <img alt="" src="images/icons/tutorials.svg" />
        Tutoring
      </Link>
      <ToggleButton />
    </HeaderGroup>
  )
}

const MenuMobile = () => {
  const [active, setActive] = useState(false)
  return (
    <HeroMenu>
      <Button onClick={() => setActive(!active)}>
        {active ? "" : ""}
        <img alt="" src="/images/icons/hamburger.svg" />
      </Button>
      {active && <MobileList />}
    </HeroMenu>
  )
}

function HeaderSection() {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:640px)").matches
  )

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:640px)").matches)
    })
  })

  return <HeaderHero>{isMobile ? <MenuMobile /> : <List />}</HeaderHero>
}

export default HeaderSection

const HeaderHero = styled.div`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;

  a {
    color: white;
    padding: 12px 20px;
    box-shadow: none;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    text-rendering: optimizelegibility;
    background: none;
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.2) 0s;
  }

  a:hover {
    color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
    background: rgba(250, 250, 250, 0.25);
  }
`
const HeaderGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;

  img {
    margin: 0px 10px -10px 0px;
  }
`

const MobileHero = styled.div`
  width: 220px;
  height: 350.5px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
const MobileGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);

  a {
    font-size: 15px;
    font-weight: normal;
    color: #ffffff;
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
    width: 180px;
    height: 44px;
    /* background: rgba(255, 255, 255, 0.1); */
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
  }

  img {
    margin: 0px 10px -10px 0px;
    width: 25px;
    height: 25px;
  }
`

const HeroMenu = styled.div`
  position: fixed;
  left: 140px;
  top: 69px;
`
const Button = styled.button`
  position: fixed;
  left: 310px;
  top: 10px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  width: 50px;
  height: 50px;
  border-radius: 90px;
  border: none;
  outline: none;
  img {
    border-style: none;
    width: 30px;
    height: 30px;
  }
`

// const ButtonMenu = styled.button`
//   background: rgba(15, 14, 71, 0.3);
//   box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
//   backdrop-filter: blur(40px);
//   width: 50px;
//   height: 50px;
//   border-radius: 90px;
//   border: none;
//   outline: none;
//   img {
//     border-style: none;

//     margin: 0px 10px -4px 6px;
//   }
// `

const NewButton = styled.button`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  width: 50px;
  height: 50px;
  border-radius: 90px;
  border: none;
  outline: none;
  img {
    border-style: none;

    margin: 0px 10px -4px 6px;
  }
`
