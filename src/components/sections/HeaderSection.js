import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
function HeaderSection() {
  
  return (
    <HeaderHero>
      <HeaderGroup>
        <Link to="/">Home</Link>
        <Link to="/content">Content</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/tutoring">Tutoring</Link>
       
      </HeaderGroup>
   </HeaderHero>
)

}

export default HeaderSection

const HeaderHero = styled.div`
 position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
`;
const HeaderGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;
`;
