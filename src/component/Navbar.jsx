import React from "react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";

const Navbar = ({ setShownav, showNav, count }) => {
  return (
    <motion.div className="flex justify-evenly bg-slate-50 rounded-sm md:mr-2 mr-5">
      <div
        className={
          count > 1
            ? "font-semibold p-2 rounded-md md:text-[18px] text-[14px] flex text-gray-500"
            : "font-semibold p-2 rounded-md md:text-[18px] text-[14px] flex"
        }
      >
        Business Unit
        {count > 1 && (
          <div className="flex items-center">
            <TiTick className="text-green-500 text-xl" />
          </div>
        )}
      </div>
      <div
        className={
          count > 2
            ? "font-semibold p-2 rounded-md md:text-[18px] text-[14px] flex text-gray-500"
            : "font-semibold p-2 rounded-md md:text-[18px] text-[14px] flex"
        }
      >
        Campaign & Platform
        {count > 2 && (
          <div className="flex items-center">
            <TiTick className="text-green-500 text-xl" />
          </div>
        )}
      </div>
      <div
        className={
          count > 3
            ? "font-semibold p-2 rounded-md md:text-[18px] text-[14px] flex text-gray-500"
            : "font-semibold p-2 rounded-md md:text-[18px] text-[14px] flex"
        }
      >
        Business & Category & Parameter
        {count > 3 && (
          <div className="flex items-center">
            <TiTick className="text-green-500 text-xl" />
          </div>
        )}
      </div>
      <div
        className={
          count > 4
            ? "font-semibold p-2 rounded-md md:text-[18px] text-[14px] flex text-gray-500"
            : "font-semibold p-2 rounded-md md:text-[18px] text-[14px] flex"
        }
      >
        Campaign Name
        {count > 4 && (
          <div className="flex items-center">
            <TiTick className="text-green-500 text-xl" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
