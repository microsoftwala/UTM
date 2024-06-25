import { IoArrowBackCircleOutline } from "react-icons/io5";

const Footer = ({ goBack }) => {
  return (
    <div className="absolute left-0">
      <IoArrowBackCircleOutline
        className="md:text-6xl text-5xl text-blue-700 cursor-pointer font-semibold"
        onClick={() => goBack()}
      />
    </div>
  );
};

export default Footer;
