import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import FeaturedJobs from "../../components/featuredJobs/featuredJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div  className="max-w-[1320px] mx-auto">
      <Categories></Categories>
      <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
