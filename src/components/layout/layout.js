import React from "react"
import FooterContextProvider from "../../context/FooterContext"
import FooterSection from "../sections/FooterSection"
import { GlobalStyle } from "../styles/GlobalStyle"

import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>

      <FooterContextProvider>
        <FooterSection />
      </FooterContextProvider>
    </>
  )
}

export default Layout
