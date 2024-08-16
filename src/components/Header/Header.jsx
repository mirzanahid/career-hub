import bottomIcon from '../../assets/images/bg1.png';
import topIcon from '../../assets/images/bg2.png';
import PropTypes from "prop-types";



const Header = ({page_title}) => {

  return (
    <div className='bg-[#f9f9ff] pt-[216px] pb-[140px] text-center relative'>
        <img className='absolute top-0 right-0' src={topIcon} alt="" />
        <h2 className="font-extrabold text-[32px] text-[#1A1919]">{page_title}</h2>
        <img className='absolute bottom-0 left-0' src={bottomIcon} alt="" />
    </div>
  )
}

Header.propTypes = {
  page_title: PropTypes.string.isRequired,
};

export default Header