import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <>
     <div className="container">
     <NavBar></NavBar>
     </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
