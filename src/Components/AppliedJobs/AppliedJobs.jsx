import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {getStoredJobApplication} from "../../Utility/localStorage"
import AppliedJobsCard from "./AppliedJobsCard";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [jobsApplied, setJobApplied] = useState([]);

    useEffect(() =>{
      const storedJobsIds = getStoredJobApplication();
      if (jobs.length > 0){
        const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id))
        // console.log(jobsApplied);
        setJobApplied(jobsApplied)
      }
    },[])

  return (
    <div>
      <h2 className="text-3xl font-semibold">Total Applied Jobs : {jobsApplied.length}  </h2>

      <div className="mt-36">
        {
          jobsApplied.map(job => <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;