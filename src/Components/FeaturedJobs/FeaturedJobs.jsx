import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

  const [jobs, setJobs] = useState([]);
  // not the best way to load show all jobs data
  const [dataLength, setDataLength] = useState(4);

  useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data));
  },[])

  return (
    <div className="mt-32">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2">
        {
          jobs.slice(0, dataLength).map(job=> <Job key={jobs.id} job={job}></Job>)
        }
      </div>
      <div className={`text-center mt-5 ${dataLength === jobs.length ? 'hidden' : ''}`}>
        <button 
        onClick={()=> setDataLength(jobs.length)}
        className="btn btn-primary text-xl font-bold">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
