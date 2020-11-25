import React, { createContext, useState } from "react"

export const TutorContext = createContext()

const TutorContextProvider = props => {
  const [tutor] = useState({
    title: "Eurico",
    position: "Software Engineer",
    headingContent: "University of Cape Town",
    paragraphContent: "graduated 2018, 10 years experience in programming",
    headingContent1: "Programming Tutor",
    paragraphContent1:
      "I teach programming since 2015, I always loved this subject and  would like to help people with my knowledge and experinence.",
    headingContent2: "Angolan",
    paragraphContent2:
      "I'm from Angola, I am currently based in Cape Town, South Africa.",
  })

  return (
    <TutorContext.Provider value={{ tutor }}>
      {props.children}
    </TutorContext.Provider>
  )
}

export default TutorContextProvider
