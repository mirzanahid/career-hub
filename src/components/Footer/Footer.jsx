import footLogo from "../../assets/logo/logo2.svg";
import insta from "../../assets/logo/insta.svg";
import x from "../../assets/logo/x.svg";
import fb from "../../assets/logo/fb.svg";

const Footer = () => {
  const footHeading = `font-semibold text-xl text-white`;
  const footSubHeading = `font-normal text-base text-[rgba(255,255,255,70%)]`;
  const socialIcon = `bg-white w-[42px] h-[42px] rounded-[50%] flex justify-center items-center mr-[15px]`;

  return (
    <div className="bg-[#1A1919] py-[130px]">
      <footer className="footer max-w-[1320px] mx-auto  text-base-content  border-b border-[#2e2f47] pb-[50px]">
        <aside>
          <img className="mb-[24px]" src={footLogo} alt="" />
          <p className={`w-[300px] leading-7 ${footSubHeading}`}>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <ul className="flex mt-[20px]">
            <li className={socialIcon}>
              <a href="">
                <img src={fb} alt="" />
              </a>
            </li>
            <li className={socialIcon}>
              <a href="">
                <img src={x} alt="" />
              </a>
            </li>

            <li className={socialIcon}>
              <a href="">
                <img src={insta} alt="" />
              </a>
            </li>
          </ul>
        </aside>
        <nav>
          <h6 className={`footer-title ${footHeading}`}>Company</h6>
          <a className={`link link-hover ${footSubHeading}`}>About Us</a>
          <a className={`link link-hover ${footSubHeading}`}>Work</a>
          <a className={`link link-hover ${footSubHeading}`}>Latest News</a>
          <a className={`link link-hover ${footSubHeading}`}>creers</a>
        </nav>
        <nav>
          <h6 className={`footer-title ${footHeading}`}>Product</h6>
          <a className={`link link-hover ${footSubHeading}`}>Prototype</a>
          <a className={`link link-hover ${footSubHeading}`}>Plans & Pricing</a>
          <a className={`link link-hover ${footSubHeading}`}>Customers</a>
          <a className={`link link-hover ${footSubHeading}`}>Integrations</a>
        </nav>
        <nav>
          <h6 className={`footer-title ${footHeading}`}> Support </h6>
          <a className={`link link-hover ${footSubHeading}`}>Help Desk</a>
          <a className={`link link-hover ${footSubHeading}`}>Sales</a>
          <a className={`link link-hover ${footSubHeading}`}>
            Become a Partner
          </a>
          <a className={`link link-hover ${footSubHeading}`}>Developers</a>
        </nav>
        <nav>
          <h6 className={`footer-title ${footHeading}`}>Contact</h6>
          <a className={`link link-hover ${footSubHeading}`}>
            524 Broadway , NYC
          </a>
          <a className={`link link-hover ${footSubHeading}`}>
            +1 777 - 978 - 5570
          </a>
        </nav>
      </footer>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between items-center pt-[50px]">
          <span className="font-normal text-[rgba(255,255,255,40%)] text-[14px]">
            @2023 <span className="font-semibold">CareerHub.</span> All Rights
            Reserved
          </span>
          <span className="font-normal text-[rgba(255,255,255,40%)] text-[14px]">
            Powered by <span className="font-bold">CareerHub</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
