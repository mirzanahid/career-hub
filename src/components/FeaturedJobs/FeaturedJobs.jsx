import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
// import { Link } from "react-router-dom";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
  return (
    <div className="py-[130px]">
      <div className="text-center mb-8">
        <h3 className="font-extrabold text-5xl text-black mb-4">
          Featured Jobs
        </h3>
        <p className="font-medium text-base text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">{
          jobs.slice(0, dataLength).map(job=> <FeaturedJob key={job.id} job={job}></FeaturedJob>)
        }
        </div>

        <div className={`text-center mt-8 ${dataLength === jobs.length && 'hidden'}`}>
          <button onClick={()=> setDataLength(jobs.length)} className="bg-[#937aff] rounded-[4px] font-extrabold text-[20px] text-white px-5 py-3">See All Jobs</button>
        </div>
    </div>
  );
};

export default FeaturedJobs;
