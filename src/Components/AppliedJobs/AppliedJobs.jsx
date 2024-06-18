import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import AppliedJobsCard from "./AppliedJobsCard";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [jobsApplied, setJobApplied] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilterJobs = filter => {
    if (filter === 'all'){
      setDisplayJobs(jobsApplied);
    }
    else if (filter === 'remote'){
      const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === "Remote");
      setDisplayJobs(remoteJobs);
    }
    else if (filter === 'onsite'){
      const onsiteJobs = jobsApplied.filter(job => job.remote_or_onsite === "Onsite");
      setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      // console.log(jobsApplied);
      setJobApplied(jobsApplied);
    }
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Total Applied Jobs : {jobsApplied.length}{" "}
      </h2>
      <details className="dropdown">
        <summary className="m-1 btn">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleFilterJobs ('all')}><a>All</a></li>
          <li onClick={() => handleFilterJobs ('remote')}><a>Remote</a></li>
          <li onClick={() => handleFilterJobs ('onsite')}><a>Onsite</a></li>
        </ul>
      </details>
      <div className="mt-36">
        {displayJobs.map((job) => (
          <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
