import React, { useState } from "react";
import "../css/homescreen.css";
import { useGlobalState } from "../component/globalState";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { motion } from "framer-motion";
import animation from "../component/animation";
import PreviewButton from "../component/previewbutton";

function Homescreen() {
  const navigate = useNavigate();
  const { businessUnit, setBusinessUnit, setCheckfordisplay, setLastroute } =
    useGlobalState();
  setLastroute("/");
  const [open, setOpen] = useState(false);
  const { fadeTransition, fadeVariants, popupTransition, popupVariants } =
    animation;

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
        <img
          src="https://www.dsm-firmenich.com/content/dam/dsm-firmenich/corporate/images/logos/logo-black.svg"
          alt="dsm-firmenich"
          className="image"
        />
      </div>

      <Popup open={open} onClose={() => setOpen(false)} position="top center">
        <motion.div
          className="popup-content"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popupVariants}
          transition={popupTransition}
        >
          <p className="font-semibold text-red-600 text-xl text-center font-sans">
            Please select a business unit to proceed.
          </p>
          <div className="flex justify-center  font-bold text-teal-50">
            <div
              className="w-1/3 cursor-pointer bg-blue-800 flex justify-center p-2 border-2 hover:bg-blue-900"
              onClick={() => setOpen(false)}
            >
              Ok
            </div>
          </div>
        </motion.div>
      </Popup>

      <div className="content w-full">
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
        <div className="pt-10 relative w-full flex justify-center">
          <button onClick={handleGetStarted} className="font-semibold button">
            Get Started
          </button>

          <div className="absolute right-4 md:text-3xl text-2xl bottom-1">
            <PreviewButton />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Homescreen;
