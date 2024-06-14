import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineLocationOn, MdOutlineLocalPhone, MdOutlineEmail} from "react-icons/md";
import { TiBriefcase } from "react-icons/ti";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-60">Job Details</h2>
      <img src={job.logo} alt="" />
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border space-y-4 md:col-span-3">
          <h2><span className="font-bold">Job Description:</span>{job.job_description}</h2>
          <h2><span className="font-bold">Job Responsibility:</span>{job.job_responsibility}</h2>
          <h2 className="font-bold">Education Requirements:</h2>
          <p>{job.educational_requirements}</p>
          <h2 className="font-bold">Experiences:</h2>
          <p>{job.experiences}</p>
        </div>
        <div className="border bg-blue-100 p-4 rounded-lg">
          <div className="text-xl font-bold">Job Details</div>
          <div className="my-4">
          <h2 className="flex"><MdOutlineLocationOn className="text-xl mr-2"></MdOutlineLocationOn>Salary:{job.salary} (Per Month)</h2>
          <h2 className="flex "><TiBriefcase className="text-2xl mr-2"></TiBriefcase> Job Title:{job.job_title}</h2>
        </div>
        <div className="space-y-2">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <h2 className="flex "><MdOutlineLocalPhone className="text-2xl mr-2"></MdOutlineLocalPhone> Phone: {job.contact_information.phone}</h2>
        <h2 className="flex "><MdOutlineEmail className="text-2xl mr-2"></MdOutlineEmail> Email: {job.contact_information.email}</h2>
        <h2 className="flex "><MdOutlineLocationOn className="text-5xl mr-2"></MdOutlineLocationOn> Address: {job.contact_information.address}</h2>
        </div>
        <button className="btn btn-primary w-full mt-3 text-xl font-black text-white">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;