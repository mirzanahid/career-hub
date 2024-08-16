import { Link } from "react-router-dom"


const ErrorPage = () => {
  return (
    <div className=" text-center">
        <h2 className="font-bold text-4xl text-black">Page Not Found</h2>
        <Link to={'/'}><span className="">Go to Home</span></Link>
    </div>
  )
}

export default ErrorPage