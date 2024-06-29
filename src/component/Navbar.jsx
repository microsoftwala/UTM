import React from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShownav, showNav }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen md:w-1/4 w-5/12 bg-blue-900 text-white flex flex-col justify-around p-4"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div
        className="cursor-pointer font-semibold hover:bg-blue-800 p-2 rounded-md md:text-xl"
        onClick={() => navigate("/")}
      >
        Business Unit
      </div>
      <div
        className="cursor-pointer font-semibold hover:bg-blue-800 p-2 rounded-md md:text-xl"
        onClick={() => navigate("/campaign&platform")}
      >
        Campaign & Platform
      </div>
      <div
        className="cursor-pointer font-semibold hover:bg-blue-800 p-2 rounded-md md:text-xl"
        onClick={() => navigate("/business&category&parameter")}
      >
        Business & Category & Parameter
      </div>
      <div
        className="cursor-pointer font-semibold hover:bg-blue-800 p-2 rounded-md md:text-xl"
        onClick={() => navigate("/cname")}
      >
        Campaign Name
      </div>
      <div
        onClick={() => setShownav(!showNav)}
        className="hover:bg-blue-800 p-2 rounded-md cursor-pointer font-semibold md:text-xl"
      >
        Close
      </div>
    </motion.div>
  );
};

export default Navbar;
