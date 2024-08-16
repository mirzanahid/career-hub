import { useEffect, useState } from "react";
import Category from "../Categroy/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="font-extrabold text-5xl text-black mb-4">
          Job Category List
        </h3>
        <p className="font-medium text-base text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className=" grid grid-cols-4 gap-6">
        {
        categories.map(category => <Category key={category.id} category={category}></Category> )
        }
        </div>
    </div>
  );
};

export default Categories;
