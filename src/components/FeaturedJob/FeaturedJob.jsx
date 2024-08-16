import PropTypes from "prop-types";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border border-[#e8e8e8] rounded-lg p-10">
      <img className="w-[116px] h-[40px] mb-8" src={logo} alt="" />
      <h3 className="font-extrabold text-2xl text-[#474747] mb-2 ">
        {job_title}
      </h3>
      <span className="font-semibold text-xl text-[#757575] mb-5 inline-block">
        {company_name}
      </span>
      <div className="mb-4">
     
          <span className="font-extrabold text-base text-[#937aff] rounded-[4px] px-5 py-2 border border-[#937aff] mr-4">
          {remote_or_onsite }
          </span>
        <span className="font-extrabold text-base text-[#937aff] rounded-[4px] px-5 py-2 border border-[#937aff]">
          {job_type}
        </span>
      </div>
      <div className="flex mb-8">
        <span className="font-semibold text-xl text-[#757575] inline-block mr-6">
          <CiLocationOn className="mr-2 inline-block" />
          {location}
        </span>

        <span className="font-semibold text-xl text-[#757575]">
          <CiDollar className="mr-2 inline-block" />
          {salary}
        </span>
      </div>
      <Link
        to={`/job_details/${id}`}
        className="bg-[#937aff] rounded-[4px] font-extrabold text-[20px] text-white px-5 py-2"
      >
        View Details
      </Link>
    </div>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default FeaturedJob;
