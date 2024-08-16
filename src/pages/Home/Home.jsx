import Categories from "../../components/Categories/Categories";
import FeaturedJobs from "../../components/featuredJobs/featuredJobs";

const Home = () => {
  return (
    <div className="max-w-[1250px] mx-auto">
      <Categories></Categories>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
