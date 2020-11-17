import React, { createContext, useState } from "react"
export const FooterContext = createContext()

function FooterContextProvider(props) {
  const [firstColumn] = useState({
    home: "Home",
    content: "Content",
    pricing: "Pricing",
    courses: "Courses",
    tutors: "Tutors",
  })

  const [secondColumn] = useState({
    account: "Account",
    help: "HelpMe",
    tutoring: "Tutoring",
    community: "Community",
    founders: "Founders",
  })

  return (
    <FooterContext.Provider value={{ firstColumn, secondColumn }}>
      {props.children}
    </FooterContext.Provider>
  )
}

export default FooterContextProvider
