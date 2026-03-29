import React from "react"
import Card from "./Components/card"


const jobs = [
  {
    company: "Amazon",
    title: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    company: "Google",
    title: "Graphic Designer",
    type: "Part-Time",
    schedule: "Flexible Schedule",
    salary: "$150–220k",
    location: "Kochi, India"
  },

];
function App() {
  

  return (
   
    <div class="job-grid">
    {jobs.map((job, index) => (
      <Card key={index} job={job} />
    ))}
  </div>
  )
}

export default App
