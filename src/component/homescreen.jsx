import React, { useState } from "react";
import "../css/homescreen.css";
import { useGlobalState } from "./globalState";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { motion } from "framer-motion";
import animation from "./animation";

function Homescreen() {
  const navigate = useNavigate();
  const { businessUnit, setBusinessUnit, setCheckfordisplay } =
    useGlobalState();
  const [open, setOpen] = useState(false);
  const { fadeTransition, fadeVariants } = animation;

  const handleBusinessUnitChange = (event) => {
    setBusinessUnit(event.target.value);
    setCheckfordisplay(false);
  };

  const handleGetStarted = () => {
    console.log("Business Unit:", businessUnit);
    if (businessUnit === "" || businessUnit === "Select a Business Unit") {
      setOpen(true);
      return;
    }
    navigate("/campaign");
  };

  return (
    <motion.div
      className="container"
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      <div className="header">
        <img src="https://www.dsm-firmenich.com/content/dam/dsm-firmenich/corporate/images/logos/logo-black.svg" alt="dsm-firmenich" className="image" />
        {/* <div className="logo">
          <span>dsm-firmenich</span>
          <div className="dots1">
            <span className="dots dots2"></span>
            <span className="dots"></span>
            <span className="dots"></span>
          </div>
        </div> */}
      </div>

      <Popup open={open} onClose={() => setOpen(false)} position="top center">
        <div className="popup-content">
          <p className="">Please select a business unit to proceed.</p>
          <div
            className="flex justify-center cursor-pointer bg-blue-400 font-bold text-teal-50 p-2"
            onClick={() => setOpen(false)}
          >
            Ok
          </div>
        </div>
      </Popup>

      <div className="content">
        <h1 className="h1 flex justify-center items-center text-center pt-2">
          UTM Parameters Automation Utility
        </h1>
        <div className="form-group mt-16">
          <label htmlFor="businessUnit">Select your Business Unit</label>
          <select
            id="businessUnit"
            value={businessUnit}
            onChange={handleBusinessUnitChange}
          >
            <option value="">Select a Business Unit</option>
            <option value="Human Nutrition">Human Nutrition</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Animal Health & Nutrition">
              Animal Health & Nutrition
            </option>
            <option value="TTH ISOL">TTH ISOL</option>
            <option value="Biomedical">Biomedical</option>
          </select>
        </div>
        <div className="pt-10">
          <button onClick={handleGetStarted} className="font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Homescreen;
