import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/CareerHub.png";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/applied_jobs"}>Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className=" max-w-[1320px] mx-auto">
      <div className="navbar bg-transparent absolute top-8  z-[999] max-w-[1320px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="cursor-pointer text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links} </ul>
        </div>
        <div className="navbar-end ">
          <Link className="bg-[#937aff] rounded-[4px] font-extrabold text-[20px] text-white px-5 py-3">
            Start Applying
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
