import React, { useEffect, useState } from "react"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { listSubjects } from "../graphql/queries"
import awsExports from "../aws-exports"

Amplify.configure(awsExports)

const Subject = () => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    fetchSubjects()
  }, [])

  async function fetchSubjects() {
    try {
      const subjectData = await API.graphql(graphqlOperation(listSubjects))
      const subjects = subjectData.data.listSubjects.items
      setSubjects(subjects)
    } catch (err) {
      console.log("error fetching subjects")
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      {subjects.map((subject, index) => (
        <div key={subject.id ? subject.id : index}>
          <p>{subject.name}</p>
          <p>{subject.course}</p>
          <p>{subject.level}</p>
        </div>
      ))}
    </div>
  )
}

export default Subject
