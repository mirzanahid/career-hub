import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { getLocal } from "../../util/localstorage";
import AppliedJob from "../../components/AppliedJob/AppliedJob";
import down from "../../assets/logo/down.svg";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJob , setDisplayJob] = useState([]);
  const allJobs = useLoaderData();

  useEffect(() => {
    const storedJobs = getLocal();
    if (allJobs.length > 0) {
      const jobsApplied = [];

      for (const id of storedJobs) {
        const job = allJobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setDisplayJob(jobsApplied)
      setAppliedJobs(jobsApplied);
    }
  }, [allJobs]);
 
 const handleJobFilter =(filter)=>{
  
     if(filter == 'all'){
      setDisplayJob(appliedJobs)
     }
     else if (filter == 'remote'){
      const remotJobs = appliedJobs.filter(appliedJob => appliedJob.remote_or_onsite === 'Remote');
      setDisplayJob(remotJobs);

     }
     else if (filter == 'onsite'){
      const onsiteJobs = appliedJobs.filter(appliedJob => appliedJob.remote_or_onsite === 'Onsite');
      setDisplayJob(onsiteJobs);

     }

 }

  return (
    <div>
      <Header page_title="Applied Jobs"></Header>
      <div className="max-w-[1320px] mx-auto py-[130px] ">
     <div className="flex justify-end">
     <details className="dropdown mb-7 ">
          <summary className="btn bg-[#F4F4F4] m-1">  <span className="font-semibold text-xl text-[#474747] inline">Filter By </span><img src={down} alt="" /></summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a onClick={()=>handleJobFilter('all')}>All Jobs</a>
            </li>
            <li>
              <a onClick={()=>handleJobFilter('remote')}>Remot Jobs</a>
            </li>
            <li>
              <a onClick={()=>handleJobFilter('onsite')}>Full Time Jobs</a>
            </li>
          </ul>
        </details>
     </div>

        {displayJob.map((appliedJob, idx) => (
          <AppliedJob key={idx} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
