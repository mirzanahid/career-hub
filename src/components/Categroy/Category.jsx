import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-[#f9f9ff] rounded-e-lg p-10 inline-block">
      <div className="w-[70px] h-[70px] bg-[#edeeff] rounded-lg text-center flex justify-center items-center mb-8">
        <img className="w-[40px] h-[40px]" src={logo} alt="" />
      </div>
      <h3 className="font-extrabold text-xl text[#474747] mb-3">
        {category_name}
      </h3>
      <span className="font-medium text-base text-[#A3A3A3]">
        {availability}
      </span>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
