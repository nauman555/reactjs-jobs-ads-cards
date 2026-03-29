import React from "react";
import App from "../App";

const Card = ({ job }) => {
      return (
       
    <div className="job-card" >
    <h3>{job.company}</h3>
    <p className="title">{job.title}</p>
    <p className="details">{job.type} | {job.level}</p>
    <p className="salary">{job.salary}</p>
    <p className="location">{job.location}</p>
    <button>Apply now</button>
  </div>
  )
}





export default Card