import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";

const Navbar = ({ setShownav, showNav, count }) => {
  const [windowwidth, setWindowwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div className="grid grid-cols-4 bg-[#3860B2] rounded-sm border mr-2 border-black text-white">
      <div
        className={`items-center justify-center font-semibold p-2 md:text-[16px] text-[12.5px] flex border-r border-gray-900 ${
          count > 1 && "text-gray-600 bg-gray-300"
        } ${
          count === 1 && "border-t-[5px] border-t-red-500 bg-white text-black"
        }`}
      >
        {windowwidth >= 900 ? "Business Unit" : "BU"}
        {count > 1 && (
          <div className="flex items-center ml-2">
            <TiTick className="text-green-600 text-xl" />
          </div>
        )}
      </div>
      <div
        className={`items-center justify-center font-semibold p-2 md:text-[16px] text-[12.5px] flex border-r border-gray-900 ${
          count > 2 && "text-gray-600 bg-gray-300"
        } ${
          count === 2 && "border-t-[5px] border-t-red-500 bg-white text-black"
        }`}
      >
        {windowwidth >= 900 ? "Campaign & Platform" : "Camp & Plat"}
        {count > 2 && (
          <div className="flex items-center ml-2">
            <TiTick className="text-green-600 text-xl" />
          </div>
        )}
      </div>
      <div
        className={`items-center justify-center font-semibold p-2 md:text-[16px] text-[12.5px] flex border-r border-gray-900 ${
          count > 3 && "text-gray-600 bg-gray-300"
        } ${
          count === 3 && "border-t-[5px] border-t-red-500 bg-white text-black"
        }`}
      >
        {windowwidth >= 900
          ? "Business & Category & Parameter"
          : "Bus & Catg & Parm"}
        {count > 3 && (
          <div className="flex items-center ml-2">
            <TiTick className="text-green-600 text-xl" />
          </div>
        )}
      </div>
      <div
        className={`items-center justify-center font-semibold p-2 md:text-[16px] text-[12.5px] flex ${
          count > 4 && "text-gray-600 bg-gray-300"
        } ${
          count === 4 && "border-t-[5px] border-t-red-500 bg-white text-black"
        }`}
      >
        {windowwidth >= 900 ? "Campaign Name" : "Camp Name"}
        {count > 4 && (
          <div className="flex items-center ml-2">
            <TiTick className="text-green-600 text-xl" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
