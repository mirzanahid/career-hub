import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="bg-[#f9f9ff] pt-[130px]">
      <div className="max-w-[1320px] mx-auto flex ">
        <div className="mt-[90px]">
          <h1 className="font-extrabold text-[72px] text-[#1A1919] w-[568px] leading-[90px] mb-[24px]">
            One Step Closer To Your{" "}
            <span className="text-[#8c81ff]">Dream Job</span>
          </h1>
          <p className="font-medium text-lg text-[#757575] w-[519px]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link className="bg-[#937aff] rounded-[4px] font-extrabold text-[20px] text-white px-5 py-3 inline-block mt-8">
            Start Applying
          </Link>
        </div>
        <div>
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
