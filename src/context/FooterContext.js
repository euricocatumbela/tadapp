import React, { createContext, useState } from "react"
export const FooterContext = createContext()

function FooterContextProvider(props) {
  const [firstColumn] = useState({
    home: "Home",
    signin: "Log in",
    signup: "Signup",
    pricing: "Pricing",
    tutor: "tutors",
  })

  const [secondColumn] = useState({
    account: "Account",
    subjects: "Subjects",
    help: "HelpMe",
    community: "Become a tutor",
    founders: "Founders",
  })

  return (
    <FooterContext.Provider value={{ firstColumn, secondColumn }}>
      {props.children}
    </FooterContext.Provider>
  )
}

export default FooterContextProvider
