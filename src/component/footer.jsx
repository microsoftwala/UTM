import { IoArrowBackCircleOutline } from "react-icons/io5";

const Footer = ({ goBack, onDisable }) => {
  return (
    <div className="absolute left-0" >
      <IoArrowBackCircleOutline
        className={
          onDisable
            ? "md:text-6xl text-5xl text-gray-500  font-semibold"
            : "md:text-6xl text-5xl text-blue-700 cursor-pointer font-semibold"
        }
        onClick={onDisable ? null : () => goBack()}
      />
    </div>
  );
};

export default Footer;
