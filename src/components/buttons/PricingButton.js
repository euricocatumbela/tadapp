import React from "react"
import styled from "styled-components"

const PricingButton = () => {
  return (
    <Button>
      <img alt="" src="images/icons/check-blue.svg" />
      Subscribe
    </Button>
  )
}

export default PricingButton

const Button = styled.button`
  margin: 0 auto;
  width: 269px;
  height: 60px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  font-size: 17px;
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  cursor: pointer;
  img {
    margin: 0 8px -6px 10px;
    border-style: none;
  }
`
