import React from "react";
import App from "../App";

const Card = (job) => {
      return (
       
    <div className="job-card" key={key}>
    <h3>{job.company}</h3>
    <p class="title">{job.title}</p>
    <p class="details">{job.type} | {job.level}</p>
    <p class="salary">{job.salary}</p>
    <p class="location">{job.location}</p>
    <button>Apply now</button>
  </div>
  )
}





export default Card