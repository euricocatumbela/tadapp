import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { SideBarContext } from "../../context/SideBarContext"

const SideBar = props => {
  const { adminDash } = useContext(SideBarContext)
  return (
    <SideBarHero>
      <SideBarMeno>
        <img alt="" src="/images/icons/hamburger.svg" />
        {adminDash.title}
      </SideBarMeno>
      <UlList>
        <Link to="/admin">
          <LiElement1>
            <Link1>
              <img alt="" src="/images/icons/home.svg" />
              {adminDash.home}
            </Link1>
          </LiElement1>
        </Link>

        <Link to="/student-page">
          <LiElement2>
            <Link2>
              <img alt="" src="/images/icons/team.svg" />
              {adminDash.student}
            </Link2>
          </LiElement2>
        </Link>
        <Link to="/tutor">
          <LiElement3>
            <Link3>
              <img alt="" src="/images/icons/profile.svg" />
              {adminDash.tutor}
            </Link3>
          </LiElement3>
        </Link>
        <Link to="/tutor">
          <LiElement4>
            <Link4>
              <img alt="" src="/images/icons/book.svg" />
              {adminDash.subject}
            </Link4>
          </LiElement4>
        </Link>
        <Link>
          <LiElement5>
            <Link5>
              <img alt="" src="/images/icons/account.svg" />
              {adminDash.manage}
            </Link5>
          </LiElement5>
        </Link>
        <Link>
          <LiElement6>
            <Link6>
              <img alt="" src="/images/icons/signout.svg" />
              {adminDash.signout}
            </Link6>
          </LiElement6>
        </Link>
      </UlList>
    </SideBarHero>
  )
}

export default SideBar

const SideBarHero = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 300px;
  position: fixed;

  background: linear-gradient(180deg, #d37ee6 0%, #4926ad 100%);
  border-radius: 80px;

  overflow: hidden;
`
const SideBarMeno = styled.div`
  img {
    margin: 0 30px -4px 10px;
  }
  text-align: center;
  color: white;
  font-size: 25px;
  font-weight: 600;
  line-height: 64px;
`
const UlList = styled.ul`
  position: relative;
  right: 80px;
  height: 100%;
  width: 130%;
  list-style: none;
`
const LiElement1 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;
    background: rgb(30, 19, 87);
  }
`

const LiElement2 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;
    background: rgb(30, 19, 87);
  }
`
const LiElement3 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;
    background: rgb(30, 19, 87);
  }
`

const LiElement4 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;

    background: rgb(30, 19, 87);
  }
`
const LiElement5 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;
    background: rgb(30, 19, 87);
  }
`
const LiElement6 = styled.li`
  padding-left: 130px;
  line-height: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #333;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  :hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 10px 3px #222;
    cursor: pointer;
    background: rgb(30, 19, 87);
  }
`
const Link1 = styled.a`
  color: var(--labelPrimary);
  font-size: 18px;
  line-height: 1.46667;
  font-weight: 400;
  letter-spacing: 0;
  text-overflow: ellipsis;

  img {
    margin: 0 10px -7px 10px;
  }
`

const Link2 = styled.a`
  color: var(--labelPrimary);
  font-size: 18px;
  line-height: 1.46667;
  font-weight: 400;
  letter-spacing: 0;
  text-overflow: ellipsis;
  img {
    margin: 0 10px -7px 10px;
  }

  @media (max-width: 640px) {
  }
`
const Link3 = styled.a`
  color: white;
  font-size: 18px;
  line-height: 1.46667;
  font-weight: 400;
  letter-spacing: 0;
  text-overflow: ellipsis;

  img {
    margin: 0 10px -7px 10px;
  }

  @media (max-width: 640px) {
  }
`
const Link4 = styled.a`
  color: var(--labelPrimary);
  font-size: 18px;
  line-height: 1.46667;
  font-weight: 400;
  letter-spacing: 0;
  img {
    margin: 0 10px -7px 10px;
  }

  @media (max-width: 640px) {
  }
`
const Link5 = styled.a`
  font-size: 18px;
  line-height: 1.46667;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--labelPrimary);
  img {
    margin: 0 10px -7px 10px;
  }

  @media (max-width: 640px) {
  }
`
const Link6 = styled.a`
  color: var(--labelPrimary);
  font-size: 18px;
  line-height: 1.46667;
  font-weight: 400;
  letter-spacing: 0;
  img {
    margin: 0 10px -7px 10px;
  }
  @media (max-width: 640px) {
  }
`
