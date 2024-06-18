import { MdOutlineLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Job = ({ job }) => {
  const {id,logo,job_title,company_name,remote_or_onsite, location,job_type,salary} = job;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <img className="w-14" src={logo} />
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex">
          <h2 className="mr-4 p-2 border border-purple-500 rounded font-extrabold text-purple-600">
            {remote_or_onsite}
          </h2>
          <h2 className="mr-4 p-2 border border-purple-500 rounded font-extrabold text-purple-600">
            {job_type}
          </h2>
        </div>
        <div className="flex my-4">
          <h2 className="flex items-center"><MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn>{location}</h2>
          <h2 className="flex items-center ml-3"><BiDollarCircle className="text-2xl mr-2"></BiDollarCircle> Salary:{salary}</h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary bg-gradient-to-r from-[#9873FF] to-[#7E90FE]">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
