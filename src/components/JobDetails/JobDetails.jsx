import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { saveToLocalSotrage } from "../../util/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const { phone, email, address } = contact_information;

  const heading = `font-extrabold text-base text-[#1A1919] mb-[24px] w-auto]`;
  const subHeading = `font-medium text-xl text-[#757575]`;
  const job_heading =
    "font-extrabold text-xl text-[#1A1919] pb-[24px] mb-[24px]";
  const job_subHeading =
    "font-bold text-xl text-[#474747] mb-[16px] inline-block";
  const job_pra = `font-medium text-xl text-[#757575]`;

  const handleForAppliedJobs = () => {
    saveToLocalSotrage(idInt);
    console.log(idInt);
  };

  return (
    <div>
      <Header page_title={`Job Details`}></Header>
      <div className="py-[130px] max-w-[1320px] mx-auto">
        <div className="flex gap-5">
          <div className="w-2/3">
            <p className={heading}>
              Job Description:{" "}
              <span className={subHeading}>{job_description}</span>
            </p>
            <p className={heading}>
              Job Responsibility:{" "}
              <span className={subHeading}>{job_responsibility}</span>
            </p>
            <p className={heading}>
              Educational Requirements:{" "}
              <span className={subHeading}>{educational_requirements}</span>
            </p>
            <p className={heading}>
              Experiences: <span className={subHeading}>{experiences}</span>
            </p>
          </div>
          <div className="w-1/3">
            <div className=" bg-[#f4f2ff] rounded-lg p-[30px]">
              <div>
                <h4 className={`border-b border-[#d3d2ff] ${job_heading}`}>
                  Job Details
                </h4>

                <span className={job_subHeading}>
                  Salary: <span className={job_pra}> {salary}</span>
                </span>
                <span className={job_subHeading}>
                  Job Title: <span className={job_pra}>{job_title}</span>
                </span>
              </div>
              <div>
                <h4 className={`border-b border-[#d3d2ff] ${job_heading}`}>
                  Contact Information
                </h4>
                <span className={job_subHeading}>
                  Phone: <span className={job_pra}>{phone}</span>
                </span>
                <span className={job_subHeading}>
                  Email: <span className={job_pra}>{email}</span>
                </span>
                <span className={job_subHeading}>
                  Address: <span className={job_pra}>{address}</span>
                </span>
              </div>
            </div>
            <button
              onClick={handleForAppliedJobs}
              className="bg-[#937aff] rounded-[4px] font-extrabold text-[20px] text-white w-full py-5 mt-6 inline-block text-center cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
