import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { menoData, mobileData } from "../../data/MenuData"

function Laptop() {
  return (
    <Wrapper>
      <img width="60px" alt="logo" src="/images/icons/tad.svg" />
      <MenuWaWrapper>
        {menoData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem>
              <img alt={item.title} src={item.icon} />
              {item.title}
            </MenuItem>
          </Link>
        ))}
      </MenuWaWrapper>
    </Wrapper>
  )
}

const MobileList = () => {
  return (
    <MobileHero>
      {mobileData.map((item, index) => (
        <Link to={item.link} key={index}>
          <MenuItemMobile>
            <img alt={item.title} src={item.icon} />
            {item.title}
          </MenuItemMobile>
        </Link>
      ))}
    </MobileHero>
  )
}

function Mobile() {
  const [active, setActive] = useState(false)

  return (
    <MobileMenu>
      <ButtonMobile onClick={() => setActive(!active)}>
        {active ? "" : ""}
        <img alt="" src="/images/icons/hamburger.svg" />
        {active && <MobileList />}
      </ButtonMobile>
    </MobileMenu>
  )
}

export default function Header() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:640px)").matches
  )

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width:640px)").matches)
    })
  })

  return <>{isMobile ? <Mobile /> : <Laptop />}</>
}

// ****************** Header ************************************************//
const Wrapper = styled.div`
  position: absolute;
  /* background: #1f4c70; */
  top: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`
const MenuWaWrapper = styled.div`
  display: grid;
  gap: 30px;

  grid-template-columns: repeat(4, 1fr);
`

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.9);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 20px;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`

// ****************** Mobile ************************************************//
const MobileMenu = styled.div`
  /* position: relative;
  right: 100px; */
`
const ButtonMobile = styled.button`
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

const MobileHero = styled.div`
  position: absolute;
  right: 1px;
  top: 63px;
  width: 220px;
  height: 350px;
  background: #16145a;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
`
const MenuItemMobile = styled.div`
  margin: 0 auto;
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  width: 180px;
  height: 50px;
  display: grid;
  grid-template-columns: 1px auto;
  align-items: center;
`
