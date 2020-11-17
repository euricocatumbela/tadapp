import React, { createContext, useState } from "react"

export const SideBarContext = createContext()

const SideBarContextProvider = props => {
  const [studentDash] = useState({
    title: "myClassroom",
    home: "Home",
    content: "Content",
    classroom: "MyClassroom",
    account: "Account",
    settings: "Settings",
    signout: "Signout",
  })

  const [tutorDash] = useState({
    title: "myboard",
    home: "Home",
    content: "Content Creator",
    myStudent: "MyStudents",
    classroom: "Classroom",
    calendar: "Calendar",
    account: "Account",
    settings: "Settings",
    signout: "Signout",
  })

  const [adminDash] = useState({
    title: "Dashboard",
    home: "Home",
    student: "Student",
    tutor: "Tutor",
    subject: "Subject",
    manage: "Manage",
    signout: "Signout",
  })

  return (
    <SideBarContext.Provider value={{ adminDash, studentDash, tutorDash }}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarContextProvider
