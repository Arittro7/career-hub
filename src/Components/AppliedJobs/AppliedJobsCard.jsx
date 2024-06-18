import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const AppliedJobsCard = ({job}) => {

  const {id,logo,job_title,company_name,remote_or_onsite, location,job_type,salary} = job;
  return (
    <div className='flex justify-between items-center'>
      <div className='flex mb-6'>
      <div className='mr-3 h-[140px] flex justify-center items-center'>
        <img className='w-32 p-3' src={logo} alt="" />
      </div>
      <div>
        <h2 className='text-xl font-bold'>{job_title}</h2>
        <h2 className='font-semibold'>{company_name}</h2>
        <div className='flex mt-2'>
          <h2 className="mr-4 p-1 border border-purple-500 rounded font-extrabold text-purple-600">{remote_or_onsite}</h2>
          <h2 className="mr-4 p-1 border border-purple-500 rounded font-extrabold text-purple-600">{job_type}</h2>
        </div>
        <div className="flex my-4">
          <h2 className="flex items-center"><MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn>{location}</h2>
          <h2 className="flex items-center ml-3"><BiDollarCircle className="text-2xl mr-2"></BiDollarCircle> Salary:{salary}</h2>
        </div>
      </div>
    </div>
    <div>
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary bg-gradient-to-r from-[#9873FF] to-[#7E90FE]">View Details</button>
      </Link>
    </div>
    </div>
  );
};

export default AppliedJobsCard;